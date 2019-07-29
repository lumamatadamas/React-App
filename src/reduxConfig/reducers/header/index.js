import { combineReducers } from 'redux';

const headerReducer = combineReducers({
    menu: menuReducer,
    search: searchReducer,
    notification: notificationReducer,
    user: userReducer
});