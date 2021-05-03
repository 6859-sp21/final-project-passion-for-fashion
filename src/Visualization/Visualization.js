import React, {Component} from 'react';

import { IconButton } from '@material-ui/core';
import colors from './../constants/colors';
import states from './../constants/states';

import brandData from './brand_page_info.json';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Map from './Map';
import BrandList from './BrandList';
import BrandProfile from './BrandProfile';
import BrandSearchBar from './BrandSearchBar';

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
        console.log(filters);

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

                var shouldKeep = false;

                if (searchCountry != null && searchCountry == brandObj.location) {
                    shouldKeep = true;
                }

                if (searchName != "" && brandObj.name.toLowerCase().startsWith(searchName.toLowerCase())){
                    shouldKeep = true;
                }



                return shouldKeep;
            }
        )

        return newFilteredData;
    }

    // showBrandInfo = (brandObj) => {
    //     this.setState({
    //         showModal: true,
    //         currentBrand: brandObj
    //     })
    // }

    // handleProfileClose = () => {
    //     this.setState({
    //         showModal: false,
    //     })
    // }

    // handleFilterByName = (searchText) => {
    //     let newFilteredData = this.state.data.filter(
    //         brandObj => {
    //             if (brandObj.name == null) {
    //                 return false;
    //             }
    //             return (brandObj.name.toLowerCase().startsWith(searchText.toLowerCase()));
    //         }
    //     )

    //     this.setState({
    //         filteredData: newFilteredData,
    //     })
    // }

    getBrandNames = (brandData) => {
        return brandData.map((brandObj) => {return brandObj.name});
    }

    render() {
        var filteredData = this.getFilteredData();

        return (
            <div>
                <div style={{margin: "0vh 4vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <h2 style={{color: colors.black}}>Welcome to the Visualization</h2>
                    <i style={{fontSize: '18px', color: colors.medium_grey}}>
                        Hover over a country to see how many fashion companies listed by GoodonYou are headquarted there. Then, click to delve into the data and discover more. You can also filter by [], or search for a specific company.
                    </i>
                    <br/>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "left", height:"5vh"}}>
                        <BrandSearchBar filterByName={this.handleFilterByName}/>
                    </div>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "left", height:"60vh"}}>
                        <div style={{flexGrow: 1, float: 'right', height:"60vh"}}>
                            <h3>Explore Company Headquarter Count</h3>
                            <Map
                                filteredData={filteredData}
                                updateFilters={this.handleUpdateFilters}
                            />
                        </div>
                        <div style={{flexGrow: 1, float: 'right', height: "60vh"}}>
                            <h3>Explore Brand Ratings</h3>
                            <BrandList
                                filteredData={filteredData}
                                showBrandInfo={this.showBrandInfo}
                            />
                        </div>
                    </div>
                    <div style={{display: "flex"}}>
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
                {/* <BrandProfile
                    showModal={this.state.showModal}
                    currentBrand={this.state.currentBrand}
                    handleProfileClose={this.handleProfileClose}
                /> */}
            </div>
        );
    }

}

export default Visualization;