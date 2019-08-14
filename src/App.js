import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Nav from "./web/pages/nav";
import Reports from "./web/pages/about/index"
import Dashboard from "./web/pages/dashboard/index"
import CardContainer from "./web/pages/cards/index"
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import './App.css';

class App extends Component {
    render() {
        const Routes = () => routesConfig.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>  
        ));
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Routes />
                </div>
            </Router>
        );
    }
}

const Header = () => <Nav />

const routesConfig = [
    {
        path: "/",
        component: Dashboard
    },{
        path: "/cards",
        component: CardContainer
    },{
        path: "/cards/:id",
        component: CardContainer
    },{
        path: "/card/:create",
        component: CardContainer
    },{
        path: "/reports",
        component: Reports
    }
];

const RouteWithSubRoutes = route => (
    <Route
        exact
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);
export default hot(module)(App);