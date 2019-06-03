import React from 'react';

export default function Item(props) {
	let item = props.data;
	let date = item.created_at;
	console.log(date);

	return (
		<div className="item">
			<div className="title">{item.title}</div>
			<a href={item.url} target="_blank">
				{item.url}
			</a>
			<div className="date">
				{item.created_at}
			</div>
		</div>
	);
}
