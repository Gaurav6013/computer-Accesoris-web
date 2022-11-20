import { useSelector } from "react-redux";
import auth from "../Redux/rootreducer";

const IsLogin =() =>{
    const userDone = useSelector(state=>state.auth)
    console.log(userDone);
       if(userDone!== null){
         return true;
       }else{
         return false;
       }
}

export default IsLogin;