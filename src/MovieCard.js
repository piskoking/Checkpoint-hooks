import React from 'react';

const MovieCard = ({ movie }) => {

  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt="" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p> {movie.description}</p>
        <p> Rating: {movie.note}</p>
       
      </div>
    </div>
  );
};

export default MovieCard;

