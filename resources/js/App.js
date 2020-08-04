import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import AppRoute from './route/AppRoute';

function App() {
    return (
        <BrowserRouter >
            <AppRoute />
        </BrowserRouter >
    );
}

export default App;
