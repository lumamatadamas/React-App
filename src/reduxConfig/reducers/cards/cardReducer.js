import * as CardActionTypes from './constants/action-types';

const initialState = {
    creditCardList:[],
    currentCard: {}
};

export function cardReducer(state=initialState, action){
    switch(action.type){
        case CardActionTypes.ADD_CREDIT_CARD:
            return {
                ...state,
                creditCardList: [...state.creditCardList, action.payload]
            }
        case CardActionTypes.REQUEST_CARDS:
            return {
                ...state,
                isLoading: action.payload
            }
        
        case CardActionTypes.RECEIVE_CARDS: 
            return {
                ...state,
                creditCardList: [ ... action.payload]
            }    
                
        default: return state;
    }
}