import React from "react";
import countries from "i18n-iso-countries";

import { WorldMap } from "react-svg-worldmap"
import brandData from './brand_page_info.json';
import {countryNameMap} from './../constants/maps';

class Map extends React.Component {
    constructor(props) {
        super(props);
        countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
        this.state = {
            data: [],
            field: "location"
        }
    }

    getData = () => {
        var numByCountry = {};

        // get totals
        for (const brandObj of brandData) {
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
            console.log(location, locationCode);
            if (locationCode != null) {
                countryData.push({country: locationCode, value: numByCountry[countryName]});
            }
        }

        return countryData;
    }


    render() {
        const data = this.getData();
        console.log(data);
        return (
            <div>
                <WorldMap color="red" title="Top 10 Populous Countries" value-suffix="people" size="lg" data={data} />
            </div>
        );
    }
}

export default Map;