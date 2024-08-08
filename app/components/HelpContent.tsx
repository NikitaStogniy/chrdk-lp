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
    title: "Как установить приложение?",
    content:
      "Чтобы установить наше приложение для складского учета, перейдите в Google Play или App Store, найдите наше приложение по названию, и нажмите кнопку 'Установить'. Следуйте инструкциям на экране для завершения установки.",
  },
  {
    title: "Как зарегистрироваться в приложении?",
    content:
      "На главном экране приложения нажмите кнопку 'Регистрация'. Введите необходимые данные, такие как имя, адрес электронной почты и пароль. Подтвердите свою регистрацию через одноразовый код в электронном письме.",
  },
  {
    title: "Как добавить новый товар в систему?",
    content:
      "Зайдите в раздел 'Товары' и нажмите на кнопку 'Добавить товар'. Заполните все необходимые поля, такие как название товара, местоположение и фотография. Нажмите 'Сохранить'.",
  },
  {
    title: "Как восстановить доступ к учетной записи?",
    content:
      "На странице входа нажмите 'Забыли пароль?'. Введите адрес электронной почты, связанный с вашей учетной записью, и следуйте инструкциям для восстановления доступа.",
  },
  {
    title: "Как связаться с технической поддержкой?",
    content:
      "В разделе 'Поддержка' найдите контактные данные для связи с технической поддержкой. Вы можете воспользоваться электронной почтой, чатом или телефоном для получения помощи.",
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
        <div
          dangerouslySetInnerHTML={{
            __html: isPolicy ? PolicyHTML : TermsHTML,
          }}
        />
      </div>
    </div>
  );
};
