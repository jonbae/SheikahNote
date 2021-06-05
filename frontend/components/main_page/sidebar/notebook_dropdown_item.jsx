import React from "react";
import { Link } from "react-router-dom";
import { sortNotesByLastUpdate } from "../../../util/notes_util";

class NotebookDropdownItem extends React.Component {
  
  constructor(props){
    super(props);
  }

  render(){

    // if(notebook) {
    const notes = this.props.notebook.notes; 
    let sortedNotes = sortNotesByLastUpdate(notes); 
    
    return (
      
      <Link to={`/app/notebooks/${this.props.notebook.id}/notes/${sortedNotes[0].id}`}>
        <img src={window.smallWhiteNotebookURL} alt="small white notebook" />
        <p>{this.props.notebook.title}</p>
      </Link>

    )
  }
  // }
// <li>
//   <img src={window.smallWhiteNotebookURL} alt="small white notebook" />
//   <p>{notebook.title}</p>
// </li>
// );
}

export default NotebookDropdownItem;
