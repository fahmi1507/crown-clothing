import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import React from 'react'
import CartItem from '../cart-item/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect'
import { toggleCartDropdown } from '../../redux/cart/cart-actions'
import { useHistory } from 'react-router-dom'

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const history = useHistory()


    return (
        <div className='cart-dropdown'> 
            <div className="cart-items">
                {
                    cartItems.length > 0 ?
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item}/>
                    )) :
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={()=> {
                history.push('/checkout')
                dispatch(toggleCartDropdown())
            }}>GO TO CHECK OUT</CustomButton>
            
        </div>
    )
}

export default CartDropdown;
