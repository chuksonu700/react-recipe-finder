import React, {Component} from "react";
import SearchRecipe from "./components/SearchRecipe";
import RecipeList from "./components/RecipeList";
import './styles/index.css';


//router setting for Favorite page
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home";
import FavoriteRecipe from "./components/FavoriteRecipe";
import FavoriteRecipeList from "./components/FavoriteRecipeList";

class App extends Component{
    render(){
        return(
            <>
            <BrowserRouter>
                <Routes>
                     <Route path="/" element={<Layout />}>  
                        <Route index element={<Home />} />
                        <Route path="favs"  element={<FavoriteRecipe />} />
                        <Route path="favorite"  element={<FavoriteRecipeList />} />
                     </Route>
                </Routes>
            </BrowserRouter>
            </>
        )
    }
}

export default App;