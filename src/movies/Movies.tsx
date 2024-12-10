import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

interface MoviesProps {
  selectedState: string | null;
  selectedCity: string | null;
}

const Movies: React.FC<MoviesProps> = ({ selectedState, selectedCity }) => {
  const navigate = useNavigate();
  const [moviesList,setMoviesList] = useState<any>([]);

  useEffect(() => {
    const url = "http://localhost:8080/api/movies/all";
    const fetchMovies = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setMoviesList(data);
    }
    fetchMovies();
  }, [selectedCity, selectedState]);

  const handleBack = () => {
    navigate("/"); // Navigate back to the home route
  };

  return (
    <div className="m-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
    {moviesList.length > 0 ? (
      moviesList.map((movie: any) => (
        <MovieCard 
          key={movie.id}
          title={movie.title}
          description={movie.description}
          genres={movie.genres}
          duration={movie.duration}
          rating={movie.rating}
          releaseDate={movie.releaseDate}
          posterUrl={movie.posterUrl}
          trailerUrl={movie.trailerUrl} 
          id={movie.id}        
          />

      )) 
    ) : (<div></div>) } 
    </div>

  );
};

export default Movies;
