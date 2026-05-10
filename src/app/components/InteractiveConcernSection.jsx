import { Link } from "react-router";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";

const concerns = [
  {
    icon: "❤️",
    text: "I'm worried about my heart",
    link: "/services/heart-wellness",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: "🦵",
    text: "I have joint pain",
    link: "/services/pain-relief",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🌿",
    text: "I prefer natural treatment",
    link: "/services/ifitt",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: "⚡",
    text: "I want early checkup",
    sub: "Speak to our team",
    link: "/contact",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: "🤔",
    text: "I'm not sure what my problem is",
    sub: "We'll guide you",
    link: "/contact",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: "👨‍🦳",
    text: "I'm above 30 and want to stay safe",
    sub: "Preventive care plan",
    link: "/contact",
    color: "from-teal-500 to-blue-500",
  },
];

export default function InteractiveConcernSection() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-blue-50 to-teal-50"
      aria-label="Interactive concern selection"
    >
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Start Here — Choose Your Concern
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select what feels closest to you. We will guide you to the right program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concerns.map((concern) => (
            <Link
              key={concern.text}
              to={concern.link}
              aria-label={concern.text}
              className="group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              <Card className="h-full p-8 border-gray-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white cursor-pointer">
                {/* Icon circle — same style as Specialized Services */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${concern.color} flex items-center justify-center mb-6 text-3xl`}
                >
                  <span aria-hidden="true">{concern.icon}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {concern.text}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{concern.sub}</p>

                {/* Arrow link — same as Specialized Services */}
                
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">Still confused? Let us guide you.</p>
          <Link to="/contact">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base rounded-lg transition-all duration-300">
              Check My Risk Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
