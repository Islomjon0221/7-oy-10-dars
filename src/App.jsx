import { Route, Routes } from 'react-router-dom'
import './App.css'
import Product from './pages/Product'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Product></Product>}></Route>
    </Routes>
  )
}

export default App
