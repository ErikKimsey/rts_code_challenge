import React, { Component } from 'react';
import { addQuery, fetchQueries } from './actions/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import './App.scss';

import ItemList from './components/ItemList';
import QueryList from './components/QueryList';

const HN_URL = 'http://hn.algolia.com/api/v1/search?query=';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			result: '',
			queries: []
		};
		this.input = React.createRef();
	}

	componentDidMount() {
		console.log(this.props);
		this.callAPI('javascript&tags=story');
	}

	callAPI = (params) => {
		if (!params) {
			params = 'javascript&tags=story';
		}
		axios
			.get(HN_URL + params)
			.then((res) => {
				let queriesCopy = this.state.queries.slice();
				queriesCopy.push(this.props.queries);
				console.log(queriesCopy);

				this.props.addQuery(params);
				this.setState({ result: res.data.hits, queries: this.props.queries });
				fetchQueries();
				console.log(this.props.queries);
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
					<QueryList list={this.state.queries} />
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
		queries: state.queries
	};
};

export default connect(mapStateToProps, { addQuery, fetchQueries })(App);
