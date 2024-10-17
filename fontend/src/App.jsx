import React from 'react'
import {Routers, Route} from 'react-router-dom'
import Home from './pagas/home'
import Collection from './pagas/Collection'
import About from './pagas/About'
import Contact from './pagas/Contact'
import Product from './pagas/Product'
import Cart from './pagas/Cart'

export const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

<Routers>
<Route path='/' element={<Home/>}/>
<Route path='./Collection' element={<Collection/>} />
<Route path='./about' element={<About/>}/>
<Route path='./contact' element={<Contact/>} />
<Route path='./product/:productId' element={<Product/>} />
<Route path='./cart' element={<Cart/>}/>

</Routers>

    </div>
  )
}

export default App