import React from 'react';
import './styles/item_list.scss';

export default function ItemList(props) {
	console.log(props.items);
	let items = props.items;
	return (
		<div className="item-list-container">
			{items &&
				items.map((e) => {
					console.log(e);
					return <div className="item">{e.title}</div>;
				})}
		</div>
	);
}
