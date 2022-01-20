import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Route, Routes, Navigate } from 'react-router-dom'
import Shop from './pages/shop-page/Shop';
import Header from './components/header/Header';
import LoginAndRegister from './pages/LoginAndRegister/LoginAndRegister';
import { auth, createUserProfileDoc, firestore } from './firebase/firebase.utils';
import { doc, onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selector';
import { createStructuredSelector } from 'reselect';
import Checkout from './pages/checkout/Checkout';

class App extends React.Component {
    unsubscribeFromAuth = null;
    
    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                await createUserProfileDoc(userAuth)
                onSnapshot(doc(firestore, "users", userAuth.uid), (doc) => {
                  setCurrentUser({
                    currentUser: {
                      id: doc.id,
                      ...doc.data()
                    }
                  })
                });
        
            } else {
                setCurrentUser(userAuth)
            }
        });

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        console.log(this.props.currentUser, '<<USER')
        return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Homepage/>} />
                <Route path='/shop' element={<Shop/>} />
                <Route exact path='/checkout' element={<Checkout/>} />
                <Route path='/login' element={this.props.currentUser? <Navigate to='/'/> : <LoginAndRegister/>} />
            </Routes>
        </div>
        );
        
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
