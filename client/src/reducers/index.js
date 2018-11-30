import authReducer from './authReducer';
import regContentReducer from './regContentReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    auth: authReducer,
    regContenr: regContentReducer
});

export default reducers;