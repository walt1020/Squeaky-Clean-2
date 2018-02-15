import React, {Component } from 'react';
import axios from 'axios';

class Schedule extends Component {

  constructor(props){
    super(props);
    this.state={
      date: null, 
      time: null,
      address: null,
      car: null,
      plate: null,
    }
    this.handleChange=this.handleChange.bind(this);
     this.formSubmit=this.formSubmit.bind(this);
  }
  handleChange(event){
  const name=event.target.name;
  const value=event.target.value;  
  // console.log(name, value, this.state);
    this.setState({
      [name]:value
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
      <div className='page'>
	      <div className="bootstrap-iso">
	      <h1> Book your appointment with our Mobile Detailing Team!</h1>
	          <div className="container-fluid washPackages row col-xs-8 col-xs-offset-2">
	            <div className="form-group"> 
	              <label className="control-label" htmlFor="date"><br />Step 1: Select a Date: </label>
	              <input className="date" name="date" type="date"  defaultValue={new Date()} onChange={this.handleChange} />
	            </div>
	              <label className="control-label" htmlFor="date">Step 2: Select a Time: (hh:mm:pm/am)  </label>
	              <input type="time"  name="time" onChange={this.handleChange}/>
	            
	            <div className="form-group">
	              <p>*Note that for same day appointment, <br /> scheduling will have to be prior to 2pm.</p>
              </div>
	            <div>     
	              <label className="control-label" htmlFor="address">Step 3: Provide the location of your vehicle:  </label>
	              <input type="address" name= "address" onChange={this.handleChange} />
              </div>
	          <br/>
	          
	          <div>  
	            <label className="control-label" htmlFor="car">Step 4: Provide the make, model,color of your vehicle:  </label>
	            <input type="car" name="car" onChange={this.handleChange} />
	          </div>
	            <br/>

	          <div>  
	            <label className="control-label" htmlFor="plate">Step 5: Vehicle license plate number:  </label>
	            <input type="plate" name="plate" onChange={this.handleChange} />
	          </div>
	          <br/>



	        </div> 
	      </div>
	   
      <div className="col-xs-4 table-bordered" >
            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
              <h3>Squeaky Clean $45</h3>
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="DUHW64YWZSHGS" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" onClick={this.formSubmit} />
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
      </div>

      <div className="col-xs-4 table-bordered" >            
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <h3>Squeaky Deluxe $60</h3>
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="W89VCS7TQ2WQW" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" onClick={this.formSubmit} />
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
      </div>
          <div className="col-xs-4 table-bordered" >            
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <h3>Squeaky Deluxe $80</h3>
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="W89VCS7TQ2WQW" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" onClick={this.formSubmit} />
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>  
      </div>      
    </div>
  
    );
  }
}

export default Schedule;