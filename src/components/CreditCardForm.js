import React, { Component } from "react";
// import { connect } from "react-redux";
// import { AddCreditCard } from "../reduxConfig/actions/index";

class CreditCardForm extends Component {
    constructor() {
        super();

        this.state = {
            creditCardName: "",
            creditCardNumber: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { creditCardName, creditCardNumber } = this.state;
        const { AddCreditCard } = this.props;
        var d = new Date();
        AddCreditCard({ creditCardNumber, creditCardName, id: d.getMilliseconds() })
        this.setState({ creditCardNumber: "", creditCardName: "" });
    }

    render () {
        const { creditCardNumber, creditCardName } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre de la tarjeta de credito: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="creditCardName"
                        value={creditCardName}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label htmlFor="name">Número de la tarjeta de credito: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="creditCardNumber"
                        value={creditCardNumber}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    Agregar
                </button>
            </form>
        );
    }

}

// function mapDispatchToProps(dispatch) {
//     return {
//         AddCreditCard: newCreditCard => dispatch(AddCreditCard(newCreditCard))
//     };
// }


export default CreditCardForm
// export default connect(null, mapDispatchToProps)(CreditCardForm);
