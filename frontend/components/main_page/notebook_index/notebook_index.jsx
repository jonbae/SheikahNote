import React from "react";
import { Link } from "react-router-dom";

import NotebookIndexItem from "./notebook_index_detail";
// import NotebookIndexContainer from "./notebook_index_container";
// import { ProtectedRoute } from '../../util/route_util' ;

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.removeNotebook = this.removeNotebook.bind(this);
  }

  componentDidMount() {
    this.props.requestAllNotebooks();
  }

  render() {
    let notebooks;
    // notebook.id returns a warning get this checked out
    if (this.props.notebooks !== undefined && this.props.notebooks !== 0) {
      notebooks = this.props.notebooks.map(notebook => (
        <NotebookIndexItem
          key={notebook.id}
          notebook={notebook}
          klass="notebooks-list-rows"
          deleteNotebook={this.props.deleteNotebook}
        />
      ));
    }

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
            {/* {notebooks.map(notebook, idx => (
              <NotebookIndexItem
                key={idx}
                notebook={notebook}
                className="notebooks-list-rows"
              />
            ))} */}
            {notebooks}
          </ul>
        </section>
      </div>
    );
  }
}

export default NotebookIndex;
