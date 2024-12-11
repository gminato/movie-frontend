import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useAppContext} from "../context/AppContextProps";

const Movies = () => {
  const navigate = useNavigate();
  const [moviesList,setMoviesList] = useState<any>([]);
  const  {selectedCity , selectedState } = useAppContext();

  useEffect(() => {
    if(!selectedState || !selectedCity) {navigate("/"); }
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

  const posterUrl = "https://gminato-moviedb.s3.amazonaws.com/movie-images/52596522-65af-4e22-b291-6ccb43e61c1b-Pushpa-2.avif";

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
          posterUrl={posterUrl}
          trailerUrl={movie.trailerUrl} 
          id={movie.id}        
          />

      )) 
    ) : (<div></div>) } 
    </div>

  );
};

export default Movies;
