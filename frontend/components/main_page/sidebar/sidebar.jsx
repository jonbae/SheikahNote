import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ currentUser, logout }) => {
  return (
    <nav className="sidebar-frame">
      <li className="sidebar-header">
        {/* profile pic  */}
        <img
          src={window.defaultUserURL}
          alt="default user"
          className="avatar"
        />
        {/* current user email */}
        <p className="sidebar-header-email"> {currentUser.email} </p>
      </li>

      {/* bonus: search bar  */}

      {/* create note button  */}
      <button className="create-new-note">
        <img src={window.whitePlusURL} alt="white_plus" />
        <p className="create-new-note-text">Create new note</p>
      </button>
      {/* all notes  */}
      <ul className="sidebar-links">
        {/* to="/app/notes" */}
        <li>
          <img src={window.allNotesURL} alt="all notes" />
          <Link to="/app/notebooks"> All Notes </Link>
        </li>
        {/* notebooks dropdown */}
        <li className="notebook-dropdown">
          {/* svg icon */}
          <img
            className="filled-side-carat"
            src={window.filledSideCaratURL}
            alt="filled side carat"
          />
          <img src={window.notebookURL} alt="notebook icon" />
          <p>Notebooks</p>
          <ul></ul>
        </li>
        {/* bonus: shared with me  */}

        {/* tags */}
        {/* to="/app/tags" */}
        <li>
          <img src={window.tagsURL} alt="tags" />
          <Link to="/app/notebooks">Tags</Link>
        </li>
        {/* trash */}

        {/* upgrade  */}
      </ul>

      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </nav>
  );
};
export default Sidebar;
