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
    // let tagObject = {};
    if (this.props.tags !== undefined && this.props.tags.length !== 0) {
      tags = Object.keys(this.props.tagObj).map(key => {
        let tagListItems = this.props.tagObj[key].map(tag => {
          return (
            <li className="tag-index-list-item">
              <Link
                to={`/app/tags/${tag.id}/notes/${tag.noteIds[
                  tag.noteIds.length - 1
                ]}`}
                key={tag.id}
              >
                {tag.name}
              </Link>
              <p>{`(${tag.taggingIds.length})`}</p>
            </li>
          );
        });
        return (
          <ul key={key} className={`tag-index-list-${key.toUpperCase()}`}>
            <li className={`tag-index-list-header-${key.toUpperCase()}`}>
              {key.toUpperCase()}
            </li>
            <ul className={`tag-index-list-items-${key.toUpperCase()}`}>
              {tagListItems}
            </ul>
          </ul>
        );
      });
      // tags = this.props.tags.map(tag => {
      //   return (
      //     <Link
      //       to={`/app/tags/${tag.id}/notes/${tag.noteIds[
      //         tag.noteIds.length - 1
      //       ]}`}
      //     >
      //       {tag.name}
      //     </Link>
      //   );
      // });
    }

    return (
      <div className="tag-index-frame">
        <div className="tag-index-header">
          <p>Tags</p>
        </div>
        <ul className="tag-index-list">
          {tags}
        </ul>
      </div>
    );
  }
}

export default TagIndex;
