
import {applyMiddleware, combineReducers, createStore} from "redux";
import {mainReducer} from "./Reducers/MainReducer";
import thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
        main: mainReducer
})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppDispatchType = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export type InferActionTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
export default store;