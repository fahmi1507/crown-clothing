import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Homepage from './pages/homepage/Homepage';
// import Shop from './pages/shop-page/Shop';
// import Checkout from './pages/checkout/Checkout';
import Header from './components/header/Header';
import LoginAndRegister from './pages/LoginAndRegister/LoginAndRegister';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selector';
import { createStructuredSelector } from 'reselect';
import { GlobalStyle } from './global.styles';
import Spinner from './components/spinner/Spinner';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

const Homepage = lazy(() => import('./pages/homepage/Homepage'))
const Shop = lazy(() => import('./pages/shop-page/Shop'))
const Checkout = lazy(() => import('./pages/checkout/Checkout'))

class App extends React.Component {
    unsubscribeFromAuth = null;
    
    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                setCurrentUser({
                    id: snapShot.id,
                    ...snapShot.data()
                });
                });
        } 
            setCurrentUser(userAuth);
        });

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
        <div>
            <GlobalStyle/>
            <Header/>
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={
                        <Spinner/>
                    }>
                        <Route exact path='/' component={Homepage} />
                        <Route path='/shop' component={Shop} />
                        <Route exact path='/checkout' component={Checkout} />
                        <Route
                            path='/login'
                            render={() => 
                                this.props.currentUser ? (
                                    <Redirect to='/' />
                                    ) : (
                                        <LoginAndRegister/>
                                        ) 
                                    }
                        />
                    </Suspense>
                </ErrorBoundary>
            </Switch>
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
