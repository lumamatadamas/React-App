import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class List extends Component {
    constructor() {
        super();
    }

    render() {
        const { creditCardList, history } = this.props;
        const creditcreditCardListMapped = creditCardList.length > 0 ? creditCardList.map( cc => 
            <div key={`card-item-cotainer-${cc.id}`} className="card-item" onClick={() => history.push(`/credit-creditCardList/${cc.id}`)}>
                <li className="list-group-item" key={cc.id}>
                    <strong>nombre: </strong> {cc.creditCardName}<br/>
                    <strong>número: </strong> {cc.creditCardNumber}<br/>
                </li>
            </div>) : <h4>Aun no registras ninguna tarjeta de credito</h4>;
        return (
            <div className="container">
                <ul className="list-group list-group-flush">
                    {creditcreditCardListMapped}
                </ul>
                <Link className="float-button" to="/credit-creditCardList">
                    <i className="fa fa-plus my-float"></i>
                </Link>
            </div>
        );
    }
}

// List.propTypes = {
//     creditCardList: Component.prototype
// }

export default List;

// peopleArrayProp: PropTypes.arrayOf(
//     PropTypes.instanceOf(Person)
//   ),

//   multipleArrayProp: PropTypes.arrayOf(
//     PropTypes.oneOfType([
//       PropType.number,
//       PropType.string
//     ])
//   )