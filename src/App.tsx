import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home';
import ProductDetails from './components/sections/products/ProductDetails';
import SignIn from './components/auth/SignIn';
import Register from './components/auth/Register';
import Footer from './components/layout/Footer';
import ProductsList from './components/pages/ProductsList';
import CreateProduct from './components/products/CreateProduct';
import ManageProducts from './components/pages/ManageProducts';
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';
import BookDemo from './components/pages/BookDemo';
import EditProduct from './components/sections/products-admin/EditProduct';

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
          <Route path='/products' component={ProductsList} />
          <Route path='/new' component={CreateProduct} />
          <Route path='/admin/manage' component={ManageProducts} />
          <Route path='/about' component={AboutUs} />
          <Route path='/contact' component={Contact} />
          <Route path='/bookdemo' component={BookDemo} />
          <Route path='/admin/edit/:id' component={EditProduct} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
