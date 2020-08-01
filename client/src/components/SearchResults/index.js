import React, { useContext } from "react";
import BookItem from "../../utils/BookItem";
import {Container, CardTitle, Card} from "reactstrap"
import API from "../../utils/API"
import bookItem from "../../utils/BookItem";



function SearchResults() {
  const {title, Author, url} = useContext(BookItem);
  console.log(bookItem)
  return (
    <Container>
      <ul className="list-group search-results">
        <li className="list-group-item">
          <h2>{title}</h2>
          <h2>{Author}</h2>
          <a href={url}>{url}</a>
        </li>
      </ul>
    </Container>
  );
}
export default SearchResults;
