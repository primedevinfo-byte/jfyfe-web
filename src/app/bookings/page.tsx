"use client";
import { useState } from "react";
import { InlineWidget } from "react-calendly";

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(20);
  const [selectedTime, setSelectedTime] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [booked, setBooked] = useState(false);

  // November 2026 - exactly like screenshot
  const days = [
    null,
    null,
    null,
    null,
    null,
    null,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ];

  const times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
  ];
  const availableDays = [23, 24, 25, 26, 27, 28, 29, 30];

  if (booked) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4">
        <div className="bg-white max-w-md w-full p-8 rounded-xl shadow text-center">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-2xl font-bold">You're booked!</h1>
          <p className="mt-2 text-gray-600">
            {name}, your Coaching - 60 min is confirmed for November{" "}
            {selectedDate}, 2026 at {selectedTime}.
          </p>
          <p className="mt-1 text-sm text-gray-500">
            A confirmation was sent to {email}
          </p>
          <button
            onClick={() => setBooked(false)}
            className="mt-6 bg-[#006bff] text-white px-6 py-2 rounded-full"
          >
            Book another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[920px] rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row min-h-[650px]">
        {/* LEFT SIDE - Exactly like screenshot */}
        <div className="md:w-[380px] p-8 border-r border-gray-100 flex flex-col">
          {/* Logo - Replace with your logo */}
          <div className="flex justify-center mb-8">
            <div className="bg-[#0a7a6b] text-white text-center px-5 py-3 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[4px] w-[160px]">
              <div className="text-2xl font-black leading-none">JFyfe</div>
              <div className="text-[11px] font-bold leading-tight mt-1">
                Consulting
                <br />& Coaching
              </div>
            </div>
          </div>

          <div className="flex-1">
            <img
              src="https://i.pravatar.cc/100?img=47"
              alt="Julie"
              className="w-[68px] h-[68px] rounded-full object-cover"
            />
            <p className="mt-4 text-[14px] font-semibold text-[#1a365d]">
              Julie @ JFyfe Consulting & Coaching
            </p>
            <h1 className="text-[28px] font-bold text-[#0f2340] leading-tight mt-1">
              Coaching - 60 min
            </h1>

            <div className="flex items-center gap-1.5 mt-4 text-gray-600 text-[14px]">
              <span>🕒</span> <span>1 hr</span>
            </div>

            <p className="mt-5 text-[14px] leading-relaxed text-gray-600">
              For existing clients who have participated in a discovery call.
            </p>
            <p className="mt-5 text-[14px] leading-relaxed text-gray-600">
              If you are new to working with me, please book a{" "}
              <a href="#" className="text-[#006bff] underline">
                free 30-min discovery call
              </a>
            </p>
          </div>

          <div className="flex gap-6 text-[13px] font-semibold text-[#006bff] mt-8">
            <a href="#">Cookie settings</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        {/* RIGHT SIDE - Calendar */}
        {/* <div className="flex-1 p-0">
          <InlineWidget
            url="https://calendly.com/primedev-info/30min"
            styles={{ height: "650px", width: "100%" }}
          />
        </div> */}

        <div className="flex-1 overflow-hidden">
          <InlineWidget
            url="https://calendly.com/primedev-info/30min/?hide_event_type_details=1&hide_gdpr_banner=1"
            styles={{
              height: "650px",
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
