import React from "react";

import Playlist from "./Playlist.png";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";

const MoviePage = ({ moviess, genreMap, visible, toggleHomepage, toggleMoviePage, selectedMovieId }) => {
  
  const movie = moviess?.find(m => m.id === selectedMovieId);
  console.log(movie);


  const handleLogoutClick = () => { //Logout click to be passed to sidebar
    toggleHomepage(); // Toggle the homepage visibility
    toggleMoviePage(); // Toggle the moviePageMain visibility
  };


  //For other movies section
  const otherMovies = moviess?.filter( m => m.id !== selectedMovieId);
  const randomIndex = Math.floor(Math.random() * 10);
 

  return (
    <div className={`moviePageMain ${visible ? 'visible' : ''}`}>

      <div className="moviePage">
        <div className="back-btn" onClick={handleLogoutClick}>
        <svg stroke="currentColor" fill="currentColor" stroke-width=".5" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.928 21c-.801 0-1.555-.312-2.121-.879l-7.121-7.121 7.121-7.121c1.133-1.134 3.109-1.134 4.242 0 .566.564.879 1.317.879 2.119 0 .746-.27 1.451-.764 2.002h4.836c1.654 0 3 1.346 3 3s-1.346 3-3 3h-4.836c.493.549.764 1.252.764 1.998.002.802-.312 1.557-.879 2.124-.567.566-1.32.878-2.121.878zm-6.414-8l5.707 5.707c.379.378 1.035.378 1.414 0 .189-.189.293-.441.293-.708s-.104-.517-.291-.705l-3.295-3.294h9.658c.552 0 1-.449 1-1s-.448-1-1-1h-9.658l3.293-3.293c.189-.189.293-.441.293-.708s-.104-.517-.292-.705c-.381-.38-1.036-.379-1.415-.001l-5.707 5.707z"></path></svg>
        </div>
        <div className="moviePoster">
          <img className="moviePosterImg" src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt="" />
        </div>

        <div className="detailhead"></div>
      </div>
      <div className="movieinfo">
        <div className="movierow1">
          <p className="title">
            {movie?.title} &nbsp; • &nbsp; {movie?.release_date.slice(0, 4)} &nbsp; •
   
            <span className="genre">{movie?.genre_ids.map((genreID) => (
                genreMap[genreID]
            )).join(', ')}</span>  &nbsp; • 
            <span className="review">
              ⭐ <span className="rating">{movie?.vote_average}</span> | {movie?.vote_count > 1000 ? `${(movie?.vote_count / 1000).toFixed(0)}k` : movie?.vote_count}
            </span>
          </p>
          <p className="overview">
            {movie?.overview}
          </p>
         


        </div>
       {console.log(movie?.poster_path)}
        <div className="movierow2">
          <button className="more1 ">
            <span className="text">More watch options</span>
          </button>

          <div className="playlist">
            {/* <img src={Playlist} alt="playlist" /> */}
            <div className="playlist-img-cont">
              <img src={`https://image.tmdb.org/t/p/w500/${otherMovies[randomIndex + 1]?.poster_path}`} alt="other-movies" />
            </div>
            <div className="playlist-img-cont">
              <img src={`https://image.tmdb.org/t/p/w500/${otherMovies[randomIndex + 2]?.poster_path}`} alt="other-movies" />
            </div>
            <div className="playlist-img-cont">
              <img src={`https://image.tmdb.org/t/p/w500/${otherMovies[randomIndex + 3]?.poster_path}`} alt="other-movies" />
            </div>
          </div>

          <div className="monthbest">
            <p>The Best Movies and Shows in {new Date().toLocaleString('default', { month: 'long' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
