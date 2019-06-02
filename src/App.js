import React, { Component } from 'react';
import { addQuery, fetchQueries } from './actions/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import './App.scss';

import ItemList from './components/ItemList';

const HN_URL = 'http://hn.algolia.com/api/v1/search?query=';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			result: ''
		};
		this.input = React.createRef();
	}

	componentDidMount() {
		console.log(this.props);
		this.callAPI('javascript&tags=story');
	}

	fetchQueries = (state) => {
		console.log(state);
	};

	callAPI = (params) => {
		if (!params) {
			params = 'javascript&tags=story';
		}
		axios
			.get(HN_URL + params)
			.then((res) => {
				this.setState({ result: res.data.hits });
				this.props.addQuery(params);
				this.props.queries();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.callAPI(this.state.query);
		e.target.reset();
	};

	handleChange = (e) => {
		this.setState({ query: e.target.value });
	};

	render() {
		return (
			<div className="App-header">
				<div className="search-container">
					<form onSubmit={this.handleSubmit}>
						<label>
							<input
								type="text"
								ref={this.input}
								value={this.state.value}
								name="input"
								onChange={this.handleChange}
							/>
						</label>
						<input type="submit" value="Submit" />
					</form>
				</div>
				<ItemList items={this.state.result} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		queries: fetchQueries(state.queries)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addQuery: addQuery(text)
	};
};

// export default connect(mapStateToProps, mapDispatchToProps, { addQuery, fetchQueries })(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
