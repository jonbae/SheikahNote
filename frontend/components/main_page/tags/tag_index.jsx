import React from "react";

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

    componentDidMount(){
        this.props.requestAllTags()
        debugger
        this.props.requestAllTaggings()
    }

    render() {
        let tags; 
        if(this.props.tags !== undefined) {
            return null
        }

        return (
            <>
                <div>THIS IS THE TAG INDEX</div>
            </>
        )    
    }
}

export default TagIndex;
