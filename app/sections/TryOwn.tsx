const TryOwn = () => {
  return (
    <div className="md:h-[50dvh] h-auto flex justify-between flex-col gap-4 lg:flex-row items-start max-w-[1450px] mx-auto p-8 gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-bold ">Попробуйте сами!</h1>
        <p className="text-sm text-gray-400 md:text-base">
          Скачайте из вашего магазина приложений
        </p>
      </div>
      <div className="h-[300px] lg:h-full w-full lg:w-[50%] bg-gray-200 rounded-xl"></div>
    </div>
  );
};

export default TryOwn;
