/* eslint-disable react/prop-types */
import ProductItem from "../../../components/ProductItem";

function MenuLayout({ data, name }) {
  return (
    <div className=" bg-gray-100">
      <p className="font-semibold text-4xl text-center mb-10 pt-5">{name}</p>
      <div className="bg-gray-100 pb-5">
        <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.length > 0 &&
              data.map((item) => <ProductItem key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuLayout;
