"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Calendly from "@/components/Calendly";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.10,
    },
  },
};

export default function StrategicImplementationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.10 }}
                className="text-2xl sm:text-3xl font-bold text-terracotta mb-6"
              >
                Strategic Implementation Consulting
              </motion.h1>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.12 }}
                className="space-y-4 text-soft-gray leading-relaxed text-[15px]"
              >
                <p>
                  The windy road of implementations means sometimes we
                  can&apos;t see where we are going or be sure we can ever get
                  there. Strategic Implementation is a way to ensure you
                  understand where you are, where you are going and how you are
                  getting there.
                </p>
                <p>
                  Every initiative has unique needs, as a result, no two
                  implementations will look the same. Below are examples of what
                  your organization could benefit from. All strategic
                  implementation consulting is tailored to your needs and
                  resources!
                </p>
                <p className="font-medium text-charcoal">
                  Please feel free to book a free consultation with me. I
                  welcome a collaborative conversation with you to determine how
                  my approach will benefit your organization.
                </p>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.14, ease: "easeOut" }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/service1.jpg"
                alt="Strategic Implementation"
                width={600}
                height={450}
                className="h-full w-full object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three columns */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            {/* Planning */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.12 }}
              className="bg-white"
            >
              <h2 className="text-xl font-bold text-charcoal mb-4">Planning</h2>
              <p className="text-sm text-soft-gray mb-4">
                Implementation planning takes place before you start and could
                be a fit if:
              </p>
              <ul className="space-y-3 text-sm text-terracotta font-medium">
                <li>
                  You are applying for a grant that requires planning documents
                </li>
                <li>
                  You are looking for a set of documents that your team can run
                  with
                </li>
                <li>
                  You are pitching an initiative to your board and require a
                  polished package to showcase the value
                </li>
              </ul>
              <p className="mt-6 text-sm text-soft-gray leading-relaxed">
                All implementation planning contracts include complementary
                follow up sustainment conversations for the 6 months post
                implementation end date. Sustainment conversation hours are
                capped at 5% of the total hours of the original contract. For
                example, a 50 hour contract would receive 2.5 hours of
                complimentary conversations.
              </p>
            </motion.div>

            {/* Advising */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.12, delay: 0.18 }}
            >
              <h2 className="text-xl font-bold text-charcoal mb-4">Advising</h2>
              <p className="text-sm text-soft-gray mb-4">
                Strategic Advising benefits leaders and teams with one or more
                current implementations and could be a fit if:
              </p>
              <ul className="space-y-3 text-sm text-terracotta font-medium">
                <li>
                  Your organization has received recommendations that are
                  manageable for your internal team to lead, and you want to
                  ensure their success and develop their resiliency
                </li>
                <li>
                  You are working on a limited budget and would like strategic
                  expertise to support your internal team
                </li>
                <li>
                  Your organization has multiple initiatives being managed by
                  multiple operations leaders who would benefit from having
                  access to a friendly neighbourhood strategic advisor to ensure
                  their success
                </li>
              </ul>
              <p className="mt-6 text-sm text-soft-gray leading-relaxed">
                Generally, Strategic Advising clients are &quot;non project
                people&quot; and Strategic Advising is the perfect fit to
                support them to successfully lead their initiative and be ready
                for the next one.
              </p>
              <p className="mt-3 text-sm text-soft-gray leading-relaxed">
                Strategic Advising contracts vary and are developed through
                conversation of what hours and tools are needed.
              </p>
              <p className="mt-3 text-sm text-soft-gray leading-relaxed">
                All Strategic Advising contracts include x2, 45 min
                complementary coaching conversations for leads. Coaching
                conversations can take place up to 6 months post ending of the
                contract and are offered as a means to integrate and continue to
                develop strategic implementation skills.
              </p>
            </motion.div>

            {/* Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.18, delay: 0.6 }}
            >
              <h2 className="text-xl font-bold text-charcoal mb-4">
                Implementation
              </h2>
              <p className="text-sm text-soft-gray mb-4">
                Strategic Implementation takes your initiative through the full
                implementation lifecycle. I work collaboratively with you to
                bring you from idea to reality through to sustainment. Strategic
                Implementation could be a fit if:
              </p>
              <ul className="space-y-3 text-sm text-terracotta font-medium">
                <li>
                  You&apos;re facing an overwhelming implementation request with
                  minimal internal experience (e.g. accreditation, regulatory
                  change, Ministry mandate etc.)
                </li>
                <li>
                  Your operations team is at capacity, and you want to protect
                  against burnout and complete important work
                </li>
                <li>
                  An initiative is underway and either stuck or unable to gain
                  traction
                </li>
              </ul>
              <p className="mt-6 text-sm text-soft-gray leading-relaxed">
                All Strategic Implementation contracts include complementary
                sustainment conversations for the 6-12 months post
                implementation end date. Sustainment conversation hours are
                capped at 5% of the total hours of the original contract. For
                example, a 500 hour contract would receive up to 25 hours of
                complimentary conversations in the 12 months post contract.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA + Calendar */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.12 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-terracotta mb-2">
              Let&apos;s get work done that matters to you!
            </h2>
            <p className="text-soft-gray">
              Book a free 30 min call to explore strategic implementation
              options that will take you from plan to reality
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.12, delay: 0.18 }}
          >
            <Calendly />
          </motion.div>
        </div>
      </section>
    </>
  );
}
