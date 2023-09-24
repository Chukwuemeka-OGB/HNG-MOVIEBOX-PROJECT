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

 

  return (
    <div className={`moviePageMain ${visible ? 'visible' : ''}`}>

      <div className="moviePage">
        <div className="back-btn" onClick={handleLogoutClick}>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"></path></svg>
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
              ⭐ <span className="rating">{movie?.vote_average}</span> | {movie?.vote_count > 1000 ? `${(movie?.vote_count / 1000).toFixed(0)}k`
  : movie?.vote_count}
            </span>
          </p>
          <p className="overview">
            {movie?.overview}
          </p>
         


        </div>

        <div className="movierow2">
          <button className="more1 ">
            <box-icon name="list-ul"></box-icon>
            <span className="text">More watch options</span>
          </button>

          <div className="playlist">
            <img src={Playlist} alt="playlist" />
          </div>

          <div className="monthbest">
            <p>The Best Movies and Shows in September</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
