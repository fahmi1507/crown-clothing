import React from 'react'
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selector';



const Header = ({ currentUser, hidden }) => {
    console.log(currentUser, '<<<current')
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>

            <div className="options">
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                {
                    currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>LOGOUT</div> :
                    <Link to='/login'>LOGIN</Link>
                }
                <CartIcon/>
            </div>
            { hidden && <CartDropdown/> }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header);
