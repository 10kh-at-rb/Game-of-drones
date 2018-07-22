import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom'

class TopBar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
				<Link className="navbar-brand active-label bold-white" to="/">Game Of Drones</Link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav">
						<li class="nav-item">
							<Link className="navbar-brand" to="/">Home</Link>
						</li>
						<li class="nav-item ">
							<Link className="navbar-brand" to="/history">Match History</Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default TopBar;