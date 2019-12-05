import React from "react";

class TagItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    debugger;
    console.log(this.props.tag.name);
    return (
      <div>
        {this.props.tag.name}
      </div>
    );
  }
}

export default TagItem;
