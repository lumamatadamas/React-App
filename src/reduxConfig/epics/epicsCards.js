import { combineEpics, ofType } from 'redux-observable';
import Axios from 'axios-observable';
import { mergeMap, map } from 'rxjs/operators';
import * as CardActionsTypes from '../reducers/cards/constants/action-types';
import * as CardActions from '../reducers/cards/actions/index';

const fetchCards = action$ =>
    action$.pipe(
        ofType(CardActionsTypes.FETCH_CARDS),
        mergeMap(action =>
            Axios.request(action.payload).pipe(
                map(res => CardActions.FetchCardsSuccess(res))
            )
        )    
    );

const findCard = action$ => 
    action$.pipe(
        ofType(CardActionsTypes.FIND_CARD),
        mergeMap(action =>
            Axios.request(action.payload).pipe(
                map(res => CardActions.FindCardSuccess(res))
            )
        )
    );

const addCard = action$ =>
    action$.pipe(
        ofType(CardActionsTypes.ADD_CARD),
        mergeMap(action => 
            Axios.request(action.payload).pipe(
                map(res => CardActions.AddCardSuccess(res))
            )
        )
    );

const fetchCardsTypes = action$ =>
    action$.pipe(
        ofType(CardActionsTypes.FETCH_CARD_TYPES),
        mergeMap(action =>
            Axios.request(action.payload).pipe(
                map(res => CardActions.FetchCardTypesSuccess(res))
            )
        )    
    );

export default combineEpics(
    fetchCards,
    findCard,
    addCard,
    fetchCardsTypes
);

