import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Nav from "./web/pages/nav";
import About from "./web/pages/about/index"
import Dashboard from "./web/pages/dashboard/index"
import CreditCards from "./web/pages/creditCards/index"
import DebitCards from "./web/pages/debitCards/index"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Nav />
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/credit-cards" component={CreditCards} />
                        <Route path="/debit-cards" component={DebitCards} />
                        <Route path="/about" component={About} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default hot(module)(App);