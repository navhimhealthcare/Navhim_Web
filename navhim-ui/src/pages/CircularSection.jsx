"use client";
import Image from "next/image";

export default function CircularSection() {
  return (
    <section className="py-16 bg-white">
      <div className="flex justify-center items-center relative">
        <Image src="/assets/images/image.png" alt="Camps Stats" width={500} height={400} />
        <p className="absolute top-0 mw-20">
          Offer initial diagnosis for common health concerns like diabetes, hypertension, maternal health, and more.
        </p>
      </div>
    </section>
  );
}
