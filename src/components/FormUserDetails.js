import React, { Component } from 'react';
import ItemForm from "./ItemForm";
export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    console.log(values)
    return (
      <div className="container mx-auto">
      <div className="w-full text-center text-blue-800 mb-3 font-semibold text-2xl"> Step 1</div>
      <div className="grid md:grid-cols-4 grid-cols-1 col-gap-2">
      <ItemForm
      label="Name"
      value={values.name}
      onChange={handleChange('name')}
      />
      <ItemForm
      label="Email"
      value={values.email}
      onChange={handleChange('email')}
      />
      <ItemForm
      label="Phone"
      value={values.phone}
      onChange={handleChange('phone')}
      />
      <ItemForm
      label="Street"
      value={values.address.street}
      onChange={handleChange('street')}
      />
      <ItemForm
      label="Suite"
      value={values.address.suite}
      onChange={handleChange('suite')}
      />
      <ItemForm
      label="City"
      value={values.address.city}
      onChange={handleChange('city')}
      />
      <ItemForm
      label="Zip Code"
      value={values.address.zipcode}
      onChange={handleChange('zipcode')}
      />
      <ItemForm
      label="Latitude"
      value={values.address.geo.lat}
      onChange={handleChange('lat')}
      />
      <ItemForm
      label="Longitude"
      value={values.address.geo.lng}
      onChange={handleChange('lng')}
      />
      </div>
      <div className="flex justify-center">
      <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-3 rounded" onClick={this.continue}>Next</button>
      </div>
      </div>
      );
  }
}

export default FormUserDetails;
