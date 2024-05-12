import React, {useState} from 'react'
import Axios from "axios"
import YouTube from "react-youtube"//In built Component
import movieTrailer from "movie-trailer"
import Common from './Common'
import '../App.css'

function Another(props) 
{
    
  return (

    <div  className='common' >

      
    <Common URL = {'https://api.themoviedb.org/3/trending/all/week?api_key=32f9e877489c276a3376f21bd753a432&language=en-US'} name = "Trending"/>

<Common URL = {'https://api.themoviedb.org/3/movie/top_rated?api_key=32f9e877489c276a3376f21bd753a432&language=en-US'} name = "Top rated"/>

<Common URL = {'https://api.themoviedb.org/3/discover/tv?api_key=32f9e877489c276a3376f21bd753a432&with_network=123'} name = "TV Shows"/>





    
    </div>


  )
}

export default Another

