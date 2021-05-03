import React from "react";

import SearchBar from "material-ui-search-bar";

import {Modal, Paper} from '@material-ui/core';
import colors from '../constants/colors';

class BrandSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
        }
    }

    render() {
        return (
            <SearchBar
                value={this.state.searchText}
                onChange={(newValue) => this.setState({ searchText: newValue })}
                onRequestSearch={() => this.props.filterByName(this.state.searchText)}
                onCancelSearch={() => {
                    this.setState({
                        searchText: "",
                    });
                    this.props.filterByName("");
                }}
                placeholder="press enter to search by brand name"
                style={{width: "98%"}}
            />
        );
    }
}

export default BrandSearchBar;