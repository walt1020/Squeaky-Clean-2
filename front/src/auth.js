import React, {Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoPage from './components/404';
import Contact from './components/contact';
import Header from './components/header';
import Home from './components/home';
import Packages from './components/packages';
import Schedule from './components/schedule';
import Tech from './components/tech';
import Login from './components/login';

class Authenticated extends Component {
constructor(props) {
  super(props)
}
render() {
  return (
     <div className="auth">

      <Router>

      <div>

        <Header />

        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/packages" component={Packages} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/tech" component={Tech} />
          <Route path="*" component={NoPage} />

        </Switch>

        </div>

      </Router>

  	</div>
    );
  }
}

export default Authenticated;

