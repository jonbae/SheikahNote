import React from "react";
import { Link } from "react-router-dom";

import NotebookNotesItem from "./notebook_notes_index";

class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
    this.toggleHidden = this.toggleHidden.bind(this);
    this.hidden = this.hidden.bind(this);
  }

  toggleHidden() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  hidden() {
    this.setState({ isHidden: true });
  }

  render() {
    const hiddenClass = this.state.isHidden ? "hidden-dropdown" : "";
    // let { notebook } = this.props.notebook;
    return (
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
            <span>{this.props.notebook.title}</span>

            {/* number of notes  */}
            <span>(1)</span>
          </li>

          {/* bonus: notebook author */}

          {/* updated at */}
          <li>{this.props.notebook.updated_at}</li>

          {/* bonus: shared with  */}

          {/* actions: rename and delete */}
          <li>
            <img
              onBlur={this.hidden}
              tabIndex="0"
              src={window.ellipsisURL}
              alt="ellipsis"
              onClick={this.toggleHidden}
              className="img-ellipsis"
            />
          </li>
        </ul>

        <section
          className={`dropdown-menu notebooks-action-position ${hiddenClass}`}
        >
          <p>Rename Notebook</p>
          <p onClick={this.props.deleteNotebook}>Delete Notebook</p>
        </section>

        {/* <ul className="notebook-notes-index">
  
  
        <NotebookNotesItem />
      </ul> */}
      </>
    );
  }
}

export default NotebookIndexItem;
