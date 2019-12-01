import React from "react";
import { sortTagsByAlphabeticalOrder } from "../../../util/tags_util";

// class TagIndex extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={}
//     }

//     render() {
//         if(!this.props.tags){
//             return null
//         }
//         return (
//         <>
//         <div>{this.props.tags}</div>
//         <div>this is the tags index</div>
//         </>
//         )
//     }

// }

class TagIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestAllTags();
    debugger;
    this.props.requestAllTaggings();
  }

  render() {
    let tags;
    if (this.props.tags !== undefined && this.props.tags.length !== 0) {
      debugger;
      tags = sortTagsByAlphabeticalOrder(this.props.tags).map(tag => {
        return (
          <div>
            {tag.name}
          </div>
        );
      });
    }

    return (
      <div className="tag-index-frame">
        <div>{tags}</div>
        <div>THIS IS THE TAG INDEX</div>;
      </div>
    );
  }
}

export default TagIndex;
