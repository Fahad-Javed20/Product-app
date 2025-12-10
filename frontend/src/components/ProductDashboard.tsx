import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import type { ProductType } from "../types/ProductType";

const ProductDashboard = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleProduct = (newProduct: ProductType) => {
    setProducts((prev) => [...prev, newProduct]);
  };
  return (
    <div className="flex flex-col gap-10">
      <ProductForm onAddProduct={handleProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default ProductDashboard;
