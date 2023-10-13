import React from 'react'

// components
import Navbar from './Navbar'

const Heros = () => {
  return (
    <div>
        <Navbar/>
        <header className='p-10  flex justify-between items-center'>
            <div className=' p-5 w-3/5 ml-5'>
                <p className='font-bold text-xl bg-yellow-400 inline-block px-3 py-1 rounded'>Navigating the new normal </p>
                <h2 className='text-6xl font-bold'>A year of masks, </h2>
                <h2 className='text-6xl font-bold'>sanitizers, and uncertainty</h2>
                <p className='mt-2'>Stay home, stay safe</p>
            </div>
            <div className=' w-1/5 mr-20'>
                <img src="../../public/person.png" alt="" className='' />
            </div>
        </header>
    </div>
  )
}

export default Heros