import React from "react";

import NoteIndexItem from "./note_index_item";
class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestAllNotes();
  }

  render() {
    let notes;
    if (this.props.notes !== undefined && this.props.notes !== 0) {
      notes = this.props.notes.map(note => (
        <NoteIndexItem key={note.id} note={note} klass="note-list-rows" />
      ));
    }
    console.log(this.props.notes);
    return (
      <>
        <p>{notes}</p>
      </>
    );
  }
}
export default NoteIndex;
