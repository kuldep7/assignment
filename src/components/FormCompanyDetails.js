import React, { Component } from 'react';
import ItemForm from "./ItemForm";

export class FormCompanyDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
};

back = e => {
    e.preventDefault();
    this.props.prevStep();
};

render() {
    const { values, handleChange } = this.props;
    return (
       <div className="container mx-auto">
       <div className="w-full text-center text-blue-800 mb-3 font-semibold text-2xl"> Step 2</div>
       <div className="grid md:grid-cols-4 grid-cols-1 col-gap-2">
       <ItemForm
       label="Username"
       name="username"
       value={values.username}
       onChange={handleChange('username')}
       />
       <ItemForm
       label="Company Name"
       value={values.company.name}
       onChange={handleChange('companyname')}
       />
       <ItemForm
       label="Company Catch Phrase"
       value={values.company.catchPhrase}
       onChange={handleChange('catchPhrase')}
       />
       <ItemForm
       label="Company BS"
       value={values.company.bs}
       onChange={handleChange('bs')}
       />

       </div>
       <div className="flex justify-center">
       <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-3 rounded mr-5" onClick={this.back}>Previous</button>
       <button  className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-3 rounded" onClick={this.continue}>Next</button>
       </div>
       </div>
       );
   }
}

export default FormCompanyDetails;
