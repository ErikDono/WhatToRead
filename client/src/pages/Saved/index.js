import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container, Jumbotron } from "reactstrap"
import API from "../../utils/API"


function Saved(props) {
  const [book, setBook] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  
  useEffect((props) => {
    API.getSaved(props)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              {} 
            </h1>
          </Jumbotron>
        </Col>
      </Row>


    </Container>
  );
}

export default Saved;
