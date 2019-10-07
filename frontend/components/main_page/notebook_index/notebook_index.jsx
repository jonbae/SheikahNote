import React from "react";
import { Link } from "react-router-dom";

import NotebookIndexItem from "./notebook_index_detail";
// import NotebookIndexContainer from "./notebook_index_container";
// import { ProtectedRoute } from '../../util/route_util' ;

class NotebookIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllNotebooks();
  }

  render() {
    const notebooks = this.props.notebooks;

    return (
      <div className="notebooks-index-frame">
        <div className="notebooks-index-header">Notebooks</div>

        <div className="notebooks-index-list-header">
          <p>My notebook list</p>
          {/* <button>New Notebook</button> */}
          <p>New Notebook</p>
        </div>

        <section className="notebooks-frame">
          <ul className="notebooks-list">
            <ul className="notebooks-list-header">
              <li>TITLE</li>
              <li>UPDATED</li>
              <li>ACTIONS</li>
            </ul>
            {notebooks.map(notebook => (
              <NotebookIndexItem key={notebook.id} notebook={notebook} />
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default NotebookIndex;
