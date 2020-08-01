import React, { useContext } from "react";
import { Container, CardTitle, Card, Button } from "reactstrap";

function SearchResults(props) {
  const { title, authors, url } = props.data;

  return (
    <Container>
      <ul className="list-group search-results">
        <li className="list-group-item">
          <h2>{title}</h2>
          <h2>{authors}</h2>
          <a href={url}>{url}</a>
          {/* post props.data */}
          <Button />
        </li>
      </ul>
    </Container>
  );
}
export default SearchResults;
