import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';

import authReducer from './reducers/Auth';

const reducer = combineReducers({
    auth: authReducer
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export  default store;
