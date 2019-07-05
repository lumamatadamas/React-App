import { ADD_CREDIT_CARD } from "../../constants/action-types";
import { combineReducers } from "redux";

const initialState = {
    creditCardsList: [],
    cards:[],
    user: {},
};

function creditCardReducer (state = initialState.user, action) { 
    if (action.type === ADD_CREDIT_CARD) {
        return Object.assign({}, state, {
            creditCardsList: state.creditCardsList.concat(action.payload)
        });
    }
    return state;
 }

function cardReducer (state = initialState.cards, action) { return state }
function userReducer (state = initialState.user, action) { return state } 


const rootReducer = combineReducers({
    user: userReducer,
    creditCardsList: creditCardReducer,
    cards: cardReducer
});

export default rootReducer;