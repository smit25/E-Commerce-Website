import React from 'react';
//import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//import App from'./App';
import Navbar from './components/Navbar'
import Shoppingcart from './components/ShoppingCart'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PlaceOrder from './components/Place_order'
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import "materialize-css/dist/css/materialize.min.css";




class App extends React.Component {
	render(){
		return (
			<BrowserRouter>
			<div className = "App">
				<div><Navbar/></div>
					<Switch>
						<Route exact path ="/" component ={Home} />
						<Route path = "/Shoppingcart" component ={Shoppingcart} />
						<Route path = "/About" component ={About} />
						<Route path = "/Contact" component ={Contact} />
						<Route path = "/PlaceOrder" component ={PlaceOrder} />
						<Route path ="/Form" component ={Form} />

					</Switch>

			</div>
			</BrowserRouter>
			

			);
	}
}

export default App;