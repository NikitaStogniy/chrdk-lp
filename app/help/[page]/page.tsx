import type { Metadata } from "next";
import Menu from "../../components/Menu";
import HelpControls from "../../components/HelpControls";
import HelpContent from "../../components/HelpContent";
import { HelpPageType } from "../../lib/types";

export const metadata: Metadata = {
  title: "Чердак в кармане",
  description: "Найти любой шмурдяк",
};

const HelpPage = async ({ params }: { params: { page: HelpPageType } }) => {
  const { page } = params;
  console.log(page);

  return (
    <main className="bg-white max-w-[1450px] mx-auto ">
      <Menu />
      <div className="flex h-screen flex-col md:flex-row gap-4 p-8">
        <HelpControls page={page} />
        <HelpContent page={page} />
      </div>
    </main>
  );
};

export default HelpPage;
