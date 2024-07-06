interface FeatureBlockProps {
  heading: string;
  image: string;
  description: string;
}

const FeatureBlock = ({ heading, image, description }: FeatureBlockProps) => {
  return (
    <div className="bg-white h-[400px] lg:h-[500px] w-full rounded-xl gap-4 justify-between flex flex-col p-8">
      <h3 className="text-2xl font-bold">{heading}</h3>
      <p className="text-gray-400 text-center">
        {description}
        купить
      </p>
    </div>
  );
};

export default FeatureBlock;
