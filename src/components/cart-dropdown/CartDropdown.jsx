import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import React from 'react'
import CartItem from '../cart-item/CartItem'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom';
import { toggleCartDropdown } from '../../redux/cart/cart-actions'

const CartDropdown = ({ cartItems, dispatch, history }) => {
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

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
