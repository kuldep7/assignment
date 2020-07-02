import React, { Component } from 'react';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  Dback = e => {
    e.preventDefault();
    let i =1
    this.props.DprevStep();
  };


  render() {
    const {
      values: { name, username, email, phone, street,city,suite,zipcode,lat,lng,companyname,catchPhrase,bs }
    } = this.props;
    return (
      <div className="container mx-auto">
      <div className="w-full text-center text-blue-800 mb-3 font-semibold text-2xl"> Review Data</div>
      <h4 className="text-bold text-xl mb-4">
      Name
      <button className=" ml-3 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-3 rounded-full" onClick={this.Dback}>Edit</button>
      </h4>
      <div className="grid md:grid-cols-4 grid-cols-1 col-gap-2">
      <div className="border p-4 rounded mt-2">Full name: {`${name}`}</div>
      <div className="border p-4 rounded mt-2">Email: {`${email}`}</div>
      <div className="border p-4 rounded mt-2">Phone: {`${phone}`}</div>
      <div className="border p-4 rounded mt-2">Address Street: {`${street}`}</div>
      <div className="border p-4 rounded mt-2">Address Suite: {`${suite}`}</div>
      <div className="border p-4 rounded mt-2">City: {`${city}`}</div>
      <div className="border p-4 rounded mt-2">Zip Code: {`${zipcode}`}
      </div> <div className="border p-4 rounded mt-2">Latitude: {`${lat}`}</div>
      <div className="border p-4 rounded mt-2">Longitude: {`${lng}`}</div>
      </div>
      <h4 className="text-bold text-xl mb-4 mt-3">
      Company Details
      <button className=" ml-3 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-3 rounded-full" onClick={this.back}>Edit</button>
      </h4>
      <div className="grid md:grid-cols-4 grid-cols-1 col-gap-2">
      <div className="border p-4 rounded mt-2">Username: {`${username}`}</div>
      <div className="border p-4 rounded mt-2">Company Name: {`${companyname}`}</div>
      <div className="border p-4 rounded mt-2">Company Catch Phrase: {`${catchPhrase}`}</div>
      <div className="border p-4 rounded mt-2">Company BS: {`${bs}`}</div>
      </div>
      <div className="flex justify-center mt-5 mb-5">
      <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-3 rounded mr-5" onClick={this.continue}>Submit</button>
      </div>
      </div>
      );
    }
  }

  export default Confirm;
