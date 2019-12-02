import React from "react";
import { sortNotesByLastUpdate } from "../../../util/notes_util";
import { Redirect } from "react-router-dom";

import NoteIndexItem from "./note_index_item";
class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestAllNotebooks();
    this.props.requestAllNotes();
    this.props.requestAllTags();
    this.props.requestAllTaggings();
  }

  // componentDidUpdate() {
  //   this.updateSelected();
  // }

  // updateSelected() {
  //   // this.scrollToSelectedNote();
  //   this.checkNoteRoute();
  // }

  // checkNoteRoute() {
  //   debugger;
  //   let paramNotebookId = this.props.match.params.notebookId
  //     ? this.props.match.params.notebookId
  //     : -1;
  //   debugger;
  //   this.props.selectNotebook(paramNotebookId);
  // }

  renderSortedNotes() {
    let sortedNotes = sortNotesByLastUpdate(this.props.notes).map(note =>
      <NoteIndexItem
        key={note.id}
        note={note}
        selectNote={this.props.selectNote}
        klass="note-list-rows"
        history={this.props.history}
        path={this.props.path}
      />
    );

    return (
      <div className="note-index-list">
        {sortedNotes}
      </div>
    );
  }

  render() {
    // let notes;
    // debugger;
    // if (this.props.notes !== undefined && this.props.notes !== 0) {
    //   notes = this.props.notes.map(note => (
    //     <NoteIndexItem
    //       key={note.id}
    //       note={note}
    //       selectNote={this.props.selectNote}
    //       klass="note-list-rows"
    //       history={this.props.history}
    //       path={this.props.path}
    //     />
    //   ));
    // }

    // if (this.props.notes.length !== 0 && this.props.notes !== undefined) {
    //   debugger;
    //   const firstNote = this.props.notes[0];

    //   return <Redirect to={`/app/notes/${firstNote.id}`} />;
    // }

    const notebookTitle = this.props.isNotebook
      ? `${this.props.title}`
      : "All Notes";

    return (
      <div className="note-index-frame">
        <header className="note-index-header">
          {/* notes header  conditional render */}
          <div className="note-index-title">
            <span>
              {notebookTitle}
            </span>
          </div>
          {/* notes header options  */}
          <div className="note-index-options">
            {/* number of notes  */}
            <p>{`${this.props.notes.length} notes`}</p>
            {/* icons  */}
            <ul className="note-index-icons">
              {/* tags icon  */}
              {/* actions icon conditional render */}
            </ul>
          </div>
        </header>
        {/* list of notes with scroll bar  */}
        {this.renderSortedNotes()}
        {/* <div className="note-index-list">{notes}</div> */}
      </div>
    );
  }
}
export default NoteIndex;
