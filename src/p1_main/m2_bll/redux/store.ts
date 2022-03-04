import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {Reducer} from "../reducers/reducer";

const fridayReducer = combineReducers({
    xxx: Reducer
})

export type rootReducerType = ReturnType<typeof fridayReducer>

export const store = createStore(fridayReducer,applyMiddleware(thunk))