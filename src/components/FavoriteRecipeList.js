import React,{Component} from "react";
import {connect} from 'react-redux';
import RecipeItem from "./RecipeItem";

// from video
class FavoriteRecipeList extends Component{
    render(){
        console.log(this.props.favoriteRecipes)
        return(
            <div>
                <h4>Favorite Recipes:</h4>
                {
                    this.props.favoriteRecipes.map((recipe, index)=>{
                        return (
                            <RecipeItem key={index} recipe={recipe} favoriteButton={false} />
                        )
                    })
                }
            </div>
        )
    }
}
// favoriteButton is set to true or false
function mapStateToProps(state){
    return{
        favoriteRecipes: state.favoriteRecipes
    }
}
export default connect(mapStateToProps,null)(FavoriteRecipeList);