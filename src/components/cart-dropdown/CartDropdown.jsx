import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import React from 'react'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'> 
            <div className="cart-items"></div>
            <CustomButton>GO TO CHECK OUT</CustomButton>
            
        </div>
    )
}

export default CartDropdown
