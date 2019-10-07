import React from "react";
import { Link } from "react-router-dom";
import NotebookNotesItem from "./notebook_notes_index";

const NotebookIndexItem = ({ notebook }) => (
  <>
    <ul className="notebooks-index-item">
      <li>
        {/* drop down arrow */}
        <img
          className="black-filled-carat"
          src={window.blackFilledSideCaratURL}
          alt="black filled side carat"
        />
        {/* notebook icon */}
        <img
          className="black-notebook"
          src={window.blackNotebookURL}
          alt="black notebook"
        />
        {/* notebook title  */}
        <span>{notebook.title}</span>

        {/* number of notes  */}
        <span>(1)</span>
      </li>

      {/* bonus: notebook author */}

      {/* updated at */}
      <li>{notebook.updated_at}</li>

      {/* bonus: shared with  */}

      {/* actions: rename and delete */}
      <li>
        <img src={window.ellipsisURL} alt="ellipsis" />
      </li>
    </ul>

    {/* <ul className="notebook-notes-index">


      <NotebookNotesItem />
    </ul> */}
  </>
);

export default NotebookIndexItem;
