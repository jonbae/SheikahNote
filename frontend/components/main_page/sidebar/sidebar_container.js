import { connect } from 'react-redux' ; 


import { logout } from "../../../actions/session_actions";
import Sidebar from "./sidebar"

const msp = ({ session, entities:{users}}) => ({
    currentUser: users[session.id] 
}); 

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(msp,mdp)(Sidebar); 