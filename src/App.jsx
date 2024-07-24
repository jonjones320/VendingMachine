import React from 'react';
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import GranolaBar from './GranolaBar';
import Monster from './Monster';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path="/"  element={<VendingMachine />}/>
            <Route path="/chips" element={<Chips />} />
            <Route path="/granolabar" element={<GranolaBar />} />
            <Route path="/monster" element={<Monster />} />
        </Routes>
        <Link to="/" element={<VendingMachine />}>Back</Link>
      </BrowserRouter>
    </div>
  )
}

export default App
