import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import React from 'react'
import CartItem from '../cart-item/CartItem'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart-selectors'

const CartDropdown = ({ cartItems }) => {
    return (
        <div className='cart-dropdown'> 
            <div className="cart-items">
                {
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item}/>
                    ))
                }
            </div>
            <CustomButton>GO TO CHECK OUT</CustomButton>
            
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
