import React, { Component } from 'react';
import { addQuery, fetchQueries } from './actions/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import './App.scss';

import ItemList from './components/ItemList';
import QueryList from './components/QueryList';

const HN_URL = 'https://hn.algolia.com/api/v1/search?query=';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			result: [],
			queries: []
		};
		this.input = React.createRef();
	}

	componentDidMount() {
		this.callAPI('javascript');
	}

	callAPI = (params) => {
		if (!params) {
			params = 'javascript';
		}
		axios
			.get(HN_URL + params + '&tags=story')
			.then((res) => {
				this.setState({ result: [] });

				let queriesCopy = this.state.queries.slice();
				queriesCopy.push(this.props.queries);

				this.props.addQuery(params);
				this.setState({ result: res.data.hits, queries: this.props.queries });
				fetchQueries();
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
				<div className="rts-code-challenge">RTS Labs HackerNews</div>
				<div className="search-container">
					<form onSubmit={this.handleSubmit}>
						<label>
							<input
								type="text"
								ref={this.input}
								value={this.state.value}
								name="input"
								onChange={this.handleChange}
								placeholder="Search HN"
							/>
						</label>
						<input type="submit" value="Submit" />
					</form>
					<QueryList list={this.state.queries} />
					<div className="me">
						ERIK KIMSEY <br />
						<a href="http://erikkimsey.com" target="_blank">
							erikkimsey.com
						</a>
					</div>
				</div>
				<div className="query-results">Search Results:</div>
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
