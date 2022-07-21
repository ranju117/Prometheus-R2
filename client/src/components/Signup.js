import React, { Component } from 'react'
export default class SignUp extends Component {
  constructor(){
    super();
    this.state = {
        formUserName:'',
        name:'',
        password:'',
        email:''
    }
};
handleClick = (e) => {
    console.log(this.state);
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { Accept: 'application.json','Content-Type': 'application/json' },
      body: JSON.stringify({formUserName:this.state.formUserName,password:this.state.password})
  };
  console.log(requestOptions.body);
   fetch(
        "http://localhost:5000/api/v1/post",requestOptions)
                    .then((res) => {res.json();console.log('Succesfully posted'+res);})
                    
  };
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            onChange = {(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>username</label>
          <input type="text" className="form-control" placeholder="username" 
          onChange = {(e) => this.setState({ formUserName: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange = {(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange = {(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={this.handleClick}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}