import './App.css';
import React from 'react';
import {Route, Redirect, Routes } from 'react-router-dom'

//components
import Main from './Components/main/Main';
import Header from './Components/header/Header';
import Verse from './Components/verse/Verse';
import Setting from './Components/setting/Setting';
import AboutUs from './Components/aboutUs/AboutUs';
import Login from './Components/login/Login';
import Favorite from './Components/favorite/Favorite';
import Salavat from './Components/Salavat/Salavat';
import Sojdeh from './Components/sojdeh/Sojdeh';
import { AuthProvider } from './Contexts/AuthContext';
import { RequiredAuth } from './Contexts/RequiredAuth';


function App() {
  return (
    <div className="App">
      <AuthProvider>

      <Header  title="بخوان"/>
      <Routes>
        <Route path="/sureh/:id/:ps" element={<Verse/>}/>
        <Route path="/salavat" element={<RequiredAuth><Salavat/></RequiredAuth>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/sojdeh" elementt={<RequiredAuth><Sojdeh/></RequiredAuth>} />
        <Route path="/favorite" element={<RequiredAuth><Favorite/></RequiredAuth>} />
        <Route path="/" element={<Main/>} />
 
      </Routes>

    </AuthProvider>
    </div>
  );
}

export default App;
