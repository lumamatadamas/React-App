import * as CardActionTypes from '../reducers/cards/constants/action-types';

export default store => next => action => {
    console.log("from httphelper", action, store)
    
    return next(action);
}



