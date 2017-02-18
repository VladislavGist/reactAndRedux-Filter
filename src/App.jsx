import React, {Component} from "react";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import "./styles/styles.sass";
import "./styles/base.sass";
import "./App.sass";

//redux
import {connect} from "react-redux";

injectTapEventPlugin();

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
					<div>
						<input type="text" ref="inputRef" />
						<button onClick={this.addTrack}>Add trask</button>
					</div>
					<div>
						<input type="text" ref="inputSearchRef" />
						<button onClick={this.findTrack}>Find trask</button>
					</div>
					<ul>
						{
							this.props.tracks.map((elem, idx) => {
								return (
									<li key={idx}>{elem.name}</li>
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

export default connect(state => ({
	tracks: state.tracks.filter(track => track.name.includes(state.findTrack))
	}), dispatch => ({
	onAddTrack: (trackName) => {
		const payload = {
			id: Date.now().toString(),
			name: trackName
		};
		dispatch({type: "ADD_TRACK", payload})
	},
	onFindTracks: (trackName) => {
		dispatch({type: "FIND_TRACK", payload: trackName})
	}
}))(App);