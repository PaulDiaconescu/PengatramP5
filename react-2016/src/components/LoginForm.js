"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RegisterForm = require('./RegisterForm');
var Input = require('./common/textInput');



var LoginForm = React.createClass({
	render: function() {

        var stylee = {
            background: 'rgba(192,192,192,0.3)',
            border: 'solid',
            borderColor: 'rgba(204,204,204,0.2)'
        };

        var style1 = {
                width: "280"
        };
        
        document.body.style.backgroundImage = "url('City.jpg')";
        document.body.style.backgroundPosition = "top center";
        
        return (
                <div style={stylee}>
                <form>
                        
                        <center><img src="pentagram.png" width="280" height="100"></img></center>

                        <br></br> <br></br>
                        <label htmlFor="Username">Username:</label>
                        <input type="text" name="Username"
                        className="form-control"
                        onChange={this.props.OnChange}
                        value = {this.props.Username}
                        placeholder="Username"
                        />
                        <br />

                        <label htmlFor="Password">Password:</label>
                        <input type="password"
                        name="Password"
                        className="form-control"
                        onChange={this.props.OnChange}
                        value = {this.props.Username}
                        placeholder="Password"
                        />
                        <br />
                        
                        <input type="submit" value="Login" className="btn btn-default" style={style1}/>


                        <Link to = "Register">
                        <label htmlFor="Register">If you don't have an account register here.</label>
                        </Link>
                </form>
                </div>
            
		);
	}
});

module.exports = LoginForm;