import ProductItem from "./ProductItem";

function HomeProduct() {
    const foodList = [
        {
            id :1,
            img : 'https://img.dominos.vn/Surf-turf-Pizza-Bo-Tom-Nuong-Kieu-My-1.jpg',
            name : "PIZZA BÒ & TÔM NƯỚNG KIỂU MỸ - SURF & TURF",
            price : 35,
            size : 'Medium'
        },
        {
            id :2,
            img : 'https://img.dominos.vn/Pizza-Hai-San-Xot-Mayonnaise-Ocean-Mania.jpg',
            name : "PIZZA HẢI SẢN XỐT MAYONNAISE - OCEAN MANIA",
            price : 35,
            size : 'Medium'
        },
        {
            id :3,
            img : 'https://img.dominos.vn/Pizzaminsea-Hai-San-Nhiet-Doi-Xot-Tieu.jpg',
            name : "PIZZA HẢI SẢN NHIỆT ĐỚI XỐT TIÊU - PIZZAMIN SEA",
            price : 35,
            size : 'Medium'
        },
        {
            id :4,
            img : 'https://img.dominos.vn/Sausage-Kid-Mania-1.jpg',
            name : "PIZZA XÚC XÍCH XỐT PHÔ MAI - SAUSAGE KID MANIA",
            price : 35,
            size : 'Medium'
        }
    ]

  return (
    <div>
      <p className="text-center mt-10 font-bold text-4xl text-red-700">New Food</p>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {foodList.length > 0 && foodList.map((item)=>(
            <ProductItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProduct;
