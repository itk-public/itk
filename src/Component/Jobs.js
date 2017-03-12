import React, { Component } from 'react';
import {Link} from 'react-router';
import Lists from './Lists';
import Paginate from './Paginate';



export default class Jobs extends Component {
  constructor(props) {
    super(props);
    // node_id: 25 是招聘节点
    this.props.actions.fetchTopics({node_id: 25})
  }
  render() {
    const count = this.props.results.topics.length
    return (
      <div className='panel panel-default topic-lists'>
        
        <Lists topics={this.props.results.topics} />
        <Paginate actions={this.props.actions} options={{node_id: 25}}/>
      </div>
    );
  }
}
