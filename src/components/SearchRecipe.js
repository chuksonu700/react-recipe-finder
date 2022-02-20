import React, {Component} from "react";
import {Form,FormGroup,Button,FormControl,FormLabel} from 'react-bootstrap';
import { connect } from "react-redux";
import { setRecipes } from "../action";

//so i can work offline i will use offline data to continue
import data from '../data/hold.json'


class SearchRecipe extends Component{
    constructor(){
        super()
        this.state={
            ingredient:'',
        }
    }
    searchOfflin(){
                // offline data
                this.props.setRecipes(data.hits)
    }
    search(){

        const appId = '038fad75';
        const app_key = '20ee3626937cb451d93dae0496e3a16b%09';
        const searchQuery = encodeURI(this.state.ingredient)            
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=Chicken%20Rice&app_id=038fad75&app_key=%2020ee3626937cb451d93dae0496e3a16b%09&ingr=5-10&field=uri&field=label&field=image&field=source&field=url`
        const urlGood = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=${appId}&app_key=${app_key}&ingr=5-10&field=uri&field=label&field=image&field=source&field=url`
        
        //fetching Data
        fetch(urlGood,{method:'GET'})
            .then(response=>response.json())
            .then((json)=>{
               this.props.setRecipes(json.hits)
            })
    }
    render(){
        return(
            <div className="container">
            <Form className="form-inline">
                <FormGroup className="form-inline">
                    <FormLabel>Ingredients</FormLabel>
                    {' '}
                    <FormControl type="text" placeholder="Garlic Chiken" onChange={e=>this.setState({ingredient:e.target.value})} />
                </FormGroup>
                <Button className="m-1" onClick={()=>this.search()} >Submit</Button>
                
            </Form>
            <Button className="m-1" onClick={()=>this.searchOfflin()} >Submit offline</Button>
            </div>
        )
    }
}


//when passing the mapdispatch to props withou using function make sure to use ogject braces{}
export default connect(null,{setRecipes})(SearchRecipe);