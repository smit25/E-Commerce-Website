import React from 'react';
import { connect } from 'react-redux'
import "materialize-css/dist/css/materialize.min.css";
import { Redirect} from 'react-router-dom'
import firebase from 'firebase';
import './form.css'
  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

firebase.initializeApp(firebaseConfig);


class Form extends React.Component {

	 constructor (){
	 super(); 
    this.state = {
      
              /*PhoneNo: {
                value: ''
              },
              Name: {
                value: ''
              },

              Alternate_PhoneNo: {
                value: ''
              },

              email: {
              	value:''
              },

              suggestion:{
              	value:'Your feedback is valuable to us.'
              }*/
              PhoneNo : " ",
              Name : " ",
              Alternate_PhoneNo : " ",
              Email : " ",
              suggestion : 'Your feedback is valuable to us.'
              
      }
  }
  
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  /*onSubmit = event =>{
  	event.preventDefault();
  	return this.sendMessage;
  }*/
 sendMessage =async ()=>{
 	alert("Your Order has been Placed");
 	this.redirectOnSubmit();
 	console.log("func called");
 	console.log(this.state.Name);
 	console.log(this.state.Email);
 	console.log(this.props.items);
 	var item_list=[];
 	var items = this.props.items;

 	for(let m in items){
 		
 		var temp = {
 			"id": items[m]["id"],
 			"quantity": items[m]["quantity"],
 			"price": items[m]["price"],
 		}
 		item_list.push(temp);
 	}

 
 	let formData = {
	Name: this.state.Name,
	Email:this.state.Email,
	Total:this.props.total,
	PhoneNo: this.state.PhoneNo,
	Alt_Phone: this.state.Alternate_PhoneNo,
	Item_List: item_list,
	Suggestion: this.state.suggestion
	};

 	await firebase.firestore().collection('details').doc().set(formData).then((data)=>{
 		console.log("Akdhas");

 	}).catch((err) => {
 		console.log(err);
 	});
 	window.location.reload(true);
};

redirectOnSubmit=() =>{
	console.log("redirect");
	return <Redirect to ="/"/>
}



  render () {
  	let OrderedItems=this.props.items.map(item=>{
				return (

				<li className="collection-item avatar" key={item.id}>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                    
                                        <p><b>Price:Rs.{item.price}</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                               </div>
                               </li>  
                               )
                           })

    return (
     <div className="form_background">
      <form>
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate" value={this.state.Name} name="Name"
                 onChange={this.changeHandler} required />
          <label for="icon_prefix">Name</label>
        </div>
        </div>
        <div className ="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" className="validate" value ={this.state.PhoneNo} name="PhoneNo"
          	onChange={this.changeHandler} required/>
          <label for="icon_telephone">Phone number</label>
        </div>
      </div>
      
         <div className ="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" className="validate" value ={this.state.Alternate_PhoneNo} name ="Alternate_PhoneNo"
          	onChange={this.changeHandler}/>
          <label for="icon_telephone">Alternate Phone number</label>
        </div>
      </div>

          	<div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">email</i>
          <input id="icon_email" type="email" className="validate " name ="Email"
          	value ={this.state.Email} style ={{color:"black"}}
          	onChange={this.changeHandler} required/>
          <label for="email white-black">Email</label>
          <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>
      </div>
          	
          	<div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea" value={this.state.suggestion} onChange={this.changeHandler} data-length="120" name ="suggestion"></textarea>
          <label for="textarea1">Suggestions</label>
        </div>
      </div>
      <div className ="total">
            <h4>Total amount is: {this.props.total}</h4>
            </div>
            <div className ="items">
            	<h5>You have ordered:</h5>
                    <ul className="collection">
                        {OrderedItems}
                    </ul>
            </div>
        	
          	<button type="button" class="btn waves-effect waves-light" onClick={this.sendMessage}>Submit
    <i class="material-icons right">send</i>
  </button>
      </form>  
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

export default connect (mapStateToProps)(Form)
