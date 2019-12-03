import React from "react";
import NoteShow from "./note_show";

class NoteShowFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestAllTaggings();
    this.props.requestAllTags();
  }

  onEnter(e) {
    if (e.keyCode == 13 && e.shiftKey == false) {
      this.props.createTag(this.state);
      this.setState({ name: "" });
    } else {
      null;
    }
  }

  render() {
    // console.log(this.props.note);
    return (
      <div className="note-show-footer">
        <input
          type="text"
          onKeyDown={this.onEnter}
          onChange={e => this.setState({ name: e.target.value })}
          value={this.state.name}
        />
      </div>
    );
  }
}

export default NoteShowFooter;
