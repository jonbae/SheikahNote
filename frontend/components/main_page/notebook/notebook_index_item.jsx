import React from "react";
import { Link } from "react-router-dom";
import { setBlurListener } from "../../../util/blur_util";
import NotebookNotesItem from "./notebook_notes_index";

class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
    this.toggleHidden = this.toggleHidden.bind(this);
    this.hidden = this.hidden.bind(this);
    this.blurRef = React.createRef();
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
    const noteCount = this.state.notes ? this.state.notes.length : 0;
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
            <span>{`(${noteCount})`}</span>
          </li>

          {/* bonus: notebook author */}

          {/* updated at */}
          <li>{this.props.notebook.updated_at}</li>

          {/* bonus: shared with  */}

          {/* actions: rename and delete */}
          <li
            onBlur={setBlurListener(this.blurRef, this.hidden)}
            tabIndex="0"
            ref={this.blurRef}
          >
            <img
              src={window.ellipsisURL}
              alt="ellipsis"
              onClick={this.toggleHidden}
              className="img-ellipsis"
            />

            <section
              tabIndex="1"
              className={`dropdown-menu notebooks-action-position ${hiddenClass}`}
            >
              <p
                tabIndex="2"
                onClick={() =>
                  this.props.openModal(
                    "update_notebook",
                    this.props.notebook.id
                  )
                }
              >
                Rename Notebook
              </p>
              <p
                tabIndex="3"
                onClick={() =>
                  this.props.deleteNotebook(this.props.notebook.id)
                }
              >
                Delete Notebook
              </p>
            </section>
          </li>
        </ul>

        {/* <ul className="notebook-notes-index">
  
  
        <NotebookNotesItem />
      </ul> */}
      </>
    );
  }
}

export default NotebookIndexItem;
