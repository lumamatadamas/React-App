import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./reduxConfig/store/index";
import App from "./App.js";
import index from "./reduxConfig/index";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
