import Axios from 'axios-observable';
import { combineEpics } from 'redux-observable'
import epicsCards from '../epics/epicsCards';

export default combineEpics(
    epicsCards,
)

Axios.interceptors.request.use(req => {
    return req;
});

Axios.interceptors.response.use(res => {
    switch(res.status) {
        case 200:
            return res.data

        case 500:
            return {}
    }
    return res.data;
});