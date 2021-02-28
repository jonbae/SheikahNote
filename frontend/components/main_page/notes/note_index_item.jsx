import React from "react";
import moment from "moment";
import {formatTime} from "../../../util/time_util"

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

  noteSnippet() {
    const noteText = "<div>" + this.props.note.content + "</div>";
    let plaintext = $(noteText).text().substring(0, 79);

    if (noteText.length > 80) {
      plaintext += "...";
    }
    // debugger;
    return plaintext;
  }

  timeFormat(time) {
    return formatTime(time)
  }

  render() {
    // let plainText = this.props.note.content
    //   ? $(this.props.note.content).text()
    //   : "";

    // const choppedContent =
    //   plainText.length > 60 ? plainText.slice(0, 60) + "..." : plainText;
    let dt = this.props.note.updated_at;

    return (
      <div className="note-index-item" onClick={this.handleClick}>
        <li>
          {this.props.note.title}
        </li>
        <li className="note-index-item-chopped-content">
          {this.noteSnippet()}
        </li>
        <li>
          {this.timeFormat(dt)}
        </li>
      </div>
    );
  }
}

export default NoteIndexItem;
