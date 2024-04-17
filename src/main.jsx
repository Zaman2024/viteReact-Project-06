import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import ProSkill from './components/ProSkill/ProSkill'

const router = createBrowserRouter([
  {
    path : "/",
    element :<Layout/>,
    children : [
      {
        index : 'Home',
        element : <Home/>
      },
      {
        path : "about",
        element : <About />
      },
      {
        path : "ProSkill",
        element : <ProSkill />
      }
      
    
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
