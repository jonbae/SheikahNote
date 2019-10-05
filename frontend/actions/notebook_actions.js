import * as APIUtil from "../util/notebook_api_util" 

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS"; 

export const receiveAllNotebooks = notebooks => ({
    type: RECEIVE_NOTEBOOKS, 
    notebooks, 
})

export const requestAllNotebooks = () => dispatch => (
    APIUtil.fetchAllNotebooks().then( 
        notebooks => dispatch(receiveAllNotebooks(notebooks)) )
); 

