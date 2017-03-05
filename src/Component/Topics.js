import React, { Component } from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import Paginate from './Paginate';
import {Link} from 'react-router';
import Lists from './Lists';

import { Form, Control, combineForms } from 'react-redux-form';

import "../Stylesheets/Topic.css";

const initialUser = {
  loginName: '',
  userName: '',
  email: ''
};

const store = createStore(combineForms({
  user: initialUser,
}));

class MyForm extends React.Component {
  handleSubmit(values) {
    // Do anything you want with the form value
    console.log(values);
  }

  render() {
    return (
      <Form
        model="user"
        onSubmit={(val) => this.handleSubmit(val)}
      >
        <div className="row">
          <Control model="user.loginName" mapProps = {{ value : props => props.viewValue }} component = {TextInput} controlProps = {{ label : "登录名" }} />

          <Control model="user.userName" mapProps = {{ value : props => props.viewValue }} component = {TextInput} controlProps = {{ label : "用户名" }} />
        </div>

        <div className="row">
          <Control model="user.email" mapProps = {{ value : props => props.viewValue }} component = {TextInput} controlProps = {{ label : "邮箱" }} />

          <button className = "btn btn-default" >搜索</button>
        </div>
      </Form>
    );
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


export default class Topics extends Component {
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

  handleSubmit(ev){
    console.log( ev )

    ev.preventDefault()
  }

  render() {
    return (
      <div className='panel panel-default topic-lists'>
        <div className='form-container container-fluid'>
          <Provider store = { store } >
            <MyForm />
          </Provider>
        </div>
        <Lists topics={this.props.results.topics} />
        <Paginate actions={this.props.actions} options={{type: this.state.type}}/>
      </div>
    );
  }
} 


 // <form action="" onSubmit = { this.handleSubmit.bind(this) }>
 //              <div className="row">
 //                  <div className="col-md-6">
 //                    <div className="input-group">
 //                      <span className="input-group-addon" id="basic-addon1">登录名</span>
 //                      <input type="text" name="login-name" className="form-control" placeholder="登录名" aria-describedby="basic-addon1" />
 //                    </div>
 //                  </div>

 //                  <div className="col-md-6">
 //                    <div className="input-group">
 //                      <span className="input-group-addon" id="basic-addon1">用户名</span>
 //                      <input type="text" name="user-name" className="form-control" placeholder="用户名" aria-describedby="basic-addon1" />
 //                    </div>
 //                  </div>
 //              </div>

 //              <div className="row">
 //                <div className="col-md-8">
 //                    <div className="input-group">
 //                      <span className="input-group-addon" id="basic-addon1">邮箱</span>
 //                      <input type="text" name="email" className="form-control" placeholder="邮箱" aria-describedby="basic-addon1" />
 //                      <span className="input-group-btn">
 //                        <button className="btn btn-default" type="submit">搜索</button>
 //                      </span>
 //                    </div>
 //                  </div>
 //              </div>

            // </form>