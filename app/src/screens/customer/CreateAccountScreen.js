import "../../App.css"
import Header from "../../components/Header"
import {Link} from 'react-router-dom'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { Component } from 'react'
import Swal from "sweetalert2";
import { send } from 'emailjs-com';
import { validate } from 'email-validator';
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};
class CreateAccountScreen extends Component {

  constructor(props) {
    super(props)
    this.state ={
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      role:'CUSTOMER',
      message: '',
      errors: {
        firstName: '',
        lastName : '',
        email: '',
        password: '',
        phone: '',
      }
  }
    this.handleSubmit = this.handleSubmit.bind(this);
   
}

handleChange = (event) => {
  event.preventDefault();
  const { name, value } = event.target;
  
  let errors = this.state.errors;

  switch (name) {
    case 'firstName': 
      errors.firstName = 
        value.length < 2
          ? 'First Name must be at least 2 characters long!'
          : '';
      break;
      case 'lastName': 
      errors.lastName = 
        value.length < 4
          ? 'Last Name must be at least 4 characters long!'
          : '';
      break;
    case 'email': 
      errors.email = 
        validEmailRegex.test(value)
          ? ''
          : 'Email is not valid!';
      break;
    case 'password': 
      errors.password = 
        value.length < 8
          ? 'Password must be at least 8 characters long!'
          : '';
      break;
      case 'phone': 
      errors.phone = 
        value.length < 10
          ? 'Phone number must be at least 10 characters long!'
          : '';
      break;
    default:
      break;
  }

  this.setState({errors, [name]: value}) ;
}

onMail = (e) => {

  e.preventDefault();
  
    
  let msg = 'Your Account has been created :)';
  
  let tosend = {
      from_name: 'AnyKart',
      to_name: localStorage.getItem('user_fname'),
      message: msg,
      reply_to: localStorage.getItem('user_email'),
  }
  send(
      'service_e6zmpmx',
      'template_raekz0o',
      tosend,
      '9AG5ifX8UgKlUDe_e'
  )
      .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
         //alert('Mail Send Sucessfully!!')
          Swal.fire({
              icon: 'success',
              title: 'Mail Send Sucessfully!!',
              showConfirmButton: true,
              confirmButtonText: 'OKAY',
            })
      })
      .catch((err) => {
          console.log('FAILED...', err);
      });

}

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      let user = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, password: this.state.password, phone: this.state.phone, role: this.state.role};
      console.info('Valid Form')
      ApiCustomerService.addUser(user)
          .then(res => {
            if(res.data.result === null){
            //  alert("Email Addreess Already Registered")
              Swal.fire({
                icon: 'errpr',
                title: 'Email Address Already Registered',
                showConfirmButton: true,
                confirmButtonText: 'OKAY',
              })
            
            }
            if(res.data.result !== null){
            //  alert("SignUp successfully")
              Swal.fire({
                icon: 'success',
                title: 'User Registered',
                showConfirmButton: true,
                confirmButtonText: 'OKAY',
              })
              this.setState({message : 'SignUp successfully.'});
              this.onMail(res.data.result);
              this.props.history.push('/login');
            }
            
          });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Invalid User details',
        showConfirmButton: true,
        confirmButtonText: 'OKAY',
      })
    }
  }

onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

  

  render(){
    const {errors} = this.state;
    return (
      <div>
        <Navigation/>
        <div className="main">
      <Header title="Create Account" />
      <div className="form">
      <div className="row mb-3">
          <label htmlFor="firstName" className="col-sm-4 col-form-label">First Name</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="firstName" value={this.state.firstName} onChange={this.handleChange} noValidate/>
              {errors.firstName.length > 0 && 
                <span className='error'>{errors.firstName}</span>}
          </div>
       </div>

       <div className="row mb-3">
          <label htmlFor="lastName" className="col-sm-4 col-form-label">Last Name</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="lastName" value={this.state.lastName} onChange={this.handleChange} noValidate/>
              {errors.lastName.length > 0 && 
                <span className='error'>{errors.lastName}</span>}
          </div>
       </div>

       <div class="row mb-3">
          <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
          
          <div className="col-sm-8">
              <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} noValidate/>
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
          </div>
       </div>

       <div className="row mb-3">
          <label htmlfor="password"className="col-sm-4 col-form-label">Password</label>
          
          <div className="col-sm-8">
              <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} noValidate/>
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
          </div>
       </div>

       <div className="row mb-3">
          <label htmlFor="phone" className="col-sm-4 col-form-label">Phone</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} noValidate/> 
              {errors.phone.length > 0 && 
                <span className='error'>{errors.phone}</span>}
          </div>
       </div>
        <div className="mb-3">
        <div className="float-start"><br></br>
            Existing User? <Link to="/login">Login here</Link>
          </div>
          <button className="btn-hover color-9 float-end" onClick={this.handleSubmit}>
            Register
          </button>
          <br></br>

        </div>
      </div>
    </div>
      </div>
  )
  }
    
}
export default CreateAccountScreen
