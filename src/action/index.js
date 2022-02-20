export const SET_RECIPES ='SET_RECIPES';
export const FAVORITE_RECIPE ='FAVORITE_RECIPE';

export function setRecipes(items){
    const action = {
        type:SET_RECIPES,
        items
    }
    return action
}

export function favoriteRecipe(items){
    const action = {
        type:FAVORITE_RECIPE,
        items
    }
    return action
}