import React from "react";
import countries from "i18n-iso-countries";
import { Paper } from '@material-ui/core';

import { WorldMap } from "react-svg-worldmap"
import {countryNameMap} from './../constants/maps';
import colors from './../constants/colors';

class Map extends React.Component {
    constructor(props) {
        super(props);
        countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
        this.state = {
            field: "location",
            filteredData: [],
            country: null,
        }
    }

    getData = () => {
        var numByCountry = {};

        // get totals
        for (const brandObj of this.props.filteredData) {
            let location = brandObj.location;
            if (location in numByCountry) {
                numByCountry[location] += 1;
            } else {
                numByCountry[location] = 1;
            }
        }

        var countryData = [];

        // convert to array
        for (const countryName in numByCountry) {
            let location = countryName;

            if (location in countryNameMap) {
                location = countryNameMap[location];
            }

            let locationCode = countries.getAlpha2Code(location, "en");
            if (locationCode != null) {
                countryData.push({country: locationCode, value: numByCountry[countryName]});
            }
        }

        return countryData;
    }

    clickAction = (event, countryName) => {
        if (this.state.country != null && countryName != this.state.country) {
            this.props.filterByCountry(null);
            return;
        }

        console.log("clicked");
        this.props.filterByCountry(countryName);
        this.setState({
            country: countryName,
        })
    }

    render() {
        const mapData = this.getData();

        return (
            <Paper variant="outlined" style={{overflow: "auto"}}>
                <WorldMap 
                    color={colors.bold_blue} 
                    size="responsive" 
                    onClickFunction={this.clickAction}
                    data={mapData} 
                />
            </Paper>
        );
    }
}

export default Map;