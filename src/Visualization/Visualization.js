import React, {Component} from 'react';

import { IconButton } from '@material-ui/core';
import colors from './../constants/colors';
import states from './../constants/states';

import brandData from './brand_page_info.json';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Map from './Map';
import BarChart from './BarChart';

import BrandList from './Brand/BrandList';
import BrandProfile from './Brand/BrandProfile';
import BrandSearchBar from './Brand/BrandSearchBar';

class Visualization extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filters: {
                searchName: "",
                searchCountry: null,
            },
            data: brandData,
            filteredData: JSON.parse(JSON.stringify(brandData)),
            showModal: false,
            currentBrand: {},
            // brandNames: this.getBrandNames(brandData),
        }
    }

    onSubmit = () => {
        this.props.updateState(states.introduction);
    }

    handleFilterByCountry = (countryName) => {
        console.log("country");
        let {filters} = this.state;
        filters.searchCountry = countryName;
        this.setState({
            filters: filters,
        });
    }

    handleFilterByName = (searchText) => {
        console.log("name")
        let {filters} = this.state;
        filters.searchName = searchText;
        this.setState({
            filters: filters,
        });
    }

    getFilteredData = () => {
        let {filters} = this.state
        let {searchName, searchCountry} = filters;

        let newFilteredData = this.state.data.filter(
            brandObj => {
                if (searchName=="" && searchCountry==null){
                    return true;
                }

                if (brandObj.name == null && searchName != "") {
                    return false;
                }

                if (brandObj.location == null && searchCountry != null) {
                    return false;
                }

                var shouldKeep = (searchCountry == null || searchCountry == brandObj.location);

                shouldKeep = shouldKeep && (searchName == "" || brandObj.name.toLowerCase().startsWith(searchName.toLowerCase()));

                return shouldKeep;
            }
        )

        return newFilteredData;
    }


    getBrandNames = (brandData) => {
        return brandData.map((brandObj) => {return brandObj.name});
    }

    render() {
        var filteredData = this.getFilteredData();

        return (
            <div>
                <div style={{margin: "0vh 4vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <h2 style={{color: colors.black}}>Explore</h2>
                    <i style={{fontSize: '18px', color: colors.medium_grey}}>
                        Hover over a country to see how many fashion companies listed by GoodonYou are headquarted there. Then, click to delve into the data and discover more. You can also search for a specific company by name!
                    </i>
                    <br/>
                    <div style={{ alignItems: "center", justifyContent: "left", height:"13vh"}}>
                        <h3>Search by Brand</h3>
                        <BrandSearchBar filterByName={this.handleFilterByName} filterByCountry={this.handleFilterByCountry}/>
                    </div>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "left", height:"50vh"}}>
                        <div style={{flexGrow: 1, float: 'right', height: "50vh"}}>
                            <h3>Explore Brand Ratings</h3>
                            <BrandList
                                filteredData={filteredData}
                                showBrandInfo={this.showBrandInfo}
                            />
                        </div>
                        <div style={{flexGrow: 1, float: 'right', height:"50vh"}}>
                            <h3>Explore Brand Locations</h3>
                            <Map
                                filteredData={filteredData}
                                filterByCountry={this.handleFilterByCountry}
                            />
                            {/* <BarChart/> */}
                        </div>
                    </div>
                    <div style={{display: "flex", marginLeft: "20px", marginBottom: '5px', position: "absolute", bottom:"0", left:"0", height:"4vh"}}>
                        <IconButton
                            children={<ArrowBackIosIcon/>}
                            color="primary"
                            variant="contained" 
                            onClick={this.onSubmit} 
                            style={{
                                color: colors.soft_purple,
                                size: "small",
                                backgroundColor: "transparent",}}
                        />
                        <div style={{fontSize:'20px', marginTop: '10px', color: colors.soft_purple}}>Back to Home</div>
                    </div>    
                </div>
            </div>
        );
    }

}

export default Visualization;