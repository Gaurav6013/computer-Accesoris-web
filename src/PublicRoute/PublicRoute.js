import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import IsLogin from '../Utility/IsLogin';

function PublicRoute({component:Component, restricted=false, ...rest}) {
    return (
        <div>
            <Route {...rest} render={props=>(
                IsLogin() && restricted?
                <Redirect to={"/"}/>
                :
                 <Component {...props}/>
            )}
            />
        </div>
    );
}

export default PublicRoute;