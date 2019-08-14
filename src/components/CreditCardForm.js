
import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import moment from '@date-io/moment';
import Conditional from '../components/hooks/Conditional';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

class CreditCardForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardName: "",
            creditCardNumber: "",
            cardType: 0,
            closingDate: new Date(),
            dueDate: 0,
            initialAmount: 0
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { cardName, cardType } = this.state;
        const { AddCreditCard } = this.props;
        var d = new Date();
        AddCreditCard({ 
            active: true,
            closingDate: 10,
            name: cardName,
            paymentDueDate: 20,
            typeId: cardType
        })
        this.setState({
            cardName: "",
            creditCardNumber: "",
            cardType: 0,
        });
    }

    handleDateChange(date) {
        console.log(date)
        var aux = moment(date).day();
        this.setState({ [date.prop]: aux });
    }
    
    render () {
        console.log({ props: this.props, state: this.state })
        const { cardTypes = [] } = this.props;
        const { cardName, cardType, closingDate, dueDate, initialAmount } = this.state;
        const isCreditCard = cardType === 2;
        const isDebitCard = cardType === 1;
        return (
            <div className="row">
                <div className="col-md"/>
                <div className="col-md">
                    <form onSubmit={this.handleSubmit} >
                            <FormControl required className="card-form-control">
                                <InputLabel htmlFor="cardType">Tipo de tarjeta</InputLabel>
                                <Select
                                    value={cardType}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name:'cardType',
                                        id: 'cardType',
                                    }}
                                >
                                    {
                                        cardTypes.map(op => (
                                        <MenuItem
                                            key={op.id}
                                            value={op.id}
                                        >
                                            {op.type}
                                        </MenuItem>))
                                    }
                                </Select>
                            </FormControl>
                            <FormControl required className="card-form-control">
                                <TextField 
                                    name="cardName"
                                    label="Nombre de la tarjeta: "
                                    value={cardName}
                                    onChange={this.handleChange}
                                    margin="normal"
                                />                        
                            </FormControl>
                            <FormControl className="card-form-control">
                                <MuiPickersUtilsProvider utils={moment}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/DD/YYYY"
                                        margin="normal"
                                        name="closingDate"
                                        label="Selecciona fecha de corte: "
                                        value={closingDate}
                                        onChange={date => this.handleDateChange({ prop: "closingDate", date: date.format('l') })}
                                        KeyboardButtonProps={{
                                            "aria-label": 'Cambiar fecha',
                                        }}
                                    />
                                    <Conditional if={isCreditCard}>
                                        <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="dd/MM/yy"
                                            margin="normal"
                                            name="dueDate"
                                            label="Selecciona fecha de pago: "
                                            value={dueDate}
                                            onChange={this.handleChange}
                                            KeyboardButtonProps={{
                                                "aria-label": 'Cambiar fecha',
                                            }}
                                        />
                                    </Conditional>
                                </MuiPickersUtilsProvider>
                            </FormControl>
                            <Conditional if={isDebitCard}>
                                <FormControl required className="card-form-control">
                                    <TextField 
                                        name="initialAmount"
                                        label="Monto inicial: "
                                        value={initialAmount}
                                        onChange={this.handleChange}
                                        margin="normal"
                                    />                        
                                </FormControl>
                            </Conditional>
                            <FormControl className="card-form-control">
                                <Button type="submit" variant="contained" color="primary">
                                    Agregar
                                </Button>
                            </FormControl>
                    </form>
                </div>
                <div className="col-md"/>
            </div>
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
