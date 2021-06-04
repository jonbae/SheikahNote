import React from "react";
import { Link } from "react-router-dom";

import NotebookDropdownItem from "./notebook_dropdown_item";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAccountHidden: true,
      isNotebooksHidden: true, 
      isNewNotebookNoteHidden: true
    };
    this.accountHidden = this.accountHidden.bind(this);
    this.toggleAccountHidden = this.toggleAccountHidden.bind(this);
    this.toggleNotebooksHidden = this.toggleNotebooksHidden.bind(this);
    this.createNewNote = this.createNewNote.bind(this);
    this.toggleNewNotebookNoteHidden = this.toggleNewNotebookNoteHidden.bind(this);
    this.newNotebookNoteHidden = this.newNotebookNoteHidden.bind(this);
    this.createNewNotebookNote = this.createNewNotebookNote.bind(this); 
    this.createNewGenericNote = this.createNewGenericNote.bind(this);
  }

  toggleNewNotebookNoteHidden() {
    this.setState({ isNewNotebookNoteHidden: !this.state.isNewNotebookNoteHidden });
  }

  newNotebookNoteHidden() {
    this.setState({ isNewNotebookNoteHidden: true });
  }

  toggleAccountHidden() {
    this.setState({ isAccountHidden: !this.state.isAccountHidden });
  }

  accountHidden() {
    this.setState({ isAccountHidden: true });
  }

  toggleNotebooksHidden() {
    this.setState({ isNotebooksHidden: !this.state.isNotebooksHidden });
  }

  createNewNote(e, notebook, notebookRoute)  {

    const blankNote = {
      title: "Untitled",
      content: "testblanks",
      author_id: this.props.currentUser.id,
      notebook_id: notebook.id
    };
    const that = this;

    this.props.createNote(blankNote).then(res => {
      const notebookSlug = notebookRoute ? `/notebooks/${notebook.id}` : "";
      that.props.history.push(`/app${notebookSlug}/notes/${res.note.id}`);
    });
  };

  createNewNotebookNote(e,notebook) {
    this.createNewNote(e,notebook,true)
  }

  createNewGenericNote(e) {
    this.createNewNote(e,this.props.notebooks[0], false)
  }

  render() {
    // debugger;
    const hiddenAccountClass = this.state.isAccountHidden
      ? "hidden-dropdown"
      : "";
    const hiddenNotebooksClass = this.state.isNotebooksHidden
      ? "hidden-dropdown"
      : "";

    const hiddenNewNotebookNoteClass = this.state.isNewNotebookNoteHidden ? "hidden-notebook-note-dropdown" : "";
    const downCarat = this.state.isNotebooksHidden ? "" : "filled-down-carat";
    let notes;
    let notebooks;
    let lastNoteId;
    let notebookNoteCreations; 
    // notebook.id returns a warning get this checked out
    if (
      this.props.notebooks !== undefined &&
      // this.props.notebooks.length !== 0 &&
      this.props.notes !== undefined &&
      this.props.notes.length !== 0
    ) {
      notebooks = this.props.notebooks.map(notebook =>
        <NotebookDropdownItem key={notebook.id} notebook={notebook} />
      );
      notes = this.props.notes;
      lastNoteId = notes[notes.length - 1].id;
      
      notebookNoteCreations = this.props.notebooks.map(notebook => {
        return (
          <div onClick={(e) => this.createNewNotebookNote(e,notebook)} className=" notebook-highlight" key={notebook.id}>
            <img src={window.blackNotebookURL} alt="small black notebook" />
            <p>{notebook.title}</p>
          </div>
        )
      })
    }

    return (
      <nav className="sidebar-frame">
        <li
          onClick={this.toggleAccountHidden}
          onBlur={this.accountHidden}
          tabIndex="0"
          className="sidebar-header"
        >
          {/* profile pic  */}
          <img
            src={window.defaultUserURL}
            alt="default user"
            className="avatar"
          />
          {/* current user email */}
          <p className="sidebar-header-email">
            {" "}{this.props.currentUser.email}{" "}
          </p>
          {/* account dropdown  */}
          <section
            className={`dropdown-menu sidebar-position ${hiddenAccountClass}`}
          >
            <p className="sidebar-account-title">ACCOUNT</p>
            {/* checkmark  */}
            <div className="account-header">
              <img
                src={window.defaultUserURL}
                alt="default user"
                className="avatar"
              />
              <p className="sidebar-header-email dropdown-email">
                {" "}{this.props.currentUser.email}{" "}
              </p>
            </div>
            <div className="grey-line" />
            {/* <br className="grey-line" /> */}
            <div className="header-button" onClick={this.props.logout}>
              Log Out
            </div>
          </section>
        </li>

        {/* bonus: search bar  */}

        {/* create note button  */}

        <div className="create-new-note-container">

          <button className="create-new-note" onClick={this.createNewGenericNote}>
            <img src={window.blackPlusURL} alt="black plus" />
            <p className="create-new-note-text">Create new note</p>
             
          </button>
          <button className="create-new-note" 
                onClick={this.toggleNewNotebookNoteHidden} 
                onBlur={this.newNotebookNoteHidden}  
                tabIndex="0"
          >

            <img
                className="filled-down-carat create-new-note-carat"
                src={window.blackFilledSideCaratURL}
                alt="filled down carat"

              />
            <section className={`new-notebook-note-dropdown new-notebook-note-dropdown-position dropdown-menu ${hiddenNewNotebookNoteClass}`}>
            {/* noteboook note dropdown */}
            <div>Create new note in:</div>
            {/* list */}

            {notebookNoteCreations}
        </section>
          </button>

        
        </div>
       
        {/* all notes  */}
        <ul className="sidebar-links">
          {/* to="/app/notes" */}
          {/* <li> */}

          <Link to={`/app/notes/${lastNoteId}`}>
            <img src={window.allNotesURL} alt="all notes" />
            <p> All Notes </p>
          </Link>
          {/* </li> */}
          {/* notebooks dropdown */}
          <li>
            <img
              onClick={this.toggleNotebooksHidden}
              className={`filled-side-carat ${downCarat}`}
              src={window.filledSideCaratURL}
              alt="filled side carat"
            />

            <Link to="/app/notebooks" className="notebook-link">
              {/* svg icon */}
              <img src={window.notebookURL} alt="notebook icon" />
              <p>Notebooks</p>
            </Link>
          </li>
          <ul className={`notebook-dropdown ${hiddenNotebooksClass}`}>
            {/* {this.props.notebooks.map(notebook => (
              <NotebookDropdownItem key={notebook.id} notebook={notebook} />
            ))} */}
            {notebooks}
          </ul>

          {/* bonus: shared with me  */}

          {/* tags */}
          {/* to="/app/tags" */}

          <Link to="/app/tags">
            <img src={window.tagsURL} alt="tags" />
            <p>Tags</p>
          </Link>

          {/* trash */}

          {/* upgrade  */}
        </ul>
      </nav>
    );
  }
}

