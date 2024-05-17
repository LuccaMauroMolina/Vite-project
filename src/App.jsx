import ItemListContainer from "./component/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer"
import NavBar from "./component/NavBar/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nosotros from "./component/Nosotros/Nosotros"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

/*
<Route path="/" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer/>}/>
            <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
            <Route path="/nosotros" element={<Nosotros />}/>*/