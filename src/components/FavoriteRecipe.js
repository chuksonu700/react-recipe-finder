import React,{Component} from 'react';
import {connect} from 'react-redux';
import FavRecipeItem from './FavRecipeItem';
//my invention
class FavoriteRecipe extends Component{
    
    render(){
        console.log(this.props)
        return(
            <div className="row">
            {
                //index is used so that we can use the array index as key
                this.props.favoriteRecipes.map((recipe,index)=>{
                    return(
                        <FavRecipeItem key={index} recipe={recipe} >
                        </FavRecipeItem>
                    )
                })
            }
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps,null)(FavoriteRecipe);