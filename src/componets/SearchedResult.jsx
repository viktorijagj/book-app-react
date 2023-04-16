import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router';
import BackButton from './BackButton';
import { useAppContextProvider } from '../context/appContext';

function SearchedResult() {
    const navigate = useNavigate();
    const {fav,addFav,removeFav} = useAppContextProvider();

    const [searched, setSearched] = useState([]);
    let params = useParams();
  
    const getSearchedItem = async (name)=> {
        return await axios.get(`https://example-data.draftbit.com/books?q=${name}`)
        .then((res)=>setSearched(res.data))
      
    }
    useEffect(()=>{
      getSearchedItem(params.search);
   },[params.search])
  
     // check if it is in fav
  const checkFav = (id)=> {
    const isChecked = fav.some((book)=> book.id === id);
    return isChecked;
  }



  return (
    <div>
           <BackButton />
           <div className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-1 justify-center mt-20'>
        {searched.length>0 && searched.map((item)=> {
            return (
                <section key={item.id} className='shadow-lg p-9 m-9 h-[500px]'>
                <h4>{item.title}</h4>
                <img onClick={()=>navigate(`/details/${item.id}`)}  className='cursor-pointer w-[300px] h-[300px] m-auto mb-6 mt-3' src={item.image_url} alt='imgg' />
                {checkFav(item.id)=== true ? <button onClick={()=>removeFav(item.id)} className='py-1 px-9 bg-red-900  hover:bg-red-800 text-white w-[200px] m-auto cursor-pointer transition-all hover:scale-110'>Remove from Fav</button> : <button onClick={()=>addFav(item)} className='py-1 px-9 bg-green-800 hover:bg-gray-400 text-white cursor-pointer transition-all hover:scale-110 w-[200px]'>Add to Fav</button> }

                </section>
          
            )
        })}
              </div>
    </div>
  )
}

export default SearchedResult