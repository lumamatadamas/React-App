import { ADD_CREDIT_CARD } from "../../constants/action-types";

const initialState = {
    creditCardsList: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_CREDIT_CARD) {
        return Object.assign({}, state, {
            creditCardsList: state.creditCardsList.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;