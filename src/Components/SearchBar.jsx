import { Form } from "react-bootstrap";
import {useState} from "react"

const SearchBar = ({input, updateInput}) => {
   console.log("input", input)
  
    return (
      <Form.Control 
      input={input}
      onChange={updateInput}
      />
    );
  }
  
  export default SearchBar