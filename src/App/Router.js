import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignUp from '../shared/components/auth/SignUp';
import SignIn from '../shared/components/auth/SignIn';


const Router = () => {
    return (
        <div>
            <Switch>
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
            </Switch>
        </div>
    )
};

export default Router;