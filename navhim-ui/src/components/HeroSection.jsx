"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { banner, banner2 } from "@/asset/banner";
import {HeartPulse,Hospital,MapPin,Briefcase,} from "lucide-react";
const words = ["Compassion", "Affordability", "Trust", "Care", "Innovation"];
export default function HealthcareSection() {
    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-10 bg-gradient-to-b from-indigo-50 to-white BannerSection">
      <div className="max-w-8xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        
        <div>
          <h2 className="text-4xl md:text-4xl font-bold text-sky-900 leading-snug">
            Revolutionizing Healthcare with <br />
             {" "}
        <span className="text-yellow-400 inline-block h-10 overflow-hidden">
          <span key={index} className="block animate-slide-up">
            {words[index]}
          </span>
        </span>
          </h2>

          <p className="mt-4 text-gray-700 font-medium py-2 inline-block">
            Quality, Affordable, Tech-Enabled Healthcare for Every Community
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 bg-white rounded-lg shadow p-6">
              <HeartPulse className="text-sky-500 w-6 h-6" />
              <span className="font-medium text-gray-800">Clinical Excellence</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg shadow p-6">
              <Hospital className="text-sky-500 w-6 h-6" />
              <span className="font-medium text-gray-800">Hospital Partnership</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg shadow p-6">
              <MapPin className="text-sky-500 w-6 h-6" />
              <span className="font-medium text-gray-800">Rural Marketing Expertise</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg shadow p-6">
              <Briefcase className="text-sky-500 w-6 h-6" />
              <span className="font-medium text-gray-800">Strategic Growth</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image src={banner2} alt="Healthcare Poster" width={450} height={400} className="rounded-xl drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
