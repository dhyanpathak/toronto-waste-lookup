import { SET_KEYWORD } from '../actions/types';
import data_json from '../data/toronto-waste-lookup-data.json';

//Read data_json and find items that have a keyword matching action.keyword

function search(state = [], action) {
    switch(action.type) {
        case SET_KEYWORD:
            let results = [];
            for(let i = 0; i < data_json.length; i++) {
                if(data_json[i].keywords.includes(action.keyword.toLowerCase())) {
                    results.push(data_json[i]);
                }
            }
            return results;
        default:
            return state;
    }
}
export default search;