import React, { useEffect, useState } from "react";
import "./state-select.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CountrySelectProps {
  onCountryStateSelect: (country: string) => void;
  onCountryCitySelect: (city: string) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ onCountryStateSelect , onCountryCitySelect}) => {
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

  const handleCountryStateChange = (event: string) => {
    console.log(event);
    onCountryStateSelect(event);
  };

  const handleCityNameChange = (event: string) => {
    console.log(event);
    onCountryCitySelect(event);
  }

  return (
    <div className="card-container">
      <Card className="">
        <CardHeader>
        <CardTitle className="text-2xl">Select State and city</CardTitle>
        </CardHeader>
        <CardContent>
          <Select onValueChange={handleCountryStateChange}>
            <SelectTrigger className="w-[300px] m-5">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>State</SelectLabel>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="data">Grapes</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select onValueChange={handleCityNameChange}>
            <SelectTrigger className="w-[300px] m-5">
              <SelectValue placeholder="select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>City</SelectLabel>
                <SelectItem value="pineapple">Pineapple</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>


        </CardContent>
      </Card>
    </div>
  );
};

export default CountrySelect;
