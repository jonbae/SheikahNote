import React from "react";

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // debugger;
    if (this.props.selectedNoteId != this.props.note.id) {
      this.props.history.push(`${this.props.path}/${this.props.note.id}`);
      // debugger;
      // this.props.selectNote(this.props.note.id);
    }
  }

  render() {
    const choppedContent =
      this.props.note.content.length > 60
        ? this.props.note.content.slice(0, 60) + "..."
        : this.props.note.content;

    return (
      <div className="note-index-item" onClick={this.handleClick}>
        <li>{this.props.note.title}</li>
        <li className="note-index-item-chopped-content">{choppedContent}</li>
        <li>{this.props.note.updated_at}</li>
      </div>
    );
  }
}

export default NoteIndexItem;
