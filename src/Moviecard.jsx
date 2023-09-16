import React from "react";

const Moviecard = ({key, movie, genreMap, toggleHomepage, toggleMoviePage, onMovieCardClick}) => {
    const handleClick = () => {
        toggleHomepage(); // Call the function to toggle the homepage visibility
        toggleMoviePage(); // Call the function to toggle the moviepage visibility
    };

    return (
        <div className="movie-card" data-testid="movie-card" onClick={() => {
            onMovieCardClick(movie.id);
            handleClick();
        }}>
            <div className="poster" data-testid="movie-poster">
                <img className="poster-img" 
                    src={movie.poster_path == null ? "https://fakeimg.pl/400x400?text=No+Image" : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}     
                />
                <div className="poster-tags">
                    {/* <div className="tv-series">
                    <b className="conditions-of-use">TV SERIES</b>
                    </div> */}
                    <img className="favorite-icon" alt="" src="/undefined8.png" />
                </div>
            </div>
            <p className="movie-card-details" data-testid="movie-release-date">USA, {movie.release_date.slice(0, 4)}</p>
            <p className="movie-card-title" data-testid="movie-title">{movie.title}</p>
            <div className="movie-card-ratings">
                <div className="imdb">
                    <img
                    className="imdb-icon"
                    alt=""
                    src="/undefined3.png"
                    />
                    <div className="imdb-rating">86.0 / 100</div>
                </div>
                <div className="rotten-tomatoes">
                    <img
                    className="rotten-tomatoes-icon"
                    alt=""
                    src="/undefined4.png"
                    />
                    <div className="rotten-tomatoes-rating">97%</div>
                </div>
            </div>
            <p className="genre">{movie.genre_ids.map((genreID) => (
                genreMap[genreID]
            )).join(', ')}</p>
      </div>
    )
}

export default Moviecard;