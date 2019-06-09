import React, { Component } from "react";
import { connect } from "react-redux";

class List extends Component {
    constructor() {
        super();
    }

    render() {
        const { creditCardsList } = this.props;
        const creditCardsMapped = creditCardsList.map( cc => 
            <li className="list-group-item" key={cc.id}>
                <strong>nombre: </strong> {cc.creditCardName}<br/>
                <strong>número: </strong> {cc.creditCardNumber}<br/>
            </li>);
        return (
            <ul className="list-group list-group-flush">
                {creditCardsMapped}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return { creditCardsList: state.creditCardsList };
}

const connectedList = connect(mapStateToProps)(List);

export default connectedList;