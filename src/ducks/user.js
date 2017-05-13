import axios from 'axios'
const initialState={
    user:'fish'
};
const SET_USER = 'SET_USER';
export function login(){
    axios.get('https://jsonplaceholder.typicode.com').then(res=>console.log(res))
};

export default function user(state = initialState, action){
    switch (action.type) {
        default: return state;
    }
};
