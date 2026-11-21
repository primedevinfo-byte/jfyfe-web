import Link from "next/link";
import Image from "next/image";
import BookingCalendar from "@/components/BookingCalendar";
import BookingPage from "./bookings/page";
import Calendly from "@/components/Calendly";

export default function HomePage() {
  return (
    <>
      {/* Welcome Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            {/* Photo */}
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 shrink-0 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/pix1.png"
                alt="Julie"
                width={1400}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            {/* Welcome text */}
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-terracotta mb-6">
                Welcome
              </h2>
              <div className="space-y-4 text-soft-gray leading-relaxed text-[15px]">
                <p>
                  JFyfe Consulting and Coaching is a boutique firm offering goal
                  focused strategic implementation and leadership coaching
                  services to nonprofits, governments, and businesses who are
                  invested in the flourishing of their community. As founder and
                  principal consultant, I bring 20+ years of experience in
                  non-profits and health care settings with the last decade
                  exclusively in implementing health care initiatives.
                </p>
                <p>
                  I am driven to improve the health and beauty, flourishing and
                  thriving of communities and value:
                </p>
                <ul className="space-y-1 text-terracotta font-medium">
                  <li>Service</li>
                  <li>Generosity</li>
                  <li>Accessibility</li>
                  <li>Caring for Creation</li>
                </ul>
                <p>
                  I take a collaborative approach to implementations and
                  coaching with nonprofits, governments, and businesses who are
                  invested in the flourishing of their community. My strategic
                  approach gets the work done that matters by applying a people
                  centred, collaborative style that increases a team&apos;s
                  resiliency and competency for what comes next.
                </p>
                <p>
                  The organizations I partner with are driven by a desire to
                  contribute to the health and beauty of their communities. This
                  might look like: providing services that contribute to better
                  health in their communities, contributing to the beauty of
                  their communities through art or restoring creation,
                  organizational practices that acknowledge their people&apos;s
                  entire lives and equitable practices in hiring and
                  development.
                </p>
                <p className="font-medium text-charcoal">
                  Connect with me to see how I can support you in contributing
                  to the health and beauty of your community!
                </p>
              </div>

              {/* PMP Badge */}
              <div className="mt-8">
                <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/images/pmp-logo.png"
                    alt="PMP Certification"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-terracotta mb-12">
            Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              href="/strategic-implementation"
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-emerald-800 to-emerald-950">
                <Image
                  src="/images/service1.jpg"
                  alt="Julie"
                  width={500}
                  height={400}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-charcoal group-hover:text-terracotta transition-colors">
                  Strategic Implementation
                </h3>
                <p className="mt-1 text-soft-gray text-sm">
                  Strategic Implementation solutions to complete work that
                  matters to you.
                </p>
                <span className="inline-flex items-center gap-1 mt-3 text-terracotta font-medium text-sm">
                  Learn More
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </span>
              </div>
            </Link>

            <Link
              href="/leadership-coaching"
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
                <Image
                  src="/images/service2.jpg"
                  alt="Julie"
                  width={500}
                  height={400}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-charcoal group-hover:text-terracotta transition-colors">
                  Leadership Coaching
                </h3>
                <p className="mt-1 text-soft-gray text-sm">
                  Structured, relational conversations that move you toward your
                  goals.
                </p>
                <span className="inline-flex items-center gap-1 mt-3 text-terracotta font-medium text-sm">
                  Learn More
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA + Calendar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-terracotta mb-2">
              Let&apos;s get work done that matters to you!
            </h2>
            <p className="text-soft-gray">
              Book a free 30 min Discovery Call to explore strategic
              implementation or leadership coaching
            </p>
          </div>
          {/* <BookingCalendar /> */}
          <Calendly />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Contact Form
          </h2>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-terracotta"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-terracotta"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-terracotta resize-none"
            />
            <div className="flex justify-center">
              <button
                type="submit"
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
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
