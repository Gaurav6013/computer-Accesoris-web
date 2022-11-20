import { all } from "redux-saga/effects";
import { WatchAuth } from "./Auth.saga";



export function* rootsaga(){
    yield all([
        WatchAuth(),
    ])
}