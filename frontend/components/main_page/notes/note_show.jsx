import React from "react";
import ReactQuill from "react-quill";

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleFullscreen = this.handleFullscreen.bind(this);
  }

  componentDidMount() {
    this.props.requestNote(this.props.noteId);
  }

  handleFullscreen() {
    console.log("fullscreen");
  }

  render() {
    if (!this.props.note) {
      return null;
    }
    // console.log(this.props.note);
    // console.log(this.props.noteId);
    let { authorId, notebookId, id, title, content } = this.props.note;

    return (
      <div className="note-show-frame">
        {/* header nav  */}
        <header className="note-nav">
          <div className="note-nav-left">
            <button className="note-fullscreen" onClick={this.handleFullscreen}>
              fullscreen
            </button>

            <p>{}</p>
          </div>
          <div className="note-nav-right">
            <img
              src={window.ellipsisURL}
              alt="ellipsis"
              className="note-nav-ellipsis"
            />
          </div>
        </header>

        <p>{content}</p>

        <ReactQuill>
          <p>jon</p>
        </ReactQuill>
      </div>
    );
  }
}

export default NoteShow;
