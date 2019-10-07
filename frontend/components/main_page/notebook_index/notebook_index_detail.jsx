import React from "react";
import { Link } from "react-router-dom";

const NotebookIndexItem = ({ notebook }) => (
  <ul className="notebooks-index-item">
    {/* drop down arrow */}

    {/* notebook icon */}

    {/* notebook title  */}
    <li>{notebook.title}</li>

    {/* bonus: notebook author */}

    {/* updated at */}
    <li>{notebook.updated_at}</li>

    {/* bonus: shared with  */}

    {/* actions: rename and delete */}
    <li>
      <img src={window.ellipsisURL} alt="ellipsis" />
    </li>
  </ul>
);

export default NotebookIndexItem;
