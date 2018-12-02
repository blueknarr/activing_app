import axios from 'axios';
import { FETCH_USER, REG_CONTENT, REG_USER } from './types';

export const fetchUser = () => async dispatch => { 
    dispatch({
        type: FETCH_USER,
        payload: await axios.get('/api/users/current')
    });
};

export const User = () => async dispatch => { 
    dispatch({
        type: REG_USER,
        payload: await axios.get('/api/users/regUser')
    });
};

export const clubContent = () => async dispatch => {
    dispatch({
        type: REG_CONTENT,
        payload: await axios.get('/api/users/regContent')
    });
};