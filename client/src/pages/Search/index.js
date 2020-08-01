import React, { useState, useEffect } from "react";
import {Container} from "reactstrap"
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";

import BookItem from "../../utils/BookItem";
import API from "../../utils/API";

function Search() {
  const [bookState,setBookState] =useState([])
  const [formObject, setFormObject] = useState({
    title: "",
    Author:"",
    url: ""
  });

  const [search, setSearch] = useState("Moby Dick");
  const [error, setError] = useState("");

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "Google Searcher";

    if (!search) {
      return;
    }

    API.getBooks(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data.items[1].volumeInfo);
        setBookState({
          title: res.data.items[1].volumeInfo.title,
          Author: res.data.items[1].volumeInfo.authors,
          url: res.data.items[1].volumeInfo.infoLink,
        });
      })
      .catch(err => setError(err));
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };
  return (
    <BookItem.Provider value={bookState}>
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Search Google Books for something to read</h1>
          
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
}

export default Search;
