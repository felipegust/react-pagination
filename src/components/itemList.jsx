import React from "react";

function ItemList({ itens }) {
	return itens.map(({ name, quantity, price }) => {
		return (
			<div className="Item">
				<span>{name}</span>
				<span>{quantity}</span>
				<span>{price}</span>
			</div>
		);
	});
}

export default ItemList;
