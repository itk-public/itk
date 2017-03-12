import React, { Component } from 'react';
import { Link } from "react-router"
import '../Stylesheets/Login.css';
import { Form, Control } from 'react-redux-form';

import axios from "axios";

import config_url from "../Config/configUrl.js";


class Login extends Component {
	render() { 
		return (
			<LoginForm />
		)
	} 
}
 

class LoginForm extends React.Component {

  handleSubmit(values) {
    // Do anything you want with the form value'


    axios.get(`${config_url}back/backuser/loginBackUser`,{
    	params : values,
    	responseType: 'json', // default
    })
    .then(function(res){
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    })

  }
 
  render() {


    return (  
      	<div className="login-form">

	      <Form  
	        model="deep.login"
	        onSubmit={(val) => this.handleSubmit(val)} 
	      >
	          <Control model="deep.login.username" validators={{
	            	required: (val) => val && val.length
	        	}} mapProps = {{ value : props => props.viewValue }} component = {TextInput} controlProps = {{ label : "登录名", type : "text"}} />

	          <Control model="deep.login.password" mapProps = {{ value : props => props.viewValue }} component = {TextInput} controlProps = {{ label : "密码", type : "password" }} />

	          <button className = "btn btn-default fr" >登录</button>	        
	      </Form>

      	</div>

    );
  }
}

const TextInput = props => {  
    return (
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">{props.label}</span>
            <input type={props.type} className="form-control" {...props} placeholder={props.label} />
          </div>
    )
}


export default Login