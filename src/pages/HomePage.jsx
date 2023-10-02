import Carousel from "../components/Carousel";
import HomeProduct from "../components/HomeProduct";
import Pagelayout from "../components/Pagelayout";
import Test from "../components/Test";

function HomePage() {

  return (
    <Pagelayout>
      <Carousel />
      <HomeProduct/>
      <Test/>
    </Pagelayout>
  );
}

export default HomePage;
