import React, { useContext } from "react";
import { Container, Button, Media } from "reactstrap";
import API from "../../utils/API";

function SearchResults(props) {
  const { title, authors, previewLink, imageLinks } = props.data;

  const handleSave = () => {
    console.log("Click this");
    API.postSaved({
      title: title,
      authors: authors[0],
      previewLink: previewLink,
      imageLinks: imageLinks,
    }).then((res) => {
      alert("Saved");
    });
  };
  return (
    <Container>
      <ul className="list-group search-results">
        <li className="list-group-item">
          <h2>{title}</h2>
          <h2>{authors}</h2>
          <Media left href={previewLink}>
            <Media
              object
              data-src={imageLinks.smallthumbnail}
              alt="Thumbnail"
            />
          </Media>

          {/* post props.data */}
          <Button
            style={{ position: "absolute", right: 0 }}
            onClick={() => handleSave()}
          >
            Click here to save
          </Button>
        </li>
      </ul>
    </Container>
  );
}
export default SearchResults;
