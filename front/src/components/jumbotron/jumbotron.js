import React from 'react';
import { Link } from 'react-router-dom'
import './jumbotron.css';

const Jumbotron = props => (
  <div className="jumbotron">
    <h1 className="display-4">{props.title}</h1>
    <p className="lead">{props.subTitle}</p>
    <hr className="my-4" />
    <p>{props.description}</p>
    <p className="lead">
    {props.href && (
      <Link className="btn btn-primary btn-lg" 
      to={props.href} role="button">{props.action}</Link>
    )}
    </p>
  </div>
);

export default Jumbotron;