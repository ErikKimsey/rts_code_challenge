import React from 'react';

export default function Item(props) {
	let item = props.data;
	console.log(item);

	return (
		<div className="item">
			<div>{item.title}</div>
			<a href={item.url}>
				{item.url}
			</a>
		</div>
	);
}
