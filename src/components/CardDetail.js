import React, { Component } from "react";

export default class CardDetail extends Component {
    componentDidMount() {
        this.props.FindCard(this.props.id);
    }

    render() {
        const { currentCard: { name } } = this.props;
        return (
            <div className="container">
                <div className="row card-detail-submenu">
                    <div className="col-md-3">
                        <h3>{name}</h3>
                    </div>
                    <div className="col-md-7">
                        <ul>
                            <li className="nav-links">
                                <a href="#">Resumen</a>
                            </li>
                            <li className="nav-links">
                                <a href="#">Movimientos</a>
                            </li>
                            <li className="nav-links">
                                <a href="#">Todos los movimientos</a>
                            </li>
                            <li className="nav-links">
                                <a href="#">Planes</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8" >
                        <div className="balance-summary">
                            <div className="row">
                                <div className="col-md-2 balance-arrows" >
                                    <i className="fa fa-angle-left "></i>
                                </div>
                                <div className="col-md-8" >
                                    <div className="row balance-quantity">Saldo del mes actual</div>
                                    <div className="row balance-quantity"><h4>$ 3,456.00</h4></div>
                                </div>
                                <div className="col-md-2 balance-arrows" >
                                    <i className="fa fa-angle-right" ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 balance-summary-buttons " >
                        <ul style={{ listStyle: "none" }}>
                            <li>
                                <button className="nav-card">Registrar Gastos</button>
                            </li>
                            <li>
                                <button className="nav-card">Proyecciones</button>
                            </li>
                            <li>
                            <button className="nav-card">Configuración</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="balance-movements">
                        <div className="row">Ultimos movimientos</div>
                        <div className="row">
                            <ul style={{ listStyle:"none", width:"100%" }}>
                                <li>
                                    <div className="row">
                                        <div className="col-md-4">
                                            30 mayo 2019
                                        </div>
                                        <div className="col-md-4">
                                            Ventilador
                                        </div>
                                        <div className="col-md-4">
                                            $ 1,876.00
                                        </div>
                                    </div>
                                </li>
                                <hr />
                                <li>
                                <div className="row">
                                        <div className="col-md-4">
                                            25 mayo 2019
                                        </div>
                                        <div className="col-md-4">
                                            Platos
                                        </div>
                                        <div className="col-md-4">
                                            $ 987.00
                                        </div>
                                    </div>
                                </li>
                                <hr />
                                <li>
                                <div className="row">
                                        <div className="col-md-4">
                                            19 mayo 2019
                                        </div>
                                        <div className="col-md-4">
                                            Mantel
                                        </div>
                                        <div className="col-md-4">
                                            $ 467.00
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
