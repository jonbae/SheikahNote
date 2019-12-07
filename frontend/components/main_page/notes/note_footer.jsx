import React from "react";
import TagItem from "../tags/tag_item";
import { selectTaggingFromTag } from "../../../reducers/selectors";
// import isEqual from "lodash.isequal";

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

  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(prevProps.taggings) !== JSON.stringify(this.props.taggings)
    ) {
      debugger;
      this.props.requestAllTags();
    }
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
      this.props.createTagging(tagging);
      this.setState({ name: "" });
      // this.props.requestAllTags();
    }
  }

  renderTags() {
    let tags;
    if (this.props.tags !== undefined && this.props.tags.length !== 0) {
      // debugger;
      tags = this.props.tags.map(tag =>
        <TagItem
          key={tag.id}
          tag={tag}
          note={this.props.note}
          // taggingIds={this.props.note.taggingIds}
          tagging={selectTaggingFromTag(this.props.taggings, tag)}
          deleteTagging={this.props.deleteTagging}
        />
      );
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
