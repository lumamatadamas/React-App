import { combineReducers } from 'redux';
import { cardReducer } from './../reducers/cards/cardReducer'

const rootReducer = combineReducers({
    cards: cardReducer
});

export default rootReducer;


