import React from "react";
import { sortTagsByAlphabeticalOrder } from "../../../util/tags_util";
import { Link } from "react-router-dom";

class TagIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestAllTags();
    // debugger;
    this.props.requestAllTaggings();
    this.forceUpdate();
  }

  render() {
    let tags;
    if (this.props.tags !== undefined && this.props.tags.length !== 0) {
      // debugger;
      tags = sortTagsByAlphabeticalOrder(this.props.tags).map(tag => {
        return (
          <Link
            to={`/app/tags/${tag.id}/notes/${tag.noteIds[
              tag.noteIds.length - 1
            ]}`}
            key={tag.id}
          >
            {tag.name}
          </Link>
        );
      });
    }

    return (
      <div className="tag-index-frame">
        <ul className="tag-index-list">{tags}</ul>
        <div>THIS IS THE TAG INDEX</div>;
      </div>
    );
  }
}

export default TagIndex;
