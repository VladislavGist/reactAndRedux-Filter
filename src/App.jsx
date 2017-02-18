import React, {Component} from "react";
import {Link} from "react-router";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import "./styles/styles.sass";
import "./styles/base.sass";
import "./App.sass";

//redux
import {connect} from "react-redux";

//actions
import {getTracks} from "./actions/tracks.jsx";

//links
import Menu from "./components/Menu.jsx";

class App extends Component {
	addTrack = () => {
		this.props.onAddTrack(this.refs.inputRef.value);
		this.refs.inputRef.value = "";
	}

	findTrack = () => {
		this.props.onFindTracks(this.refs.inputSearchRef.value)
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="container">
					<Menu />
					<div>
						<input type="text" ref="inputRef" />
						<button onClick={this.addTrack}>Add trask</button>
					</div>
					<div>
						<input type="text" ref="inputSearchRef" />
						<button onClick={this.findTrack}>Find trask</button>
					</div>
					<div>
						<button onClick={this.props.onGetTracks}>Get tracks</button>
					</div>
					<ul>
						{
							this.props.tracks.map((elem, idx) => {
								return (
									<li key={idx}>
										<Link to={`/track/${elem.id}`}>{elem.name}</Link>
									</li>
								);
							})
						}
					</ul>
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default connect((state, ownProps) => ({
	tracks: state.tracks.filter(track => track.name.includes(state.findTrack)),
	ownProps
	}), 
	dispatch => ({
		onAddTrack: (trackName) => {
			const payload = {
				id: Date.now().toString(),
				name: trackName
			};
			dispatch({type: "ADD_TRACK", payload})
		},
		onFindTracks: (trackName) => {
			dispatch({type: "FIND_TRACK", payload: trackName})
		},
		onGetTracks: () => {
			dispatch(getTracks());
		}
	})
	)(App);