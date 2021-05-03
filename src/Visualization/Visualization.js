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

class Visualization extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filters: {},
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

    handleUpdateFilters = (key, values) => {
        let {filters} = this.state;
        filters[key] = values;
        this.setState({
            filters: filters,
        })
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

    getBrandNames = (brandData) => {
        return brandData.map((brandObj) => {return brandObj.name});
    }

    render() {

        return (
            <div>
                <div style={{marginLeft: "40px"}}>
                    <h2 style={{color: colors.black}}>Welcome to the Visualization</h2>
                    <i style={{fontSize: '18px', color: colors.medium_grey}}>
                        Hover over a country to see how many fashion companies listed by GoodonYou are headquarted there. Then, click to delve into the data and discover more. You can also filter by [], or search for a specific company.
                    </i>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "left", height:"5vh"}}>
                        Search Bar
                    </div>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "left", height:"70vh"}}>
                        <div style={{flexGrow: 1, float: 'right', height:"70vh"}}>
                            <h3>Explore Company Headquarter Count</h3>
                            <Map
                                filteredData={this.state.filteredData}
                                updateFilters={this.handleUpdateFilters}
                            />
                        </div>
                        <div style={{flexGrow: 1, float: 'right', height: "70vh"}}>
                            <h3>Explore Brand Ratings</h3>
                            <BrandList
                                filteredData={this.state.filteredData}
                                showBrandInfo={this.showBrandInfo}
                            />
                        </div>
                    </div>
                    <div style={{display: 'flex',}}>
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