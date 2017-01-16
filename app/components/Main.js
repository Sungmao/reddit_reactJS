import React, { Component } from 'react';

export default class Main extends Component {

	constructor() {
		super();
		this.state = {
			titles: ["The first post", "The 2nd post"],
			title: ""
		}
		this.handleChange = this.handleChange.bind(this);
    	this.handleAddTitle = this.handleAddTitle.bind(this);
	}

	handleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

	handleAddTitle() {
		const titles = this.state.titles.concat(this.state.title);
		this.setState({
			titles: titles,
			title:""
		})
	}

	render() {
		console.log("main....");
		return (
			<div className="container">
	      <div className="jumbotron">
	        <h2><strong>Reddit! go! go! go!</strong></h2>
	      </div>

	      <div className="row">
	      	<ol>
	      	{this.state.titles}
	      	</ol>
	      	<input value={this.state.title} onChange={this.handleChange} type="text" />
        	<button onClick={this.handleAddTitle}>Add Title</button>


	        {/* This code will dump the correct Child Component */}
	        {this.props.children}
	      </div>
	    </div>
		);
	}
}
