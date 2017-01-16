import React, { Component } from 'react';

export default class ListItem extends Component {

	getInitialState() {
    return {
      number: 0
    };
  }


	render() {
		return (
			<li>
				<h1>test child working</h1>
				<h1>{this.state.number +2}</h1>
				<h2>{this.props.post.title}</h2>
				<p>{this.props.post.content}</p>
			</li>
		);
	}
}
