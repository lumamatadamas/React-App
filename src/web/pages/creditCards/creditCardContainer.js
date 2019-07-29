import React, { Component } from 'react';
import { CreditCardForm, List } from '../../../components';

class CreditCardsContainer extends Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props)
        const { AddCreditCard, cards: { creditCardList }, history, RequestCards } = this.props;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <h2>Agregar nueva tarjeta</h2>
                        <CreditCardForm
                            AddCreditCard={AddCreditCard}
                        />
                    </div>
                    <div className="col-lg">
                        <List 
                            creditCardList={creditCardList}
                            history={history}
                        />
                    </div>
                    <div onClick={RequestCards} className="col-lg">
                        <button  className="btn btn-success btn-lg">
                            fetch
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreditCardsContainer