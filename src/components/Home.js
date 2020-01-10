import React from 'react'
//import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import './Home.css'
// import Navbar from './Navbar'
class Home extends React.Component{

	render(){
		return (

				<section id="hero">
        <div>
    			<div class="hero-container" >
      			<h1>Welcome to Chocostreet</h1>
      			<h2 style ={{color: "white"}}><em>HOMEMADE.PURE.MAGICAL</em></h2>
            <h3 style={{color:"white"}}>We at Chocostreet are committed to making the finest quality of homemade chocolates and it's exquisite variations.<br/>Our products are made with pure ingredients and utmost care to indulge all our customers in a choco-rich and a relishing experience.<br/> We're a startup venture and the response received by our early custoers has been overwhelming.</h3>
            <br/>
      			<Link to ="/PlaceOrder" class="btn-get-started">Place Your Order</Link>
    </div>
    </div>
  </section>

			)
	}
}
export default Home;