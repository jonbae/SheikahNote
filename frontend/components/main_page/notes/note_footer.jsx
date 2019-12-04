import React from "react";
import TagItem from "../tags/tag_item";

class NoteShowFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.addTag = this.addTag.bind(this);
    this.renderTags = this.renderTags.bind(this);
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
        tagging: {
          note_id: this.props.note.id,
          name: this.state.name
        }
      };
      debugger;
      this.props.createTagging(tagging);
      this.setState({ name: "" });
    }
  }

  renderTags() {
    let tags;
    if (this.props.tags !== undefined && this.props.tags.length !== 0) {
      debugger;
      tags = this.props.tags.map(tag => <TagItem key={tag.id} tag={tag} />);
    }

    return tags;
  }

  render() {
    return (
      <div className="note-show-footer">
        {/* add tag img  */}
        {this.renderTags()}
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
