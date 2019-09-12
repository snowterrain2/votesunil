import React from "react";
import './MyForm.css';

const inputParsers = {
  date(input) {
    const [month, day, year] = input.split('/');
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};


class MyForm extends React.Component  {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={};
  }

  handleSubmit(event) {
    if (!event.target.checkValidity()) {
      this.setState({ displayErrors: true });
      return;
    }
    this.setState({ displayErrors: false });

    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    for (let name of data.keys()) {
      const input = form.elements[name];
      const parserName = input.dataset.parse;

      if (parserName) {
        const parser = inputParsers[parserName];
        const parsedValue = parser(data.get(name));
        console.log("Parsed Name"+parserName);
        data.set(name, parsedValue);
      }
    }
    
    

    this.setState({
      //res: stringifyFormData(data),
      res: 'Thank You for Joining Sunil!',
      invalid: false,
      displayErrors: false,
      email:'',
      name:''
    });

   

    /* fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    }); */
  }

  
    render() {
      const { res, invalid } = this.state;
      return (

        <div class="col-md pr-md-12 mb-12">
        <form onSubmit={this.handleSubmit} >
            <div class="form-group">
                <input type="submit" class="btn btn-primary" value="JOIN SUNIL"/>
              </div>
          <div class="form-group">
            <label for="name" class="sr-only">Name</label>
            <input type="text" name="username" class="form-control bg-custom-1" id="name" placeholder="Enter your name" data-parse="uppercase" value={this.state.name}/>
          </div>
          <div class="form-group">
          
            <label for="inputValidationEx" data-error="Please enter valid email" data-success="right"></label>

            <input type="email" name="email" class="form-control" id="email" placeholder="Enter your email" value={this.state.email}/>
          </div>
          <div class="form-group">
         {res}
        
        </div>
       
         
         
        </form>
      </div>
  
  
      
  
      
    );
  }
}

function stringifyFormData(fd) {
  const data = {};
	for (let key of fd.keys()) {
  	data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}
  export default MyForm;