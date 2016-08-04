"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RegisterForm = require('./RegisterForm');
var Input = require('./common/textInput');



var LoginForm = React.createClass({

        getInitialState: function () {
        return {
            username: null,
            password: null
        };
    }
    , userChangeHandler: function (event) {
        this.setState({username: event.target.value});
    },
    passwordChangeHandler: function (event) {
        this.setState({password: event.target.value});
    },
    formSubmitHandler: function (event) {
        event.preventDefault();
        console.log(this.state);
        $.ajax({
            url: 'http://127.0.0.1:8000/api/v1/login/'
            , type: 'POST'
            , data: this.state
            // , error: function(response) {
			// 	console.log(response.responseText.JSON);
			// }
			, error: function(xhr, textStatus, errorThrown) {
					var json = JSON.parse(xhr.responseText);
					for (var prop in json) {
						alert(prop + "  " + json[prop]);
					}
			}
        }).then(function (data) {
            sessionStorage.setItem('authToken', data.token);
			sessionStorage.setItem('user_id', data.id);
            Router.HashLocation.push("photo");
            //redirect to homepage
        });
    },

	render: function() {

        var stylee = {
            background: 'rgba(192,192,192,0.3)',
            border: 'solid',
            borderColor: 'rgba(204,204,204,0.2)'
        };

        var style1 = {
                width: "285"
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
                        placeholder="Username"
                        onChange={this.userChangeHandler}
                        />
                        <br />

                        <label htmlFor="Password">Password:</label>
                        <input type="password"
                        name="Password"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.passwordChangeHandler}

                        />
                        <br />
                        
                        <button className="btn btn-default " value="Login" style={style1} name="submit" onClick={this.formSubmitHandler}>Login</button>


                        <Link to = "Register">
                        <label htmlFor="Register">If you don't have an account register here.</label>
                        </Link>
                </form>
                </div>
            
		);
	}
});

module.exports = LoginForm;