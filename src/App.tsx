import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import CountrySelect from "./country-selection/StateSelect";
import Movies from "./movies/Movies";
import "./App.css";

const App: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  return (
    <Router>
      <Routes>
        {/* Home route with the CountrySelect component */}
        <Route
          path="/"
          element={
            <Home
              onStateSelect={(state) => setSelectedState(state)}
              onCitySelect={(city) => setSelectedCity(city)}
            />
          }
        />
        {/* Movies route */}
        <Route
          path="/movies"
          element={<Movies selectedState={selectedState} selectedCity={selectedCity} />}
        />
      </Routes>
    </Router>
  );
};

// Home component handles the CountrySelect and navigation
const Home: React.FC<{
  onStateSelect: (state: string) => void;
  onCitySelect: (city: string) => void;
}> = ({ onStateSelect, onCitySelect }) => {
  const navigate = useNavigate();
  const [stateName, setStateName] = useState<string | null>(null);
  const [cityName, setCityName] = useState<string | null>(null);

  const handleCountryStateSelect= (state: string) => {
    setStateName(state);
    onStateSelect(state);
    console.log("State selected:", state);

    // Check if both state and city are selected, then navigate
    if (cityName) {
      navigateToMovies(state, cityName);
    }
  };

  const handleCountryCitySelect = (city: string) => {
    setCityName(city);
    onCitySelect(city);
    console.log("City selected:", city);

    // Check if both state and city are selected, then navigate
    if (stateName) {
      navigateToMovies(stateName, city);
    }
  };

  const navigateToMovies = (state: string, city: string) => {
    navigate("/movies", {
      state: { selectedState: state, selectedCity: city },
    });
  };

  return (

    <div className="home">
      <CountrySelect
        onCountryStateSelect={handleCountryStateSelect}
        onCountryCitySelect={handleCountryCitySelect}
      />
    </div>

  );
};

export default App;
