import React,{Component} from 'react';
import SearchRecipe from './SearchRecipe';
import RecipeList from './RecipeList';


class Home extends Component{
    render(){
        return(
            <>
                <SearchRecipe />
                <RecipeList />
            </>
        )
    }
}

export default Home;