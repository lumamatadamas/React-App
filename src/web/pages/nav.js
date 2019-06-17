import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css';

class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav>
                <Link to="/">
                    <h3>Logo</h3>
                </Link>
                <button className="user-icon"><span>User Name</span><i className="fa fa-user-circle-o"></i></button>
            </nav>
        );
    }
}

export default Nav;