import React from "react";

import NoteIndexItem from "./note_index_item";
class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestAllNotebooks();
    this.props.requestAllNotes();
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

  render() {
    let notes;
    debugger;
    if (this.props.notes !== undefined && this.props.notes !== 0) {
      notes = this.props.notes.map(note => (
        <NoteIndexItem
          key={note.id}
          note={note}
          selectNote={this.props.selectNote}
          klass="note-list-rows"
          history={this.props.history}
          path={this.props.path}
        />
      ));
    }

    const notebookTitle = this.props.isNotebook
      ? `${this.props.title}`
      : "All Notes";

    return (
      <div className="note-index-frame">
        <header className="note-index-header">
          {/* notes header  conditional render */}
          <div className="note-index-title">
            <span>{notebookTitle}</span>
          </div>
          {/* notes header options  */}
          <div className="note-index-options">
            {/* number of notes  */}
            <p>{`${notes.length} notes`}</p>
            {/* icons  */}
            <ul className="note-index-icons">
              {/* tags icon  */}
              {/* actions icon conditional render */}
            </ul>
          </div>
        </header>
        {/* list of notes with scroll bar  */}
        <div className="note-index-list">{notes}</div>
      </div>
    );
  }
}
export default NoteIndex;
