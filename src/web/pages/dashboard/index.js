import React, { Component } from "react";
import { Link } from "react-router-dom";

class DashboardPage extends Component {
    constructor() {
        super();
    }

    render() {
        const navStyle = { color: 'white' };
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <button className="row nav-card" >
                            <Link className="title-card" to="/my-cards">
                                <p>Mis Tarjetas</p>
                            </Link>
                        </button>
                        <button className="row nav-card">
                            <Link className="title-card"  to="/">
                                <p>Registrar Gastos</p>
                            </Link>
                        </button>
                    </div>
                    <div className="col-lg">
                        <button className="row nav-card">
                            <Link className="title-card" to="/credit-cards">
                                <p>Tarjetas de Credito</p>
                            </Link>
                        </button>
                        <button className="row nav-card">
                            <Link className="title-card" to="/debit-cards">
                                <p>Tarjetas de Debito</p>
                            </Link>
                        </button>
                        <button className="row nav-card">
                            <Link className="title-card" to="/reports">
                                <p>Reportes</p>
                            </Link>
                        </button>
                    </div>
                    <div className="col-lg"></div>
                </div>
            </div>
        );
    }
}

export default DashboardPage;