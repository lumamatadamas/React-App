import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css';

class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        const navStyle = { color: 'white' };
        return (
            <nav>
                <h3>Logo</h3>
                <ul className="nav-links">
                    <Link style={navStyle} to="/dashboard">
                        <li>Dashboard</li>
                    </Link>
                    <Link style={navStyle} to="/credit-cards">
                        <li>Tarjetas de credito</li>
                    </Link>
                    <Link style={navStyle} to="/debit-cards">
                        <li>Tarjetas de debito</li>
                    </Link>
                    <Link style={navStyle} to="/about">
                        <li>Sobre My expenses</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;