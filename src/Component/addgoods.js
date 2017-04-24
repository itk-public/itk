import React, { Component } from 'react';
import {Link} from 'react-router';
import Lists from './Lists';
import Paginate from './Paginate';
import Dropzone from "react-dropzone";


export default class Addgoods extends Component {
  constructor(props) {
    super(props);
    // node_id: 25 是招聘节点
  }
  render() {
    return (
      <div className=''>
        <Dropzon />
      </div>
    );
  }
}

class Dropzon extends Component{
    onDrop (files) {
      console.log( files )
    }

    render () { 
      return (
          <div>
            <Dropzone onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
          </div>
      );
    }
}
