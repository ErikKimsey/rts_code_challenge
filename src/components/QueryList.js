import React from 'react';

export default function QueryList(props) {
	return (
		<div>
			{props.list.map((e) => {
				return <div>{e.text}</div>;
			})}
		</div>
	);
}
