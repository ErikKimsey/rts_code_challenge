import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';

import ItemList from './components/ItemList';

const HN_URL = 'https://hacker-news.firebaseio.com/v0/';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			result: ''
		};
		this.input = React.createRef();
	}

	componentDidMount() {
		axios
			.get(HN_URL + 'item/8863.json?print=pretty')
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		e.target.reset();
	};

	handleChange = (e) => {
		console.log(e.target.value);
		this.setState({ query: e.target.value });
	};

	render() {
		return (
			<div className="App-header">
				<ItemList />
				<div className="search-container">
					<form onSubmit={this.handleSubmit}>
						<label>
							Name:
							<input
								type="text"
								ref={this.input}
								value={this.state.value}
								name=""
								onChange={this.handleChange}
							/>
						</label>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	}
}
