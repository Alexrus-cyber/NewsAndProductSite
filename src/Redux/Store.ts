import {applyMiddleware, combineReducers, createStore} from "redux";
import {mainReducer} from "./Reducers/MainReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";

let rootReducer = combineReducers({
        main: mainReducer,
        form: formReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppDispatchType = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export type InferActionTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
export default store;