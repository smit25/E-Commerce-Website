import React from 'react'
import './About.css'
import Mom from '../images/Mom.jpg'
import Gopi from '../images/gopi.jpg'
import Neelam from '../images/Neelam.jpg'
// import Navbar from './Navbar'
import "materialize-css/dist/css/materialize.min.css";


class About extends React.Component { 

	render()
	{
		return (

			<div className="about_background">
			<section id = "hero">
			<div className = "hero-container">
			<div className =" Header " style ={{font: "GillSans", margin:"15px"}}>
			<h1> <em>Made with   <i className="small material-icons ">favorite</i> by </em></h1>
			</div>


			
			<div className="text-white" >
			<h2> Bhavna Patel</h2>
			</div>

			<div className="container">
  				<img src={Mom} alt="Avatar" className="image" style={{width:"11%"}} />
  				  				<div className="middle ">
    			<div className="text-white">Bhavna Patel</div>
  		</div>
		</div>
		
				<div className="text-white">
				<h2> Neelam Gandhi </h2>
				</div>
				<div class="container">
  				<img src={Neelam} alt="Avatar" class="image" style={{width:"11%"}} align = "left"/>
  				<div className="middle">
    			<div className="text-white">Neelam Gandhi</div>
  		</div>
		</div>
				

				<div className="text-white">
				<h2>Gopi Thakkar</h2>
				</div>
				
			<div className="container">
  				<img src={Gopi} alt="Avatar" class="image" style={{width:"11%"}} align = "left"/>
  				<div className="middle">
    			<div className="text-white">Gopi Thakkar</div>
  		</div>
		</div>
				

			</div>
			</section>
			</div>
			


			)
	}
}
export default About