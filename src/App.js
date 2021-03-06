import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductsList';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/Cart';


function App() {
  return (
        <>
          <Navbar/>
           <Switch>
             <Route path="/" exact component={ProductList} />
             <Route path="/details" component={Details} />
             <Route path="/cart" component={Cart} />
             <Route component={Default} />
           </Switch>

        </>
  );
}

export default App;
