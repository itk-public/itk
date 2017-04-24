import React, { Component } from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import Paginate from './Paginate';
import {Link} from 'react-router';
import Lists from './Lists';

import { Form, Control } from 'react-redux-form';

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
        model="deep.user"
        onSubmit={(val) => this.handleSubmit(val)} 
      >
        <div className="row">
          <Control model="deep.userManage.loginName" validators={{
            required: (val) => val && val.length
        }} mapProps={{ value : props => props.viewValue }} component={TextInput} controlProps={{ label : "登录名" }} />

          <Control model="deep.userManage.userName" mapProps={{ value : props => props.viewValue }} component={TextInput} controlProps={{ label : "用户名" }} />
        </div>

        <div className="row">
          <Control model="deep.userManage.email" mapProps={{ value : props => props.viewValue }} component={TextInput} controlProps={{ label : "邮箱" }} />

          <button className="btn btn-default" >搜索</button>
        </div>
      </Form>
    );
  }
}




export default class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.location.query.type||'last_actived',
    }
    this.props.actions.fetchTopics({type: this.state.type})
    
  }

  handleClick = (type) => {
    this.setState({type: type})
    this.props.actions.fetchTopics({type: type})
  }

  render() {
    
    return (
      <div className='panel panel-default topic-lists'>
        <div className='form-container container-fluid'>
            <MyForm />
        </div>
        <Lists topics={this.props.results.topics} />
        <Paginate actions={this.props.actions} options={{type: this.state.type}}/>
      </div>
    ); 
  }
} 
