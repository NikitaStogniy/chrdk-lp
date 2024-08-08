import FeatureBlock from "../components/FeatureBlock";

const Features = () => {
  return (
    <div className="bg-black">
      <div className=" md:h-screen flex gap-10 justify-center flex-col items-start max-w-[1450px] mx-auto p-8">
        <div>
          <h2 className="text-white text-4xl font-bold">О приложении</h2>
          <p className="text-gray-400">Ничего особенного, но очень удобно</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <FeatureBlock
            image="/about-1.png"
            heading="Где хотите"
            description="Чердак позволяет управлять
            сразу пятью объектами
            с одного телефона"
          />
          <FeatureBlock
            image="/about-2.png"
            heading="Что хотите"
            description="Можно добавить название, фото и описание предмета, а потом легко его найти"
          />
          <FeatureBlock
            image="/about-3.png"
            heading="Поделитесь с близкими"
            description="Добавьте участника в ваш 
            объект для совместного пользования"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
