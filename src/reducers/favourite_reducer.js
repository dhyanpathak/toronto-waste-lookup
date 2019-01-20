import { FAVOURITE_ITEM } from '../actions/types';

//Return state without the already favourited item otherwise return state with new favourited item

function favouriteItem(state = [], action) {
    switch(action.type) {
        case FAVOURITE_ITEM:
            for(let i = 0; i < state.length; i++) {
                if(state[i].title === action.item.title) {
                    return [...state.splice(0, i), ...state.splice(i + 1)];
                }
            }
            return [...state, action.item]
        default:
            return state;
    }
}

export default favouriteItem;