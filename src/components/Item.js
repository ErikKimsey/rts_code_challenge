import React from 'react';

export default function Item(props) {
	let item = props.data;

	return (
		<div className="item">
			<div>{item.title}</div>
			<a href={item.url} target="_blank">
				{item.url}
			</a>
		</div>
	);
}
