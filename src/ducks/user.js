const SET_USER = 'SET_USER'

import axios from 'axios'
import store from '../store.js'
const initialState = {
	user: undefined
}

export function login( email, password ) {
	console.log( 'hitting me' );
	store.dispatch({ email, password, type: SET_USER })
}
export default function userReducer( state = initialState, action ) {
	console.log( state, action );
	switch ( action.type ) {
		case SET_USER:

			return {
				user: axios.get( 'https://randomuser.me/api/' ).then(res => {
					console.log( res.data )
					return res.data.results[0]
				})
			}
			break;
		default:
			return state;

	}
}
