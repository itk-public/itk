import React, { Component } from 'react';
import {Link} from 'react-router';
import '../Stylesheets/Home.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.actions.fetchTopics({type: 'excellent'})
  }

  render() {
    return (
      <div className='home-wrap'>

      </div>
    ); 
  }
}
export default Home;
