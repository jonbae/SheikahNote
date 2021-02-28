import React from "react";

class NotebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.notebook === undefined ? "" : this.props.notebook.id,
      title: this.props.notebook === undefined ? "" : this.props.notebook.title
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const notebook = Object.assign({}, this.state);
    this.props.processForm(notebook).then(this.props.closeModal);
  }

  render() {
    const initialTitle = this.state.title;

    return (
      <>
        {/* <section className="notebook-form-frame"> */}
        <form
          onSubmit={this.handleSubmit}
          className={`notebook-form-box ${this.props.formType}`}
        >
          <div className="notebook-form-header">
            <div className="notbeook-form-title">
              <p className="notebook-form-type">{this.props.title}</p>
              <div className="close-x" onClick={this.props.closeModal}>
                ✕
              </div>
            </div>
            <p className={`form-tagline ${this.props.hiddenClass}`}>
              Notebooks are useful for grouping notes around a common topic.
            </p>
          </div>

          <div className="notebook-form-input">
            <div className="notebook-form-label">
              <label>Name</label>
            </div>

            <input
              type="text"
              placeholder="Notebook name"
              className="form-notebook-name"
              onChange={this.update("title")}
              value={this.state.title}
            />

            <div className="notebook-form-filler"></div>
          </div>

          <div className="notebook-form-buttons">
            <input
              type="button"
              className="notebook-cancel"
              onClick={this.props.closeModal}
              value="Cancel"
            />
            <input type="submit" className="notebook-sumbit" value="Continue" />

            {/*             
            <button className="notebook-cancel" onClick={this.props.closeModal}>
              Cancel
            </button>
            <button className="notebook-submit">Continue</button> */}

            {/*  <div onClick={this.props.closeModal} className="notebook-cancel">
              {" "}
              Cancel{" "}
            </div>
            <input type="submit" className="notebook-submit" value="Continue" /> */}
          </div>
        </form>
      </>
    );
  }
}

export default NotebookForm;
