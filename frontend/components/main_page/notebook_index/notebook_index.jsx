import React from 'react' ;
import { Link } from 'react-router-dom'; 


import NotebookIndexItem from "./notebook_index_detail";
// import NotebookIndexContainer from "./notebook_index_container";
// import { ProtectedRoute } from '../../util/route_util' ; 

class NotebookIndex extends React.Component{ 
    componentDidMount() {
        this.props.requestAllNotebooks(); 
    }
    

    render() {

        const notebooks = this.props.notebooks; 

        return (
            <div className="notebooks-index-frame">

        

                <section className="notebooks-frame" >
                    <ul className="notebooks-list">
                        {notebooks.map( notebook => 
                        <NotebookIndexItem key={notebook.id} notebook={notebook}/>)}
                    </ul>
                </section> 
            </div>
        )


    }


}

export default NotebookIndex; 