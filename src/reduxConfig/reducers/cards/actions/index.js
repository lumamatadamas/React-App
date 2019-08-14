import * as CardActionTypes from "../constants/action-types"

const AddCard = card => ({ type: CardActionTypes.ADD_CARD, payload: { url: "http://localhost:8080/v1/cards", data: card, method: "post" } });
const AddCardSuccess = card => ({ type: CardActionTypes.ADD_CARD_SUCCESS, payload: card });

const FetchCards = () => ({ type: CardActionTypes.FETCH_CARDS, payload: { url: "http://localhost:8080/v1/cards" } });
const FetchCardsSuccess = cardList => ({ type: CardActionTypes.FETCH_CARDS_SUCCESS, payload: cardList });

const FindCard = cardId => ({ type: CardActionTypes.FIND_CARD, payload: { url: `http://localhost:8080/v1/cards/${cardId}` } })
const FindCardSuccess = card => ({ type: CardActionTypes.FIND_CARD_SUCCESS, payload: card }); 

const FetchCardTypes = () => ({ type: CardActionTypes.FETCH_CARD_TYPES, payload: { url: "http://localhost:8080/v1/card-types" } });
const FetchCardTypesSuccess = cardTypes => ({ type: CardActionTypes.FETCH_CARD_TYPES_SUCCESS, payload: cardTypes });

export {
    AddCard,
    AddCardSuccess,

    FetchCards,
    FetchCardsSuccess,

    FindCard,
    FindCardSuccess,
    
    FetchCardTypes,
    FetchCardTypesSuccess
};

