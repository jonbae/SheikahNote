import React from "react";
import { Link } from "react-router-dom";

const NotebookDropdownItem = ({ notebook }) => (
  <Link to={`/app/notebooks/${notebook.id}`}>
    <img src={window.smallWhiteNotebookURL} alt="small white notebook" />
    <p>{notebook.title}</p>
  </Link>

  // <li>
  //   <img src={window.smallWhiteNotebookURL} alt="small white notebook" />
  //   <p>{notebook.title}</p>
  // </li>
);

export default NotebookDropdownItem;
