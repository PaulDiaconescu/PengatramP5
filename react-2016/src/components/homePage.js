"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({

	render: function() {

		document.body.style.backgroundImage = "url('City.jpg')";

		var style = {
			height: "720px",
			background: 'rgba(255,255,255,0.8)',
			padding: "30px"
		};

		return (
			<div className="jumbotron" style={style}>
				<h1>Home Page/Feed</h1>
				<p>TBD</p>
				<Link to="app" className="btn btn-primary btn-lg">Go Home</Link>
			</div>
		);
	}
	
});

module.exports = Home;