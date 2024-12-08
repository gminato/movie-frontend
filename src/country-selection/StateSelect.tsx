import React, { useEffect, useState } from "react";
import './state-select.css';

interface CountrySelectProps {
  onSelect: (country: string) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ onSelect }) => {
  const [countryStates, setCountriesStates] = useState<
    { name: string; code: string }[]
  >([]);

  useEffect(() => {
    // Simulate API call to fetch countries
    const fetchCountries = async () => {
      setCountriesStates([
        { name: "India", code: "IN" },
        { name: "United States", code: "US" },
        { name: "Canada", code: "CA" },
      ]);
    };

    fetchCountries();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = event.target.value;
    if (selectedCountry) {
      onSelect(selectedCountry);
    }
  };

  return (
    <div className="country-select" >
      <div className="select-option">
      <label htmlFor="country-select">Select a state:</label>
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>
          -- Select a State--
        </option>
        {countryStates.map((state) => (
          <option key={state.code} value={state.name}>
            {state.name} ({state.code})
          </option>
        ))}
      </select>
      </div>

    </div>
  );
};

export default CountrySelect;