// const Sidebar = ({ currentUser, notebooks, logout }) => {
//   return (
//     <nav className="sidebar-frame">
//       <li className="sidebar-header">
//         {/* profile pic  */}
//         <img
//           src={window.defaultUserURL}
//           alt="default user"
//           className="avatar"
//         />
//         {/* current user email */}
//         <p className="sidebar-header-email"> {currentUser.email} </p>
//       </li>

//       {/* bonus: search bar  */}

//       {/* create note button  */}
//       <button className="create-new-note">
//         <img src={window.blackPlusURL} alt="black plus" />
//         <p className="create-new-note-text">Create new note</p>
//       </button>
//       {/* all notes  */}
//       <ul className="sidebar-links">
//         {/* to="/app/notes" */}
//         <li>
//           <img src={window.allNotesURL} alt="all notes" />
//           <Link to="/app/notebooks"> All Notes </Link>
//         </li>
//         {/* notebooks dropdown */}
//         <li>
//           {/* svg icon */}
//           <img
//             className="filled-side-carat"
//             src={window.filledSideCaratURL}
//             alt="filled side carat"
//           />
//           <img src={window.notebookURL} alt="notebook icon" />
//           <p>Notebooks</p>
//         </li>

//         <ul className="notebook-dropdown">
//           {notebooks.map(notebook => (
//             <NotebookDropdownItem
//               key={notebook.id}
//               notebook={notebook}
//               className="notebook-dropdown-item"
//             />
//           ))}
//         </ul>

//         {/* bonus: shared with me  */}

//         {/* tags */}
//         {/* to="/app/tags" */}
//         <li>
//           <img src={window.tagsURL} alt="tags" />
//           <Link to="/app/notebooks">Tags</Link>
//         </li>
//         {/* trash */}

//         {/* upgrade  */}
//       </ul>

//       <button className="header-button" onClick={logout}>
//         Log Out
//       </button>
//     </nav>
//   );
// };

export default Sidebar;
