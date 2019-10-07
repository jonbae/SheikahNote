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
        <div className="notebooks-index-header">
          <span>Notebooks</span>
        </div>

        <div className="notebooks-index-list-header">
          <p>My notebook list</p>

          <button className="new-notebook">
            <img src={window.newNotebookURL} alt="new notebook" />
            <p>New Notebook</p>
          </button>
        </div>

        <section className="notebooks-frame">
          <ul className="notebooks-list">
            <ul className="notebooks-list-header">
              <li>TITLE</li>
              <li>UPDATED</li>
              <li>ACTIONS</li>
            </ul>
            {notebooks.map(notebook => (
              <NotebookIndexItem
                key={notebook.id}
                notebook={notebook}
                className="notebooks-list-rows"
              />
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default NotebookIndex;
