import * as CardActionTypes from "../constants/action-types"

const AddCreditCard = (payload) => ({ type: CardActionTypes.ADD_CREDIT_CARD, payload });
const RequestCards = (payload) => ({ type: CardActionTypes.REQUEST_CARDS, payload });
const ReceiveCards = (payload) => ({ type: CardActionTypes.RECEIVE_CARDS, payload })

export {
    AddCreditCard,
    RequestCards,
    ReceiveCards
};