import React from "react";

class NotebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
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
    this.props.processCreateForm(notebook).then(this.props.closeModal);
  }

  render() {
    return (
      <div>
        <section>
          <p>Create new notebook</p>
          <div onClick={this.props.closeModal} className="close-x">
            X
          </div>
          <p className="form-tagline"></p>
          <form onSubmit={this.handleSubmit} className="notebook-form-box">
            <label>
              Name
              <input
                type="text"
                placeholder="Notebook name"
                className="form-notebook-name"
                onChange={this.update("title")}
                value={this.state.title}
              />
            </label>

            <input
              type="submit"
              className="notebook-submit"
              value={this.props.formType}
            />
          </form>
        </section>
      </div>
    );
  }
}

export default NotebookForm;
