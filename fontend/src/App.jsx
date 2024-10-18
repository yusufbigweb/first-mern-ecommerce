import React from 'react'
import {Routers, Route} from 'react-router-dom'
import Home from './pagas/home'
import Collection from './pagas/Collection'
import About from './pagas/About'
import Contact from './pagas/Contact'
import Product from './pagas/Product'
import Cart from './pagas/Cart'
import Login from './pagas/Login'
import PlaceOrder from './pagas/PlaceOrder'
import Orders from './pagas/Orders'
import Navbar from './components/Navbar'

export const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
<Routers>
<Route path='/' element={<Home/>}/>
<Route path='./Collection' element={<Collection/>} />
<Route path='./about' element={<About/>}/>
<Route path='./contact' element={<Contact/>} />
<Route path='./product/:productId' element={<Product/>} />
<Route path='./cart' element={<Cart/>}/>
<Route path='./login' element={<Login/>}/>
<Route path='./place-order' element={<PlaceOrder/>}/>
<Route path='./order' element={< Orders/>} />
</Routers>

    </div>
  )
}

export default App