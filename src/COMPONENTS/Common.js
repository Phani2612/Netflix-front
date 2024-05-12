import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCediSign, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Server_URL from './data';
import '../Register.css'
import '../App.css';

function Common(props) {
  const [Movies, setMovies] = useState([]);
  const [fetchedVideoID, setFetchedVideoID] = useState('');

  useEffect(() => {
    Axios.get(props.URL)
      .then(output => {
        console.log("Output from props",output)
        setMovies(output.data.results);
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
    setMovies(prevMovies =>
      prevMovies.map((movie, idx) => {
        const newIcon = movie.icon === 'faCheck' ? 'faPlus' : 'faCheck';
        const latestIcon = movie.icons === 'faPlay' ? 'faPause' : 'faPause';

        const added = 0

        if (index === idx) {
          

          return { ...movie, icon: newIcon,  icons: latestIcon , added : true };
        } else {
          return movie;
        }
      })
    );
  }


  function Addtolist(Info)
  {
    Axios.post(`${Server_URL}/add`,Info).then(function(output)
  {
      console.log(output)
  }).catch(function(error)
  {
      console.error(error)
  })
  }

  const additionalData = {
    height: '400px',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  console.log(Movies)

  return (
    <div className='HomePage' >
      <h2 className="section-title">{props.name}</h2>
      {fetchedVideoID && <YouTube videoId={fetchedVideoID} opts={additionalData} />}
      <div className="movie-list">
        {Movies.map((movie, index) => (
          <div key={index} className="movie-card-home">
            <img
              className="movie-poster"
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
              onClick={function()
                {
                  collectdata(movie, index) 
                  Addtolist(movie)
                }
              }
            />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Common;
