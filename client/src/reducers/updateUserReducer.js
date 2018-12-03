import { UPDATE_USER } from '../actions/types';

const updateUser = (state={}, action) => {
    switch(action.type){
        case UPDATE_USER:
            console.log('type:::', action.type);
            return action.payload.data || false;
        default:
            return state;
    }
};

export default updateUser;