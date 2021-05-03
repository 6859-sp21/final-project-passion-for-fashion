import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import colors from './../constants/colors';
import states from './../constants/states';

import brandData from './brand_page_info.json';

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
            <div>
                <h2 style={{color: colors.black}}>Welcome to the Visualization</h2>
                <Button 
                    variant="contained" 
                    onClick={this.onSubmit} 
                    style={{
                        color: colors.medium_grey,
                        size: "small",
                        backgroundColor: colors.soft_yellow,
                }}>
                    Head to Introduction
                </Button>
                <Map
                    filteredData={this.state.filteredData}
                    updateFilters={this.handleUpdateFilters}
                />
            </div>
        );
    }

}

export default Visualization;