import { connect } from "react-redux";
import { sortTagsByAlphabeticalOrder } from "../../../util/tags_util";

import {
  requestAllTags,
  requestAllTaggings
} from "../../../actions/tag_action";

import { selectAllTags } from "../../../reducers/selectors";

import TagIndex from "./tag_index";

const msp = (state, ownProps) => {
  // const alphabet = ["a", "b", "c", "co", "ho", "hy"];
  // let alphabetObject = {};
  // alphabet.forEach(word => {
  //   if (alphabetObject[word[0]] === undefined) {
  //     Object.assign(alphabetObject, { [word[0]]: [word] });
  //   } else {
  //     alphabetObject[word[0]].push(word);
  //   }
  // });
  // console.log(alphabetObject);
  let tags = sortTagsByAlphabeticalOrder(selectAllTags(state));
  let tagObj = {};
  if (tags) {
    tags.forEach(tag => {
      if (tagObj[tag[0]] === undefined) {
        Object.assign(tagObj, { [tag.name[0]]: [tag] });
      } else {
        tagObj[tag.name[0]].push(tag);
      }
    });
  }
  return {
    tags,
    tagObj
  };
};

const mdp = dispatch => {
  debugger;
  return {
    requestAllTaggings: () => dispatch(requestAllTaggings()),
    requestAllTags: () => dispatch(requestAllTags())
  };
};

export default connect(msp, mdp)(TagIndex);
