import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import NormalizeStyles from "./NormalizeStyles";
import BaseStyles from "./BaseStyles";

import Router from "./Router";
import Navbar from "../shared/components/layout/Navbar";

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <NormalizeStyles />
                    <BaseStyles />
                    <Navbar />
                    <Router />
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;
