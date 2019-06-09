import { ADD_CREDIT_CARD } from "../../constants/action-types"

export function AddCreditCard(payload) {
    return { type: ADD_CREDIT_CARD, payload }
};