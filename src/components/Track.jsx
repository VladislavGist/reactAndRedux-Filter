import React, {Component} from "react";

//react-redux
import {connect} from "react-redux";

//links
import Menu from "./Menu.jsx";

class Track extends Component {
	constructor(trask) {
		super(trask);
		this.fullObject = trask
	}

	render() {
		console.log(this.fullObject);
		return (
			<div className="container">
				<Menu />
				<p>Track content</p>
				<p>{this.fullObject.trask.name}</p>
			</div>
		);	
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		trask: state.tracks.find(track => track.id === ownProps.params.id)
	};
};

export default connect(mapStateToProps)(Track);