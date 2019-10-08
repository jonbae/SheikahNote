import React from "react";
import { Link } from "react-router-dom";

import NotebookDropdownItem from "./notebook_dropdown_item";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAccountHidden: true,
      isNotebooksHidden: true
    };
    this.accountHidden = this.accountHidden.bind(this);
    this.toggleAccountHidden = this.toggleAccountHidden.bind(this);
    // this.notebooksHidden = this.notebooksHidden.bind(this);
    this.toggleNotebooksHidden = this.toggleNotebooksHidden.bind(this);
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

  // notebooksHidden() {
  //   this.setState({ isNotebooksHidden: true });
  // }

  render() {
    const hiddenAccountClass = this.state.isAccountHidden
      ? "hidden-dropdown"
      : "";
    const hiddenNotebooksClass = this.state.isNotebooksHidden
      ? "hidden-dropdown"
      : "";
    const downCarat = this.state.isNotebooksHidden ? "" : "filled-down-carat";

    let notebooks;
    // notebook.id returns a warning get this checked out
    if (this.props.notebooks !== undefined && this.props.notebooks !== 0) {
      notebooks = this.props.notebooks.map(notebook => (
        <NotebookDropdownItem key={notebook.id} notebook={notebook} />
      ));
    }

    return (
      <nav className="sidebar-frame">
        <li
          onClick={this.toggleAccountHidden}
          onBlur={this.accountHidden}
          tabIndex="0"
          className="sidebar-header"
        >
          {" "}
          {/* add an onClick  */}
          {/* profile pic  */}
          <img
            src={window.defaultUserURL}
            alt="default user"
            className="avatar"
          />
          {/* current user email */}
          <p className="sidebar-header-email">
            {" "}
            {this.props.currentUser.email}{" "}
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
                {" "}
                {this.props.currentUser.email}{" "}
              </p>
            </div>
            <div className="grey-line"></div>
            {/* <br className="grey-line" /> */}
            <div className="header-button" onClick={this.props.logout}>
              Log Out
            </div>
          </section>
        </li>

        {/* bonus: search bar  */}

        {/* create note button  */}
        <button className="create-new-note">
          <img src={window.blackPlusURL} alt="black plus" />
          <p className="create-new-note-text">Create new note</p>
        </button>
        {/* all notes  */}
        <ul className="sidebar-links">
          {/* to="/app/notes" */}
          <li>
            <img src={window.allNotesURL} alt="all notes" />
            <Link to="/app/notebooks"> All Notes </Link>
          </li>
          {/* notebooks dropdown */}
          <li onClick={this.toggleNotebooksHidden}>
            {/* svg icon */}
            <img
              className={`filled-side-carat ${downCarat}`}
              src={window.filledSideCaratURL}
              alt="filled side carat"
            />
            <img src={window.notebookURL} alt="notebook icon" />
            <p>Notebooks</p>
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
          <li>
            <img src={window.tagsURL} alt="tags" />
            <Link to="/app/notebooks">Tags</Link>
          </li>
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
