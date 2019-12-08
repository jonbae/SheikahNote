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
      // debugger;
      //   Object.keys(obj).forEach(key=>{
      //     console.log(`${key} : ${obj[key]}`);
      //  });
      console.log(this.props.tagObj);
      tags = Object.keys(this.props.tagObj).map(key => {
        let tagListItems = this.props.tagObj[key].map(tag => {
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
        return (
          <ul key={key}>
            <li>
              {key}
            </li>
            <ul>
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
        <div className="tag-index-header">Tags</div>
        <ul className="tag-index-list">
          {tags}
        </ul>
      </div>
    );
  }
}

export default TagIndex;
