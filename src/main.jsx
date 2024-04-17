import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider,  createBrowserRouter, Route, Routes, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import ProSkill from './components/ProSkill/ProSkill'
import Edu from './components/Education/Edu'
import User from './components/User/User'



//----First Method of Rendering coomponents------

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element={<Layout/>}>
      <Route index element= {<Home/>}/>
      <Route path='About' element= {<About/>}/>
      <Route path='ProSkill' element= {<ProSkill/>}/>
      <Route path='Edu' element= {<Edu/>}/>
      <Route path='user/:userid' element= {<User/>}/>
      
    </Route>
  )
)

//----Second Method of rendering components-----------

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element :<Layout/>,
//     children : [
//       {
//         index : 'Home',
//         element : <Home/>
//       },
//       {
//         path : "about",
//         element : <About />
//       },
//       {
//         path : "ProSkill",
//         element : <ProSkill />
//       },
//       {
//         path : "Edu",
//         element : <Edu />
//       }
      
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
