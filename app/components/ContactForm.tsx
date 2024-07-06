"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    toast.success("Форма успешно отправлена!");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
        <div>
          <input
            placeholder="Представься"
            id="name"
            {...register("name", { required: "Нужно знать с кем имеем дело" })}
            className="mt-1 block w-full p-2 border border-gray-100 bg-gray-100 rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email", { required: "А куда писать ответ??" })}
            className="mt-1 block w-full p-2 border border-gray-100 bg-gray-100 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder="Месседж"
            id="message"
            {...register("message", { required: "Ну напиши хоть что-то" })}
            className="mt-1 block w-full p-2 border border-gray-100 bg-gray-100 rounded-md"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="border border-gray-100 bg-gray-100 rounded-md p-2 rounded-md mt-4"
        >
          Отправить
        </button>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
};

export default ContactForm;
