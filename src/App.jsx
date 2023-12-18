import { useState } from 'react'
import './App.css'
import Cart from './component/Cart'
import Footer from './component/Footer'
import Header from './component/Header'
import Music from './component/Music'

function App() {
  const [togglecart,setTogglecart] = useState(false)
  return (
    <div className='flex h-screen'>
    <div className='flex-1 '>
      <Header  togglecart={togglecart} setTogglecart={setTogglecart}/>
      <Music togglecart={togglecart} setTogglecart={setTogglecart}/>
      <Footer/>
    </div>
    <div className={`w-64 fixed right-0 h-full bg-gray-200 p-4 ${togglecart? "block" : "hidden"}`} >
      <Cart togglecart={togglecart} setTogglecart={setTogglecart}/>
    </div>
    </div>
  )
}

export default App
