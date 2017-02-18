import React, {Component} from "react";
import {Link} from "react-router";

class Menu extends Component {
	render() {
		return (
			<div className="container">
				<Link to="/">Index</Link>
				<Link to="/about">About</Link>
			</div>
		);	
	}
}

export default Menu;