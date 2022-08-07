import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header.js';

import Home from './pages/Home';
import Sobre from './pages/Sobre';

const Rotas = () => {
  return (
    <BrowserRouter>
    <Header />
        <Route component = { Home } path="/" exact />
        <Route component = { Sobre } path="/sobre" exact />
    </BrowserRouter>
  )
}

export default Rotas;