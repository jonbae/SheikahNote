import React from "react";
import ReactQuill from "react-quill";

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.note) {
      this.state = {
        content: this.props.note.content,
        title: this.props.note.title
      };
    } else {
      this.state = {
        content: "",
        title: ""
      };
    }
    this.handleFullscreen = this.handleFullscreen.bind(this);

    // quill editor options
    this.modules = {
      toolbar: [
        [{ font: [] }],
        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        ["bold", "italic", "underline", "strike"], // toggled buttons
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        ["blockquote", "code-block"],
        [{ align: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        ["clean"], // remove formatting button

        ["link", "image", "video", "formula"] // misc
      ]
    };
  }

  componentDidMount() {
    this.props.requestNote(this.props.noteId);
  }

  handleFullscreen() {
    console.log("fullscreen");
  }

  render() {
    if (!this.props.note || !this.props.notebook) {
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

            <p>{this.props.notebook.title}</p>
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
          className="note-show-quill"
          value={content}
          modules={this.modules}
          placeholder="Start writing"
          theme="snow"
        >
          <div className="note-show-editing-area"></div>
        </ReactQuill>
      </div>
    );
  }
}

export default NoteShow;
