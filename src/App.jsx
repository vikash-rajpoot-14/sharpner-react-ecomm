import { createContext, useState } from 'react'
import './App.css'
import Cart from './component/Cart'
import Footer from './component/Footer'
import Header from './component/Header'
import Music from './component/Music'
export const Context = createContext({})

function App() {
  if(JSON.parse(localStorage.getItem('cart'))==undefined){
    console.log("cjsncjsnc")
    localStorage.setItem('cart', JSON.stringify([]) )
  }
  let localcart = JSON.parse(localStorage.getItem('cart'))
  const [cart , setCart] = useState(localcart);
  const [togglecart,setTogglecart] = useState(false)
  localStorage.setItem('cart', JSON.stringify(cart))
  console.log(cart)
  return (
    <Context.Provider value={{cart,togglecart,setTogglecart,setCart}}> 
    <div className='flex h-screen'>
    <div className='flex-1 '>
      <Header/>
      <Music/>
      <Footer/>
    </div>
    <div className={`w-64 fixed right-0 h-full bg-gray-200 p-4 ${togglecart? "block" : "hidden"}`} >
      <Cart   />
    </div>
    </div>
    </Context.Provider>
  )
}

export default App
