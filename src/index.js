import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Productsingle from './Pages/Productsingle';
import Contact from './Pages/Contact'; 

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const allroutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/product',
    element: <Product />
  },
  {
    path: '/productsingle',
    element: <Productsingle />
  },
  {
    path: '/contact',
    element: <Contact />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={allroutes} />
  </React.StrictMode>
);

reportWebVitals();
