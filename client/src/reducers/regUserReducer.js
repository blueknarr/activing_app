import { REG_USER } from '../actions/types';

const regUser = (state=null, action) => {
    switch(action.type){
        case REG_USER:
            return action.payload.data || false;
        default:
            return state;
    }
};

export default regUser;