import React, { useContext } from 'react'
import { Context } from '../App.jsx'
import { Link, NavLink } from 'react-router-dom'


function Header() {

  const context = useContext(Context)
  const totalQuantity = context.cart.reduce((acc,cv)=>cv.quantity + acc, 0)
 const handletoggle = ()=>{
  context.setTogglecart(!context.togglecart)
}

  return (
    <>
    <div className='sticky  top-0 flex justify-between bg-black text-white'>
      <div>
      </div> 
      <div className='flex mx-14 gap-10'>
        <NavLink to="/" className='p-3 hover:underline   text-lg sm:text-xl'>Home</NavLink>
        <NavLink to="/store" className='p-3  hover:underline  text-lg sm:text-xl'>Store</NavLink>
        <NavLink to="/about" className='p-3  hover:underline  text-lg sm:text-xl'>About</NavLink>
      </div>
      <a onClick={handletoggle} href="#home" className='flex p-3  text-lg sm:text-xl'><p className=' border-2 rounded-md px-1 border-sky-400 '>cart </p><sup className='text-sky-400 p-1'>{totalQuantity}</sup> </a>
    </div>
    <div className='flex justify-center font-bold p-3 pb-16 bg-gray-400	text-white text-8xl bg-grey-400'>
        <p>The Generics</p>
    </div>
    </>
  )
}

export default Header
