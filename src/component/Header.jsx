import React from 'react'

function Header({togglecart,setTogglecart}) {
  
 const handletoggle = ()=>{
  setTogglecart(!togglecart)
}

  return (
    <>
    <div className='sticky  top-0 flex justify-between bg-black text-white'>
      <div>
      </div> 
      <div className='flex mx-14 gap-10'>
        <a href="#home" className='p-3 hover:underline   text-lg sm:text-xl'>Home</a>
        <a href="#home" className='p-3  hover:underline  text-lg sm:text-xl'>Store</a>
        <a href="#home" className='p-3  hover:underline  text-lg sm:text-xl'>About</a>
      </div>
      <a onClick={handletoggle} href="#home" className='flex p-3  text-lg sm:text-xl'><p className=' border-2 rounded-md px-1 border-sky-400 '>cart </p><sup className='text-sky-400 p-1'>0</sup> </a>
    </div>
    <div className='flex justify-center font-bold p-3 pb-16 bg-gray-400	text-white text-8xl bg-grey-400'>
        <p>The Generics</p>
    </div>
    </>
  )
}

export default Header
