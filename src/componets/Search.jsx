import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Search() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const handleClick = () => {
        if(searchTerm !== '' ){
        navigate('/searched/' + searchTerm)
        }
        return setSearchTerm('');
    }
  return (
    <div className='mb-20'>
        <input className='text-[14px] sm:text-lg w-[60%] md:w-[40%] mr-6 border rounded-lg border-gray-300 py-2 px-2 sm:py-3 sm:px-6 focus:outline-none' type='text' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} placeholder='Search book..'/>
        <button className='md:uppercase border rounded-lg border-gray-500 bg-gray-400 py-2 px-2 sm:py-3 sm:px-6 text-white' onClick={handleClick}>Search</button>
        </div>
  )
}

export default Search