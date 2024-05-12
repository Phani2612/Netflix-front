// import {useState} from 'react'
// import Axios from "axios"
// import YouTube from "react-youtube"//In built Component
// import movieTrailer from "movie-trailer"
// import { BrowserRouter, useNavigate , Route , Routes } from 'react-router-dom'
// import React from 'react'
// import Server_URL from './data'
// import '../App.css'

// function Comedy() 
// {
//     const [ Movies, SetMovies] = useState([])

//     const [ fetchedVideoID, setFetchedVideoID ] = useState("")

    



//   React.useEffect(function()
//   {
//     Axios.get(`${Server_URL}/Romance`)
//   .then(function(output)
//   {
//     console.log(output.data)
//     SetMovies(output.data)
//   })
//   .catch(function(error)
//   {
//     console.log(error)
//   })
//   },[])

//   function collectTheMovieName(name)
//   {
//     // name = The Creator --> is there any trailer present in the youtube or not, trailer we require
//     movieTrailer(name)
//     .then(function(output)
//     {
//         // output = https://www.youtube.com/watch?v=nFybJlICaR8
//         // v -- videoID

//         const myVideoID = new URLSearchParams(new URL(output).search).get("v")
//         setFetchedVideoID(myVideoID)
        
//     })
//     .catch(function(error)
//     {
//         console.log(error)
//     })
//   }

//   const additionalData = {
//     height: "400px",
//     width: "100%",
//     playerVars: {
//         autoplay: 1//Play the video
//     }
//   }

//   return (
//     <div>
        

//         <h2 style={{color: "white", fontSize: "20px", fontWeight: "900"}}>COMEDY</h2>
//         { fetchedVideoID && <YouTube videoId={fetchedVideoID} opts={additionalData}/> }
//         <div className='trendingdiv' style={{display: "flex" , flexWrap:'wrap', overflowX: "scroll"}}>
//         {
//           Movies.map(function(i)
//             {
//                 return (
                     
//                     <img style={{margin: "6px"}} onClick={function()
//                     {
//                         collectTheMovieName(i.original_title)
//                     }} height="300px" width="250px" src={"https://image.tmdb.org/t/p/original"+i.poster_path} />

//                 )
//             })
//         }
//         </div>
    
       
//     </div>
    
//   )
// }

// export default Comedy

// import {useState} from 'react'
// import Axios from "axios"
// import YouTube from "react-youtube"//In built Component
// import movieTrailer from "movie-trailer"
// import { BrowserRouter, useNavigate , Route , Routes } from 'react-router-dom'
// import React from 'react'
// import Server_URL from './data'
// import '../App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlay } from '@fortawesome/free-solid-svg-icons'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
// import { icon } from '@fortawesome/fontawesome-svg-core'




// function Comedy() 
// {
    
    
//     const [ Movies, SetMovies] = useState([])

//     const [ fetchedVideoID, setFetchedVideoID ] = useState("")

  
    

//   React.useEffect(function()
//   {
//     Axios.get(`${Server_URL}/Comedy`)
//   .then(function(output)
//   {
    
//     SetMovies(output.data)
    
//   })
//   .catch(function(error)
//   {
//     console.log(error)
//   })
//   },[])


  

//   function collectTheMovieName(name)
//   {
    
//     // name = The Creator --> is there any trailer present in the youtube or not, trailer we require
//     movieTrailer(name)
//     .then(function(output)
//     {
//         // output = https://www.youtube.com/watch?v=nFybJlICaR8
//         // v -- videoID

//         const myVideoID = new URLSearchParams(new URL(output).search).get("v")
//         setFetchedVideoID(myVideoID)
        
//     })
//     .catch(function(error)
//     {
//         console.log(error)
//     })
//   }


//   function collectdata(info,index)
//   {
      
    
//       SetMovies(Movies.map(function(i,idx)
//       {
           
//            const newIcon = i.icon === 'faCheck' ? 'faPlus' : 'faCheck'


