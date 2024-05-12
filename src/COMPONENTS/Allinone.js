import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import Server_URL from './data';
import '../App.css';
import { useParams } from 'react-router-dom';

function AllinOne(props) {


  const {endpoint} = useParams()

  console.log(endpoint)

  const [Movies, SetMovies] = useState([]);
  const [fetchedVideoID, setFetchedVideoID] = useState('');

  useEffect(() => {
    Axios.get(`${Server_URL}/${endpoint}`)
      .then(output => {
 
        console.log(output)
        SetMovies(output.data.results);
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
    <div style={{marginTop:'20px'}}  >
      <h2 style={{ color: 'white', fontSize: '20px', fontWeight: '900' }}>MOVIES</h2>
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

export default AllinOne;
