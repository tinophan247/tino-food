import PageLayoutAdmin from "../PageLayoutAdmin/PageLayoutAdmin";
import ProductTable from "./ProductTable";

function ProductManagement() {
  return (
    <PageLayoutAdmin>
      <div className="px-5">
        <div className="flex justify-between">
          <p className="font-bold text-2xl mb-5">Product Management</p>
          <button className="w-32 h-10 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded mr-5">
            Add Product
          </button>
        </div>
        <ProductTable />
      </div>
    </PageLayoutAdmin>
  );
}

export default ProductManagement;
