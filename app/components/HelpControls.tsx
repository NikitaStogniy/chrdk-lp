import Link from "next/link";

import { HelpPageType } from "../lib/types";

const HelpControls = ({ page }: { page: HelpPageType }) => {
  return (
    <div className="flex flex-col justify-between h-full min-w-[300px] max-w-[500px] w-full">
      <div className="flex flex-col gap-4 mt-10">
        <h1 className="text-4xl font-bold">Здесь есть помощь.</h1>
        <div className="flex flex-col gap-2">
          <Link
            href={"/help/faq"}
            className={`${page === "faq" ? "text-blue-500" : "text-gray-500"}`}
          >
            Часто задаваемые вопросы
          </Link>
          <Link
            href={"/help/contacts"}
            className={`${
              page === "contacts" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            Связаться с разработчиком
          </Link>
          <Link
            href={"/help/policy"}
            className={`${
              page === "policy" || page === "terms"
                ? "text-blue-500"
                : "text-gray-500"
            }`}
          >
            Политики конфиденциальности <br />и правила использования
          </Link>
        </div>
      </div>
      <div className="flex flex-col text-gray-400 font-medium">
        <p className="font-regular">
          Так же вы всегда можете написать нам на почту:
        </p>
        <Link href="mailto:help@chrdk.ru">help@chrdk.ru</Link>
      </div>
    </div>
  );
};

export default HelpControls;
