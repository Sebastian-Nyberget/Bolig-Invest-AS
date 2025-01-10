import Image from "next/image";

const Hero = () => {
    return (
      <div className="w-full h-[845px]">
        <div className="flex flex-col md:flex-row w-full">

          <div className="h-96 w-full md:w-1/2 pl-36 pt-36">
            <h1 className="text-6 md:text-9xl font-bold text-gray-800">
              BOLIG <br /> INVEST AS
            </h1>
            <p className="pt-8">Lorem ipsum odor amet, consectetuer adipiscing elit. Orci torquent <br /> elementum ridiculus ex fermentum laoreet montes per. Ornare justo natoque <br /> velit habitasse nisi semper!
            </p>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-end pr-36 pt-36">
            <div className="bg-gray-400 w-60 h-96 flex justify-center items-center">Image</div>
          </div>
        </div>
        
        <div className="w-full p-40 text-center">
          <Image src="/Pattern.png" alt="Mønster" width={800} height={800} />
        </div>
      </div>
    );
  };
  
  export default Hero;
  