import React from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import { useQuery } from "react-query";
import BackButton from './BackButton';

function BookDetails() {

  const {id} = useParams();

  // fetch data
  const fetchBookDetails = async () => {
    return await axios.get(`https://example-data.draftbit.com/books/${id}`)
    .then(res=>res.data)
  }
  const { data, status } = useQuery("book", fetchBookDetails);
  return (
    <section className='w-full flex-grow m-auto'>
      <BackButton/>
        {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Loading...</p>}
      {status === "success" && (

          <div key={data.id} className="clear-both grid xl:grid-cols-[1fr,2fr] gap-6 w-[70%] m-auto mt-16 mb-16 items-center justify-center">
            <div className='sm:w-[400px] m-auto'>
              <img className='w-full h-[400px] m-auto' src={data?.image_url} alt={data?.title}/>
            </div>
            <div>
              <h2 className='text-2xl font-bold text-green-900 mb-6'>{data?.title}</h2>
              <h4 className='text-xl  text-gray-700 mb-6'><span className='uppercase text-[.7em]'>Author:</span> {data?.authors}</h4>
              <h6 className='uppercase text-[.8em] mb-6 text-green-700'>{ data?.genres}</h6>
              <p className='m-0 p-0 text-justify'>{data?.description}</p>
              </div>
          </div>
        )}
    </section>
  )
}

export default BookDetails