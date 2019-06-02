import React from 'react';
import './styles/item_list.scss';

import Item from './Item';

export default function ItemList(props) {
	let items = props.items;
	return (
		<div className="item-list-container">
			{items &&
				items.map((e) => {
					return <Item data={e} key={e.title} />;
				})}
		</div>
	);
}
