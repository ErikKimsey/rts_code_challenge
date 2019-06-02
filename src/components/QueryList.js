import React from 'react';

export default function QueryList(props) {
	console.log(props.list);

	return (
		<div>
			{props.list[0].map((e) => {
				return <div>{e}</div>;
			})}
		</div>
	);
}
