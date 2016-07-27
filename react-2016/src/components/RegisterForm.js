"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Input = require('./common/textInput');

var RegisterForm = React.createClass({
	render: function() {

        document.body.style.backgroundImage = "url('City.jpg')";
        document.body.style.backgroundPosition = "top center";

        var stylee = {
            background: 'rgba(192,192,192,0.3)',
            border: 'solid',
            borderColor: 'rgba(204,204,204,0.2)'
        };

        var style1 = {
                width: "280"
        };

        return (
                <div style={stylee}>
		<form>
                        <br></br>
                        <center><img src="register.png" width="280" height="100"></img></center>

                        <br></br>
                        <label htmlFor="Username">Username:</label>
                        <input type="text" name="Username"
                        className="form-control"
                        //onChange={this.userChangeHandler}
                        //value = {this.props.Username}
                        placeholder="Username"
                        onChange={this.userChangeHandler}
                        />

                        <label htmlFor="Password">Password:</label>
                        <input type="password"
                        name="Password"
                        className="form-control"
                        //onChange={this.passwordChangeHandler}
                        //value = {this.props.Username}
                        placeholder="Password"
                        onChange={this.passwordChangeHandler}
                        />
                        
                        <label htmlFor="email">E-Mail:</label>
                        <input type="text"
                        name="email"
                        className="form-control"
                        //onChange={this.emailChangeHandler}
                        //value = {this.props.Username}
                        placeholder="E-Mail"
                        onChange={this.emailChangeHandler}
                        />

                        <br />

                        <Link to = "Login">
                        <button name="submit" className="btn btn-default" style={style1} onClick={this.formSubmitHandler}>Register</button>
                        </Link>

                        <br />

                        <Link to = "Login">
                        <label htmlFor="Register">Take me back to the login page.</label>
                        </Link>

               </form>
               </div>

		);
	}
});

module.exports = RegisterForm;