import React from 'react';
import './styles/item_list.scss';

import Item from './Item';

export default function ItemList(props) {
	console.log(props.items);
	let items = props.items;
	return (
		<div className="item-list-container">
			{items &&
				items.map((e) => {
					return <Item data={e} />;
					{
						/* return <div className="item">{e.title}</div>; */
					}
				})}
		</div>
	);
}
