import authReducer from './authReducer';
import regContentReducer from './regContentReducer';
import { combineReducers } from 'redux';
import regUserReducer from './regUserReducer';
import updateUserReducer from './updateUserReducer';

const reducers = combineReducers({
    auth: authReducer,
    regContent: regContentReducer,
    regUser: regUserReducer,
    updateUser: updateUserReducer
});

export default reducers;