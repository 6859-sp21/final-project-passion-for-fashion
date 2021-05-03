import React from "react";
import countries from "i18n-iso-countries";

import {Paper, Container, Card, CardActions, CardContent, Typography, Button} from '@material-ui/core';
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
                <Card style={{margin: "0vh 2vh 2vh 0.5vh"}}>
                    <CardContent style={{wordWrap: "normal", maxWidth: "40vw"}}>
                        <Typography variant="h4" style={{color: colors.bold_blue}}>
                            {brandObj.name}
                        </Typography>
                        <Typography variant="subtitle1">
                            {brandObj.types}
                        </Typography>
                        <Typography variant="h6">
                            {brandObj.rating}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"> 
                            <a 
                                style={{
                                    color: "inherit", /* blue colors for links too */
                                    textDecoration: "inherit", /* no underline */
                                }}
                                href={brandObj.brand_url} 
                                target="_blank">Learn More</a>
                        </Button>
                    </CardActions>
              </Card>

            );
        });
    }

    render() {

        return (
            <div style={{overflow: "auto", height:"60vh"}}>
                <Paper>
                    {this.getBrandCards()}
                </Paper>
            </div>
        );
    }
}

export default BrandList;