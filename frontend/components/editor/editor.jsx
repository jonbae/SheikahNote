import React from 'react';
import { Link } from 'react-router-dom';

const Editor = ({ currentUser, logout }) => {
    return (
        <>

            <button className="header-button" onClick={logout}>Log Out</button>

        </>
    )
    
}

export default Editor; 