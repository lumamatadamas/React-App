import React, { Component } from "react";
import { CreditCardForm, List } from "../../../components";

class CreditCardsPage extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <h2>Agregar nueva tarjeta</h2>
                        <CreditCardForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default CreditCardsPage;