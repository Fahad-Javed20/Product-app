import type { ProductType } from "../types/ProductType";

interface ProductListProps {
  products: ProductType[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex justify-center mt-5">
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
          {products.map((product) => (
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
    </div>
  );
};

export default ProductList;
