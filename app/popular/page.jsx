"use client"
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import MovieGrid from "../components/MovieGrid"
import { BASE_URL } from "../constants"

export default function Popular(){

    const[movies,setMovies]=useState([]);
    const[selectedMovie , setSelectedMovie]=useState(null)  

    function handleMovieClick(movie){
        setSelectedMovie(movie)
      }
      function handleCloseMovie(){
        setSelectedMovie(null)
      }
    

    useEffect(()=>{
        fetch(`${BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then((res)=>res.json()).then((data)=>setMovies(data.results)).catch((err)=>console.log(err))
    },[])

    return(
        <div className="bg-gray-900 text-white min-h-screen">
            <main className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-6xl font-bold m-3">Popular</h1>
                <MovieGrid movies={movies} handleMovieClick={handleMovieClick}/>
                {selectedMovie && <Modal movie={selectedMovie} onClose={handleCloseMovie} />}
            </main>
        </div>
    )
}