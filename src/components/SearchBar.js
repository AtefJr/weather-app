import React, { useState, useEffect } from "react";
import axios from "axios";
import { SearchSuggestions } from "./SearchSuggestions.js";
import { useDebounce } from "./Debouncer.js";
import { apikey } from "../index.js";
import { Link } from "react-router-dom";


export const SearchBar = () => {
  const [searchResult, setsearchResult] = useState([]);
  const [query, setQuery] = useState("");
  const debouncedSearchTerm = useDebounce(query, 800);
  
  const onInputChange = (input) => {
    setQuery(input);
  };

  

  useEffect(
    () => {
      if (debouncedSearchTerm.length) {
        axios
          .get(
            `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${debouncedSearchTerm}`
          )
          .then((response) => {
            setsearchResult(response.data);
          });
      } else {
        setsearchResult([]);
      }
    },
    [debouncedSearchTerm]
  );

  let city = localStorage.getItem("city");
  let name = localStorage.getItem("name");
  let country = localStorage.getItem("country");

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for a City"
          onChange={(e) => onInputChange(e.target.value)}
        />{" "}
      </form>
      <br></br>
      {(city === null) ? "": (<Link className="last-searched" to={`/city/${city}/${name}/${country}`}>Last searched city: {name}, {country}</Link>)}
      <br></br>
      <br></br>
      <SearchSuggestions
        suggestions={searchResult}
        search_item={query}
      ></SearchSuggestions>
    </div>
  );
};
