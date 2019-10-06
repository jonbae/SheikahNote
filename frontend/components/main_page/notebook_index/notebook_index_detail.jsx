import React from 'react' ; 
import { Link } from 'react-router-dom' ; 


const NotebookIndexItem = ({notebook}) => (
    <li className="notebook-index-item">
        {/* drop down arrow */}

        {/* notebook icon */}

        {/* notebook title  */}
        <span>{notebook.title}</span>

        {/* bonus: notebook author */}


        {/* updated at */}
        <span>{notebook.updated_at}</span>
        
        {/* bonus: shared with  */}

        {/* actions: rename and delete */}

    </li>
)

export default NotebookIndexItem;