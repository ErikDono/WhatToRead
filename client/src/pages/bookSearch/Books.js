import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchResults from "../../components/SearchResults/SearchResults"
import BookItem from "../../utils/BookItem";
import { Container } from "reactstrap";

import API from "../../utils/API";

function Search() {
  const [bookState, setBookState] = useState({
    Title: "",
    Author: "",
    url: "",
  });
  const [search, setSearch] = useState("GoogleBooks");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "What to read...";

    if (!search) {
      return;
    }
    API.getBooks(search).then(
      (res) => {
        console.log(res);
      },
      [search]
    );

    const handleInputChange = (event) => {
      setSearch(event.target.value);
    };
    const handleFormSubmit = (event) => {
      event.preventDefault();
    };

    return (
      <BookItem.Provider value={bookState}>
        <div>
          <Container>
            <SearchForm
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
              results={search}
            />
            <SearchResults />
          </Container>
        </div>
      </BookItem.Provider>
    );
  });
}

export default Search;
