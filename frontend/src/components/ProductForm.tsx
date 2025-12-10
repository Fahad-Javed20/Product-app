import { useForm } from "react-hook-form";
import type { ProductType } from "../types/ProductType";

interface ProductFormProps {
  onAddProduct: (data: ProductType) => void;
}

const ProductForm = ({ onAddProduct }: ProductFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductType>();

  const onsubmit = (data: ProductType) => {
    onAddProduct(data);
    reset();
  };

  return (
    <section className="flex flex-col gap-4 items-center mt-5 w-full">
      <h1 className="bg-amber-900 px-10 py-1 text-2xl font-semibold text-white rounded-lg">
        Product Entry Form
      </h1>

      <form
        onSubmit={handleSubmit(onsubmit)}
        className="bg-gray-100 px-10 py-6 flex flex-col items-center rounded-lg shadow-md w-full max-w-[700px]"
      >
        <div className="mb-4 w-full">
          <label className="block mb-1 font-semibold text-gray-700">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
          />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>

        <div className="mb-4 w-full">
          <label className="block mb-1 font-semibold text-gray-700">Category</label>
          <input
            type="text"
            {...register("category", { required: true })}
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
          />
          {errors.category && <p className="text-red-500">This field is required</p>}
        </div>

        <div className="mb-4 w-full">
          <label className="block mb-1 font-semibold text-gray-700">Price</label>
          <input
            type="number"
            {...register("price", { required: true })}
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
          />
          {errors.price && <p className="text-red-500">This field is required</p>}
        </div>

        <div className="mb-4 w-full">
          <label className="block mb-1 font-semibold text-gray-700">Rating</label>
          <input
            type="number"
            min={1}
            max={5}
            {...register("rating", { required: true })}
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
          />
          {errors.rating && <p className="text-red-500">This field is required</p>}
        </div>

        <button
          type="submit"
          className="mt-2 bg-amber-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-800 transition"
        >
          Add Product
        </button>
      </form>
    </section>
  );
};

export default ProductForm;
