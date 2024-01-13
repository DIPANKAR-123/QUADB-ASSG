import React from 'react'
import { useState ,useEffect} from 'react';
import SearchComponent from './SearchComponent'
import SingleContent from '../../components/SingleContent';
function Search() {
  const [type,setType]=useState(0);
  const [searchQuery, setSearchQuery] = useState('tree');

  // Callback function to update searchQuery in the Search component
  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    console.log(searchQuery,"hllo ji")
  };
  
  const [content,setContent]=useState([])
  const fetchMovies=async () =>{
      const res=await fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`);
      
      const data =await res.json();
      // console.log(data);
      // console.log(data[0].show);
      // console.log(data[0].show.image.medium);
      setContent(data);
  }
  useEffect(() => {
    // console.log(searchQuery);
    // setSearchQuery(query);
    fetchMovies();
    // Implement the logic to call your backend API with the search query
    // Update setSearchResults with the live data received from the backend
  }, [searchQuery]);

  return (
    <div className='mt-6 text-white'>

      <SearchComponent onSearchQueryChange={handleSearchQueryChange}/>
      <div className="flex flex-wrap justify-around md:mt-8 mt-4">
    {
        content && content.map((c)=>{

        // console.log(c.show.image?.original);
        return <SingleContent key={c.show.id} id={c.show.id} name={c.show.name} language={c.show.language} rating={c.show.rating} imageMedium={c.show.image?.medium || 'null'} imageOriginal={c.show.image?.original || 'null'} length={c.show.runtime} type={c.show?.type||'null'} summary={c.show?.summary||"Apologies, but there's no summary available for this movie from the API. Unfortunately, detailed information is not provided at the moment. We appreciate your understanding."} link={c.show.url||'https://api.tvmaze.com/search/shows?q=girls'} />
         } )

    }
    {
      content.length == 0 ?<div className='flex  w-full justify-center items-center lg:mt-16 mt-8'>
        <img src="https://t4.ftcdn.net/jpg/06/09/04/07/240_F_609040734_OQQbkagBWcwysk5iFzhEkdA796H8fdHe.jpg" alt=""/>   

      </div>:<></>
    }

   </div>


    </div>
  )
}

export default Search