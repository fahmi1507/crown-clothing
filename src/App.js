import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/shop-page/Shop';
import Header from './components/header/Header';
import LoginAndRegister from './pages/LoginAndRegister/LoginAndRegister';
import { auth, createUserProfileDoc, firestore } from './firebase/firebase.utils';
import { doc, onSnapshot } from 'firebase/firestore';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                await createUserProfileDoc(userAuth)
                onSnapshot(doc(firestore, "users", userAuth.uid), (doc) => {
                  this.setState({
                    currentUser: {
                      id: doc.id,
                      ...doc.data()
                    }
                  })
                });
        
            } else {
            this.setState({currentUser: userAuth})
            }
        });

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        console.log(this.state.currentUser, '<<USER');
        return (
        <div>
            <Header currentUser={this.state.currentUser}/>
            <Routes>
                <Route path='/' element={<Homepage/>} />
                <Route path='/shop' element={<Shop/>} />
                <Route path='/login' element={<LoginAndRegister/>} />
            </Routes>
        </div>
        );
        
    }
}

export default App;
