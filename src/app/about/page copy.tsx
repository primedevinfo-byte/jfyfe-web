import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* Photo */}
          <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-terracotta/15 to-charcoal/10">
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 shrink-0 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/pix2.png"
                alt="Julie"
                width={1400}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-terracotta mb-6">
              HELLO AND WELCOME!
            </h1>
            <div className="space-y-4 text-soft-gray leading-relaxed text-[15px]">
              <p>
                Hello! I&apos;m Julie, founder and principal consultant of JFyfe
                Consulting and Coaching. I offer goal focused strategic
                implementation and leadership coaching to nonprofits,
                governments, and businesses who are invested in the flourishing
                of their community.
              </p>
              <p>
                I love collaborating with people to get work done that is
                meaningful and contributes to the flourishing and thriving of
                their communities. Implementations that receive strategic
                support are an opportunity to build new skills and confidence,
                leading to greater resiliency for team members. I incorporate a
                coaching approach to my strategic implementation practice that
                brings the added value of development to teams.
              </p>
              <p>
                I have 20+ years of experience across non-profit and health care
                settings with the last 10 years exclusively in coordination and
                management of operational health care implementations. I am an
                MBA graduate, PMI certified Project Management Professional
                (PMP), CCHL Certified Health Executive (CHE) with additional
                training in Indigenous Cultural Safety (San&apos;yas), LEADS
                Inspired Leadership, LEAN (Greenbelt), Public Engagement (IAP2),
                and a Master of Arts in Leadership, Theology and Society from
                Regent College in Vancouver, BC.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded bg-[#0A66C2] text-white hover:opacity-90 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <div className="mt-10 p-5 bg-cream rounded-xl">
              <p className="text-sm text-soft-gray italic leading-relaxed">
                <span className="font-medium text-charcoal not-italic">
                  A note on perfection:
                </span>{" "}
                I recognize that organizations are striving to make their
                communities healthier and more beautiful, that perfection in
                this arena is unattainable and that it is a journey worthy
                pursuing despite this. JFyfe Consulting is also on a journey and
                committed to continually striving to improve our practices in
                relation to our values of Generosity, Service, Accessibility and
                Caring for Creation.
              </p>
            </div>

            <p className="mt-6">
              <a
                href="#"
                className="text-terracotta hover:underline text-sm font-medium"
              >
                JFyfe Consulting&apos;s Position Statement On Generative AI
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
