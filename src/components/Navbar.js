import React from 'react';
//import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
// import './Navbar.css';
import "materialize-css/dist/css/materialize.min.css";


class Navbar extends React.Component {
	render(){
        return (
             
		<nav className="nav  pink lighten-3" style = {{opacity :"0.7"}}>
        <div className="container" >
            
            <div id="mainListDiv" className="main_list black" >

                <ul className="navlinks black" style={{color:"black"}}>
                  <li> <Link to ="/">HOME</Link></li>
                    <li> <Link to ='/About'>ABOUT</Link></li>
                    <li> <Link to="/PlaceOrder">PLACE ORDER</Link></li>
                    <li> <Link to="/ShoppingCart">CART</Link></li>
                    <li> <Link to="/Contact">CONTACT</Link></li>
                </ul>
            </div>
        
        </div>
    </nav>

        )
    }
}

export default Navbar;
