import React, { Component } from 'react';
import {Link} from 'react-router';
import { Modal, FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import { Form, Control } from "react-redux-form";

import PageTitle from './pageTitle';
import PageItem from "./pageItem";
import "../Stylesheets/homeManagement.css";

const InputGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      {" "}
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
} 

const SelectGroup = ({ id, label, help, option, ...props }) => {
	return (
		<FormGroup controlId="formControlsSelect">
	      <ControlLabel>{label}</ControlLabel>
	      <FormControl componentClass="select" {...props}>
	        {
	        	option && option.map(( item,index ) => {
	        		return (
	        			<option value={item}>{item}</option>
	        		)
	        	})
	        } 
	      </FormControl>
	    </FormGroup>
	)
}

class ModalComponent extends Component {
	constructor(){
		super();
		this.state = {
			modalIsShow : false
		}
	}
	show(){
		this.setState({modalIsShow : true})	
	}
	hide(){
		this.setState({modalIsShow : false})
	}
	render() {
		return (
			<div style={{"display":"inline-block","marginLeft":"8px"}}>
		    	<Button bsStyle="info" onClick={this.show.bind(this)}>新建页面</Button>
				<Modal show={this.state.modalIsShow} onHide={this.hide.bind(this)}>
					<Modal.Header>
			            <Modal.Title >编辑页面</Modal.Title>
			        </Modal.Header>

			        <Modal.Body>
			         	12331
			        </Modal.Body>

			        <Modal.Footer>
			            <Button onClick={this.hide.bind(this)}>Close</Button>
			        </Modal.Footer>
				</Modal>
			</div>
		)
	}
}


const FormInstance = ( props ) => {
	return(
		<Form model="deep.homeManagement.page1" className="form-inline">
			{" "}
			<Control model=".city" component={SelectGroup} mapProps={{
				label:"城市",
				id:"city",
			}} />
		    {" "}
		    <Control model=".channel" component={SelectGroup} mapProps={{
				label:"渠道",
				id:"channel"
			}} />
		    {" "}
		    <Control model=".channel" component={SelectGroup} mapProps={{
				label:"状态",
				id:"state"
			}} />
		    {" "}
		    <Control model=".id" component={InputGroup} mapProps={{
				label:"id",
				id:"id",
				type : "text"
			}} />
			{" "}
			<Control model=".pageName" component={InputGroup} mapProps={{
				label:"页面名称",
				id:"pageName",
				type : "text"
			}} />
			{" "}
		    <Button bsStyle="info" type="submit">查询</Button>
		    {" "}
		</Form>
	)
}

export default class HomeManagement extends Component {
	render(){
		return(
			<div>
				<PageTitle title={"首页管理"} />
				<FormInstance />
				<PageItem />
			</div>
		)
	}
}