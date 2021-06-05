import React from "react";
import { Link } from "react-router-dom";
import { sortNotesByLastUpdate } from "../../../util/notes_util";

class NotebookDropdownItem extends React.Component {
  
  constructor(props){
    super(props);
  }

  render(){

    if(this.props.notebook) {
      const notes = this.props.notebook.notes; 
      let sortedNotes = sortNotesByLastUpdate(notes); 

    return (

      sortedNotes.length === 0 ? 
      

    (
      <li>
        <img src={window.smallWhiteNotebookURL} alt="small white notebook" />
        <p>{this.props.notebook.title}</p>
      </li>
    ) :
    (
        
      <Link to={`/app/notebooks/${this.props.notebook.id}/notes/${sortedNotes[0].id}`}>
      <img src={window.smallWhiteNotebookURL} alt="small white notebook" />
      <p>{this.props.notebook.title}</p>
    </Link>

  ) 
    )
    }
  }

}

export default NotebookDropdownItem;
