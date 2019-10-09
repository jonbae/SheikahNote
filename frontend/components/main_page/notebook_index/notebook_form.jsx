import React from "react";

class NotebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.notebook.id,
      title: this.props.notebook.title
    };
    debugger;
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
    return (
      <>
        {/* <section className="notebook-form-frame"> */}
        <form onSubmit={this.handleSubmit} className="notebook-form-box">
          <div className="notebook-form-header">
            <div>
              <p>{this.props.formType}</p>
              <div onClick={this.props.closeModal} className="close-x">
                X
              </div>
            </div>
            <p className="form-tagline">{this.props.tagline}</p>
          </div>

          <div className="notebook-form-input">
            <label>Name</label>
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
            <button className="notebook-cancel" onClick={this.props.closeModal}>
              Cancel
            </button>
            <button className="notebook-submit">Continue</button>

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
