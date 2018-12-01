import authReducer from './authReducer';
import regContentReducer from './regContentReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    auth: authReducer,
    regContent: regContentReducer
});

export default reducers;