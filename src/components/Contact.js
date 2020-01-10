import React from 'react'
import './Contact.css'
// import Navbar from './Navbar'
import "materialize-css/dist/css/materialize.min.css";

class Contact extends React.Component {

	render(){
		return (
			
				<div className="Contact_background">
				<div className ="hero " style ={{heigth:"100%"}}>
				<div className = " hero-container">
				<div className ="Header" style ={{margin: "10px"}}>
				<h1> <u>Contact Us</u> </h1>
				</div>
				<div className ="" style ={{margin: "10px"}} >
				<h2> We cater to orders of a large spectrum.<br/> For placing orders or further query, Contact Us at: </h2>
				</div>
				<br/>
				<div  style ={{ align: "left"}}>
				<h3 style ={{margin: "10px"}}> <b>Address: </b></h3>
				<div className = "filler" style ={{margin: "10px"}}>
				<h5> C/ 503,502,204, Tulip Apartments, Royal Complex, Eksar Road, Borivali West, Mumbai - 400091 </h5>
				</div>
				</div>
				<h3 style ={{margin: "10px"}}><b> Contact Number : </b></h3>
				<div className = "filler" style ={{margin: "10px"}}>
				<h5> Bhavna: +91 9930889115 </h5>
				<h5> Neelam: +91 9930739481 </h5>
				</div>
				<h3 style ={{margin: "10px"}}><b> Email Address: </b></h3>
				<div className = "filler" style ={{margin: "10px"}}>
				<h5> bhavnap2@gmail.com </h5>
				</div>
				</div>
				</div>
				</div>
				)
	}
}
export default Contact