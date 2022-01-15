import cartActionTypes from './cart-types'
import { addItemToCart } from './cart-utils'

const INITIAL_STATE = {
    hidden: false,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case cartActionTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state, hidden: !state.hidden
            }   
        case cartActionTypes.ADD_ITEMS:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload)
            } 
        default:
            return state;
    }
} 

export default cartReducer;
