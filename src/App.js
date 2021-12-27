import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/shop-page/Shop';
import Header from './components/header/Header';
import LoginAndRegister from './pages/LoginAndRegister/LoginAndRegister';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/login' element={<LoginAndRegister/>} />
      </Routes>
    </div>
  );
}

export default App;
