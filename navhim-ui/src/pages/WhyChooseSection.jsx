"use client";
import { Calendar, BadgeCheck, HeartPulse, Shield, CreditCard } from "lucide-react";
import Image from "next/image";
import { whyChooseText } from '@/utilities/variable'

export default function WhyChooseSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900">
          {whyChooseText.heading}
          </h2>
          <p className="mt-4 text-gray-600">
           {whyChooseText.subheading}
          </p>

          <div className="mt-8">
            <Image
              src="/assets/images/navhim.png" 
              alt="Doctor with patient"
              width={400}
              height={300}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-tl-2xl rounded-br-2xl shadow-md">
            <CreditCard className="h-8 w-8 text-sky-800 mb-3" />
            <h3 className="text-lg  text-sky-900">
              Affordable & High-Quality
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              We make quality healthcare accessible and affordable without
              compromising on standards.
            </p>
          </div>
          <div className="bg-[#0A1E8C] text-white p-6 rounded-tr-2xl rounded-bl-2xl shadow-md">
            <BadgeCheck className="h-8 w-8 text-cyan-300 mb-3" />
            <h3 className="text-lg ">Qualified Doctors</h3>
            <p className="text-sm mt-2 text-gray-200">
              Our team of highly qualified doctors delivers expert care with
              compassion and precision.
            </p>
          </div>
          <div className="bg-[#0A1E8C] text-white p-6 rounded-bl-2xl rounded-tr-2xl shadow-md">
            <HeartPulse className="h-8 w-8 text-cyan-300 mb-3" />
            <h3 className="text-lg ">Emergency Help</h3>
            <p className="text-sm mt-2 text-gray-200">
              We provide immediate, reliable emergency care to ensure timely
              help when it matters most.
            </p>
          </div>
          <div className="bg-white p-6 rounded-br-2xl rounded-tl-2xl shadow-md">
            <Calendar className="h-8 w-8 text-sky-800 mb-3" />
            <h3 className="text-lg  text-sky-900">
              Clinical Support & Brand Awareness
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              We strengthen your hospital’s brand and clinical support to
              enhance reputation and community trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
