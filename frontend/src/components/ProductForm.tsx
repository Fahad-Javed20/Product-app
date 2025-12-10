import { useForm } from "react-hook-form";
import type { ProductType } from "../types/ProductType";

const ProductForm = () => {

const [register,handelSubmit,reset,formState:{errors}] = useForm<ProductType>([])

  return (
    <>
      <section className="flex flex-col gap-4 items-center mt-5 w-full">
        <h1 className="bg-amber-900 px-10 py-1 text-2xl font-semibold text-white rounded-lg">
          Product Entry Form
        </h1>

        <form className="bg-gray-200 px-10 py-6 rounded-lg shadow-md w-full max-w-[500px]">
          <section className="mb-4 ">
            <label className="block mb-1 font-semibold text-gray-700">
              Name
            </label>

            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-amber-700"
            />
          </section>
          <section className="mb-4 ">
            <label className="block mb-1 font-semibold text-gray-700">
              category
            </label>

            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-amber-700"
            />
          </section>
          <section className="mb-4 ">
            <label className="block mb-1 font-semibold text-gray-700">
              Price
            </label>

            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-amber-700"
            />
          </section>

          <section className="mb-4 ">
            <label className="block mb-1 font-semibold text-gray-700">
              rating
            </label>

            <input
              type="number"
              max={5} min={1}
              className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-amber-700"
            />
          </section>
        </form>
      </section>
    </>
  );
};

export default ProductForm;
