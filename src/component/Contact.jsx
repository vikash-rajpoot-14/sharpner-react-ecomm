import React, { useState } from 'react'

function Contact() {
    const [formdata, setFormData] =useState({name:"",email:"",number:""})
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await fetch("https://movies-5dbce-default-rtdb.firebaseio.com/ecomm.json",{
                method:"POST",
                headers : {"Content-Type": "application/json"},
                body : JSON.stringify(formdata)
            })
            const data = await response.json()
        } catch (error) {
            console.log("error",error.message)
        }
    }
    const handleChange = (e) => {
         setFormData((prev)=>({
            ...prev,[e.target.id] : e.target.value
         }))
    }
    return (
        <div className='py-12 bg-sky-100 flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit} className='rounded-lg bg-white p-6 shadow shadow-slate-400 border-solid'>
                <h1 className='m-4 text-center font-semibold text-gray-600'>CONTACT US</h1>
                <div className='m-4 underline decoration-1 decoration-slate-500'>
                    <input
                        onChange={handleChange}
                        value={formdata.name}
                        placeholder='Name...'
                        className='rounded-sm py-1 pl-2 pr-20 text-gray-500 ring-1 ring-gray-300 placeholder:text-gray-400'
                        type="text"
                        id="name"
                    />
                </div>
                <div className='m-4'>
                    <input
                        onChange={handleChange}
                        value={formdata.email}
                        placeholder='email...'
                        className='rounded-sm py-1 pl-2 pr-20 text-gray-500 ring-1 ring-gray-300 placeholder:text-gray-400'
                        type="text"
                        id="email"
                    />
                </div>
                <div className='m-4'>
                    <input
                        onChange={handleChange}
                        value={formdata.number}
                        placeholder='number...'
                        className='rounded-sm py-1 pl-2 pr-20 text-gray-500 ring-1 ring-gray-300 placeholder:text-gray-400'
                        type="text"
                        id="number"
                    />
                </div>
                <div>
                    <div className='flex bg-sky-500 mx-4 rounded hover:bg-sky-400 justify-center items-center'>
                        <button className='p-1 text-gray-300' type="submit">
                            Add Contact
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact
