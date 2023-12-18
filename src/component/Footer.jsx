import React from 'react'
import { DiApple } from "react-icons/di";
import { DiGithubAlt } from "react-icons/di";
import { FaSquareYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <div className='flex justify-evenly  bg-blue-400 font-bold text-white text-8xl '>
      <div className=' m-4'>
        <p>The Generics</p>
      </div>
      <div className='flex m-4'>
        <DiApple />
        <DiGithubAlt />
        <FaSquareYoutube />
      </div>
    </div>
  )
}

export default Footer
