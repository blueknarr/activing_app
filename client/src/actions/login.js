import axios from 'axios';
export const UPDATE_USER = 'UPDATE_USER';

export const update = (user) => async dispatch => {
    console.log('USER INFO UPDATED');
    console.log(user);
    dispatch({
        type: UPDATE_USER,
        payload: await axios.patch('/update/user', { 
            user 
        })
    });
};
