import React from 'react'
import { useState, useEffect } from 'react';
import SingleContent  from '../../components/SingleContent';
function Latest() {
  const [page,setPage]=useState(1)
  const [content,setContent]=useState([])
  const fetchMovies=async () =>{
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
    
    // Extracting the components and formatting in the 'YYYY-MM-DD' format
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so we add 1
    const day = today.getDate().toString().padStart(2, '0');
    
    const TodayDate = `${year}-${month}-${day}`;
    
    console.log(TodayDate);
      const res=await fetch(`https://api.tvmaze.com/schedule/web?date=${TodayDate}&country=US`);
      
      const data =await res.json();
      // console.log(data);
      // console.log(data[0].show);
      // console.log(data[0]._embedded.show.image.medium);
      setContent(data);
  }
  useEffect(()=>{
      fetchMovies();
  },[])
  return (
    <div>

<div className='flex justify-center items-center text-2xl md:text-4xl font-bold mb-6  '> Latest Movies</div>
   <div className="flex flex-wrap justify-around text-white">
    {
        content && content.map((c)=>{

        console.log(c._embedded.show.image?.original);
        return <SingleContent key={c._embedded.show.id} id={c._embedded.show.id} name={c._embedded.show.name} language={c._embedded.show.language} rating={c._embedded.show.rating} imageMedium={c._embedded.show?.image?.medium || 'null'} imageOriginal={c._embedded.show?.image?.original || 'null'} length={c._embedded.show.runtime} type={c._embedded.show?.type||'null'} summary={c._embedded.show?.summary||"Apologies, but there's no summary available for this movie from the API. Unfortunately, detailed information is not provided at the moment. We appreciate your understanding."} link={c._embedded.show.url||'https://api.tvmaze.com/search/shows?q=girls'}   />
         } )
    }
   </div>
    </div>
  )
}

export default Latest