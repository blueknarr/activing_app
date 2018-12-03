import axios from 'axios';
// // export const UPDATE_USER = 'UPDATE_USER';

// export const update = (user) => async dispatch => {
//     console.log('USER INFO UPDATED');

//     return (dispatch({
//         type: UPDATE_USER,
//         payload: await axios.put('/api/users/update', { 
//             user 
//         })
//     }));
// };
export const updateUser = (user) => {
    return async dispatch => {
        dispatch({
            type: 'UPDATE_USER',
            payload: await axios.put('/api/users/update', { user })
        })
    }
}