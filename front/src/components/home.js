import React, {Component } from 'react';
import {Link} from 'react-router-dom';
class Home extends Component {
render() {
  return (
      <div className="home page">

     <h1>About Us</h1>
     <p>Squeaky clean is a mobile car wash service. Our mobile team will come to you to provide our outstanding car detailing service.  Booking is simple. All we need is a location and your keys!</p>

      <p> Check out our <Link to="/packages"> packages</Link> to learn more about our services.</p>

      </div>
    );
  }
}

export default Home;