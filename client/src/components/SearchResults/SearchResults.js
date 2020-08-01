import React, { useContext } from "react";
import BookInfo from "../../utils/BookItem";

function SearchResults() {
  const { Title, Author, url } = useContext(BookInfo);
  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>{Title}</h2>
        <h2>{Author}</h2>
        <a href={url}>{url}</a>
      </li>
    </ul>
  );
}
export default SearchResults;
