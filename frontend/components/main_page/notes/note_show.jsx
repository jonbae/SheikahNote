import React from "react";

import NoteShowHeader from "./note_header";
import NoteShowEditor from "./note_editor";
import NoteShowFooter from "./note_footer";
import ReactQuill from "react-quill";
import { debounce } from "lodash";

class NoteShow extends React.Component {
  constructor(props) {
    debugger;
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
    debugger;
    this.props.requestNote(this.props.noteId);
  }

  componentDidUpdate(prevProps) {
    debugger;
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
    debugger;
    if (this.autosaveTimer) {
      clearTimeout(this.autosaveTimer);
    }
    this.autosaveTimer = setTimeout(() => {
      this.props.updateNote(this.state);
      this.autosaveTimer = null;
    }, 1000);
  }

  update(field) {
    debugger;
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
    debugger;
    return (
      <div className="note-show-frame">
        <NoteShowHeader
          notebook={this.props.notebook}
          note={this.props.note}
          deleteNote={this.props.deleteNote}
        />

        <div className="note-show-editor">
          <input
            type="text"
            value={this.state.title}
            placeholder="Title"
            onChange={this.update("title")}
          />
          <ReactQuill
            theme="snow"
            modules={this.modules}
            value={this.state.content}
            onChange={this.update("content")}
            autoFocus={this.state.title.length > 0 ? true : false}
          />
        </div>

        {/* <NoteShowFooter /> */}
      </div>
    );
  }
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       content: this.props.note ? this.props.note.content : "",
  //       title: this.props.note ? this.props.note.title : "",
  //       isHidden: true
  //     };
  //     this.toggleHidden = this.toggleHidden.bind(this);
  //     this.hidden = this.hidden.bind(this);
  //     this.handleFullscreen = this.handleFullscreen.bind(this);
  //     this.deleteNoteThenHideDropdown = this.deleteNoteThenHideDropdown.bind(
  //       this
  //     );
  //     this.saveNote = this.saveNote.bind(this);
  //     this.autosaveTimer = null;

  //     this.handleContentChange = this.handleContentChange.bind(this);
  //     this.handleTitleChange = this.handleTitleChange.bind(this);

  //     // quill editor options
  //     this.modules = {
  //       toolbar: [
  //         [{ font: [] }],
  //         [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  //         ["bold", "italic", "underline", "strike"], // toggled buttons
  //         [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  //         ["blockquote", "code-block"],
  //         [{ align: [] }],
  //         [{ list: "ordered" }, { list: "bullet" }],
  //         [{ script: "sub" }, { script: "super" }], // superscript/subscript
  //         ["clean"], // remove formatting button

  //         ["link", "image", "video", "formula"] // misc
  //       ]
  //     };
  //   }

  //   // componentDidMount() {
  //   //why is this not the first note
  //   // this.props.requestNote(this.props.noteId);
  //   // .then(res => {
  //   //   debugger;
  //   //   this.setState({
  //   //     title: res.note.title,
  //   //     content: res.note.content
  //   //   });
  //   // });
  //   // }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (!this.props.note) {
  //       return null;
  //     }

  //     // change to state?
  //     if (
  //       (!prevProps.note && this.props.note) ||
  //       (prevProps.note &&
  //         (prevProps.note.title !== this.props.note.title ||
  //           prevProps.note.content !== this.props.note.content))
  //     ) {
  //       this.setState({
  //         title: this.props.note.title,
  //         content: this.props.note.content
  //       });
  //     }
  //   }

  //   saveNote(e) {
  //     if (e) {
  //       e.preventDefault();
  //     }

  //     let updatedNote = Object.assign({}, this.props.note, {
  //       title: this.state.title,
  //       content: this.state.content
  //     });

  //     this.props.updateNote(updatedNote);
  //   }

  //   update(field) {
  //     return e =>
  //       this.setState({
  //         [field]: e.currentTarget.value
  //       });
  //   }

  //   handleTitleChange(e) {
  //     e.preventDefault();
  //     // this.startAutosaveTimer();
  //     // debugger;
  //     this.setState({ title: e.currentTarget.value });
  //   }

  //   handleContentChange(value) {
  //     // e.preventDefault();
  //     // this.startAutosaveTimer();

  //     this.setState({ content: value });
  //   }

  //   // startAutosaveTimer() {
  //   //   if (this.autosaveTimer) {
  //   //     clearTimeout(this.autosaveTimer);
  //   //   }
  //   //   this.autosaveTimer = setTimeout(this.saveNote.bind(this), 5000);
  //   // }

