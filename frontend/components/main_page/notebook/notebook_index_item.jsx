import React from "react";
import { Link } from "react-router-dom";
import { setBlurListener } from "../../../util/blur_util";
import NotebookNotesItem from "./notebook_notes_index";
import { selectNotebookNotes } from "../../../reducers/selectors";

class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
      // noteCount: selectNotebookNotes(state, notebook.id)
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

  renderLinkOrLi() {
    const noteCount = this.props.noteIds.length;
    const noteIds = this.props.noteIds;
    if (noteIds.length !== 0 && noteIds !== undefined) {
      debugger;
      return (
        <Link
          to={`/app/notebooks/${this.props.notebook.id}/notes/${
            noteIds[noteIds.length - 1]
          }`}
        >
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
        </Link>
      );
    } else {
      return (
        <div>
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
        </div>
      );
    }
  }

  render() {
    const hiddenClass = this.state.isHidden ? "hidden-dropdown" : "";
    // let { notebook } = this.props.notebook;
    // debugger;
    const noteCount = this.props.notebook.noteIds.length;
    return (
      <>
        <ul className="notebooks-index-item">
          {this.renderLinkOrLi()}

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
