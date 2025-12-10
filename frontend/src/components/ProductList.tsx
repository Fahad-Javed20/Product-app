import type { ProductType } from "../types/ProductType";

interface ProductListProps {
  products: ProductType[];
}
const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex justify-center">
      <table className="w-300 border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border">Name</th>
            <th className="border">Category</th>
            <th className="border">Price</th>
            <th className="border">Rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border text-left px-3">{product.name}</td>
              <td className="border px-3">{product.category}</td>
              <td className="border px-3">{product.price}</td>
              <td className="border px-3">{product.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
