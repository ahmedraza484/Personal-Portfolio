import { Send, Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone / WhatsApp",
      value: "+92 3248817986",
      link: "tel:+923248817986",
    },
    {
      icon: Mail,
      title: "Email Address",
      value: "ahmedraza.jpg@gmail.com",
      link: "mailto:ahmedraza.jpg@gmail.com",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/ahmedrazajpg/",
      link: "https://www.linkedin.com/in/ahmedrazajpg/",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Karachi, Pakistan",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-3 dark:text-white text-gray-900">
            Get In
            <span className="text-red-500 dark:text-red-400"> Touch</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Have a project or opportunity? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-7" data-aos="fade-right">
            <div>
              <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-3">
                Let's Talk
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Feel free to reach out through any of the following platforms.
                I'm always open to discussing new projects, creative ideas, and
                opportunities.
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>

                      {item.link ? (
                        <a
                          href={item.link}
                          target={
                            item.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          className="text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div data-aos="fade-left">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5 dark:bg-zinc-900/30 bg-white/50 p-8 sm:p-10 rounded-3xl border dark:border-zinc-800 border-gray-100 backdrop-blur-sm w-full"
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full px-5 py-4 rounded-xl border outline-none text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-red-500 dark:focus:border-red-400"
                required
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-4 rounded-xl border outline-none text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-red-500 dark:focus:border-red-400"
                required
              />

              <textarea
                rows={5}
                placeholder="Message"
                className="w-full px-5 py-4 rounded-xl border outline-none text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-red-500 dark:focus:border-red-400"
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
      </div>
    </section>
  );
};

export default Contact;
