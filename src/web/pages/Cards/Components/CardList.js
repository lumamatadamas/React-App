import React, { Component } from "react";
import Card from './Card';

class List extends Component {
    render() {
        const { creditCardList=[], history } = this.props;        
        const creditcreditCardListMapped =creditCardList.map( cc => 
            <div key={`card-item-cotainer-${cc.id}`} onClick={() => history.push(`/cards/${cc.id}`)}>
                <li className="list-group-item" key={cc.id} style={{ display: "inline-block" }}>
                    <Card
                        CardData={cc}
                    />
                </li>
            </div>)
        return (
            <div className="container">
                <ul className="list-group list-group-flush">
                    {creditcreditCardListMapped}
                </ul>
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