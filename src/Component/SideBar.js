import React, { Component } from 'react'
import '../Stylesheets/SideBar.css'
import classname from 'classnames';
import {Link} from 'react-router';
let sidebar = [
    {
        text : "系统管理",
        submenu : [
            {
                text : "用户管理",
                href : "userManage"
            },
            {
                text : "添加用户",
                href : "adduser"
            }
        ]
    },
    {
        text : "商品管理",
        submenu : [
            {
                text : "分类管理",
                href : "classmanage"
            },
            {
                text : "添加商品",
                href : "addgoods"
            }
        ]
    }
];
export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: false,
            jobs: false,
            remote: false,
            post: false,
            isShow: false
        }
    }

    componentDidMount() { 
        this.handleClick(this.props.path);
    }

    handleClick = (name) => {
        // switch (name) {
        //     case "/topics":
        //         this.setState({ topics: true, adduser:false, jobs: false, remote: false, posts:false });
        //         break;
        //     case "/adduser":
        //         this.setState({ topics: false, adduser:true, jobs: false, remote: false, posts:true });
        //         break;
        //     case "/jobs":
        //         this.setState({ topics: false, adduser:false, jobs: true, remote: false, posts:false });
        //         break;
        //     case "/remote":
        //         this.setState({ topics: false, adduser:false, jobs: false, remote: true, posts:false });
        //         break;
        //     case "/posts":
        //         this.setState({ topics: false, adduser:false, jobs: false, remote: false, posts:true });
        //         break;
        //     default:
        //         this.setState({ topics: false, adduser:false, jobs: false, remote: false, posts:false });
        // } 
    }

    clickDisplaySubmenu(){ 

        this.setState({
            isShow : true
        });

    }

    render() {

        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav"> 
                    <li className="sidebar-brand">
                        <Link to='/'>
                            ITK
                        </Link>
                    </li>
                    <li className={classname("sidebar-item",{"active":this.state.isShow})}>
                        <a href="javascript:;" onClick={this.clickDisplaySubmenu.bind(this)}>系统管理</a>
                        <ul className="sub-menu">
                           <li> 
                                <Link to="/userManage"
                                activeClassName={ this.state.topics ? 'active' : '' }
                                onClick={() => this.handleClick('/topics')}>用户管理</Link>
                           </li> 
                           <li>
                                <Link to="/adduser"
                                activeClassName={ this.state.adduser ? 'active' : '' }
                                onClick={() => this.handleClick('/adduser')}>添加用户</Link>
                           </li>
                        </ul>           
                    </li>
                    <li className={classname("sidebar-item",{"active":this.state.isShow})}>
                        <a href="javascript:;" onClick={this.clickDisplaySubmenu.bind(this)}>商品管理</a>
                        <ul className="sub-menu">
                           <li>
                                <Link to="/classmanage"
                              activeClassName={ this.state.jobs ? 'active' : '' }
                              onClick={() => this.handleClick('/jobs')}>分类管理</Link>
                           </li>
                           <li>
                                <Link to="/addgoods"
                              activeClassName={ this.state.jobs ? 'active' : '' }
                              onClick={() => this.handleClick('/jobs')}>添加商品</Link>
                           </li>
                        </ul> 
                        
                    </li>
                    <li className={classname("sidebar-item",{"active":this.state.isShow})}>
                        <a href="javascript:;" onClick={this.clickDisplaySubmenu.bind(this)}>内容管理</a>
                        <ul className="sub-menu">
                           <li>
                                <Link to="/homeManagement"
                              onClick={() => this.handleClick('/jobs')}>首页管理</Link>
                           </li>
                        </ul> 
                        
                    </li>
                </ul>
            </div>
        )
    }
}



