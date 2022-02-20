import {SET_RECIPES,FAVORITE_RECIPE} from '../action'
import { combineReducers } from 'redux';

function recipes(state=[],action){
    
    switch (action.type) {
        case SET_RECIPES:
            return action.items
        default:
            return state;
    }
}
function favoriteRecipes(state=[],action){
    switch (action.type) {
        case FAVORITE_RECIPE:
            state =[...state,action.items]
            return state;
    //i will use just action to return the since the Api does not have .recipe
        default:
            return state;
    }

}
const rootReducer = combineReducers({recipes,favoriteRecipes});
export default rootReducer;