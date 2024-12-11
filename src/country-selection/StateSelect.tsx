import React, { useContext, useEffect, useState } from "react";
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

import { useAppContext } from "@/context/AppContextProps";
import { useNavigate } from "react-router-dom";



const CountrySelect = () => {

  const { selectedCity,selectedState, setSelectedCity, setSelectedState } = useAppContext();
  const navigate = useNavigate();

  const handleCountryStateChange = (event: string) => {
    setSelectedState(event);
    if(selectedCity) {
      navigateToMoviesPage();
    }
  };

  const handleCityNameChange = (event: string) => {
    setSelectedCity(event);
    if(selectedState) {
      navigateToMoviesPage();
    }
  }

  const navigateToMoviesPage = () => {
    navigate("/movies");
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
