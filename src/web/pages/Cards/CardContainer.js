import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { CreditCardForm, List } from '../../../components';
import { CardList } from './Components/index';
import { CardDetail } from '../../../components/index';
import Conditional from '../../../components/hooks/Conditional';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { bool } from 'prop-types';

class CardsContainer extends Component {
    componentDidMount() {
        this.props.FetchCards();
        this.props.FetchCardTypes();
    }

    render() {
        console.log("render cardContainer")
        console.log(this.props)
        const {
            AddCard, cards: { creditCardList, currentCard, cardTypes }, history,
            FindCard, match: { params= {} }
        } = this.props;
        const { id=0, create }  = params;
        const renderCardDetail = id > 0;
        return(
            <div className="container">
                <Conditional if={renderCardDetail}>
                    <CardDetail 
                        FindCard={FindCard}
                        currentCard={currentCard}
                        {...params}
                    />
                </Conditional>
                <Conditional if={create === "true"}>
                    <div className="col-lg">
                        <h2>Agregar nueva tarjeta</h2>
                        <CreditCardForm
                            cardTypes={cardTypes}
                            AddCreditCard={AddCard}
                        />
                    </div>
                </Conditional>
                <Conditional if={isEmpty(params)} >
                    <div className="row">
                        <div className="col-lg">
                            <Conditional if={creditCardList.length > 0}>
                                <CardList
                                    creditCardList={creditCardList}
                                    history={history}
                                />
                            </Conditional>
                            <Conditional if={creditCardList.length === 0}>
                                <Typography>
                                    No tienes Tarjetas registradas
                                </Typography>
                            </Conditional>                            
                        </div>
                        
                        <div className="col-lg"/>
                    </div>
                </Conditional>
                <Link className="float-button" to={`/card/${true}`}>
                    <i className="fa fa-plus my-float"></i>
                </Link>
            </div>
        );
    }
}

export default CardsContainer