import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className=' p-10 flex justify-between items-center '>
            <h1 className='text-4xl font-bold '>Covid-19</h1>
            <div>
                <ul className='flex text-xl font-bold'>
                    <li className='hover:bg-yellow-400 hover:scale-110 hover:duration-100 p-2 px-5 rounded '>Data</li>
                    <li className='hover:bg-yellow-400 hover:scale-110 hover:duration-100 p-2 px-5 rounded '>Chart</li>
                    <li className='hover:bg-yellow-400 hover:scale-110 hover:duration-100 p-2 px-5 rounded'>Table</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar