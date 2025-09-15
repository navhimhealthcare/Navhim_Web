"use client";
import { ShieldCheck, Sparkles, LayoutGrid } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Medicine",
    desc: "A routine dental examination that is typically performed by a dentist or dental hygienist.",
    icon: <ShieldCheck className="h-8 w-8 text-sky-400" />,
    image: "/assets/images/service.png",
  },
  {
    title: "OBS & Gynae",
    desc: "Dental procedure that aims to lighten the color of teeth and remove stains and discolorations.",
    icon: <Sparkles className="h-8 w-8 text-sky-400" />,
    image: "/assets/images/service.png",
  },
  {
    title: "Dental Braces",
    desc: "Orthodontic treatment that is used to straighten teeth and correct bite issues.",
    icon: <LayoutGrid className="h-8 w-8 text-sky-400" />,
    image: "/assets/images/service.png",
  },
  {
    title: "Surgery",
    desc: "Advanced surgical treatments provided with precision and care.",
    icon: <LayoutGrid className="h-8 w-8 text-sky-400" />,
    image: "/assets/images/service.png",
  },
    {
    title: "Dental Filling",
    desc: "Orthodontic treatment that is used to straighten teeth and correct bite issues.",
    icon: <LayoutGrid className="h-8 w-8 text-sky-400" />,
    image: "/assets/images/service.png",
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Advanced surgical treatments provided with precision and care.",
    icon: <LayoutGrid className="h-8 w-8 text-sky-400" />,
    image: "/assets/images/service.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-indigo-50 rounded-3xl">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-sky-900">
          What Service We Offer
        </h2>
        <p className="text-gray-600 mt-2">
          Expertise in specialized treatment of
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 h-150">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative group bg-white rounded-2xl p-6 text-left transition overflow-hidden flex gap-5"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              <div className="relative z-10 transition duration-300 group-hover:text-white">
                {service.icon}
                <h3 className="mt-20 text-lg">
                  {service.title}
                </h3>
                <p className="text-md mt-2 text-gray-600 group-hover:text-white">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
