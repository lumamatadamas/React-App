import * as CardActionTypes from './constants/action-types';
import { Card } from '@material-ui/core';

const initialState = {
    creditCardList:[],
    currentCard: {},
    cardTypes: [],
    // extract this key to rootReducer
    isLoading: false
};

export function cardReducer(state=initialState, action){
    const { type, payload } = action;
    switch(type){
        case CardActionTypes.ADD_CARD_SUCCESS:
            return {
                ...state,
                creditCardList: [...state.creditCardList, payload]
            }
        
        case CardActionTypes.FETCH_CARDS_SUCCESS: 
            return {
                ...state,
                creditCardList: [...payload]
            }    
        
        case CardActionTypes.FIND_CARD_SUCCESS:
            return {
                ...state,
                currentCard: { ...payload }
            }
        
        case CardActionTypes.FETCH_CARD_TYPES_SUCCESS:
            return {
                ...state,
                cardTypes: payload
            }

        default: return state;
    }
}