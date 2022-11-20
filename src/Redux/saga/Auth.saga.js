import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { forgotPasswdAPI, googleSigninAPI, resetPasswordAPI, SignInApi, SignInAPI, signOutAPI, SignupApi, userApi } from '../../APIs/authAPi';
import { setAlert } from '../action/alert.action';
import { logedOutAction, SignedInAction } from '../action/auth.action';
import * as Act from '../ActionType'


function* signUpsaga(action) {
    try {
       const user = yield call(SignupApi, action.payload);
    //    yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* signInsaga(action) {
    try {
       const user = yield call(SignInApi, action.payload);
       console.log(user);
    //    yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* googleSignInsaga(action){
    try{
       const user = yield call(googleSigninAPI);
       yield put(SignedInAction(user));
       console.log(action.payload);
       yield put(setAlert({text:"Login in successfully",color:"success"}))
       
    }catch(e){
       console.log(e);
       // yield put({type:"USER_FETCH_FAILED",message:e.message})
       yield put(setAlert({text:e, color:"error"}))
       
 
    }
 }
 
 function* signOutsaga(action){
    console.log(action,"action Done");
    try{
       const user=yield call(signOutAPI,action.payload);
       console.log(user);
       yield put(logedOutAction())
       yield put(setAlert({text:user,color:"success"}))
    }catch(e){
       console.log(e);
       yield put(setAlert({text:e, color:"error"}))
    }
 }
 
 function* resetPasswordsaga(action){
    try{
       const user=yield call(resetPasswordAPI,action.payload);
       yield put(setAlert({text:user,color:"success"}))
    }catch(e){
       yield put(setAlert({text:e,color:"error"}))
    }
 }
 


function* WatchsignUpsaga() {
    yield takeEvery(Act.SIGNUP_USER, signUpsaga);
}

function* WatchsignInsaga() {
    yield takeEvery(Act.SIGNIN_USER, signInsaga);
}

function* watchGoogleSignin(){
    yield takeEvery(Act.GOOGLE_SIGN_USER,googleSignInsaga)
 }
 
 function* watchlogOut(){
    yield takeEvery(Act.SIGNOUT_USER,signOutsaga)
 }
 function* watchResetPassword(){
    yield takeEvery(Act.RESET_PASSWORD,resetPasswordsaga)
 }

export function* WatchAuth(){
    yield all([
        WatchsignUpsaga(),
        WatchsignInsaga(),
        watchlogOut(),
        watchGoogleSignin(),
        watchResetPassword()
    ]);
}