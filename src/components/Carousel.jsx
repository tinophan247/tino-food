import { useEffect, useState } from "react";

function Carousel() {
  const [curr, setCurr] = useState(0);
  const nextImg = () =>  setCurr((curr) => curr === slider.length -1 ? 0 : curr + 1 )

  const slider = [
    {
      id: 1,
      img: "https://www.shutterstock.com/shutterstock/photos/1508393156/display_1500/stock-vector-pepperoni-pizza-banner-ads-on-kraft-paper-background-with-tomatoes-and-basil-leaves-d-1508393156.jpg",
    },
    {
      id: 2,
      img: "http://yesofcorsa.com/wp-content/uploads/2018/09/Pepperoni-Pizza-Best-Wallpaper.jpg",
    },
    {
      id: 3,
      img: "https://images8.alphacoders.com/369/369063.jpg",
    },
    {
      id: 4,
      img: "https://images5.alphacoders.com/657/657729.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextImg();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center bg-gray-100 m-auto relative">
      <div
        className="relative xl:w-[75%] w-[90%] block h-56 bg-cover rounded-lg md:h-96 transition duration-500 ease-in-out mt-20"
        style={{
          backgroundImage: `url(${slider[curr].img})`,
        }}
      />
    </div>
  );
}

export default Carousel;
