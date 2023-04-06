import React from 'react';
import { useAppContextProvider } from '../context/appContext';
import BackButton from './BackButton';

function Favourites() {

  const {fav,addFav,removeFav} = useAppContextProvider();
  // check if it is in fav
  const checkFav = (id)=> {
    const isChecked = fav.some((book)=> book.id === id);
    return isChecked;
  }

  return (
    <div>
      <BackButton />
      <div className='flex-grow w-full grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-center gap-2 mt-6'>
        {fav.length>0 ? fav.map((book)=> (
          <section className='shadow-lg p-9 m-9 h-[500px]'>
        <h4>{book.title}</h4>
        <img className='w-[300px] h-[300px] m-auto mb-6 mt-3' src={book.image_url} alt='imgg' />
        {checkFav(book.id)=== true ? <button onClick={()=>removeFav(book.id)} className='py-1 px-9 bg-red-900  hover:bg-red-800 text-white w-[200px] m-auto cursor-pointer transition-all hover:scale-110'>Remove from Fav</button> : <button onClick={()=>addFav(book)} className='py-1 px-9 bg-green-800 hover:bg-gray-400 text-white w-full cursor-pointer transition-all hover:scale-110'>Add to Fav</button> }
        
    </section>
          )) : <div className='text-center text-2xl w-full'><p>No books added to favorites!</p></div> }
    </div>
    </div>
  )
}

export default Favourites