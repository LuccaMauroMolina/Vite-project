import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
//import Nav from './nav.jsx'
//import { Nav } from './nav'
import Nav from './component/nav/nav.jsx'
import Footer from './component/footer/footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Item from './component/Item/Item.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

    <Nav/>
    <Routes>
      <Route/>
      <Route/>
      <Route/>
    </Routes>
    <Item/>
    <Footer/>

    </BrowserRouter>
  </React.StrictMode>
)
