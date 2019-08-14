import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav>
                <Link to="/">
                    <h3 className="logo-text">App logo</h3>
                </Link>
                <button className="user-icon"><span>User Name</span><Icon>person</Icon></button>
            </nav>
        );
    }
}

export default Nav;