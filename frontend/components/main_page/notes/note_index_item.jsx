import React from "react";

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <li>{this.props.note.title}</li>
        <li>{this.props.note.content}</li>
      </>
    );
  }
}

export default NoteIndexItem;
