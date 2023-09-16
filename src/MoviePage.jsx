import React from "react";
import SideBar from "./SideBar";
import Playlist from "./Playlist.png";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";

const MoviePage = ({ moviess, visible, toggleHomepage, toggleMoviePage, selectedMovieId }) => {
  
  const movie = moviess?.find(m => m.id === selectedMovieId);
  console.log(movie);


  const handleLogoutClick = () => { //Logout click to be passed to sidebar
    toggleHomepage(); // Toggle the homepage visibility
    toggleMoviePage(); // Toggle the moviePageMain visibility
  };



  
  return (
    <div className={`moviePageMain ${visible ? 'visible' : ''}`}>
      <SideBar  logoutClick={handleLogoutClick} />

      <div className="moviePage">
        <div className="moviePoster">
          <img className="moviePosterImg" src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="" />
        </div>

        <div className="detailhead"></div>
      </div>
      <div className="movieinfo">
        <div className="movierow1">
          <p className="title">
            {movie?.title} &nbsp; • &nbsp; {movie?.release_date.slice(0, 4)} &nbsp; • &nbsp; PG-13 &nbsp;
            • &nbsp; 2h 10m
            <span className="genre">Action</span>
            <span className="genre">Drama</span>
            <span className="review">
              ⭐ <span className="rating">{movie?.vote_average}</span> | 350k
            </span>
          </p>
          <p className="overview">
            {movie?.overview}
          </p>
          <p>
            Director : <span className="name">Joseph Kosinski</span>
          </p>
          <p>
            Writers :
            <span className="name"> Jim Cash, Jack Epps Jr, Peter Craig</span>
          </p>
          <p>
            Stars :
            <span className="name">
              Tom Cruise, Jennifer Connelly, Miles Teller
            </span>
          </p>

          <div className="awards">
            <button>Top rated movie #65</button>
            <span className="nomi">Awards 9 nominations</span>
          </div>
        </div>

        <div className="movierow2">
          <button className="more ">
            <box-icon name="receipt" color="white"></box-icon>
            <span className="text">See Showtimes</span>
          </button>

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
