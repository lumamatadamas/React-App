import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class List extends Component {
    constructor() {
        super();
    }

    render() {
        const { creditCardsList = [] } = this.props;
        const creditCardsMapped = creditCardsList.length > 0 ? creditCardsList.map( cc => 
            <div className="card-item">
            <li className="list-group-item" key={cc.id}>
                <strong>nombre: </strong> {cc.creditCardName}<br/>
                <strong>número: </strong> {cc.creditCardNumber}<br/>
            </li></div>) : <h4>Aun no registras ninguna tarjeta de credito</h4>;
        return (
            <div className="container">
                <ul className="list-group list-group-flush">
                    {creditCardsMapped}
                </ul>
                <Link className="float-button" to="/credit-cards">
                    <i class="fa fa-plus my-float"></i>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { creditCardsList: state.creditCardsList };
}

const connectedList = connect(mapStateToProps)(List);

export default connectedList;