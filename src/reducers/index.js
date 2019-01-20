import { combineReducers } from 'redux';
import search from './search_reducer';
import favouriteItem from './favourite_reducer'

const rootReducer = combineReducers({
    search,
    favouriteItem
});

export default rootReducer;