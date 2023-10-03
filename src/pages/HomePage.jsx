import Carousel from "../components/Carousel";
import HomeProduct from "../components/HomeProduct";
import Pagelayout from "../components/Pagelayout";
import Test2 from "../components/Test2";

function HomePage() {

  return (
    <Pagelayout>
      <Carousel />
      <HomeProduct/>
      <Test2/>
    </Pagelayout>
  );
}

export default HomePage;
