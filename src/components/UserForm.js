import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormCompanyDetails from './FormCompanyDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    name: "",
    username: "",
    street:"",
    city:"",
    suite:"",
    zipcode:"",
    lat:"",
    lng:"",
    email: "",
    phone: "",
    companyname:"",
    catchPhrase:"",
    bs:"",
    address:{geo:{}},
    company:{},
  };
  constructor(props){
    super(props);
    this.fetchData();
  }
  fetchData = async()=> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/'+parseInt(window.location.pathname.split("/").pop()));
    const json = await response.json();
    this.setState(json);
  }
  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  DprevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 2
    });
  };

  // Handle fields change
  handleChange = input => e => {
    if(input.includes(".")){
      const {name, value} = e.target;
      this.setState(() => ({
        [input]: value
      }));
    }
    else{ this.setState({ [input]: e.target.value });}
  };

  render() {
    const { step } = this.state;
    const { name, username, email, phone, street,city,suite,zipcode,lat,lng,companyname,catchPhrase,bs,address,company } = this.state;
    const geo = this.state.company.geo;
    const values = { name, username, email, phone, street,city,suite,zipcode,lat,lng,companyname,catchPhrase,bs,address,company,geo };
    switch (step) {
      case 1:
      return (
        <FormUserDetails
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}
        />
        );
      case 2:
      return (
        <FormCompanyDetails
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        handleChange={this.handleChange}
        values={values}
        />
        );
      case 3:
      return (
        <Confirm
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        DprevStep={this.DprevStep}
        values={values}
        />
        );
      case 4:
      return <Success values={values}/>;
      default:
      (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
