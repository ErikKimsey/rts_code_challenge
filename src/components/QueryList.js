import React from 'react';
import './styles/query_list.scss';

export default function QueryList(props) {
	return (
		<div className="query-list-container">
			<div className="queries-header">Queries Made:</div>
			<ul>
				{props.list.map((e) => {
					return <li className="query">"{e.text}"</li>;
				})}
			</ul>
		</div>
	);
}
