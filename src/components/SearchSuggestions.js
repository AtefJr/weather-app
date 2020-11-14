import React from "react";
import { Link } from "react-router-dom";

export const SearchSuggestions = ({ suggestions, search_item = ""}) => {
    
    let list = suggestions.map((suggestion, index) => {
      let name = suggestion.LocalizedName.substring(search_item.length,);
      
      return (
        <li className="suggestions" key={index}>
          <Link
            to={`/city/${suggestion.Key}/${suggestion.LocalizedName}/${suggestion.Country.ID}`}
          >
            <span style={{ fontWeight: "bold", color: "red" }}>
              {search_item}
            </span>
            {name}, {suggestion.AdministrativeArea.LocalizedName},{" "}
            {suggestion.Country.LocalizedName}
          </Link>
        </li>
      );});
    return(
        <div>
        <ul className="suggestions">
            {list}
        </ul>
        </div>
    );
};
