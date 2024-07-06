import Image from "next/image";
import Heading from "./sections/Heading";
import Features from "./sections/Features";
import TryOwn from "./sections/TryOwn";
import Menu from "./components/Menu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Чердак в кармане",
  description: "Найти любой шмурдяк",
};
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Menu />
      <Heading />
      <Features />
      <TryOwn />
    </main>
  );
}
