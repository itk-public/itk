import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link } from "react-router";
import '../Stylesheets/pageConfig.css';

const components = [
	{
		"id": 1,
		"name": "轮播图",
		"configId": 1
	},
	{
		"id": 2,
		"name": "标题栏",
		"configId": 2
	},
	{
		"id": 3,
		"name": "秒杀",
		"configId": 3
	},
	{
		"id": 4,
		"name": "通栏（750px*300px)",
		"configId": 4
	},
	{
		"id": 5,
		"name": "通栏（750px*234px)",
		"configId": 5
	}
]


const Components = ( props )=>{
	const { handleClick } = props;
	return (
		<ul className="components">
			{
				components.map(( item, index ) => {
					return (<li className="component-item" key={index} onClick={ handleClick.bind( null, item )}>
						<Button>{item.name}</Button>
					</li>)
				})
			}
		</ul>
	)
}

const Table = ( props ) => {
	const options = {
		noDataText: "页面无数据",
		deleteText: "删除组件",
		showOnlySelected: true
	}
	const selectRow = {
		mode: "checkbox",
		clickToSelect: true
	}
	const dataFormat = ( row ) => {
		return <Link><Button bsStyle="info">配置</Button></Link>
	}
	return (
		<div className="table-container">
			<BootstrapTable data={props.data} deleteRow selectRow={ selectRow } bordered={true} options={options}  tableStyle={ { background: '#fff' } } hover>
			      <TableHeaderColumn width="20%" isKey dataField='id'>ID</TableHeaderColumn>
			      <TableHeaderColumn width="70%" dataField='name'>组件名称</TableHeaderColumn>
			      <TableHeaderColumn width="10%" dataField='qudao' dataFormat={dataFormat}>编辑</TableHeaderColumn>
			  </BootstrapTable>	
		</div>
	)
}

export default class PageConfig extends Component {
	constructor(){
		super();

		this.state = {
			data : []
		}
	}
	selectComponent( item ){
		let dataArr = this.state.data;
		dataArr.push( item )
		this.setState({
			data : dataArr
		})
	}
	render(){
		return (
			<div>
				<Components handleClick={ this.selectComponent.bind( this ) } />
				<Table data={this.state.data} />
			</div>
		)
	}
}
