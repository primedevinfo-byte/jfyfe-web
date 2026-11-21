// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const navItems = [
//   { href: "/strategic-implementation", label: "Strategic Implementation" },
//   { href: "/leadership-coaching", label: "Leadership Coaching" },
//   { href: "/about", label: "About" },
//   { href: "/contact", label: "Contact" },
// ];

// export default function Header() {
//   const pathname = usePathname();

//   return (
//     <header>
//       {/* Top bar */}
//       <div className="bg-white border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-2 text-sm text-soft-gray">
//           <div className="flex items-center gap-2">
//             <svg className="w-4 h-4 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//             <span>Vancouver, British Columbia, Canada</span>
//           </div>
//           <a
//             href="mailto:Julie@jfyfeconsulting.ca"
//             className="flex items-center gap-2 hover:text-terracotta transition-colors"
//           >
//             <svg className="w-4 h-4 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//             </svg>
//             <span>Julie@jfyfeconsulting.ca</span>
//           </a>
//         </div>
//       </div>

//       {/* Main header - Terracotta instead of navy */}
//       <div className="bg-terracotta text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//             <div>
//               <Link href="/" className="block">
//                 <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
//                   JFyfe Consulting & Coaching
//                 </h1>
//               </Link>
//               <p className="mt-1 text-white/80 text-sm sm:text-base">
//                 Let&apos;s get work done that matters
//               </p>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-white text-terracotta hover:bg-cream font-medium rounded-full transition-all duration-200 shadow-md"
//               >
//                 Book a Free Discovery Call
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </Link>
//             </div>

//             <nav className="flex flex-wrap items-center gap-1 sm:gap-2">
//               {navItems.map((item) => {
//                 const isActive = pathname === item.href;
//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
//                       isActive
//                         ? "bg-white text-terracotta"
//                         : "text-white/90 hover:bg-white/15"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 );
//               })}
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { href: "/strategic-implementation", label: "Strategic Implementation" },
  { href: "/leadership-coaching", label: "Leadership Coaching" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-2 text-sm text-soft-gray">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-terracotta"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="hidden sm:inline">
              Vancouver, British Columbia, Canada
            </span>
            <span className="sm:hidden">Vancouver, BC</span>
          </div>
          <a
            href="mailto:Julie@jfyfeconsulting.ca"
            className="flex items-center gap-2 hover:text-terracotta transition-colors"
          >
            <svg
              className="w-4 h-4 text-terracotta"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="hidden sm:inline">Julie@jfyfeconsulting.ca</span>
            <span className="sm:hidden">Email</span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-terracotta text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-5">
          <div className="flex items-center justify-between gap-4">
            {/* Logo / Title */}
            {/* <div className="flex-1 min-w-0">
              <Link href="/" className="block">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight truncate">
                  JFyfe Consulting & Coaching
                </h1>
              </Link>
              <p className="mt-0.5 text-white/80 text-xs sm:text-sm hidden sm:block">
                Let&apos;s get work done that matters
              </p>
            </div> */}

            <Link href="/" className="block">
              <div className="w-30 h-20 md:w-50 lg:w-60   overflow-hidden shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white text-terracotta"
                        : "text-white/90 hover:bg-white/15"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-white text-terracotta hover:bg-cream font-medium rounded-full transition-all duration-200 shadow-md text-sm"
            >
              Book a Free Discovery Call
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
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="w-7 h-7" />
              ) : (
                <HiMenu className="w-7 h-7" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="flex flex-col gap-1 pb-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white text-terracotta"
                        : "text-white/90 hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-terracotta font-medium rounded-full text-sm"
              >
                Book a Free Discovery Call
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
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
