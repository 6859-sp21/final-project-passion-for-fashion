import React, {Component} from 'react';

import { IconButton } from '@material-ui/core';
import colors from './../constants/colors';
import states from './../constants/states';

import brandData from './brand_page_info.json';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Map from './Map';

class Visualization extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filters: {},
            data: brandData,
            filteredData: JSON.parse(JSON.stringify(brandData)),
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

    render() {
        return (
            <div style={{marginLeft: '40px'}}>
                <h2 style={{color: colors.black}}>Welcome to the Visualization</h2>
                <i style={{fontSize: '18px', color: colors.medium_grey}}>
                    Hover over a country to see how many clothing companies are headquarted there. Then, click to delve into the data and discover more. You can also filter by [], or search for a specific company.
                </i>
                <Map
                    filteredData={this.state.filteredData}
                    updateFilters={this.handleUpdateFilters}
                />
                <div style={{display: 'flex'}}>
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
                    <div style={{fontSize:'20px', marginTop: '10px', color: colors.soft_purple}}>Take Me Back to the Beginning</div>
                </div>    
            </div>
        );
    }

}

export default Visualization;