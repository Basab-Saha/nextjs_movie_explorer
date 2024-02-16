"use client"
import { useState } from "react";
import { BASE_URL } from "./constants";
import MovieGrid from "./components/MovieGrid";
import Modal from "./components/Modal";

async function searchMovies(query){
  try{
    const res=await fetch(`${BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${encodeURIComponent(query)}`);
    return await res.json();
  }catch(err){
    console.log(err )
    return [];
  }
}


export default function Home() {

  const[query , setquery]=useState('');

  const[movies,setMovies]=useState([]);

  const[selectedMovie , setSelectedMovie]=useState(null);  

  function handleMovieClick(movie){
    setSelectedMovie(movie)
  }

  function handleCloseMovie(){
    setSelectedMovie(null)
  }

  async function handleSearch(e){
    e.preventDefault();

    if(!query) return;  

    const results=await searchMovies(query)
    setMovies(results.results)

  }

  console.log(selectedMovie)

  return (
   <div className="bg-gray-900 text-white min-h-screen">
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">Movie Explorer</h1>

      <form className="m-8" onSubmit={handleSearch}>
        <input className="px-4 py-2 w-80 text-gray-900 rounded-md" type="text" value={query} onChange={(e)=>setquery(e.target.value)} placeholder="Search for movies" />
        <button className="ml-2 px-4 py-2 bg-blue-500 rounded" type="submit">Search</button>
      </form>

      {/*MovieGrid*/}
        <MovieGrid movies={movies} handleMovieClick={handleMovieClick}/>
    </main>
    <Modal movie={selectedMovie} onClose={handleCloseMovie}/>
   </div>
  );
}
