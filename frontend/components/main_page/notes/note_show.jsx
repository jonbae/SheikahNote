import React from "react";

import NoteShowHeader from "./note_header";
// import NoteShowEditor from "./note_editor";
import NoteShowFooter from "./note_footer";
import ReactQuill from "react-quill";
import { debounce } from "lodash";

class NoteShow extends React.Component {
  constructor(props) {
    //  
    super(props);
    this.state = this.props.note;

    // this.debounceId = null
    // this.quill = React.createRef();
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

    this.update = this.update.bind(this);
    // this.debounceEvent = this.debounceEvent.bind(this);
    this.autoUpdateTimer = this.autoUpdateTimer.bind(this);
  }

  componentDidMount() {
    this.props.requestAllNotes();
    this.props.requestNote(this.props.noteId);
    this.props.requestAllTaggings();
    this.props.requestAllTags();
  }

  componentDidUpdate(prevProps) {
    prevProps.match.params.noteId !== this.props.match.params.noteId
      ? this.props.requestNote(this.props.match.params.noteId)
      : null;
    prevProps.note.id !== this.props.note.id
      ? this.setState(this.props.note)
      : null;
  }

  // componentWillUnmount() {
  //   this.debounceEvent.cancel();
  // }

  // debounceEvent(...args) {
  //   this.debouncedEvent = debounce(...args);
  //   return e => {
  //     e.persist();
  //     return this.debouncedEvent(e);
  //   };
  // }

  autoUpdateTimer() {
    // debugger;
    if (this.autosaveTimer) {
      clearTimeout(this.autosaveTimer);
    }
    this.autosaveTimer = setTimeout(() => {
      this.props.updateNote(this.state);
      this.autosaveTimer = null;
    }, 1000);
  }

  update(field) {
    // debugger;
    return e => {
      if (field === "title") {
        this.autoUpdateTimer();
        this.setState({ [field]: e.target.value });
      } else {
        this.autoUpdateTimer();
        this.setState({ [field]: e });
      }
    };
  }

  render() {
    return (
      <div className="note-show-frame">
        <NoteShowHeader
          notebook={this.props.notebook}
          note={this.props.note}
          notes={this.props.notes}
          deleteNote={this.props.deleteNote}
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
        />
        <div className="note-show-content">
          <input
            type="text"
            value={this.state.title}
            placeholder="Title"
            onChange={this.update("title")}
            // className="note-show-editor-title"
          />
          <ReactQuill
            theme="snow"
            modules={this.modules}
            value={this.state.content}
            onChange={this.update("content")}
            autoFocus={this.state.title.length > 0 ? true : false}
          />
        </div>

        <NoteShowFooter
          requestAllTags={this.props.requestAllTags}
          requestAllTaggings={this.props.requestAllTaggings}
          createTagging={this.props.createTagging}
          deleteTagging={this.props.deleteTagging}
          tags={this.props.tags}
          taggings={this.props.taggings}
          note={this.props.note}
        />
      </div>
    );
  }
}

export default NoteShow;
