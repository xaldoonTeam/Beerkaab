import React from 'react'

function Navbars() {
  return (
    <div className='flex justify-between'>
        <h1 className='font-semibold'>logo</h1>
        <div className=' flex gap-3 text-slate-500'> 
            <h1> home</h1>
            <h2>about</h2>
            <h3>contactUs</h3>
        </div>
        <div>
           <button className=' bg-blue-500 p-2 rounded-md font text-white'>SignIn</button>
        </div>
    </div>
  )
}

export default Navbars