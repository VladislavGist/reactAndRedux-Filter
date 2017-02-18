import ReactDOM from "react-dom";
import React from "react";
import {Router, Route, hashHistory} from "react-router";

import Track from "./components/Track.jsx";
import Component from "./components/Component.jsx";
import App from "./App.jsx";
import About from "./components/About.jsx";

//redux
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
//позволяет добавлять сколько угодно middlewaare
import {composeWithDevTools} from "redux-devtools-extension";
//для работы с асинхронными запросами
import thunk from "redux-thunk";
//combineReducer
import combineReducers from "./reducers/index.jsx";

//react-router-redux
import {syncHistoryWithStore} from "react-router-redux";

const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<Route path="/component" component={Component} />
			</Route>
			<Route path="/about" component={About}></Route>
			<Route path="/track/:id" component={Track}></Route>
		</Router>
	</Provider>,
	document.getElementById("app")
);