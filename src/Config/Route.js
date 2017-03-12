import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import ajax from "@fdaciuk/ajax";

import Home from '../Component/Home';
import UserManage from '../Component/userManage';
import Topic from '../Component/Topic';
import Jobs from '../Component/Jobs';
import Remote from '../Component/Remote';
import Programmer from '../Component/Programmer';
import NewTopic from '../Component/NewTopic';
import App from '../App';
import Posts from '../Component/Posts';
import Login from '../Component/Login'; 
import Adduser from "../Component/adduser";
 

const token = sessionStorage.token;

const RouteConfig = ( 
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={ token ? App : Login }>
      <IndexRoute component={Home} />
      <Route path="userManage" component={UserManage}/>
      <Route path="adduser" component={Adduser}/> 
      <Route path="remote" component={Remote}/>
      <Route path="programmer" component={Programmer}/>
      <Route path="jobs" component={Jobs}/>
      <Route path="sites" component={Jobs}/>
      <Route path="posts" component={Posts}/>
      <Route path="login" component={Login}/>
    </Route>
  </Router>
);
 
export default RouteConfig;
