import React from "react";
import { Link } from "react-router-dom";

import NotebookDropdownItem from "./notebook_dropdown_item";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  render() {
    const hiddenClass = this.state.isHidden ? "hidden-dropdown" : "";
    const downCarat = this.state.isHidden ? "" : "filled-down-carat";

    return (
      <nav className="sidebar-frame">
        <li className="sidebar-header">
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
          <li onClick={this.toggleHidden}>
            {/* svg icon */}
            <img
              className={`filled-side-carat ${downCarat}`}
              src={window.filledSideCaratURL}
              alt="filled side carat"
            />
            <img src={window.notebookURL} alt="notebook icon" />
            <p>Notebooks</p>
          </li>

          <ul className={`notebook-dropdown ${hiddenClass}`}>
            {this.props.notebooks.map(notebook => (
              <NotebookDropdownItem key={notebook.id} notebook={notebook} />
            ))}
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

        <button className="header-button" onClick={this.props.logout}>
          Log Out
        </button>
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
