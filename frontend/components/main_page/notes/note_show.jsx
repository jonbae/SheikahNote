import React from "react";
import ReactQuill from "react-quill";

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.note ? this.props.note.content : "",
      title: this.props.note ? this.props.note.title : "",
      isHidden: true
    };
    this.toggleHidden = this.toggleHidden.bind(this);
    this.handleFullscreen = this.handleFullscreen.bind(this);
    this.deleteNoteThenHideDropdown = this.deleteNoteThenHideDropdown.bind(
      this
    );
    this.saveNote = this.saveNote.bind(this);
    this.autosaveTimer = null;

    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);

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
    this.props.requestNote(this.props.noteId).then(res => {
      debugger;

      this.setState({
        title: res.note.title,
        content: res.note.content
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.note) {
      return null;
    }

    // change to state?
    if (
      (!prevProps.note && this.props.note) ||
      (prevProps.note &&
        (prevProps.note.title !== this.props.note.title ||
          prevProps.note.content !== this.props.note.content))
    ) {
      this.setState({
        title: this.props.note.title,
        content: this.props.note.content
      });
    }
  }

  saveNote(e) {
    if (e) {
      e.preventDefault();
    }

    let updatedNote = Object.assign({}, this.props.note, {
      title: this.state.title,
      content: this.state.content
    });

    this.props.updateNote(updatedNote);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleTitleChange(e) {
    debugger;
    e.preventDefault();
    this.startAutosaveTimer();
    this.setState({ title: e.currentTarget.value });
  }

  handleContentChange(value) {
    // e.preventDefault();
    this.startAutosaveTimer();
    debugger;
    this.setState({ content: value });
  }

  startAutosaveTimer() {
    if (this.autosaveTimer) {
      debugger;
      clearTimeout(this.autosaveTimer);
    }
    this.autosaveTimer = setTimeout(this.saveNote.bind(this), 500);
  }

  handleFullscreen() {
    console.log("fullscreen");
  }

  toggleHidden() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  hidden() {
    this.setState({ isHidden: true });
  }

  deleteNoteThenHideDropdown(id) {
    this.props.deleteNote(id).then(
      this.hidden()
      //<Redirect to={}/>
    );
  }

  render() {
    if (!this.props.note || !this.props.notebook) {
      return null;
    }
    // console.log(this.props.note);
    // console.log(this.props.noteId);
    // let { authorId, notebookId, id, title, content } = this.props.note;
    // debugger;
    const hiddenClass = this.state.isHidden ? "hidden-dropdown" : "";
    const titleValue = this.state.title === "Untitled" ? "" : this.state.title;
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

        {/* title  */}
        <div className="note-editor-title-row">
          <input
            type="text"
            className="note-editor-title"
            value={titleValue}
            onChange={this.handleTitleChange}
            placeholder="Title"
          />
          {/* <button
            onClick={this.saveNote}
            className="modal-submit-button note-show-save-button"
          >
            Save
          </button> */}
        </div>

        <ReactQuill
          className="note-show-quill"
          value={this.state.content}
          modules={this.modules}
          onChange={this.handleContentChange}
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
