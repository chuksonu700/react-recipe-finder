import React,{Component} from "react";
import { favoriteRecipe } from "../action";
import {connect} from 'react-redux';
//my invention
class FavRecipeItem extends Component{
    constructor(){
        super()
        this.state ={
            favorited:false
        }
    }
    favoriteReps(recipe){
        this.props.favoriteRecipe(recipe);
        this.setState({favorited:true})
    }
    render(){

        let {recipe} = this.props.recipe;
        return(
            < div className="recipe-item p-2">
                {
                    this.state.favorited ?
                        <div className="star">
                            &#9733;
                        </div>
                    :
                    <div onClick={()=>this.favoriteReps(recipe)} className="star">
                      &#9734;
                     </div>
                }
            <div className="recipe-text m-1">
                <a href={recipe.url}>
                    <h4>{recipe.label}</h4>
                </a>
            <p>{recipe.source}</p>
             </div>
              <img 
                src={recipe.image} 
                alt={recipe.label}
                className="recipe-img"
                />
            </div>
        )
    }
}

export default connect(null,{favoriteRecipe})(FavRecipeItem);