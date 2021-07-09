import "./App.css";
import { useEffect, useState } from "react";
import ItemList from "./components/itemList";
import PaginationSelector from "./components/paginationSelector";
import PaginationComponent from "./components/PaginationComponent";

function App() {
	const [productList] = useState([
		{ name: "Laranja", quantity: 15, price: 15.0 },
		{ name: "Maçã", quantity: 12, price: 10.0 },
		{ name: "Banana", quantity: 13, price: 12.0 },
		{ name: "Amora", quantity: 0, price: 13.0 },
		{ name: "Abacate", quantity: 11, price: 11.0 },
		{ name: "Manga", quantity: 5, price: 5.0 },
		{ name: "Laranja", quantity: 15, price: 15.0 },
		{ name: "Maçã", quantity: 12, price: 10.0 },
		{ name: "Banana", quantity: 13, price: 12.0 },
		{ name: "Amora", quantity: 0, price: 13.0 },
		{ name: "Abacate", quantity: 11, price: 11.0 },
		{ name: "Abacaxi", quantity: 5, price: 5.0 },
		{ name: "Laranja", quantity: 15, price: 15.0 },
		{ name: "Maçã", quantity: 12, price: 10.0 },
		{ name: "Banana", quantity: 13, price: 12.0 },
		{ name: "Amora", quantity: 0, price: 13.0 },
		{ name: "Abacate", quantity: 11, price: 11.0 },
		{ name: "Abacaxi", quantity: 5, price: 5.0 },
	]);

	const [currentPage, setCurrentPage] = useState(0);
	const [itensPerPage, setItensPerPage] = useState(5);

	useEffect(() => {
		setCurrentPage(0);
	}, [itensPerPage]);

	const pages = Math.ceil(productList.length / itensPerPage);
	const startIndex = currentPage * itensPerPage;
	const lastIndex = startIndex + itensPerPage;
	const currentItens = productList.slice(startIndex, lastIndex);

	return (
		<div className="main">
			<PaginationSelector
				itensPerPage={itensPerPage}
				setItensPerPage={setItensPerPage}
			/>

			<ItemList itens={currentItens} />

			<PaginationComponent
				pages={pages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
}

export default App;
