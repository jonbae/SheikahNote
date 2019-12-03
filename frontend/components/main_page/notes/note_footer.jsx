import React from "react";

class NoteShowFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.addTag = this.addTag.bind(this);
  }

  componentDidMount() {
    this.props.requestAllTaggings();
    this.props.requestAllTags();
  }

  addTag(e) {
    // debugger;
    if (e.keyCode == 13 && e.shiftKey == false) {
      // maybe no {}
      const tagging = {
        tagging: { note_id: this.props.note.id, name: this.state.name }
      };
      debugger;
      this.props.createTagging(tagging);
      this.setState({ name: "" });
    }
  }

  render() {
    // console.log(this.props.note);
    return (
      <div className="note-show-footer">
        {/* add tag img  */}
        <input
          type="text"
          onKeyDown={this.addTag}
          onChange={e => this.setState({ name: e.target.value })}
          value={this.state.name}
        />
      </div>
    );
  }
}

export default NoteShowFooter;
