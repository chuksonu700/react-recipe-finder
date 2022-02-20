import React,{Component} from "react";
import { Outlet, Link } from "react-router-dom";
import { connect } from "react-redux";


class Layout extends Component{
    render(){

    
    console.log(this.props)
    return(
        <>
            <nav className="navbar navbar-expand-sm bg-warning justify-content-center">
            <a className="navbar-brand" href="/">Recipe Finder</a>
            {/* <!-- Toggler/collapsibe Button --> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                     <span className="navbar-toggler-icon">X</span>
                </button>
            
            {/* <!-- Navbar links --> */}
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                     <ul className="navbar-nav justify-content-end ">
                          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                          {
                            this.props.favoriteRecipes.length > 0 ? 
                                <li className="nav-item"><Link to="/favs" className="nav-link" >Favs</Link></li>                            
                            :
                            <li></li>
                          }
                          {
                            this.props.favoriteRecipes.length > 0 ? 
                                <li className="nav-item"><Link to="/favorite" className="nav-link" >Favorite</Link></li>
                            :
                            <li></li>
                          }
                         
                      </ul>
                </div>
            </nav>
            <Outlet /> 
        </>
    )
    }
}
function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps,null)(Layout);  