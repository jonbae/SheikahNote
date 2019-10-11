import React from "react";

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestNote(this.props.noteId);
  }

  render() {
    if (!this.props.note) {
      return null;
    }
    console.log(this.props.note);
    console.log(this.props.noteId);
    let { authorId, notebookId, id, title, content } = this.props.note;

    return (
      <div className="note-show-frame">
        <p>{content}</p>
      </div>
    );
  }
}

export default NoteShow;
