import * as Act from '../ActionType'


export const SignUpAction =(values)=>(dispatch)=>{
   dispatch({type:Act.SIGNUP_USER,payload:values})
}

export const SignInAction =(values) =>(dispatch)=>{
   dispatch({type:Act.SIGNIN_USER,payload:values})
}
export const SignedInAction = (values) =>(dispatch) => {
    dispatch({type:Act.SINGEDIN_USER, payload:values})
}
export const logOutAction = () => (dispatch) =>{
    dispatch({type:Act.SIGNOUT_USER});
}

export const logedOutAction = () => (dispatch) => {
    dispatch({type:Act.SIGNEDOUT_USER})
}
// export const googleSignInAction = () =>(dispatch) => {
//     dispatch({type:Act.GOOGLE_SIGN_USER})
// }

export const resetPasswordAction = (mail) => (dispatch) => {
   dispatch({type:Act.RESET_PASSWORD,payload:mail})
}