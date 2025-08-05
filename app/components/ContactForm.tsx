"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    
    try {
      console.log("Form submission:", data);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Message sent successfully! We'll respond within 24 hours.", {
        position: "bottom-center",
        autoClose: 5000,
      });
      
      reset();
    } catch (error) {
      toast.error("An error occurred while sending. Please try again.", {
        position: "bottom-center",
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            placeholder="What should we call you?"
            id="name"
            {...register("name", { 
              required: "Please enter your name",
              minLength: {
                value: 2,
                message: "Name must contain at least 2 characters"
              }
            })}
            className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            {...register("email", { 
              required: "Email is required for response",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address"
              }
            })}
            className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            placeholder="Tell us about your question or suggestion..."
            id="message"
            rows={5}
            {...register("message", { 
              required: "Please describe your request",
              minLength: {
                value: 10,
                message: "Message must contain at least 10 characters"
              }
            })}
            className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting && (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        
        <p className="text-xs text-gray-500 text-center">
          * Required fields
        </p>
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
