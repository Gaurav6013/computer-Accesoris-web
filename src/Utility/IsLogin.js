


export const IsLogin = (props) =>{
    let localData =localStorage.getItem("user");
    
    if(localData==="123123"){
        return true;
    }else{
        return false;
    }

}