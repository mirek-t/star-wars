import React, { useEffect, useState } from "react";
import { endpoint } from "./components/endpoint";

function Search() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(endpoint + "/search/" + query)
      .then((response) => response.json())
      .then((response) => {
        "?";
      })
      .catch((error) => {
        "?";
      });
  }, [query]);

  return (
    <input
      type="search"
      placeholder="Search here"
      value={""}
      onChange={(event) => console.log(event.target.value)}
    />
  );
}

export default Search;