//            if(index === idx)
//            {
//                 Axios.post(`${Server_URL}/add`, {data : {...i, index : idx}} ).then(function(output)
//                 {
                  
//                   console.log(output.data)     

//            }).catch(function(error)
//            {
//               console.error(error)
//            })
                
           

//                 return {...i,icon : newIcon, index : idx}

                
//            }


//            else{

//             return {...i, index : idx}
//            }

          

//       }))


     
//       // Axios.post(`${Server_URL}/Action` , {data : i}).then(function(output){

//       //   setData(output.data)

//       // }).catch(function(error)
//       // {

//       //   console.error(error)
//       // })
//   }

//   const additionalData = {
//     height: "400px",
//     width: "100%",
//     playerVars: {
//         autoplay: 1//Play the video
//     }
//   }

//   return (
//     <div>
        

//         <h2 style={{color: "white", fontSize: "20px", fontWeight: "900"}}>COMEDY MOVIES</h2>
//         { fetchedVideoID && <YouTube videoId={fetchedVideoID} opts={additionalData}/> }
//         <div className='trendingdiv' style={{display: "flex", flexWrap:'wrap', overflowX: "scroll"}}>
//         {
//             Movies.map(function(i,index)
//             {
//                 return (
                     
                    

//                     <div key={index}>

//               <img style={{margin: "6px"}} height="300px" width="250px" src={"https://image.tmdb.org/t/p/original"+i.poster_path} />


//                     <div className='additional'>

//                     <FontAwesomeIcon icon={faPlay} className='play' onClick={function()
//                     {
//                         collectTheMovieName(i.original_title)
//                     }} />
                     
                     


//                     <FontAwesomeIcon icon={i.icon === 'faCheck'? faCheck : faPlus} className='plus'  onClick={function()
//                     {
//                       collectdata(i,index) 
                      
//                     }} />
                   
                    

//                     </div>

                    


//                       </div>
                   
                   

//                 )
//             })

             
            
//         }
//         </div>

       
    
       
//     </div>
    
//   )
// }

// export default Comedy





import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import Server_URL from './data';
import '../App.css';

function Action(props) {
  const [Movies, SetMovies] = useState([]);
  const [fetchedVideoID, setFetchedVideoID] = useState('');

  useEffect(() => {
    Axios.get(`${Server_URL}/Comedy`)
      .then(output => {
        SetMovies(output.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function collectTheMovieName(name) {
    movieTrailer(name)
      .then(output => {
        const myVideoID = new URLSearchParams(new URL(output).search).get('v');
        setFetchedVideoID(myVideoID);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function collectdata(info, index) {
    SetMovies(prevMovies =>
      prevMovies.map((movie, idx) => {
        if (index === idx) {
          Axios.post(`${Server_URL}/add`, { data: { ...movie, index: idx } })
            .then(output => {
              console.log(output.data);
            })
            .catch(error => {
              console.error(error);
            });

          const newIcon = movie.icon === 'faCheck' ? 'faPlus' : 'faCheck';
          return { ...movie, icon: newIcon, index: idx };
        } else {
          return movie;
        }
      })
    );
  }

  const additionalData = {
    height: '400px',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div style={{marginTop:'20px'}} >
      <h2 style={{ color: 'white', fontSize: '20px', fontWeight: '900' }}>COMEDY MOVIES</h2>
      {fetchedVideoID && <YouTube videoId={fetchedVideoID} opts={additionalData} />}
      <div className="trendingdiv">
        {Movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.original_title}
              onClick={() => collectTheMovieName(movie.original_title)}
            />
            <div className="additional">
              <FontAwesomeIcon
                icon={faPlay}
                className="play"
                onClick={() => collectTheMovieName(movie.original_title)}
              />
              <FontAwesomeIcon
                icon={movie.icon === 'faCheck' ? faCheck : faPlus}
                className="plus"
                onClick={() => collectdata(movie, index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Action;
