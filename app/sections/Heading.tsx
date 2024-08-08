import Image from "next/image";

const Heading = () => {
  return (
    <div className="md:h-screen flex justify-between flex-col lg:flex-row items-start lg:items-center max-w-[1450px] mx-auto p-8 gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl md:text-6xl font-bold  lg:leading-10">
          Все на своих
          <br />
          местах.
        </h1>
        <p className="text-sm text-gray-400 md:text-base">
          Забудьте о вещах, добавив их <br />в Чердак (а он вам напомнит)
        </p>
      </div>
      <div className="w-full relative md:w-[600px] h-[600px] bg-gray-200 rounded-xl">
        <Image
          src="/first.png"
          alt="about"
          fill
          className="object-contain rounded-xl"
        />
      </div>
    </div>
  );
};

export default Heading;
