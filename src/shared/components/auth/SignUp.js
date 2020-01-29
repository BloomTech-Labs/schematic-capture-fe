import React, { Component } from 'react'
import axios from "axios";

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    last_name: '',
    phone: null,
    organizationID: null,
    roleID: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
        .post('http://localhost:5000/api/auth/register', this.state)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => console.log(error.response))
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="signup">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id='confirmPassword' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="phone">Phone Number</label>
            <input type="number" id='phone' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="organizationID">Organization ID</label>
            <input type="number" id='organizationID' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="roleID">Role ID</label>
            <input type="number" id='roleID' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="signup">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp
