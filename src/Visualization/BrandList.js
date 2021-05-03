import React from "react";
import countries from "i18n-iso-countries";

import {Paper, Card, CardActions, CardContent, Typography, Button} from '@material-ui/core';
import colors from './../constants/colors';

class BrandList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            field: "location"
        }
    }

    getBrandCards = () => {
        return this.props.filteredData.map((brandObj) => {
            return (
                <Card style={{margin: "1vh"}}>
                    <CardContent>
                        <Typography variant="h4">
                            {brandObj.name}
                        </Typography>
                        <Typography variant="subtitle1">
                            {brandObj.location}
                        </Typography>
                        <Typography variant="h6">
                            {brandObj.rating}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => this.props.showBrandInfo(brandObj)}>Learn More</Button>
                    </CardActions>
              </Card>

            );
        });
    }

    render() {

        return (
            <div style={{display: "flex", overflow: "auto", height: "60vh"}}>
                <Paper>
                    {this.getBrandCards()}
                </Paper>
            </div>
        );
    }
}

export default BrandList;