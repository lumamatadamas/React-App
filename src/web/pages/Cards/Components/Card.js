import React, { Component } from 'react'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

export default class CardItem extends Component {

    render() {
        console.log(this.props)
        const { CardData: { name } } = this.props;
        return (
            <Card className="card-item" >
                <CardContent>
                    <Typography className="card-title">
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

}