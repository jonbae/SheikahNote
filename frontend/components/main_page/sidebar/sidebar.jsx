import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ currentUser, logout}) => {
    return (
        <nav className="sidebar-frame">

            <button className="header-button" onClick={logout}>Log Out</button>

            {/* profile pic  */}
            <img src={window.defaultUserURL} alt="default user"/>
            {/* current user email */}
            <p> {currentUser.email} </p>
            {/* bonus: search bar  */}

            {/* create note button  */}
            <button> Create new note </button>
            {/* all notes  */}
            {/* <Link></Link> */}
            {/* notebooks dropdown */}

            {/* bonus: shared with me  */}

            {/* tags */}

            {/* trash */}

            {/* upgrade  */}
        </nav>
    )
}
export default Sidebar; 