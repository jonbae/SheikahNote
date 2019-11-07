import React from "react";
import Editor from "./note_editor";
import ReactQuill from "react-quill";

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note
      ? {
          content: this.props.note.content,
          title: this.props.note.title
        }
      : {
          content: "",
          title: ""
        };
    this.handleFullscreen = this.handleFullscreen.bind(this);
    // this.toggleFullScreen = this.toggleFullScreen.bind(this);

    // quill editor options
    // this.modules = {
    //   toolbar: [
    //     [{ font: [] }],
    //     [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    //     ["bold", "italic", "underline", "strike"], // toggled buttons
    //     [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    //     ["blockquote", "code-block"],
    //     [{ align: [] }],
    //     [{ list: "ordered" }, { list: "bullet" }],
    //     [{ script: "sub" }, { script: "super" }], // superscript/subscript
    //     ["clean"], // remove formatting button

    //     ["link", "image", "video", "formula"] // misc
    //   ]
    // };
  }

  componentDidMount() {
    this.props.requestNote(this.props.noteId);
  }

  handleFullscreen() {
    // console.log("fullscreen");
    // debugger;
    // this.props.toggleFullScreen();
  }

  render() {
    if (!this.props.note) {
      return null;
    }
    // console.log(this.props.note);
    // console.log(this.props.noteId);
    // let { authorId, notebookId, id, title, content } = this.props.note;

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
        <ReactQuill
          // modules={this.modules}
          theme="snow"
        >
          <div>{content}</div>
        </ReactQuill>
      </div>
    );
  }
}

export default NoteShow;
