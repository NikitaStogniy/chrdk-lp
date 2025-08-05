import Image from "next/image";

interface FeatureBlockProps {
  heading: string;
  image: string;
  description: string;
  icon?: React.ReactNode;
}

const FeatureBlock = ({ heading, image, description, icon }: FeatureBlockProps) => {
  return (
    <div className="bg-white h-[400px] lg:h-[500px] w-full rounded-xl gap-4 justify-between flex flex-col p-8 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3">
        {icon && <div className="text-2xl">{icon}</div>}
        <h3 className="text-2xl font-bold">{heading}</h3>
      </div>
      <div className="relative h-full">
        <Image src={image} alt={heading} fill className="object-contain" />
      </div>
      <p className="text-gray-600 text-center">
        {description}
      </p>
    </div>
  );
};

export default FeatureBlock;
