import React, { Component } from 'react';
import Swal from 'sweetalert2';
import axios from "axios";
export class Success extends Component {
  state={

  }
  constructor(props){
    super(props);
    this.state.id=parseInt(window.location.pathname.split("/").pop());
    console.log(this.props)
    if(!Number.isInteger(this.state.id) && this.state.id!=""){
      this.create()
    }else{
      this.update()
    }
  }
  create =() =>{
    let init =this
    const { name, username, email, phone, street,city,suite,zipcode,lat,lng,companyname,catchPhrase,bs,address,company } = this.props.values;

    axios.post('https://jsonplaceholder.typicode.com/users',{name:name,
      username:username,email:email,phone:phone,address:address,company:company
    }).then((res) => {
      Swal.fire({title:'Success',text:'User Created with id :'+res.data.id,icon:'success',timer:1500,timerProgressBar:true,allowEscapeKey:false}).then(res=>{window.location="/list"})
    })
  }
  update = () => {
    let init =this
    const { name, username, email, phone, street,city,suite,zipcode,lat,lng,companyname,catchPhrase,bs,address,company } = this.props.values;

    axios.put('https://jsonplaceholder.typicode.com/users/'+this.state.id,{name:name,
      username:username,email:email,phone:phone,address:address,company:company
    }).then((res) => {
      Swal.fire({title:'Success',text:'User Updated with id :'+res.data.id,icon:'success',timer:1500,timerProgressBar:true,allowEscapeKey:false}).then(res=>{window.location="/list"})
    })
  }
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
     <div>
     </div>
     );
  }
}

export default Success;
