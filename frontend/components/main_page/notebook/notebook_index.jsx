import React from "react";
import { Link } from "react-router-dom";

import NotebookIndexItem from "./notebook_index_item";
// import { openModal } from "../../../actions/modal_actions";
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
          openModal={this.props.openModal}
          deleteNotebook={this.props.deleteNotebook}
        />
      ));
    }

    return (
      <>
        <div className="notebooks-index-frame">
          <div className="notebooks-index-header">
            <span>Notebooks</span>
          </div>

          <div className="notebooks-index-list-header">
            <p>My notebook list</p>

            <button className="new-notebook">
              <img src={window.newNotebookURL} alt="new notebook" />
              <p onClick={() => this.props.openModal("create_notebook")}>
                New Notebook
              </p>
            </button>
          </div>

          <section className="notebooks-frame">
            <ul className="notebooks-list">
              <ul className="notebooks-list-header">
                <li>TITLE</li>
                <li>UPDATED</li>
                <li>ACTIONS</li>
              </ul>
              {notebooks}
            </ul>
          </section>
        </div>
      </>
    );
    // <div className="login-form-container">
    // <form onSubmit={this.handleSubmit} className="login-form-box">
    //   Welcome to BenchBnB!
    //   <br/>
    //   Please {this.props.formType} or {this.props.otherForm}
    //   <div onClick={this.props.closeModal} className="close-x">X</div>
    //   {this.renderErrors()}
    //   <div className="login-form">
    //     <br/>
    //     <label>Username:
    //       <input type="text"
    //         value={this.state.username}
    //         onChange={this.update('username')}
    //         className="login-input"
    //       />
    //     </label>
    //     <br/>
    //     <label>Password:
    //       <input type="password"
    //         value={this.state.password}
    //         onChange={this.update('password')}
    //         className="login-input"
    //       />
    //     </label>
    //     <br/>
    //     <input className="session-submit" type="submit" value={this.props.formType} />
    //   </div>
    // </form>
    // </div>
  }
}

export default NotebookIndex;
