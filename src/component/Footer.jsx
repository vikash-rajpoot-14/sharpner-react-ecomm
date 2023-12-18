import React from 'react'
import { DiApple } from "react-icons/di";
import { DiGithubAlt } from "react-icons/di";
import { FaSquareYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <div className='flex justify-evenly bg-blue-400 font-bold 	text-white text-8xl bg-grey-400'>
      <div>
        <p>The Generics</p>
      </div>
      <div className='flex'>
        <DiApple />
        <DiGithubAlt />
        <FaSquareYoutube />
      </div>
    </div>
  )
}

export default Footer
