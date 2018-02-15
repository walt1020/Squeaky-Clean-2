import React, {Component } from 'react';
import Jumbotron from './jumbotron/jumbotron';
import axios from 'axios';

class Contact extends Component {
constructor(props){
    super(props);
    this.state={
      email: null, 
      body: null
    }
    this.handleInputChange=this.handleInputChange.bind(this);
     this.formSubmit=this.formSubmit.bind(this);
  }
  handleInputChange(event) {
    const name=event.target.name
    const value=event.target.value
    this.setState({
      [name]: value
    })
  }

    formSubmit() {
    axios.post("/service",this.state).then(
        (res)=>{
            alert(res.data)
        }
      );
  }  

  render() {
    return (
      <section className="container page">
          <Jumbotron 
             title="Contact Us"
            subTitle="We would love to hear your feedback"
            description="Thank you for being a customer!"
          />
        
            
              <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email"
                      value={this.state.email}
                        className="form-control"
                        name="email"
                        id="exampleFormControlInput1"
                        onChange={this.handleInputChange}
                        placeholder="name@example.com" />
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Enter your comment here.</label>
                <textarea className="form-control"
                          name="body"
                          value={this.state.body}
                          id="exampleFormControlTextarea1"
                          onChange={this.handleInputChange}
                          rows="3"></textarea>
              </div>
              <button  onClick={this.formSubmit}>Submit</button>
            
          </section>
    );
  }
}

export default Contact;