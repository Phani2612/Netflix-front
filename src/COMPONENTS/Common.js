import React, {useState} from 'react'
import Axios from "axios"
import YouTube from "react-youtube"//In built Component
import movieTrailer from "movie-trailer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'
import Server_URL from './data'

function Common(props) 
{
    const [ Movies, setMovies] = useState([])

    const [ fetchedVideoID, setFetchedVideoID ] = useState("")

  React.useEffect(function()
  {
    Axios.get(props.URL)
  .then(function(output)
  {
    setMovies(output.data.results)
  })
  .catch(function(error)
  {
    console.log(error)
  })
  },[])

 

  function collectTheMovieName(name)
  {
    // name = The Creator --> is there any trailer present in the youtube or not, trailer we require
    movieTrailer(name)
    .then(function(output)
    {
        // output = https://www.youtube.com/watch?v=nFybJlICaR8
        // v -- videoID

        const myVideoID = new URLSearchParams(new URL(output).search).get("v")
        setFetchedVideoID(myVideoID)
        
    })
    .catch(function(error)
    {
        console.log(error)
    })
  }


  function collectdata(info,index)
  {
      
    
      setMovies(Movies.map(function(i,idx)
      {
           
           const newIcon = i.icon === 'faCheck' ? 'faPlus' : 'faCheck'


           if(index === idx)
           {
                Axios.post(`${Server_URL}/add`, {data : {...i, index : idx}} ).then(function(output)
                {
                  
                  console.log(output.data)     

           }).catch(function(error)
           {
              console.error(error)
           })
                
           

                return {...i,icon : newIcon, index : idx}

                
           }


           else{

            return {...i, index : idx}
           }

          

      }))

  }


  const additionalData = {
    height: "400px",
    width: "100%",
    playerVars: {
        autoplay: 1//Play the video
    }
  }

  return (
    <div>
        
        <h2 style={{color: "white", fontSize: "20px", fontWeight: "900"}}>{props.name}</h2>
        { fetchedVideoID && <YouTube videoId={fetchedVideoID} opts={additionalData}/> }
        <div className='trendingdiv' style={{display: "flex", overflowX: "scroll", flexWrap :'wrap'}}>
        {
            Movies.map(function(i,index)
            {
                return (
                     
                    <div>

                   <img style={{margin: "6px"}}  src={"https://image.tmdb.org/t/p/original"+i.poster_path} height="300px" width="250px" />

                   <div className='additional'>

                   <FontAwesomeIcon icon={faPlay} className='play' onClick={function()
                    {
                        collectTheMovieName(i.original_title)
                    }} />

<FontAwesomeIcon icon={i.icon === 'faCheck'? faCheck : faPlus} className='plus'  onClick={function()
                    {
                      collectdata(i,index) 
                      
                    }} />


                    </div>


                      </div>

                    

                )
            })
        }
        </div>
        
    </div>
  )
}

export default Common

