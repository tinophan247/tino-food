import Carousel from "../components/Carousel";
import Pagelayout from "../components/Pagelayout";
import MenuLayout from "./Menu/MenuLayout/MenuLayout";

function HomePage() {
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
    <Pagelayout>
      <Carousel />
      <MenuLayout name='BEST SELLER' data={foodList}/>
    </Pagelayout>
  );
}

export default HomePage;
