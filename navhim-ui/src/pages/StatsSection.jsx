"use client";
import { useEffect, useState } from "react";

export default function StatsSection() {
  const [count, setCount] = useState({ hospitals: 0, cards: 0, patients: 0, cities: 0 });

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      setCount({
        hospitals: Math.min(start, 26),
        cards: Math.min(start * 900, 23000),
        patients: Math.min(start * 100, 2000),
        cities: Math.min(start, 16),
      });
      if (start >= 26) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pb-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <video
            className="w-full h-full object-cover rounded-2xl"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://framerusercontent.com/assets/q1G9KviyosxRCoZN6ijFSldjsc.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-blue-600/80 flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 p-4">
          <div className="bg-sky-900 text-white rounded-xl p-6 text-center shadow flex justify-center align-center flex-col h-30 rounded-tl-lg">
            <p className="text-2xl font-bold">{count.hospitals}+</p>
            <p className="text-md">Hospitals Onboarded</p>
          </div>

          <div className="bg-sky-900 text-white rounded-2xl p-6 text-center shadow flex justify-center align-center flex-col h-30">
            <p className="text-2xl font-bold">{count.cards.toLocaleString()}+</p>
            <p className="text-md">NFC Cardholders</p>
          </div>

          <div className="bg-sky-900 text-white rounded-2xl p-6 text-center shadow flex justify-center align-center flex-col h-30">
            <p className="text-2xl font-bold">{count.patients.toLocaleString()}+</p>
            <p className="text-md">Patients Served</p>
          </div>

          <div className="bg-sky-900 text-white rounded-2xl p-6 text-center shadow flex justify-center align-center flex-col h-30">
            <p className="text-2xl font-bold">{count.cities}+</p>
            <p className="text-md">Cities Reached</p>
          </div>
        </div>
      </div>
    </section>
  );
}
