import React, {Component} from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";

class RecipeList extends Component{
    
    render(){
        console.log('this.props :',this.props.recipes)

        return(
            <div className="row">
                {
                    //index is used so that we can use the array index as key
                    this.props.recipes.map((recipe,index)=>{
                        return(
                            <RecipeItem key={index} recipe={recipe} favoriteButton={true} >
                            </RecipeItem>
                        )
                    })
                }
            </div>
        )
    }
}

// setting the redux state to props for our component
function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps,null)(RecipeList);