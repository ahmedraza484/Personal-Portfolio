import { Send } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-3 dark:text-white text-gray-900">
            Get In
            <span className="text-red-500 dark:text-red-400"> Touch </span>
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5 dark:bg-zinc-900/30 bg-white/50 p-8 sm:p-10 rounded-3xl border dark:border-zinc-800 border-gray-100 backdrop-blur-sm w-full max-w-xl"
            data-aos="fade-up"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-red-500 dark:focus:border-red-400"
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-red-500 dark:focus:border-red-400"
              required
            />

            <textarea
              rows={5}
              placeholder="Message"
              className="w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-red-500 dark:focus:border-red-400"
              required
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium text-base bg-red-600 hover:bg-red-700 active:scale-95 transition-all cursor-pointer w-full"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
