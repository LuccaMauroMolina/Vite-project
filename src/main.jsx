import React from 'react'
import ReactDOM from 'react-dom/client'
//import './index.css'
//import Nav from './component/nav/nav.jsx'
//import Footer from './component/footer/footer.jsx'
//import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import ItemListContainer from './component/ItemListContainer/ItemListContainer.jsx'
//import Item from './component/Item/Item.jsx'
//import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer.jsx'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

/*
<React.StrictMode>
    <BrowserRouter>
          <Nav/>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:idItem" element={<ItemDetailContainer />} />
              <Route path="/categoria/:IdCategoria" element={<ItemListContainer />} />
              <Route path="*" element={<h2>Sitio en Construcción</h2>} />
            </Routes>
        <Footer/>
    </BrowserRouter>
</React.StrictMode>
*/