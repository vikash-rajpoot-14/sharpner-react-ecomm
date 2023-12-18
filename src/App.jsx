import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import Cart from './component/Cart'
export const Context = createContext({})

function App() {
  
  if (JSON.parse(localStorage.getItem('cart')) == undefined) {
    console.log("cjsncjsnc")
    localStorage.setItem('cart', JSON.stringify([]))
  }
  let localcart = JSON.parse(localStorage.getItem('cart'))
  const [cart, setCart] = useState(localcart);
  const [togglecart, setTogglecart] = useState(false)
  localStorage.setItem('cart', JSON.stringify(cart))

  return (
    <Context.Provider value={{ cart, togglecart, setTogglecart, setCart }}>
      <div className='flex h-screen'>
        <div className='flex-1 '>
          <Header />
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </BrowserRouter>
          <Footer />
        </div>
        <div className={`w-64 fixed right-0 h-full bg-gray-200 p-4 ${togglecart ? "block" : "hidden"}`} >
          <Cart/>
        </div>
      </div>
  </Context.Provider>
  )
}

export default App
