"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
//var Input = require('./common/textInput');

var RegisterForm = React.createClass({
        setInitialState: function() {
          return {
              username: null,
              password: null,
              email: null
          };
        }
         , userChangeHandler: function(event) {
            this.setState({username: event.target.value});
        }

        , passwordChangeHandler: function(event) {
            this.setState({password: event.target.value});
        }
         , emailChangeHandler: function(event) {
            this.setState({email: event.target.value});
        }

         , formSubmitHandler: function(event) {
            event.preventDefault();
            console.log(this.state);

            $.ajax({
              url: 'http://localhost:8000/api/v1/users/'
              , type: 'POST'
              , data: this.state
              , error: function (response){
                    console.log(response.responseJSON.username[0]);
                }
            }).then(function(data) {
                sessionStorage.setItem('authToken', data.token);
                Router.HashLocation.push('loginForm');
              //sessionStorage.setItem('authToken', data.token);
              //redirect to homepage
            });
        
        },

	render: function() {

        document.body.style.backgroundImage = "url('City.jpg')";
        document.body.style.backgroundPosition = "top center";

        var stylee = {
            background: 'rgba(192,192,192,0.3)',
            border: 'solid',
            borderColor: 'rgba(204,204,204,0.2)'
        };

        var style1 = {
                width: "285"
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
                        placeholder="Username"
                        onChange={this.userChangeHandler}
                        />

                        <label htmlFor="Password">Password:</label>
                        <input type="password"
                        name="Password"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.passwordChangeHandler}
                        />
                        
                        <label htmlFor="E-mail">E-Mail:</label>
                        <input type="text"
                        name="E-mail"
                        className="form-control"
                        placeholder="E-Mail"
                        onChange={this.emailChangeHandler}
                        />

                        <br />

                        <button name="submit" className="btn btn-default" style={style1} onClick={this.formSubmitHandler}>Register</button>

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