"use client";

import { useState } from "react";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  let startDay = firstDay.getDay() - 1;
  if (startDay < 0) startDay = 6;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: (number | null)[] = [];

  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(d);
  }
  return days;
}

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const year = 2026;
  const month = 10; // November
  const days = getCalendarDays(year, month);
  const available = [19, 20, 21, 26, 27];

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-charcoal text-center mb-4">
          Select a Date & Time
        </h3>

        <div className="flex items-center justify-between mb-4">
          <button className="p-1 rounded hover:bg-gray-100 text-soft-gray">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="font-medium text-charcoal">November 2026</span>
          <button className="p-1 rounded hover:bg-gray-100 text-soft-gray">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs text-soft-gray mb-2">
          {daysOfWeek.map((d) => (
            <div key={d} className="py-1 font-medium">
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((day, idx) => {
            if (day === null) {
              return <div key={`empty-${idx}`} className="aspect-square" />;
            }
            const isAvailable = available.includes(day);
            const isSelected = selectedDate === day;
            return (
              <button
                key={day}
                onClick={() => isAvailable && setSelectedDate(day)}
                disabled={!isAvailable}
                className={`
                  aspect-square rounded-full text-sm font-medium transition-all
                  ${isSelected
                    ? "bg-terracotta text-white shadow-md scale-105"
                    : isAvailable
                    ? "bg-terracotta/15 text-terracotta hover:bg-terracotta/25 cursor-pointer"
                    : "text-gray-300 cursor-default"
                  }
                `}
              >
                {day}
              </button>
            );
          })}
        </div>

        {selectedDate && (
          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-sm text-soft-gray text-center mb-3">
              Selected: November {selectedDate}, 2026
            </p>
            <a
              href="https://calendly.com/jfyfeconsulting/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 bg-terracotta hover:bg-terracotta-dark text-white font-medium rounded-full transition-colors text-center"
            >
              Continue to Time Selection
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
