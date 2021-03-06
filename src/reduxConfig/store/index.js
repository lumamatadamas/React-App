import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
// import { cycleMiddleware } from '../middlewares/api';

import xs from 'xstream';
import { run } from '@cycle/run';
import { makeHTTPDriver } from '@cycle/http';
import { createCycleMiddleware } from 'redux-cycles';

import * as CardActionTypes from '../reducers/cards/constants/action-types';

function main(sources) {
    const request$ = sources.ACTION
    .filter(action => action.type === CardActionTypes.REQUEST_CARDS)
    .map(action => ({
        url: 'https://api.github.com/users/1',
        category: 'user'
    }));

    const action$ = sources.HTTP
        .select('user')
        .flatten()
        .map(res => log(res));

    const sinks = {
        ACTION: action$,
        HTTP: request$
    };
    return sinks;
}

const cycleMiddleware = createCycleMiddleware();
const { makeActionDriver, makeStateDriver } = cycleMiddleware;

const store = createStore(
    rootReducer,
    applyMiddleware(cycleMiddleware)
);

const log = res => { console.log(res); return res; }

run(main, {
    ACTION: makeActionDriver(),
    STATE: makeStateDriver(),
    HTTP: makeHTTPDriver()
});

export default store;