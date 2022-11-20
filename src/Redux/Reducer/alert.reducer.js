import * as Act from "../ActionType";

const initVal ={
    text:"",
    color:""
}

export const alertReducer=(state=initVal,action) =>{
     switch (action.type) {
        case Act.SET_ALERT:
            return {
                ...state,
                text:action.payload.text,
                color:action.payload.color
            }
        case Act.RESET_ALERT:
            return{
                ...state,
                text:"",
                color:""
            }
     
        default:
            return state;
     }
}