import React from 'react';
import { connect } from 'react-redux' // to connect cartreduce and Place_order
import {addToCart} from './actions/cartActions'
import {Link} from 'react-router-dom'
import "materialize-css/dist/css/materialize.min.css";

class PlaceOrder extends React.Component {

	handleClick= (id) => {
		return this.props.addToCart(id);
	}

	 render(){
	 	// mapping an item in the items dictionary to a product displayed on this page
        let itemList = this.props.items.map(item=>{
            return(
            	  
    				<div className="col s12 m6">
                <div className="card" key={item.id} style={{opacity:"0.9", width: "550px", height:"auto"}}>
                
                        <div className="card-image">
                            <img src={item.img} alt={item.title} style={{ height: "100%", align:"center"}} />
                           
                            <span className="card-title black" style={{opacity:"0.6"}}>{item.title}</span>
                            
                            <span to="/" className="btn-floating halfway right waves-effect waves-light brown" onClick ={() =>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                            <br/>
                            <br/>
                           
                           <span to ="/" className="btn-floating right waves-effect waves-light blue" value="Cart"><Link to="/Shoppingcart"><i className="material-icons" value="Cart">shopping_cart</i></Link></span>
                        </div>
                        
                        <div className="card-content  ">
                            <h4>{item.desc}</h4>
                               <h4><b>Price: Rs.{item.price}</b></h4>
                        </div>
                         
                        
                        </div>
                
                
                 </div>
            )
        })
        return(
            <div className="container">

                <h1 className="center" style={{margin:"50px"}}><b><u>OUR  PRODUCTS</u></b></h1>
                <div className="box">
                    {itemList}
                </div>
                
            </div>
        )
    }
}



//is a utility which helps your component get updated state(which is updated by some other components)
const mapStatetoProps =(state) =>{
	 return {
	 	items: state.items
	 }

}
 //is a utility which will help your component to fire an action event
const mapDispatchToProps = (dispatch) => 
{
	return {
		addToCart: (id)=> {dispatch(addToCart(id))}
	}
}
export default connect (mapStatetoProps, mapDispatchToProps)(PlaceOrder);