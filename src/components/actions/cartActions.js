import {ADD_TO_CART,REMOVE_ITEM,SUB_QUAN,ADD_QUAN} from './action-types/cart-actions'


export const addToCart =(id)=>{
	return {
		type: ADD_TO_CART,
		id
	}
}

export const removeItem=(id) =>{
	return {
		type: REMOVE_ITEM,
		id
	}
}

export const subtractQuantity =(id) =>{
	return {
		type: SUB_QUAN,
		id
	}
}

export const addQuantity =(id) => {
	return {
		type: ADD_QUAN,
		id
	}
}