  //   handleFullscreen() {
  //     // console.log("fullscreen");
  //     // debugger;
  //     // this.props.toggleFullScreen();
  //   }

  //   toggleHidden() {
  //     this.setState({ isHidden: !this.state.isHidden });
  //   }

  //   hidden() {
  //     debugger;
  //     this.setState({ isHidden: true });
  //   }

  //   deleteNoteThenHideDropdown(id) {
  //     this.props.deleteNote(id).then(
  //       this.hidden()
  //       //<Redirect to={}/>
  //     );
  //   }

  //   render() {
  //     if (!this.props.note || !this.props.notebook) {
  //       return null;
  //     }
  //     // console.log(this.props.note);
  //     // console.log(this.props.noteId);
  //     // let { authorId, notebookId, id, title, content } = this.props.note;
  //     // debugger;
  //     const hiddenClass = this.state.isHidden ? "hidden-dropdown" : "";
  //     const titleValue = this.state.title === "Untitled" ? "" : this.state.title;
  //     return (
  //       <div className="note-show-frame">
  //         {/* header nav  */}
  //         <header className="note-nav">
  //           <div className="note-nav-left">
  //             <svg
  //               viewBox="0 0 24 24"
  //               xmlns="http://www.w3.org/2000/svg"
  //               class="aSj7GAjpRHxXJ-uUqPeBk"
  //               onClick={this.handleFullscreen}
  //               height={24}
  //               width={24}
  //             >
  //               <path
  //                 fill-rule="evenodd"
  //                 d="M6.031 3a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-11zm4.47 4.289H8.184l2.915 2.914a.625.625 0 0 1-.884.884L7.3 8.172v2.319a.625.625 0 1 1-1.25 0V6.674c0-.351.285-.635.635-.635h3.818a.625.625 0 0 1 0 1.25zM12.6 15.76h2.318l-2.915-2.915a.625.625 0 1 1 .884-.884l2.915 2.915V12.56a.625.625 0 0 1 1.25 0v3.817c0 .35-.285.635-.635.635H12.6a.625.625 0 1 1 0-1.25z"
  //               ></path>
  //             </svg>

  //             {/* <button className="note-fullscreen" onClick={this.handleFullscreen}>
  //               fullscreen
  //             </button> */}

  //             <p>{this.props.notebook.title}</p>
  //           </div>
  //           <div className="note-nav-right">
  //             <img
  //               src={window.ellipsisURL}
  //               alt="ellipsis"
  //               className="note-nav-ellipsis"
  //               onClick={this.toggleHidden}
  //               onBlur={this.hidden}
  //             />

  //             <section
  //               className={`dropdown-menu notes-action-position ${hiddenClass}`}
  //             >
  //               <p
  //                 onClick={() =>
  //                   this.props
  //                     .updateNote(
  //                       Object.assign({}, this.props.note, {
  //                         title: this.state.title,
  //                         content: this.state.content
  //                       })
  //                     )
  //                     .then(this.hidden)
  //                 }
  //               >
  //                 Save Note
  //               </p>
  //               <p
  //                 onClick={() =>
  //                   this.deleteNoteThenHideDropdown(this.props.note.id)
  //                 }
  //               >
  //                 Delete Note
  //               </p>
  //             </section>
  //           </div>
  //         </header>

  //         {/* title  */}
  //         <div className="note-editor-title-row">
  //           <input
  //             type="text"
  //             className="note-editor-title"
  //             value={titleValue}
  //             onChange={this.handleTitleChange}
  //             placeholder="Title"
  //           />
  //           {/* <button
  //             onClick={this.saveNote}
  //             className="modal-submit-button note-show-save-button"
  //           >
  //             Save
  //           </button> */}
  //         </div>

  //         <ReactQuill
  //           className="note-show-quill"
  //           value={this.state.content}
  //           modules={this.modules}
  //           onChange={this.handleContentChange}
  //           placeholder="Start writing"
  //           theme="snow"
  //         >
  //           <div className="note-show-editing-area"></div>
  //         </ReactQuill>

  //         {/* taggings  */}
  //         <section className="note-tags">
  //           {/* add tag button  */}

  //           {/* divs with tag names  */}

  //           {/* input  */}

  //           {/* <div>this is the tags footer</div> */}
  //         </section>
  //       </div>
  //     );
  //   }
}

export default NoteShow;
