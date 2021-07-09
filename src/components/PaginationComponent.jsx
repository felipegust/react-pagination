import React from "react";

const PaginationComponent = ({ pages, currentPage, setCurrentPage }) => {
	return (
		<div className="Row">
			{Array.from(Array(pages), (x, index) => {
				return (
					<button
						style={
							currentPage === index
								? {
										backgroundColor: "gray",
										color: "white",
								  }
								: null
						}
						value={index}
						onClick={(e) => setCurrentPage(Number(e.target.value))}
					>
						{index + 1}
					</button>
				);
			})}
		</div>
	);
};

export default PaginationComponent;
