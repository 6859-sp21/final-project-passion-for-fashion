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


    render() {
        const mapData = this.getData();

        return (
            <Paper variant="outlined" style={{overflow: "auto"}}>
                <WorldMap color={colors.bold_blue} value-suffix="people" size="responsive" data={mapData} />
            </Paper>
        );
    }
}

export default Map;