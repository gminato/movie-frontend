import React from "react";
import { useNavigate } from "react-router-dom";

interface MoviesProps {
  selectedState: string | null;
  selectedCity: string | null;
}

const Movies: React.FC<MoviesProps> = ({ selectedState, selectedCity }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Navigate back to the home route
  };

  return (
    <div>
      <h1>Welcome!</h1>
      {selectedState ? (
        <p>You selected state: {selectedState}</p>
      ) : (
        <p>No state selected.</p>
      )}
      {selectedCity ? (
        <p>You selected city: {selectedCity}</p>
      ) : (
        <p>No city selected.</p>
      )}
      <button onClick={handleBack}>Back to Selection</button>
    </div>
  );
};

export default Movies;
