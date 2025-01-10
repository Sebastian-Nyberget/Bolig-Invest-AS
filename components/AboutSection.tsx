const AboutSection = () => {
  return (
    <div>
      <div className="w-full">
        <h1 className="text-5xl text-gray-400 font-semibold pl-36">
          <span className="font-bold  text-black">Lorem ipsum </span>
           odor amet, <br /> consectetuer adipiscing elit. Vel vitae <br /> porttitor inceptos rhoncus class. Id <br /> aenean vitae, facilisis risus euismod <br /> ligula.
        </h1>
      </div>
      <div className="w-full flex p-36">
        <div className="w-1/2">
          <div className="border-2 rounded-full border-gray-400 w-40 py-4">
            <h1 className="text-center text-2xl text-gray-400 font-bold tracking-wide">Om oss</h1>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <p className="text-lg tracking-wide pr-20">Lorem ipsum odor amet, consectetuer adipiscing <br /> elit.Tristique faucibus nulla varius dis diam ligula. <br /> Porttitor porta condimentum; nisi aptent litora platea. <br /> Tristique fames nec dignissim vivamus nam cursus faucibus.</p>
        </div>
      </div>
    </div>
  );
}
 
export default AboutSection;