import React from "react";
import { Form, Input } from "reactstrap";

const SearchForm = (props) => {
  return (
    <Form>
      <Input value={props.search} onChange={props.handleInputChange} type="text" id="term" placeholder="Search Google books!" bsSize="lg" />
    </Form>
  );
};

export default SearchForm;
