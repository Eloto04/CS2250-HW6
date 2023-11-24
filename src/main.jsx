import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Home from './Home.jsx'
import API from './API.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="tic-tac-toe" element={<App />} />
      <Route path="api" element={<API />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
