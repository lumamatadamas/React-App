import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpics from '../epics/index';
import rootReducer from '../reducers/index';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)    
);

epicMiddleware.run(rootEpics)

export default store;