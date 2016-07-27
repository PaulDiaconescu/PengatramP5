"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var LoginForm = require('./LoginForm');
var RegisterForm = require('./RegisterForm');


var Register = React.createClass({
    getInitialState: function() {
          return {
              username: null
            , password: null
            , email: null
          };
        }
        , userChangeHandler: function(event) {
            this.setState({username: event.target.value});
        }

        , passwordChangeHandler: function(event) {
            this.setState({password: event.target.value});
        }

        , passwordValidChangeHandler: function (event) {
            this.setState({passwordValid: event.target.value});
        }

        , emailChangeHandler: function(event) {
            this.setState({username: event.target.value});
        }

        , formSubmitHandler: function(event) {
            event.preventDefault();
            console.log(this.state);
            $.ajax({
              url: 'http://127.0.0.1:8000/api/v1/users/'
              , type: 'POST'
              , data: this.state
            }).then(function(data) {
              sessionStorage.setItem('authToken', data.token);
              //redirect to homepage
            }),
        
        }
        
        , render: function() {
		//noinspection JSDuplicatedDeclaration
        var styles = {
            backgroundImage: "none",
            fontSize: 15,
            width: "290px",
            height: "330px",
            color: "#ffffff"
        };

		return (

            <center>
            <div className="Register Form" style={styles}>

				<RegisterForm />
			</div>
             </center>
		);
	}
});



module.exports = Register;

