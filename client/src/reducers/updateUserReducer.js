import { UPDATE_USER } from '../actions/types';

const updateUser = (state=null, action) => {
    console.log(state);
    switch(action.type){
        case UPDATE_USER:
            return action.payload.data || false;
        default:
            return state;
    }
};

export default updateUser;