import React from 'react'
import Card from './Card'
import { useQuery } from "react-query";
import axios from 'axios';

function Main() {

  // fetch data

  const fetchData = async ()=> {
    return await axios.get('https://example-data.draftbit.com/books?_limit=20')
    .then((res)=>res.data)
  }

  const { data, status } = useQuery("books", fetchData);


  return (
    
    <main className='w-[80%] m-auto lg:w-full flex-grow'>
        {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Loading...</p>}
      {status === "success" && (

        <div className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-1 justify-center mt-6'>
          {data.map((book)=> (
          <Card key={book.id} book={book} title = {book.title} img={book.image_url} />
          ))}
        </div>)}
    </main>
  )
}

export default Main