import React from "react";
import { Link } from "react-router-dom";
import { sortNotesByLastUpdate } from "../../../util/notes_util";

class NoteShowHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
    this.handleFullscreen = this.handleFullscreen.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.hidden = this.hidden.bind(this);
    this.deleteNoteThenHideDropdownThenShowNextNote = this.deleteNoteThenHideDropdownThenShowNextNote.bind(
      this
    );
  }

  handleFullscreen() {
    // console.log("fullscreen");
    //  
    // this.props.toggleFullScreen();
  }

  toggleHidden() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  hidden() {
    //  
    this.setState({ isHidden: true });
  }

  deleteNoteThenHideDropdownThenShowNextNote(id) {
    this.props.deleteNote(id).then(
      this.hidden()
    ).then(res => {
      let sortedNotes = sortNotesByLastUpdate(this.props.notes);
      let path = this.props.location.pathname
      let notebookId = parseInt(this.props.match.params.notebookId)
      let pathWithoutNoteId = path.split('/').slice(0,-1)
      const hasNotebooksPath = (pathWithoutNoteId.find(ele => ele === 'notebooks'))
      if(hasNotebooksPath){
        sortedNotes = sortedNotes.filter( sortedNote => {
          return sortedNote.notebookId === notebookId
        })
      }
      pathWithoutNoteId = pathWithoutNoteId.join('/')
      this.props.history.push(`${pathWithoutNoteId}/${sortedNotes[0].id}`)
    })
  }
  render() {
    const hiddenClass = this.state.isHidden ? "hidden-dropdown" : "";

    if (!this.props.notebook) {
      return null;
    }
    return (
      <header className="note-nav">
        <div className="note-nav-left">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            // class="aSj7GAjpRHxXJ-uUqPeBk"
            onClick={this.handleFullscreen}
            height={24}
            width={24}
          >
            <path // fill-rule="evenodd"
            d="M6.031 3a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-11zm4.47 4.289H8.184l2.915 2.914a.625.625 0 0 1-.884.884L7.3 8.172v2.319a.625.625 0 1 1-1.25 0V6.674c0-.351.285-.635.635-.635h3.818a.625.625 0 0 1 0 1.25zM12.6 15.76h2.318l-2.915-2.915a.625.625 0 1 1 .884-.884l2.915 2.915V12.56a.625.625 0 0 1 1.25 0v3.817c0 .35-.285.635-.635.635H12.6a.625.625 0 1 1 0-1.25z" />
          </svg>
          {/* <button className="note-fullscreen" onClick={this.handleFullscreen}>
                fullscreen
              </button> */}

          <Link
            className="note-show-notebook-title"
            to={`/app/notebooks/${this.props.notebook.id}`}
          >
            {this.props.notebook.title}
          </Link>
        </div>
        <div className="note-nav-right">
          <img
            src={window.ellipsisURL}
            alt="ellipsis"
            className="note-nav-ellipsis"
            onClick={this.toggleHidden}
            onBlur={this.hidden}
          />

          <section
            className={`dropdown-menu notes-action-position ${hiddenClass}`}
          >
            <p
              onClick={() =>
                this.deleteNoteThenHideDropdownThenShowNextNote(this.props.note.id)}
            >
              Delete Note
            </p>
          </section>
        </div>
      </header>
    );
  }
}

export default NoteShowHeader;
