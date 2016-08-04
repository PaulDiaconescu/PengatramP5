"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {

    var style = {
      background: 'rgba(192,192,192,0.3)',
      border: 'ridge',
      borderColor: 'rgba(204,204,204,0.1)'
    };

    var style1 = {
      color: "#ffffff"
    };

		return (

        <nav className="navbar navbar-default" style={style}>
          <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li><Link to="app" style={style1}>Home</Link></li>
                <li><Link to="about" style={style1}>About</Link></li>
                <li><Link to="homePage" style={style1}>Home Page</Link></li>
                <li><Link to="photo" style={style1}>Photo</Link></li>
              </ul>
          </div>
          <span className="navbar-right">PENTAGRAM</span>
        </nav>
		);
	}
});

module.exports = Header;

