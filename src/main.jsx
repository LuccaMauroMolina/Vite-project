import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from './component/nav/nav.jsx'
import Footer from './component/footer/footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './component/ItemListContainer/ItemListContainer.jsx'
//import Item from './component/Item/Item.jsx'
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<BrowserRouter>

<Nav/>
<Routes>
<Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:IdCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="*" element={<h2>Sitio en Construcción</h2>} />
</Routes>
<ItemListContainer/>
<Footer/>
</BrowserRouter>


  </React.StrictMode>
)

/*<Routes>
  <Route path='/' element={<ItemListContainer/>}/>
  <Route path='/categoria/:nombreCategoria' element={<ItemListContainer/>}/>
  <Route path='/item/:nombreItem' element={<ItemListContainer/>}/>
</Routes>*/


/* 
<BrowserRouter>

<Nav/>
<Routes>
  <Route/>
  <Route/>
  <Route/>
</Routes>

<Footer/>
<Count/>

</BrowserRouter>*/