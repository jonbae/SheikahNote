import React from "react";
import Editor from "./note_editor";
import ReactQuill from "react-quill";

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.note) {
      this.state = {
        content: this.props.note.content,
        title: this.props.note.title,
        isHidden: true
      };
    } else {
      this.state = {
        content: "",
        title: "",
        isHidden: true
      };
    }
    this.toggleHidden = this.toggleHidden.bind(this);
    this.handleFullscreen = this.handleFullscreen.bind(this);
    this.deleteNoteThenHideDropdown = this.deleteNoteThenHideDropdown.bind(
      this
    );
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
    //why is this not the first note
    this.props.requestNote(this.props.noteId);
  }

  handleFullscreen() {
    // console.log("fullscreen");
    // debugger;
    // this.props.toggleFullScreen();
  }

  toggleHidden() {
    this.setState({ isHidden: !this.state.isHidden });
  }
  hidden() {
    this.setState({ isHidden: true });
  }

  deleteNoteThenHideDropdown(id) {
    this.props.deleteNote(id).then(this.hidden());
  }

  render() {
    if (!this.props.note || !this.props.notebook) {
      return null;
    }
    // console.log(this.props.note);
    // console.log(this.props.noteId);
    let { authorId, notebookId, id, title, content } = this.props.note;
    // debugger;
    const hiddenClass = this.state.isHidden ? "hidden-dropdown" : "";

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
              onClick={this.toggleHidden}
              onBlur={this.hidden}
            />

            <section
              className={`dropdown-menu notes-action-position ${hiddenClass}`}
            >
              <p
                onClick={() =>
                  this.deleteNoteThenHideDropdown(this.props.note.id)
                }
              >
                Delete Note
              </p>
            </section>
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

        {/* taggings  */}
        <section className="note-tags">
          {/* add tag button  */}

          {/* divs with tag names  */}

          {/* input  */}

          <div>this is the tags footer</div>
        </section>
      </div>
    );
  }
}

export default NoteShow;
