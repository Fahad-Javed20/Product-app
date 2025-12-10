import type { ProductType } from "../types/ProductType";

interface ProductListProps {
  products: ProductType[];
}
const ProductList = ({ products }: ProductListProps) => {
  return (
    <div>
      <table>
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
              <td className="border">{product.name}</td>
              <td className="border">{product.category}</td>
              <td className="border">{product.price}</td>
              <td className="border">{product.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
