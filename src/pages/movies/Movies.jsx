import React from 'react'
import { useState, useEffect } from 'react';
import SingleContent  from '../../components/SingleContent';
function Movies() {
   const [page,setPage]=useState(1)
    const [content,setContent]=useState([])
    const fetchMovies=async () =>{
        const res=await fetch(`https://api.tvmaze.com/search/shows?q=mission`);
        
        const data =await res.json();
        console.log(data);
        console.log(data[0].show);
        console.log(data[0].show.image.medium);
        setContent(data);
    }
    useEffect(()=>{
        fetchMovies();
    },[])

    

  return (
    <div className='text-white ' >
      <div className='flex justify-center items-center text-2xl md:text-4xl font-bold mb-6 '>Famous Movies</div>
   <div className="flex flex-wrap justify-around">
    {
        content && content.map((c)=>{

        console.log(c.show.image?.original);
        return <SingleContent key={c.show.id} id={c.show.id} name={c.show.name} language={c.show.language} rating={c.show.rating} imageMedium={c.show.image?.medium || 'null'} imageOriginal={c.show.image?.original || 'null'} length={c.show.runtime} type={c.show?.type||'null'} summary={c.show?.summary||"Apologies, but there's no summary available for this movie from the API. Unfortunately, detailed information is not provided at the moment. We appreciate your understanding."} link={c.show.url||'https://api.tvmaze.com/search/shows?q=girls'}  />
         } )
    }
   </div>
    </div>
  )
}

export default Movies