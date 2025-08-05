import Link from "next/link";

import { HelpPageType } from "../lib/types";

const HelpControls = ({ page }: { page: HelpPageType }) => {
  return (
    <div className="flex flex-col justify-between h-full min-w-[300px] max-w-[500px] w-full">
      <div className="flex flex-col gap-4 mt-10">
        <h1 className="text-4xl font-bold">Help is here.</h1>
        <div className="flex flex-col gap-2">
          <Link
            href={"/help/faq"}
            className={`${page === "faq" ? "text-blue-500" : "text-gray-500"}`}
          >
            Frequently Asked Questions
          </Link>
          <Link
            href={"/help/contacts"}
            className={`${
              page === "contacts" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            Contact the developer
          </Link>
          <Link
            href={"/help/policy"}
            className={`${
              page === "policy" || page === "terms"
                ? "text-blue-500"
                : "text-gray-500"
            }`}
          >
            Privacy Policy <br />and Terms of Use
          </Link>
        </div>
      </div>
      <div className="flex flex-col text-gray-400 font-medium">
        <p className="font-regular">
          You can also always email us at:
        </p>
        <Link href="mailto:help@chrdk.ru">help@chrdk.ru</Link>
      </div>
    </div>
  );
};

export default HelpControls;
