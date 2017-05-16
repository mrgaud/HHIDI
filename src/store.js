import { applyMiddleware, createStore } from 'redux';

import promiseMiddleware from 'redux-promise-middleware';

import user from './ducks/user.js';

export default createStore ( user, undefined, applyMiddleware(promiseMiddleware()) );
