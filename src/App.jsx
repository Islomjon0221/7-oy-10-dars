import { Route, Routes, NavLink, Link } from 'react-router-dom'
import './App.css'
import Product from './pages/Product'
import Cart from './pages/Cart'
import About from './pages/About'
import Error from './pages/Error'
import moon from "./assets/moon-regular.svg"

function App() {

  return (<>

    <header className='header flex items-center justify-between mb-16'>
     <div className="logo h-12 hover:opacity-90 flex items-center bg-[#057aff] rounded px-4 transition-all duration-300">
        <Link to="/" className="line-height-18 font-medium text-white text-3xl  ">C</Link>
      </div>
    <nav className='mt-2'>
        <ul className='flex list-none'>
          <li className='py-4'>
            <NavLink className="text-decoration-none text-blue-800 px-4 py-2 mr-4 rounded transition-all duration-500 hover:bg-black hover:bg-opacity-10" to="/">Products</NavLink>
          </li>
          <li className='py-4'>
            <NavLink className="text-decoration-none text-blue-800 px-4 py-2 rounded transition-all duration-500 hover:bg-black hover:bg-opacity-10" to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
      <div className="icon flex items-center">
        <a className='mr-4'><img width='22' height='22' src={moon} alt="moon" /></a>
      <span className='text-center w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center text-lg'>5</span>
      </div>
    </header>

    <Routes>
      <Route path='/' element={<Product></Product>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/about/:id' element={<About></About>}></Route>
      <Route path='*' element={<Error></Error>}></Route>
    </Routes>
  </>)
}

export default App
