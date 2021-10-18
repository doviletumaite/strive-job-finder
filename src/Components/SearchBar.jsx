import { Form } from "react-bootstrap";
import {useState} from "react"

const SearchBar = ({input}) => {
   console.log("input", input)
  
    return (
      <Form.Control 
      input={input}
      />
    );
  }
  
  export default SearchBar