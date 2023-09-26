/* eslint-disable react/prop-types */
function ProductItem({item}) {
  return (
    <div className="relative hover:shadow-xl cursor-pointer rounded-lg">
      <div className="w-full overflow-hidden rounded-md bg-gray-200 lg:h-80">
        <img
          src={item.img}
          alt="Front of men's Basic Tee in black."
          className="h-full w-full object-cover object-center lg:h-full lg:w-full "
        />
      </div>
      <div className="py-2 px-4">
        <div>
          <h3 className="text-sm text-gray-5       00 font-medium">
              {item.name}
          </h3>
        </div>
        <div className="flex justify-between">
        <p className="mt-1 text-sm text-gray-500">{item.size}</p>
        <p className="text-sm font-medium text-gray-900">${item.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
