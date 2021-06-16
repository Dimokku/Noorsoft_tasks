import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from "redux-thunk"
import dataReducer from './dataReducer'

let reducers = combineReducers({
    dataState: dataReducer 
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store