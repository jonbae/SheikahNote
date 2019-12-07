import React from "react";

class TagItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      <div onClick={() => this.props.deleteTagging(this.props.tagging.id)}>
        {this.props.tag.name}
      </div>
    );
  }
}

export default TagItem;
