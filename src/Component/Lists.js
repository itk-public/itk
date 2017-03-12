import React, { Component } from 'react';
import {Link} from 'react-router';
import TopicInfo from './TopicInfo';
import '../Stylesheets/Lists.css';

export default class Lists extends Component {
  render() {
    let listItems = this.props.topics.map(function (topic) {
      return (
        <tr key={topic.id}>
          
        </tr>
      );
    });
    return( 
      <div>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>登录名</th>
              <th>用户名</th>
              <th>邮箱</th>
              <th>状态</th>
              <th>修改</th> 
            </tr>
          </thead>
          { listItems }
        </table>
      </div>
    );
  }
}


