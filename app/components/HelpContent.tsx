import { HelpPageType } from "../lib/types";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { PolicyHTML } from "./policy";
import { TermsHTML } from "./terms";

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
      <h1 className="text-2xl font-medium">Frequently Asked Questions</h1>
      <div className="flex flex-col gap-4 pt-4 overflow-y-scroll overflow-x-hidden relative h-5/6">
        {Faq.map((item, index) => (
          <div key={index} className="flex flex-col">
            <h4>{item.title}</h4>
            <p className="text-gray-400">{item.content}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-400 mt-10">Have more questions? Email us!</p>
    </>
  );
};
const Faq = [
  {
    title: "How to install the Chrdk app?",
    content:
      "The Chrdk app is available for free on the App Store for iOS and Google Play for Android. Find 'Chrdk' in your device's app store and tap 'Install'. The app weighs less than 50 MB and works on devices with iOS 12+ or Android 6+.",
  },
  {
    title: "How many storages can I create?",
    content:
      "In the free version of the app, you can create up to 5 different storages. For example: home, cottage, garage, office, warehouse. Each storage can contain an unlimited number of items.",
  },
  {
    title: "How does semantic search work?",
    content:
      "Semantic search allows you to find items not only by exact name, but also by description, purpose, or even by image. For example, if you search for 'something to open cans', the system will find a can opener, even if it's recorded under a different name.",
  },
  {
    title: "Can I add photos to items?",
    content:
      "Yes! You can add up to 5 photos to each item. This will help you find the right thing faster and identify it more accurately. Photos are also used by the search system for more accurate results.",
  },
  {
    title: "How to invite family members to storage?",
    content:
      "In the storage settings, click 'Add participant' and send an invitation by email or share an access code. Participants will be able to view, add and take items, as well as see their usage history.",
  },
  {
    title: "What is item usage history?",
    content:
      "When someone takes an item from storage, the system records: who took it, when and for what purpose (reason is specified when taking). This helps track where the item is located and when it needs to be returned.",
  },
  {
    title: "Is my data safe?",
    content:
      "Yes, all data is encrypted and stored in a secure cloud. We do not share your personal data with third parties. You can export or delete all your data from the system at any time.",
  },
  {
    title: "Does the app work without internet?",
    content:
      "Basic viewing and search functions work offline. However, synchronization between devices, adding new items and updating usage history requires an internet connection.",
  },
  {
    title: "Are there limits on the number of items?",
    content:
      "No, the number of items in storages is not limited. You can add thousands of items, and search will still work quickly thanks to optimized algorithms.",
  },
  {
    title: "How to delete a storage or item?",
    content:
      "To delete an item, open its card and click the delete button. To delete a storage, go to its settings and select 'Delete storage'. All data will be deleted without possibility of recovery.",
  },
];

const ContactContent = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-2xl font-medium mb-4">Contact us</h1>
        <p className="text-gray-600">
          Have questions, suggestions or found a bug? We&apos;re always happy to
          help!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <a
                  href="mailto:support@cherdak.app"
                  className="text-blue-600 hover:text-blue-700"
                >
                  support@cherdak.app
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Telegram</p>
                <a
                  href="https://t.me/cherdak_support"
                  className="text-blue-600 hover:text-blue-700"
                >
                  @cherdak_support
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Response time</p>
                <p className="text-gray-800">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Write to us</h3>
          <ContactForm />
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">
          Frequently Asked Questions
        </h3>
        <p className="text-gray-600 mb-4">
          Perhaps the answer to your question is already in our FAQ section.
        </p>
        <Link
          href="/help/faq"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          Go to FAQ
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
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
          Privacy
        </Link>
        <Link
          href="/help/terms"
          className={`text-2xl font-medium ${
            isPolicy ? "text-gray-400" : "text-black"
          }`}
        >
          Terms of Use
        </Link>
      </div>

      <div className="flex flex-col gap-4 pt-4 overflow-y-scroll overflow-x-hidden relative h-full ">
        <div
          dangerouslySetInnerHTML={{
            __html: isPolicy ? PolicyHTML : TermsHTML,
          }}
        />
      </div>
    </div>
  );
};
