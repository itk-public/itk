import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link } from "react-router";

import '../Stylesheets/pageItem.css';

function addData(num){
    let dataArr = [];
    for( let i = 0; i < num; i++ ){
      dataArr.push({
          id: 2,
          name: "Product1",
          qudao: 120,
          minV : 1,
          maxV : i,
          city : "上饶",
          state : "上行",
          pageConfig : i
      });
    }

    return dataArr;
} 

export default class PageItem extends Component {
	//插入链接标签
	dataFormat(cell,row){
		return (
			<Link to={`homeManagement/${row.pageConfig}`}>页面配置</Link>
		)
	}

	onAfterInsertRow(){

	}

	onAddRow( row ) {

	    console.log( row )

	}

	render(){

		const options = {
		  	afterInsertRow: this.onAfterInsertRow,   // A hook for after insert rows
		  	insertText : "新建页面",
      		onAddRow: this.onAddRow
		};
		return (
			<div className="tabel-container">
				 <BootstrapTable data={addData(20)} pagination bordered={true} insertRow={ true } options={options}  tableStyle={ { background: '#fff' } } hover>
				      <TableHeaderColumn width="8%" isKey dataField='id'>ID</TableHeaderColumn>
				      <TableHeaderColumn width="12%" dataField='name'>页面名称</TableHeaderColumn>
				      <TableHeaderColumn width="10%" dataField='qudao'>渠道</TableHeaderColumn>
				      <TableHeaderColumn width="15%" dataField='minV'>最低版本（大于等于）</TableHeaderColumn>
				      <TableHeaderColumn width="15%" dataField='maxV'>最高版本（小于等于）</TableHeaderColumn>
				      <TableHeaderColumn width="10%" dataField='city'>城市</TableHeaderColumn>
				      <TableHeaderColumn width="10%" dataField='state'>状态</TableHeaderColumn>
				      <TableHeaderColumn width="20%" dataField='pageConfig' dataFormat={this.dataFormat}>页面配置</TableHeaderColumn>
				  </BootstrapTable>	
			</div>	
		)
	}
}
