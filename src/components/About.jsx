import React, {Component} from "react";
import {Link} from "react-router";

//links
import Menu from "./Menu.jsx";

class About extends Component {
	render() {
		return (
			<div className="container">
				<Menu />
				<div>About content</div>
			</div>
		);	
	}
}

export default About;