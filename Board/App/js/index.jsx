import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./components/App";
import { BrowserRouter as Router, Route } from 'react-router-dom'

render(
    <Router>
        <Provider store={store}>
            <App/>         
        </Provider>
    </Router>,
    document.getElementById("content")
);


 