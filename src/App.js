import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { List, CreditCardForm } from "./components/index";
import "./App.css";

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <List />
                    </div>
                    <div className="col-sm">
                        <h2>Agregar nueva tarjeta</h2>
                        <CreditCardForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);