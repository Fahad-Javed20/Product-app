import { useState } from "react";
import type { ProductType } from "../types/ProductType";

interface ProductListProps {
  products: ProductType[];
  itemsPerPage?: number;
}

const ProductList = ({ products, itemsPerPage = 10 }: ProductListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center mt-5">
      <label className="mb-5 bg-purple-700 px-3 py-1 rounded-lg text-white ml-245">
        Total Products:{products.length + 1}{" "}
      </label>

      <table className="w-5/6 border-collapse border border-gray-400 shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-400 py-2 px-4">Name</th>
            <th className="border border-gray-400 py-2 px-4">Category</th>
            <th className="border border-gray-400 py-2 px-4">Price</th>
            <th className="border border-gray-400 py-2 px-4">Rating</th>
          </tr>
        </thead>

        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100 transition-all">
              <td className="border border-gray-300 text-left px-4 py-2">
                {product.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.category}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.price}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.rating}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex space-x-2 mt-4 mb-10">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
