import React, {Component } from 'react';
import axios from 'axios';

class Login extends Component {
constructor(props) {
	super(props);

	this.state = {
		email: null,
		password: null,
	}

	this.handleChange = this.handleChange.bind(this);
	this.formSubmit = this.formSubmit.bind(this);
}
handleChange(event) {
	const name = event.target.name;
	const value = event.target.value;

	this.setState({
		[name]: value
	});
}
formSubmit() {
	axios.post('/login', this.state).then(
		(res) => {
			console.log('console');
		}
	);
}
render() {
  return (
      <div className="login">

      <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
      <button onClick={this.formSubmit}>LOG-IN</button>

      </div>
    );
  }
}

export default Login;