import * as Act from '../ActionType'

export const setAlert = (values)  => (dispatch) =>  {
    dispatch({type:Act.SET_ALERT ,payload:values});
}

export const resetAlert = () => (dispatch) =>{
    dispatch({type:Act.RESET_ALERT}); 
}
