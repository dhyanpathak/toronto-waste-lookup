import { SET_KEYWORD, FAVOURITE_ITEM } from './types';

//Send keyword as action payload to search_reducer 
export function setKeyword(keyword) {
    return {
        type: SET_KEYWORD,
        keyword
    }
}

//Send item (to be favourited or removed from favourited) as action payload to favourite_reducer 
export function favouriteItem(item) {
    return {
        type: FAVOURITE_ITEM,
        item
    }
}