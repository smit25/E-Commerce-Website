import React from 'react';
import { connect } from 'react-redux'
import { Link, Redirect} from 'react-router-dom'
import {removeItem, subtractQuantity, addQuantity} from './actions/cartActions'
import "materialize-css/dist/css/materialize.min.css";

class Shoppingcart extends React.Component{

	state = {
		confirm: false
	}
	handleAdd =(id)=>{
		return this.props.addQuantity(id);	
	}

	handleSubtract =(id)=>{
		return this.props.subtractQuantity(id);
	}

	handleRemove=(id) => {
		return this.props.removeItem(id);
	}

	confirmSubmission=()=>{
		this.setState({
			confirm:true
		})
		
	}
	redirectOnSubmission =() =>{
		if(this.state.confirm )
		{
			if(this.props.total >0)
			{
			return <Redirect to="/Form" />
			}
			else
			{
				alert("Cart is Empty");
			}
		}

	}
	render(){
		let addedItems=this.props.items.length ? // If cart is not empty
		(
			this.props.items.map(item=>{
				return (

				<li className="collection-item avatar" key={item.id} style={{opacity: "0.8"}}>
                                    <div className="item-img" > 
                                        <img src={item.img} alt={item.img} style ={{width:"10%", heigth: "20%"}}/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title"><b>{item.title}</b></span>
                                        <p>{item.desc}</p>
                                        <p><b>Price:Rs.{item.price}</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/ShoppingCart"><i className="material-icons" onClick ={() =>{this.handleAdd(item.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/ShoppingCart"><i className="material-icons" onClick ={() =>{this.handleSubtract(item.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick ={() =>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                               </li>    
                               )     
			})

			):
		// Else if cart is empty
		(
			<h3> The Cart is Empty </h3> 
		)
		return (
			 <div className="container">
                <div className="cart">
                <div className ="header text-white">
                    <h1>You have ordered:</h1>
                    </div>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>  
           
            <div className ="total text-white">
            <h2>Total amount is: {this.props.total}</h2>
            </div>
           <div className ="CONFIRM">
            <button className="waves-effect waves-light btn pink remove" onClick ={() =>{this.confirmSubmission()}}>CONFIRM</button>
            {this.redirectOnSubmission()}
           </div>
             </div>
		)
	}
}

	const mapStateToProps = (state) =>{
		return {
			items: state.addedItems,
			total: state.total
		}
	}

	const mapDispatchToProps = (dispatch) =>{

		return{
			removeItem : (id) => {dispatch(removeItem(id))},
			addQuantity: (id) => {dispatch(addQuantity(id))},
			subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(Shoppingcart)
