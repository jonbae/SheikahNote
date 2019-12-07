import React from "react";
import { deleteTag } from "../../../actions/tag_action";

class TagItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.removeTag = this.removeTag.bind(this);
  }

  removeTag(tagging) {
    this.props.deleteTagging(tagging);
    debugger;
    if (this.props.tag.taggingIds.length === 0) {
      deleteTag(this.props.tag.id);
    }
    debugger;
  }

  render() {
    // console.log(this.props.tag.name);
    // let deleteId = this.props.taggingIds.find(taggingId => {
    //   console.log(taggingId);
    //   console.log(tag.id);
    //   taggingId === this.props.tag.id;
    // });
    // console.log(deleteId);
    return (
      <div onClick={() => this.removeTag(this.props.tagging)}>
        {this.props.tag.name}
      </div>
    );
  }
}

export default TagItem;
