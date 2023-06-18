import React, { useState } from 'react';
import Feeds from './modules/Feeds';
import Events from './modules/Events';
import Jobs from './modules/Jobs';
import Login from './modules/Login';
import SignIn from './components/Login/SignIn';
import Page1 from './modules/page1';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feeds />} />
          <Route path="/events" element={<Events />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dummy" element={<Page1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
