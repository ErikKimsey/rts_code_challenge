import React from 'react';
import './styles/query_list.scss';

export default function QueryList(props) {
	return (
		<div className="query-list-container">
			<div className="queries-header">
				Queries Made <br /> (Redux Store):
			</div>
			<ul>
				{props.list.map((e, i) => {
					if (i === 0) return;
					return (
						<li key={e.id} className="query">
							"{e.text}"
						</li>
					);
				})}
			</ul>
		</div>
	);
}
