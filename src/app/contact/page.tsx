"use client";

import { motion } from "framer-motion";

const bookingOptions = [
  {
    title: "Discovery Call - 30 min",
    color: "bg-amber-500",
    description:
      "This discovery call is our opportunity to discuss what working together can look like. Bring any questions you have about me, my process and my style.",
    href: "https://calendly.com/jfyfeconsulting/30min",
  },
  {
    title: "Coaching - 60 min",
    color: "bg-blue-500",
    description:
      "For existing clients who have participated in a discovery call. If you are new to working with me, please book a free 30-min discovery call first.",
    href: "#",
  },
  {
    title: "Strategic Implementation Advising - 60 min",
    color: "bg-cyan-500",
    description:
      "For existing Strategic Advising clients with an active advising contract. If you are interested in Strategic Advising or another service, please book a free 30 min discovery call.",
    href: "#",
  },
  {
    title: "Strategic Implementation Advising - 30 min",
    color: "bg-teal-500",
    description:
      "For existing Strategic Advising clients with an active advising contract. If you are interested in Strategic Advising or another service, please book a free 30 min discovery call.",
    href: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Connect & Book Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-terracotta mb-3">
              Connect & Book
            </h1>
            <p className="text-soft-gray">
              If you don&apos;t see a time that aligns with your schedule, feel
              free to email me and we&apos;ll coordinate something that fits.
            </p>
            <a
              href="mailto:Julie@jfyfeconsulting.ca"
              className="inline-block mt-2 text-terracotta hover:underline"
            >
              Julie@jfyfeconsulting.ca
            </a>
          </motion.div>

          {/* Booking options card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 sm:p-8"
          >
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {bookingOptions.map((opt) => (
                <motion.a
                  key={opt.title}
                  variants={fadeUp}
                  href={opt.href}
                  target={opt.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    opt.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ y: -4 }}
                  className="group block p-5 rounded-xl border border-gray-100 hover:border-terracotta/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-1.5 w-3 h-3 rounded-full ${opt.color} shrink-0`}
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-charcoal group-hover:text-terracotta transition-colors">
                        {opt.title}
                      </h3>
                      <p className="mt-2 text-sm text-soft-gray leading-relaxed">
                        {opt.description}
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-300 group-hover:text-terracotta shrink-0 mt-1 transition-colors"
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
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-charcoal mb-8"
          >
            Contact Form
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta transition-all"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Your Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta resize-none transition-all"
                placeholder="Your Message"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-terracotta hover:bg-terracotta-dark text-white font-medium rounded-full transition-colors"
            >
              Submit
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
