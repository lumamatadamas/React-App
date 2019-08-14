import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isNullOrUndefined } from "util";

class List extends Component {
    render() {
        const { creditCardList, history } = this.props;
        const creditcreditCardListMapped = creditCardList.length > 0 ? creditCardList.map( cc => 
            <div key={`card-item-cotainer-${cc.id}`} className="card-item" onClick={() => history.push(`/cards/${cc.id}`)}>
                <li className="list-group-item" key={cc.id} style={{ display: "inline-block" }}>
                    <strong>nombre: </strong> {cc.name}<br/>
                    <strong>tipo de tarjeta: </strong> {cc.typeId}<br/>
                    <strong>dia de pago: </strong> {cc.paymentDueDate}<br/>
                    <strong>dia de corte: </strong> {cc.closingDate}<br/>
                    <strong>activa: </strong> {cc.active}<br/>
                </li>
            </div>) : <h4>Aun no registras ninguna tarjeta de credito</h4>;
        return (
            <div className="container">
                <ul className="list-group list-group-flush">
                    {creditcreditCardListMapped}
                </ul>
                <Link className="float-button" to="/cards">
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