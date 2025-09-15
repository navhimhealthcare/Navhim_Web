import { Baby, Ruler, Heart } from "lucide-react"; 

export default function CommitmentSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-sky-900 mb-12">
          A commitment to healthier, brighter future
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <Baby className="w-10 h-10 text-sky-800" />
            <h3 className="text-lg font-semibold">Personalized care</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Every smile is unique, and our treatments are tailored to meet your
              specific needs. From preventive care to advanced treatments, we’ve
              got you covered.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <Ruler className="w-10 h-10 text-sky-800" />
            <h3 className="text-lg font-semibold">Advanced technology</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              We use state-of-the-art tools and techniques to deliver precise,
              efficient, and effective treatments for better outcomes.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <Heart className="w-10 h-10 text-sky-800" />
            <h3 className="text-lg font-semibold">Team that cares</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Our dedicated team combines expertise with compassion, ensuring you
              feel supported at every step of your healthcare journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
