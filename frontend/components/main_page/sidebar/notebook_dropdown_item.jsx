import React from "react";
import { Link } from "react-router-dom";

const NotebookDropdownItem = ({ notebook }) => (
  <li>
    <img src={window.smallWhiteNotebookURL} alt="small white notebook" />
    <p>{notebook.title}</p>
  </li>
);

export default NotebookDropdownItem;
