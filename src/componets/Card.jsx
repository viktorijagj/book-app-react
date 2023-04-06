import React from 'react';
import { useAppContextProvider } from '../context/appContext';
import {useNavigate} from 'react-router-dom'

function Card({book, title,img}) {

  const navigate = useNavigate();

  // export from contextProvider
  const {fav,addFav,removeFav} = useAppContextProvider();
  // check if it is in fav
  const checkFav = (id)=> {
    const isChecked = fav.some((book)=> book.id === id);
    return isChecked;
  }

  return (
    <section className='border shadow-lg p-9 m-9 transition-all hover:scale-110 cursor-pointer'>
        <h4>{title}</h4>
        <img onClick={()=>navigate(`/details/${book.id}`)}  className='w-[300px] h-[300px] m-auto mb-6 mt-3' src={img} alt='imgg' />
        {checkFav(book.id)=== true ? <button onClick={()=>removeFav(book.id)} className='py-1 px-9  bg-red-900  hover:bg-red-800 text-white w-full'>Remove from Fav</button> : <button onClick={()=>addFav(book)} className='py-1 px-9 bg-green-800 hover:bg-gray-400 text-white w-full'>Add to Fav</button> }
        
    </section>
  )
}

export default Card