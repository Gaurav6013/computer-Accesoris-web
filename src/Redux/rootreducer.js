import { combineReducers } from "redux";
import { alertReducer } from "./Reducer/alert.reducer";
import { authreducer } from "./Reducer/reducer.auth";



export const rootreducer =combineReducers({
    auth:authreducer,
    alert:alertReducer,
});