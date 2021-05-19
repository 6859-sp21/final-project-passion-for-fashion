import {Hint, RadarChart} from 'react-vis';

import React, {Component} from 'react';
import {format} from 'd3-format';

import colors from './../constants/colors';

import {Paper, Typography} from "@material-ui/core";

const RATINGS = ['We avoid', 'Not good enough', 'It\'s a start', 'Good', 'Great'];
const PRICINGS = ["", "$", "$$", "$$$"];

const basicFormat = format('.1r');
const wideFormat = format('.3r');

const WIDTH= document.documentElement.clientWidth * 0.30;
const HEIGHT= document.documentElement.clientHeight * 0.35;


export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredCell: false,
      selected: [],
    }
  }

  componentDidMount() {
    if (this.props.selectedCompanies == []){
      this.setState({
        selected: [],
      })
    } else {
      this.runMountTasks();
    }    
  }

  componentDidUpdate() {
    
  }

  runMountTasks() {

  }

  render() {
    const {hoveredCell} = this.state;

    return (
      <Paper elevation={2} style={{margin: "2vw 2vw 2vw 1vw", width: "37vw", maxHeight:"80vh", display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'flex-start'}}>
        <Typography variant="h4" style={{padding: "1vw", color: colors.bold_blue}}>Apparel Types</Typography>
        <div style={{margin: "0vw 1vw 1vw"}}>
          Select at most 5 brands on the left to explore their apparel types and the ratings that these categories typically receive.
        </div>
        <div style={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
          
        </div>
      </Paper>
    );
  }
}