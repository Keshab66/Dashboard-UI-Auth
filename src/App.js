import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import SigninForm from './auth/SigninForm';
import MenuBar from './components/MenuBar';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<SigninForm/>}></Route>
      <Route path="/Menubar" element={<MenuBar/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
