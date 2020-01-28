import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import NormalizeStyles from "./NormalizeStyles";
import BaseStyles from "./BaseStyles";

import Router from './Router';
import Navbar from '../shared/components/layout/Navbar'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NormalizeStyles />
                    <BaseStyles />
                    <Navbar />
                    <Router />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
