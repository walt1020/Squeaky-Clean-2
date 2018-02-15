import React, {Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Authenticated from './auth';
import NoPage from './components/404';
import Contact from './components/contact';
import Header from './components/header';
import Home from './components/home';
import Packages from './components/packages';
import Schedule from './components/schedule';
import Tech from './components/tech';
import Login from './components/login';

class App extends Component {
constructor(props) {
  super(props)

  this.state = {
  	user: null,
  	err: null,
  	email: null,
  	password: null
  }
  this.formSubmit = this.formSubmit.bind(this);
  this.authenticated = this.authenticated.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
authenticated() {
	if(this.state.user) {
		return <Authenticated />
	} else {
		return <Login formSubmit={this.formSubmit} handleChange={this.handleChange} />
	}
}
handleChange(event) {
	const name = event.target.name;
	const value = event.target.value;

	this.setState({
		[name]: value
	});
}
formSubmit(type) {

	switch(type) {
		case 'login':
			axios.post('/login', this.state).then(
				(res) => {
					if(res.data.err) {
						this.setState({
							err: res.data.err
						})
					} else {
						this.setState({
							user: res.data.success
						})
					}
				}
			);
			break;

		case 'signup':
			axios.post('/signup', this.state).then(
				(res) => {
					if(res.data.err) {
						this.setState({
							err: res.data.err
						})
					} else {
						this.setState({
							user: res.data.success
						})
					}
				}
			);
			break;

		default: 
			return false
	}
}
render() {
  return (
     <div className="app">

     	{this.authenticated()}

  	</div>
    );
  }
}

export default App;

