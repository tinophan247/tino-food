import Carousel from "../components/Carousel";
import HomeProduct from "../components/HomeProduct";
import Pagelayout from "../components/Pagelayout";

function HomePage() {
  return (
    <Pagelayout>
      <Carousel />
      <HomeProduct/>
    </Pagelayout>
  );
}

export default HomePage;
