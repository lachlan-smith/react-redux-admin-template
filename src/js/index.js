// src/js/index.js

import React from "React";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import App from "./components/App/App";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>,
    </Provider>,
    document.getElementById("root")
);
