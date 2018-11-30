//모든 정보=statㄷ, action을 받는다.
import { REG_CONTENT } from '../actions/types';

const regContent = (state=null, action) => {
    console.log(state);
    switch(action.type){
        case REG_CONTENT:
            return action.payload.data || false;
        default:
            return state;
    }
};

export default regContent;