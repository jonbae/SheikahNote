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

  render() {
    console.log(this.props.note);
    return <input type="text" />;
  }
}

export default NoteShowFooter;
