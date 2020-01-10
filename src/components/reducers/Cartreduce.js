import Plain from '../../images/Plain.jpg'
import Almond from '../../images/Almond.jpg'
import Resin from '../../images/Resin.jpg'
import Cashew from '../../images/Cashew.jpg'
import Dryfruit from '../../images/Dryfruit.jpg'
import Walnut from '../../images/Walnut.jpg'
import {ADD_TO_CART,REMOVE_ITEM,ADD_QUAN,SUB_QUAN} from '../actions/action-types/cart-actions'

var initState = {
  items: [
  {id:1, title:'Simply Chocolate', desc:"Pure Chocolate, often a classic's favourite.", price:100, quantity:'0', img:Plain},
  {id:2, title:'Choco Almond', desc:'Almonds and chocolate mingled together to impart a phenomenal sensation to the taste buds.',price:200, quantity:'0', img: Almond},
  {id:3, title:'Choco Resin', desc:'Resins blended with liquid chocolate flawlessly.',price:200, quantity:'0', img: Resin},
  {id:4, title:'Walnut Cracker', desc:"Cracking and crunching of walnuts with every bite, the walnut cracker is one of it's kind.",price:200, quantity:'0', img: Walnut},
  {id:5, title:'Cashew Nut Explosion', desc:'Every bite dripping with chocolates and exploding with cashew nuts.',price:200, quantity:'0', img: Cashew},
  {id:6, title:'Mixfruit Chocolate', desc:'Exquisite dryfruits dipped in delicious molten chocolate blended with exotic crunch to manifest a lip-smacking product.',price:200, quantity:'0', img: Dryfruit}

  		],

  addedItems : [],
  total :parseFloat(0)

}
// QUANTITY IS AN INBUILT FUNCTION

const cartReduce = (state = initState, action) => {

if(action.type === ADD_TO_CART)
{
	let addedItem = state.items.find(item=> item.id===action.id)
	//check if action id exists in added items
	let ExistingItem = state.addedItems.find(item =>item.id === action.id)

	if(ExistingItem)
	{
		addedItem.quantity +=1;
		return {
			...state,
			total: state.total + addedItem.price
		}
	}
	{
		addedItem.quantity = 1;
		let newTotal = state.total + addedItem.price
		return {
			...state,
			addedItems:[...state.addedItems, addedItem],
			total: newTotal
		}
	}
}

else if(action.type === REMOVE_ITEM)
{ 
	let itemToRemove = state.addedItems.find(item => item.id === action.id)
	let newCart = state.addedItems.filter(item => item.id !== action.id)

	let newTotal = state.total - (itemToRemove.price*itemToRemove.quantity)

	return {
		...state,
		addedItems:newCart,
		total:newTotal
	}
}
else if(action.type === SUB_QUAN)
{
	let pickedItem = state.addedItems.find(item=>item.id === action.id)
	if( pickedItem.quantity ===1)
	{
		let newCart = state.addedItems.filter(item=> item.id !== action.id)
		let newTotal = state.total - pickedItem.price
		return {
			...state,
			addedItems: newCart,
			total: newTotal
		}
	}
	else
	{
		pickedItem.quantity -=1;
		let newTotal= state.total - pickedItem.price
		return {
			...state,
			total: newTotal
		}
	}
}
else if(action.type === ADD_QUAN)
{
	let pickedItem = state.addedItems.find(item=> action.id === item.id)
	pickedItem.quantity +=1
	let newTotal =state.total + pickedItem.price

	return {
		...state,
		total:newTotal
	}
}
else
{

	return state;
}
}
export default cartReduce;

