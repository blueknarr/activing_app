import axios from 'axios';
export const REGISTER_CONTENT = 'REGISTER_CONTENT';

// export const register = (content) => {
//     console.log('register in');
//     return{
//         type: REGISTER_CONTENT,
//         promise:{
//             method: 'post',
//             url:'',
//             data: { content }
//         }
//     };
// };
export const register = (content) => async dispatch => {
    console.log('register in');
    console.log(content);
    dispatch({
        type: REGISTER_CONTENT,
        payload: await axios.post('/reg/content', { 
            content 
        })
    });
};