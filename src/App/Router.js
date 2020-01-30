import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../shared/components/auth/Register";
import Login from "../shared/components/auth/Login";

const Router = () => {
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register/:inviteToken" component={Register} />
            </Switch>
        </div>
    );
};

export default Router;
