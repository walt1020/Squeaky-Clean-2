import React, {Component } from 'react';

class Contact extends Component {
constructor(props){
    super(props);
    this.state={
      email: null, 
      body: null
    }
    this.handleInputChange=this.handleInputChange.bind(this);
     this.handleFormSubmit=this.handleFormSubmit.bind(this);
  }
  handleInputChange(event) {
    const name=event.target.name
    const value=event.target.value
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    // alert(`email: ${this.state.email} and body: ${this.state.body}`);

  }

  render() {
    return (
      <section className="container page">
          {//<Jumbotron 
            // title="Contact Us"
            // subTitle="We would love to hear your feedback"
            // description="Thank you for being a customer!"
          ///>
        }
            <form>
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
              <button type="submit" onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </section>
    );
  }
}

export default Contact;