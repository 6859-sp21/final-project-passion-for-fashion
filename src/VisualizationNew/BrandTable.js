import React from "react";

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import * as ReactVis from 'react-vis';
import MaterialTable from 'material-table';

import brandData from '../Visualization/brand_page_info.json';

import { forwardRef } from 'react';
import colors from './../constants/colors';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import LaunchIcon from '@material-ui/icons/Launch';

import {Typography, Paper} from "@material-ui/core";

const brandListRef = React.createRef();

const RATINGS = ['We avoid', 'Not good enough', 'It\'s a start', 'Good', 'Great'];
const PRICINGS = ["", "$", "$$", "$$$"];

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    Launch: forwardRef((props, ref) => <LaunchIcon {...props} ref={ref}/>),
  };

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) { 
     
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));
                     
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
         
    return array;
}

const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.soft_blue,
      },
      secondary: {
        main: colors.soft_blue,
      },
    },

});

class BrandTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedBrands: [], // max 5 selected at any time
            data: null,
        }
    }

    componentDidMount() {
        const shuffledData = shuffleArray(brandData);

        const fixedBrandData = shuffledData.map((brandObj) => {
            brandObj.ratingFixed = ((RATINGS.indexOf(brandObj.rating) + 1).toString() + " (" + brandObj.rating + ")");
            brandObj.priceFixed = (brandObj.price == null) ? "N/A" : brandObj.price;
            brandObj.locationFixed = (brandObj.location == null) ? "N/A" : brandObj.location;
            return brandObj;
        })

        this.setState({
            data: fixedBrandData,
            selectedBrands: fixedBrandData.slice(0, 3),
        }, function() {
            if (brandListRef.current == null) {return;};
            this.props.setSelectedBrands(this.state.selectedBrands);
            for (var i of [0, 1, 2]) {
                brandListRef.current.dataManager.changeRowSelected(true, [i]);
            }
            
        });
    }

    componentWillUnmount() {
        if (brandListRef.current != null) {
            brandListRef.current.onAllSelected(false);
        }
    }

    render() {
        return (
            <Paper elevation={2} style={{margin: "2vw 1vw 2vw 2vw", width: "57vw", height: "85vh"}}>
                <Typography variant="h4" style={{padding: "1vw", color: colors.bold_blue}}>Explore All Brands</Typography>
                <div style={{margin: "0vw 1vw 1vw"}}>
                    Click on the arrow button next to each row to read Good On You's detailed evaluation of the brand's policies. The initial order is randomized, and does not reflect any brand ranking.
                </div>
                <div style={{overflow: "auto", height: "69vh"}}>
                    <ThemeProvider theme={theme}>
                        <MaterialTable
                            tableRef={brandListRef}
                            icons={tableIcons}
                            columns={[
                                {
                                    title: 'Name', 
                                    field: 'name',
                                    width: "20%"
                                },
                                {
                                    title: 'Rating (out of 5)', 
                                    field: 'ratingFixed',
                                    width: "20%",
                                },
                                {
                                    title: 'Price ($-$$$)', 
                                    field: 'priceFixed',
                                    width: "20%",
                                    customFilterAndSearch: (value, rowData) => {
                                        console.log(value);
                                        console.log(rowData.price);
                                        if (rowData.priceFixed.includes(value) && rowData.priceFixed == "N/A") {
                                            return true;
                                        } 

                                        return rowData.priceFixed === value;
                                    }
                                },
                                {
                                    title: 'Location', 
                                    field: 'locationFixed',
                                    width: "20%"
                                },
                            ]}
                            data={this.state.data}
                            title="Brand List"
                            options={{
                                toolbar: false,
                                pageSize: 8,
                                pageSizeOptions: [8],
                                search: true,
                                sorting: true,
                                filtering: true,
                                selection: true,
                                selectionProps: (rowData) => {
                                    return ({
                                        disabled: this.state.selectedBrands.length >= 5 && !rowData.tableData.checked,
                                    });
                                },
                                actionsColumnIndex: -1,
                                rowStyle: {
                                    ".MuiCheckbox-colorSecondary.Mui-checked" : {
                                        color: colors.soft_blue,
                                    }
                                }
                            }}
                            detailPanel={[
                                {
                                    tooltip: 'Show Evaluation',
                                    render: rowData => {
                                        return (
                                            <Typography style={{padding: "1vw"}}>
                                                {rowData.explanation}
                                            </Typography>
                                        );
                                    }
                                }
                            ]}
                            onSelectionChange={(rows) => {
                                this.setState({selectedBrands: rows});
                                this.props.setSelectedBrands(rows);
                            }}
                        />
                    </ThemeProvider>
                </div>
            </Paper>
        );
    }
}

export default BrandTable;