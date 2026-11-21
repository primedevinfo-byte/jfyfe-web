"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-center mb-6"
        >
          Acknowledgement
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm text-white/75 leading-relaxed text-center"
        >
          As a settler of Scottish and English background, I humbly acknowledge
          that my work spans many Territories, Lands and Treaty Areas, mainly
          the unceded Traditional Territories of the Coast Salish Peoples. I
          honour and respect the history, languages, ceremonies and cultures of
          First Nations, Métis, and Inuit. I am grateful for the traditional
          Knowledge Keepers and Elders who are with us today, those who have
          gone before us, and youth who inspire us. I offer this statement as an
          act of Reconciliation, as we move forward in action toward equity,
          justice, and partnership together, to make right with all our
          relations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm"
        >
          <Link
            href="/about"
            className="text-white/70 hover:text-terracotta-light transition-colors underline underline-offset-2"
          >
            Generative AI Position Statement
          </Link>
          <Link
            href="/contact"
            className="text-white/70 hover:text-terracotta-light transition-colors underline underline-offset-2"
          >
            Privacy Policy
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terracotta transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-white/50">
          © {new Date().getFullYear()} JFyfe Consulting and Coaching
        </div>
      </motion.div>
    </footer>
  );
}
