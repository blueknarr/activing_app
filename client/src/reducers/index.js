import authReducer from './authReducer';
import regContentReducer from './regContentReducer';
import { combineReducers } from 'redux';
import regUserReducer from './regUserReducer';

const reducers = combineReducers({
    auth: authReducer,
    regContent: regContentReducer,
    regUser: regUserReducer
});

export default reducers;