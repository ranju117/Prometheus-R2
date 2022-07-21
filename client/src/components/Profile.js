import React, { Component } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default class Profile extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            password:''
        }
    };
    handleClick = (e) => {
        e.preventDefault();
        console.log('HI');
        fetch(
            "http://localhost:5000/api/v1/get")
                        .then((res) => res.json())
                        .then((json) => {
                            this.setState({
                                username: json.username
                              
                            });
                            console.log(json);
                            
                        })
                        
      };
  render() {
 
    return (
      <div>
        <h3>Profile</h3>
        <div></div>
        <div></div>
        </div>
    )
  }
}