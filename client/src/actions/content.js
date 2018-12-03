import axios from 'axios';
export const REGISTER_CONTENT = 'REGISTER_CONTENT';

export const register = (content) => async dispatch => {
    console.log('register in');
    console.log(content);
    dispatch({
        type: REGISTER_CONTENT,
        payload: await axios.post('/api/content/reg', { 
            content 
        })
    });
};