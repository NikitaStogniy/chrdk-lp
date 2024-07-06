import { HelpPageType } from "../lib/types";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import Link from "next/link";

const HelpContent = ({ page }: { page: HelpPageType }) => {
  return (
    <div className="bg-gray-50/50 w-full rounded-xl p-4 mt-10 border border-gray-100">
      {page === "faq" ? <FaqContent /> : null}
      {page === "contacts" ? <ContactContent /> : null}
      {page === "policy" || page === "terms" ? (
        <PolicyContent isPolicy={page === "policy"} />
      ) : null}
    </div>
  );
};

export default HelpContent;

const FaqContent = () => {
  return (
    <>
      <h1 className="text-2xl font-medium">Часто задаваемые вопросы</h1>
      <div className="flex flex-col gap-4 pt-4 overflow-y-scroll overflow-x-hidden relative h-5/6">
        {Faq.map((item, index) => (
          <div key={index} className="flex flex-col">
            <h4>{item.title}</h4>
            <p className="text-gray-400">{item.content}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-400 mt-10">Остались вопросы? Пишите на почту!</p>
    </>
  );
};

const Faq = [
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
  {
    title: "Test",
    content: "Test",
  },
];

const ContactContent = () => {
  return (
    <div className="flex flex-col gap-4 justify-between items-between">
      <h1 className="text-2xl font-medium">Связаться со мной</h1>
      <div></div>
      <div className="max-w-[500px] w-full mx-auto">
        <ContactForm />
      </div>
      <div></div>
    </div>
  );
};

const PolicyContent = ({ isPolicy }: { isPolicy: boolean }) => {
  return (
    <div className="flex flex-col gap-4 items-between relative h-full">
      <div className="flex flex-row gap-4">
        <Link
          href="/help/policy"
          className={`text-2xl font-medium ${
            isPolicy ? "text-black" : "text-gray-400"
          }`}
        >
          Конфиденциальность
        </Link>
        <Link
          href="/help/terms"
          className={`text-2xl font-medium ${
            isPolicy ? "text-gray-400" : "text-black"
          }`}
        >
          Правила использования
        </Link>
      </div>

      <div className="flex flex-col gap-4 pt-4 overflow-y-scroll overflow-x-hidden relative h-full ">
        {isPolicy ? "Политика" : "Правила"}
      </div>
    </div>
  );
};
