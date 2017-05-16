const SET_USER = 'SET_USER'

import axios from 'axios'
import store from '../store.js'
const initialState = {
    user:undefined
}

export function login(){
    console.log('hitting me');
    store.dispatch({type:SET_USER})
}
export default function userReducer(state = initialState, action){
    console.log(state, action);
    switch (action.type) {
        case SET_USER:
            axios.get('https://randomuser.me/api/').then(res=>{
                console.log(res)
                return res.data
            }
        )
        break;
        default: return state;

    }
}
