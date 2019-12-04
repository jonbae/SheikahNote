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
    this.props.requestAllTaggings();
  }

  render() {
    let tags;
    if (this.props.tags !== undefined && this.props.tags.length !== 0) {
      tags = sortTagsByAlphabeticalOrder(this.props.tags).map(tag => {
        // console.log(tag.noteIds.length - 1);
        debugger;
        return (
          <Link
            to={`/app/tags/${tag.id}/notes/${tag.noteIds[
              tag.noteIds.length - 1
            ]}`}
          >
            {tag.name}
          </Link>
        );
      });
    }

    return (
      <div className="tag-index-frame">
        <ul className="tag-index-list">
          {tags}
        </ul>
        <div>THIS IS THE TAG INDEX</div>
      </div>
    );
  }
}

export default TagIndex;
