import Pagelayout from "../../components/Pagelayout";

function About() {
  return (
    <Pagelayout>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-20">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              Tino Food is an American multinational restaurant chain and
              international franchise founded in 1958 in Wichita, Kansas by Dan
              and Frank Carney. The chain, headquartered in Plano, Texas,
              operates 17,639 restaurants worldwide as of 2020. It is owned by
              Yum! Brands, Inc.
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src="https://i.ytimg.com/vi/5jvf9Fx4d3U/maxresdefault.jpg"
              alt="Tino Food"
            />
          </div>
        </div>
      </div>
    </Pagelayout>
  );
}

export default About;
