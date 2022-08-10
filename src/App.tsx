import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "@fontsource/source-code-pro"
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Team from './pages/team';
import Utilities from './pages/utilities';
import Partners from './pages/partners';
 
function App() {
  return (
    <div className="App p-4">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/utilities" element={<Utilities />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </div>
  );
}

export default App;
