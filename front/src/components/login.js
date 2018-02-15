import React, {Component } from 'react';
import axios from 'axios';

class Login extends Component {
render() {
  return (
      <div className="login">

<input type="text" name="email" placeholder="Email" onChange={this.props.handleChange} />
<input type="password" name="password" placeholder="Password" onChange={this.props.handleChange} />

 <button onClick={() =>{this.props.formSubmit('login')}}>LOG-IN</button>

      <br /><br />

  OR...

      <br /><br />

      <input type="text" name="email" placeholder="Email" onChange={this.props.handleChange} />

      <input type="password" name="password" placeholder="Password" onChange={this.props.handleChange} />
      <button onClick={() =>{this.props.formSubmit('signup')}}>SIGN-UP</button>

      </div>
    );
  }
}

export default Login;