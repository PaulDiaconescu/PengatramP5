"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Photo = React.createClass({
	getInitialState: function(){
			return {
				images: [{
					"id": 1,
					"user": 1,
					"photo": "/media/photos/user_testing/aad8d892-574a-11e6-814a-001bfc840b1f_ifM5SVM.jpg"
				}]
		
			};
	},

	componentWillMount: function() {
		var self = this;
		$.ajax({
			url: 'http://127.0.0.1:8000/api/v1/photos/'
			, type: 'GET'
			, error: function(xhr, textStatus, errorThrown) {

			}
		}).then(function(data) {
            self.setState({images: data});
		});
	}

	, onCommentHandler: function(event) {
		var photoId = event.target.dataset.id;
		Router.HashLocation.push('photo/' + photoId);
	}
	, render: function() {

        var style = {
			height: "800px",
			background: 'rgba(255,255,255,0.8)',
			padding: "30px"
		};

        document.body.style.backgroundImage = "url('City.jpg')";
        document.body.style.backgroundPosition = "top center";

		var self = this;
		return (
			<div className="jumbotron" style={style}>
				<div className="row">
					{self.state.images.map(function (item) {
						return (
						<div className="col-md-4 image-frame" key={item.id} >
							<a href={'#/photo/' + item.id}>
								<img src={'http://127.0.0.1:8000' + item.photo} id={'image-' + item.id} data-id={item.id} width="70%" height="70%"/>
							</a>
						</div>
						);
					})}
					</div>
                    <br />
				<button type="button" className="btn btn-primary btn-lg round-btn">+</button>
			</div>
            );
	}

});

module.exports = Photo;