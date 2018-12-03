import axios from 'axios';
export const REGISTER_USER = 'REGISTER_USER';

export const register = (user) => async dispatch => {
    console.log('register in');
    console.log(user);
    dispatch({
        type: REGISTER_USER,
        payload: await axios.post('/reg/user', { 
            user 
        })
    });
};