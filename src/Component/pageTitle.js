import React, { Component } from 'react';
import "../Stylesheets/pageTitle.css";


const PageTitle = ( props ) => {
	return (
		<h2 className="page-title">{props.title}</h2>
	)
}

export default PageTitle;
