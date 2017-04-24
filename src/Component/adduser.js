import React, { Component } from 'react'
import { Form, Control } from 'react-redux-form';


export default class Adduser extends Component {
	render(){
		return (
			<div>
				<MyForm />
			</div>
		)
	}
} 
 
const TextInput = props => {  
    return (
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">{props.label}</span>
            <input type="text" className="form-control" {...props} placeholder={props.label} />
          </div>
        </div>
    )
}

class MyForm extends React.Component {
  handleSubmit(values) {
    // Do anything you want with the form value
    console.log(values);
  }
 
  render() {
    return (  
      <Form 
        model="deep.addUser"
        onSubmit={(val) => this.handleSubmit(val)} 
      >
        <div className="row">
          <Control model="deep.addUser.userName" validators={{
            required: (val) => val && val.length
        }} mapProps={{ value : props => props.viewValue }} component={TextInput} controlProps={{ label : "用户名" }} />

          <Control model="deep.addUser.password" mapProps={{ value : props => props.viewValue }} component={TextInput} controlProps={{ label : "密码" }} />
        </div>

        <div className="row">
          <Control model="deep.addUser.email" mapProps={{ value : props => props.viewValue }} component={TextInput} controlProps={{ label : "邮箱" }} />
          <Control model="deep.addUser.phone" mapProps={{ value : props => props.viewValue }} component={TextInput} controlProps={{ label : "手机号" }} />
          <button className="btn btn-default" >添加</button>
        </div>
      </Form>
    );
  }
}


