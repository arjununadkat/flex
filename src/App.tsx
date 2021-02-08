import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home';
import ProductDetails from './components/pages/ProductDetails';
import SignIn from './components/auth/SignIn';
import Register from './components/auth/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products/:id' component={ProductDetails} />
          <Route path='/admin/signin' component={SignIn} />
          <Route path='/admin/register' component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
