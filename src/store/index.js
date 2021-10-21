import {createStore, applyMiddleware, compose } from "redux"
import mainReducer from "./reducers"
import initialState from "./reducers"
import thunk from 'redux-thunk'
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = createStore(mainReducer, initialState)
export default configureStore