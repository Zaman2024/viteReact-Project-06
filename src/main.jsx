import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
import Home from './components/Home/Home'

const router = createBrowserRouter([
  {
    path : "/",
    element :<Layout/>,
    children : [
      {
        path : "about",
        element : <About />
      },
      {
        path : 'Home',
        element : <Home/>
      }
    
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
