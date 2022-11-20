import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import IsLogin from '../Utility/IsLogin';

function PrivateRoute({component:Component, ...rest}) {
    return (
        <div>
            <Route {...rest} render={props =>(
                IsLogin()?
                <Component {...props}/>
                :
                <Redirect to={"/Login"}/>
            )}
             />
        </div>
    );
}

export default PrivateRoute;