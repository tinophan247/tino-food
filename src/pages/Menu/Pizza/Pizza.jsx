import MenuLayout from "../MenuLayout/MenuLayout"

function Pizza() {
  const favorFood = [
    {
        id :1,
        img : 'https://img.dominos.vn/Pizza+Seoul+vien+khoai+lang+-+TIENG+ANH.jpg',
        name : "PIZZA SEOUL BÒ XÀO BULGOGI VIỀN KHOAI LANG PHÔ MAI - SEOUL BEEF BULGOGI CHEESY SWEET POTATO CRUST",
        price : 35,
        size : 'Medium',
        category : 'favor'
    },
    {
        id : 2,
        img : 'https://img.dominos.vn/Pizza+Seoul+ko+vien+-+TIENG+ANH.jpg',
        name : "PIZZA SEOUL BÒ XÀO BULGOGI - SEOUL BEEF BULGOGI",
        price : 35,
        size : 'Medium',
        category : 'favor'
    },
    {
        id :3,
        img : 'https://img.dominos.vn/Menu+BG+1.jpg',
        name : "PIZZA BÒ BEEFSTEAK PHÔ MAI KIỂU NEW YORK - NEW YORK CHEESESTEAK",
        price : 35,
        size : 'Medium',
        category : 'favor'
    }
];

const seafoodList = [
  {
      id :4,
      img : 'https://img.dominos.vn/Surf-turf-Pizza-Bo-Tom-Nuong-Kieu-My-1.jpg',
      name : "PIZZA BÒ & TÔM NƯỚNG KIỂU MỸ - SURF & TURF",
      price : 35,
      size : 'Medium',
      category : 'seafood'
  },
  {
      id :5,
      img : 'https://img.dominos.vn/Pizza-Hai-San-Xot-Mayonnaise-Ocean-Mania.jpg',
      name : "PIZZA HẢI SẢN XỐT MAYONNAISE - OCEAN MANIA",
      price : 35,
      size : 'Medium',
      category : 'seafood'
  },
  {
      id :6,
      img : 'https://img.dominos.vn/Pizzaminsea-Hai-San-Nhiet-Doi-Xot-Tieu.jpg',
      name : "PIZZA HẢI SẢN NHIỆT ĐỚI XỐT TIÊU - PIZZAMIN SEA",
      price : 35,
      size : 'Medium',
      category : 'seafood'
  },
  {
      id :7,
      img : 'https://img.dominos.vn/Sausage-Kid-Mania-1.jpg',
      name : "PIZZA XÚC XÍCH XỐT PHÔ MAI - SAUSAGE KID MANIA",
      price : 35,
      size : 'Medium',
      category : 'seafood'
  }
]

  return (
    <div>
      <MenuLayout name='FLAVORS OF THE WORLD' data={favorFood}/>
      <MenuLayout name='SEAFOOD CRAVERS' data={seafoodList}/>
    </div>
  )
}

export default Pizza;