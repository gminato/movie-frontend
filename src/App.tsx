import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import CountrySelect from "./country-selection/StateSelect";
import Movies from "./movies/Movies";
import "./App.css";

const App: React.FC = () => {
  const [selectedState,setSelectedState] = useState<string | null>(null);

  return (
    <Router>
      <Routes>
        {/* Home route with the CountrySelect component */}
        <Route
          path="/"
          element={
            <Home
              onStateSelect={(country) =>setSelectedState(country)}
            />
          }
        />
        {/* Movies route */}
        <Route
          path="/movies"
          element={<Movies selectedState={selectedState} />}
        />
      </Routes>
    </Router>
  );
};

// Home component handles the CountrySelect and navigation
const Home: React.FC<{ onStateSelect : (country: string) => void }> = ({ onStateSelect}) => {
  const navigate = useNavigate();

  const handleCountrySelect = (stateName: string) => {
    onStateSelect(stateName);
    console.log(stateName);
    navigate("/movies",{state:{selectedState:stateName}}); 
  };

  return (
    <div className="home">
      <CountrySelect onSelect={handleCountrySelect} />
    </div>
  );
};

export default App;
