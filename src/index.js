import ReactDOM from "react-dom";
import React from "react";
import {Router, Route, hashHistory} from "react-router";

import Component from "./components/Component.jsx";
import App from "./App.jsx";

//redux
import {Provider} from "react-redux";
import {createStore} from "redux";

//combineReducer
import combineReducers from "./reducers/index.jsx";

const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<Route path="/component" component={Component} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById("app")
);