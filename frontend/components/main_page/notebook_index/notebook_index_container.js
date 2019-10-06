import {connect} from 'react-redux' ; 


import { logout } from "../../../actions/session_actions";
import { selectAllNotebooks } from '../../../reducers/selectors';
import { requestAllNotebooks } from '../../../actions/notebook_actions' ;
import  NotebookIndex  from "./notebook_index";

const msp = (state, ownProps) => ({
    // const notebookId = parseInt(ownProps.match.params.notebookId); 
    // return (
    //     notebookId
    // );
    notebooks: selectAllNotebooks(state),
});

const mdp = dispatch => ({
    requestAllNotebooks: () => dispatch(requestAllNotebooks()),

})

export default connect(msp,mdp)(NotebookIndex);