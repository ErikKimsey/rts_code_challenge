import React from 'react';

export default function QueryList(props) {
	console.log(props.list);

	return (
		<div>
			{props.list.map((e) => {
				return <div>{e.text}</div>;
			})}
		</div>
	);
}
