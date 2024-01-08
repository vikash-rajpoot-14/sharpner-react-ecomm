import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Header from './component/Header'
import Footer from './component/Footer'
import Cart from './component/Cart'
import Home from './pages/Home'
import Store from './pages/Store'
import Contact from './component/Contact'
// import PrivateRoutes from './component/PrivateRoutes'
import ProductDetails from './component/ProductDetails'
import Login from './pages/Login'
export const Context = createContext({})

function App() {

  if (JSON.parse(localStorage.getItem('cart')) == undefined) {
    // console.log("cjsncjsnc")
    localStorage.setItem('cart', JSON.stringify([]))
  }
  let localcart = JSON.parse(localStorage.getItem('cart'))
  const [cart, setCart] = useState(localcart);
  const [togglecart, setTogglecart] = useState(false)
  localStorage.setItem('cart', JSON.stringify(cart))

  return (
    <BrowserRouter>
      <Context.Provider value={{ cart, togglecart, setTogglecart, setCart }}>
        <div className='flex h-screen'>
          <div className='flex-1 '>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              {/* <Route element={<PrivateRoutes />}> */}
                <Route path='/store' element={<Store />} />
                <Route path='/store/:id' element={<ProductDetails />} />
              {/* </Route> */}
              <Route path='/auth' element={<Login />} />
              <Route path='/contact-us' element={<Contact />} />
            </Routes>
            <Footer />
          </div>
          <div className={`w-64 fixed right-0 h-full bg-gray-200 p-4 ${togglecart ? "block" : "hidden"}`} >
            <Cart />
          </div>
        </div>
      </Context.Provider>
    </BrowserRouter>
  )
}

export default App
