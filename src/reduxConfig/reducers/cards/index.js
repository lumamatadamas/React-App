import { combineReducers } from 'redux';
import { cardReducer } from './cardReducer';

function currentCardReducer (state = initialState.currentCard, action) { return state } 

export const cardsReducer = combineReducers({
    currentCard: currentCardReducer,
    cards: cardReducer
});