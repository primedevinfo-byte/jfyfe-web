import BookingCalendar from "@/components/BookingCalendar";
import Calendly from "@/components/Calendly";
import Image from "next/image";

export default function LeadershipCoachingPage() {
  return (
    <>
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
                Leadership Coaching
              </h1>
              <p className="text-lg text-terracotta font-medium mb-6">
                1 Hour Coaching Session: $150
              </p>
              <div className="space-y-4 text-soft-gray leading-relaxed text-[15px]">
                <p>
                  Our lives serving in our communities are holistic, and our
                  experiences in our personal sphere and professional spheres
                  impact each other. Coaching is about development and growth
                  and provides a structured conversational environment for you
                  to explore where you want to go next.
                </p>
                <p>
                  In coaching, you look at your present, decide where you want
                  to go in the future and then we co-build a clear path for how
                  you&apos;ll get there. As the image suggests, it&apos;s about
                  intentionally choosing and moving to the next pot for
                  continued thriving!
                </p>
                <p>
                  Coaching is offered to all individuals across all sectors who
                  are committed to their potential to contribute to the
                  flourishing of their communities through their roles. Coaching
                  is about partnering in the development of people and people
                  are what make our communities healthy and beautiful; every
                  role can find value in a leadership coaching practice! Whether
                  you are a student, volunteer, manager or senior executive
                  coaching is a transformational activity that will level-up
                  your leadership capabilities.
                </p>
                <p>
                  I believe in the value of coaching to improve the health of
                  communities and provide subsidized coaching services for young
                  and emerging leaders to promote greater accessibility. Connect
                  with me in a discovery call to explore this option.
                </p>
                <p className="font-medium text-charcoal">
                  Book a free 30-minute discovery session to learn about
                  coaching and experience what working with me could look like.
                </p>
              </div>
            </div>

            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-amber-50 to-orange-100">
              <Image
                src="/images/service2.jpg"
                alt="Julie"
                width={500}
                height={400}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Calendar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-terracotta mb-2">
              Let&apos;s partner to develop the leader you want to be!
            </h2>
            <p className="text-soft-gray">
              Free, 30 min discovery call to explore leadership coaching
            </p>
          </div>
          {/* <BookingCalendar /> */}
          <Calendly />
        </div>
      </section>
    </>
  );
}
