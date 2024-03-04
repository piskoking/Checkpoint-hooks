import React from 'react';
import MovieCard from './MovieCard';  



const MovieList = ({ movies }) => {
  // Vérifier si movies est défini et est un tableau
  if (!movies || !Array.isArray(movies)) {
    // Gérer le cas où movies n'est pas défini ou n'est pas un tableau
    return <div>Aucun film disponible</div>;
  }

  return (
    <div className="movie-list">
      {MovieCard.map((movie) => (
        <MovieCard key={movie.title} movie={movie}/>
      ))}
    </div>
  );
};



      export default MovieList;
