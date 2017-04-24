import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Home from '../Component/Home';
import UserManage from '../Component/userManage';
import Addgoods from '../Component/addgoods';
import App from '../App';
import Posts from '../Component/Posts';
import Login from '../Component/Login'; 
import Adduser from "../Component/adduser";
import ClassManage from "../Component/classmanage";
//首页管理
import HomeManagement from "../Component/homeManagement";
//页面配置
import PageConfig from "../Component/pageConfig";
  
sessionStorage.token = 1;

const token = sessionStorage.token;

const RouteConfig = ( 
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={ token ? App : Login }>
      <IndexRoute component={Home} />
      <Route path="userManage" component={UserManage}/>
      <Route path="adduser" component={Adduser}/> 
      <Route path="addgoods" component={Addgoods}/>
      <Route path="login" component={Login}/>
      <Route path="classmanage" component={ClassManage}/>
      <Route path="homeManagement" component={HomeManagement} />
      <Route path="homeManagement/:id" component={PageConfig} />
    </Route>
  </Router> 
);
 
export default RouteConfig;
