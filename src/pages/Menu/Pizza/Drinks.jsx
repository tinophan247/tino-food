import MenuLayout from "../MenuLayout/MenuLayout";

function Drinks() {
  const drinkList = [
    {
      id: 41,
      img: "https://img.dominos.vn/coke-390.jpg",
      name: "Chai Coca-Cola 390ml",
      price: 1.01,
      size: "Small",
      category : 'drinks'
    },
    {
      id: 42,
      img: "https://img.dominos.vn/fanta-390.jpg",
      name: "Chai Fanta 390ml",
      price: 1.01,
      size: "Small",
      category : 'drinks'
    },
    {
      id: 43,
      img: "https://img.dominos.vn/Sprite-390.jpg",
      name: "Chai Sprite 390ml",
      price: 1.01,
      size: "Small",
      category : 'drinks'
    },
    {
      id: 44,
      img: "https://img.dominos.vn/coke-zero.jpg",
      name: "COCA-COLA ZERO CAN 320ML",
      price: 1.01,
      size: "Small",
      category : 'drinks'
    },
    {
      id: 45,
      img: "https://img.dominos.vn/coke-1.5.jpg",
      name: "COCA-COLA BOTTLE 1.5L",
      price: 1.58,
      size: "Large",
      category : 'drinks'
    },
    {
      id: 46,
      img: "https://img.dominos.vn/Sprite-1.5L.jpg",
      name: "SPRITE BOTTLE 1.5L",
      price: 1.58,
      size: "Large",
      category : 'drinks'
    },
    {
      id: 47,
      img: "https://img.dominos.vn/fanta-1.5.jpg",
      name: "FANTA BOTTLE 1.5L",
      price: 1.58,
      size: "Large",
      category : 'drinks'
    },
    {
      id: 48,
      img: "https://img.dominos.vn/daisani.jpg",
      name: "DASANI SPRING WATER 510ML",
      price: 1.01,
      size: "Small",
      category : 'drinks'
    },
    {
      id: 49,
      img: "https://img.dominos.vn/dasani-pc-new.png",
      name: "DASANI SPRING WATER 1.5L",
      price: 1.58,
      size: "Large",
      category : 'drinks'
    },
  ];

  return (
    <div>
      <MenuLayout name="BEVERAGES" data={drinkList} />
    </div>
  );
}

export default Drinks;
