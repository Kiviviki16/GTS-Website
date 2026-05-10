import { Link } from "react-router";
import { Card } from "../components/ui/card";
import {
  Heart,
  Activity,
  Dumbbell,
  Droplet,
  Users,
  Leaf,
  Shield,
  Zap,
  ArrowRight,
  GitBranch
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "heart-wellness",
      icon: Heart,
      title: "GTS Heart Wellness Program",
      description: "Comprehensive cardiovascular health program combining advanced diagnostics, personalized treatment plans, and ongoing monitoring to optimize heart health and prevent cardiac conditions.",
      features: ["Cardiac Risk Assessment", "ECG & Stress Testing", "Nutrition Planning", "Exercise Therapy"],
      color: "from-red-500 to-pink-500"
    },


     {
      id: "varicose-vein",
      icon:GitBranch,
      title: "GTS Varicose Vein Program",
      description: "Say goodbye to pain, swelling, and visible veins with our latest non-surgical treatment options.",
      features: ["Radiofrequency Ablation (RFA)", "Laser Ablation (EVLT)", "Microwave Ablation", "Glue Embolization (VenaSeal)","Sclerotherapy"],
      color: "from-purple-500 to-pink-500"
    },

    {
      id: "pain-relief",
      icon: Activity,
      title: "GTS Pain Relief Program",
      description: "Multi-modal pain management approach utilizing cutting-edge therapies to address chronic and acute pain conditions without heavy reliance on medications.",
      features: ["Pain Assessment", "Targeted Therapy", "Physical Rehabilitation", "Long-term Management"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "ifitt",
      icon: Dumbbell,
      title: "GTS iFITT Program",
      description: "Integrated Fitness and Therapeutic Training program designed to enhance physical fitness, functional capacity, and overall wellness through personalized exercise protocols.",
      features: ["Fitness Assessment", "Personal Training", "Functional Movement", "Performance Tracking"],
      color: "from-green-500 to-teal-500"
    },
    {
      id: "iv-therapy",
      icon: Droplet,
      title: "GTS IV Therapy & Orthomolecular Medicine",
      description: "Advanced nutrient infusion therapy delivering vitamins, minerals, and antioxidants directly into the bloodstream for optimal cellular health and rapid absorption.",
      features: ["Vitamin Infusions", "Immune Boosters", "Energy Enhancement", "Detoxification"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: "uterine-fibroid",
      icon: Shield,
      title: "GTS Uterine Fibroid Embolization",
      description: "Minimally invasive, non-surgical treatment for uterine fibroids that preserves the uterus while effectively reducing symptoms and improving quality of life.",
      features: ["Non-Surgical", "Quick Recovery", "Uterus Preservation", "Symptom Relief"],
      color: "from-pink-500 to-rose-500"
    },
    {
      id: "save-legs",
      icon: Activity,
      title: "GTS Save Your Legs for Life",
      description: "Specialized program for peripheral artery disease (PAD) and vascular conditions, focusing on improving circulation and preventing limb loss through advanced interventions.",
      features: ["Vascular Assessment", "Circulation Therapy", "Wound Care", "Preventive Education"],
      color: "from-orange-500 to-amber-500"
    },
    {
      id: "diabetes-remission",
      icon: Leaf,
      title: "GTS Diabetes Remission Outcome Program",
      description: "Comprehensive diabetes management program aimed at achieving remission through lifestyle modification, nutritional therapy, and targeted medical interventions.",
      features: ["Blood Sugar Management", "Nutrition Counseling", "Lifestyle Coaching", "Medical Monitoring"],
      color: "from-emerald-500 to-green-500"
    },
    {
      id: "hbot",
      icon: Zap,
      title: "GTS HBOT (Hyperbaric Oxygen Therapy)",
      description: "State-of-the-art hyperbaric oxygen therapy delivering pure oxygen in a pressurized chamber to enhance healing, reduce inflammation, and improve cellular function.",
      features: ["Enhanced Healing", "Tissue Repair", "Inflammation Reduction", "Recovery Optimization"],
      color: "from-teal-500 to-blue-500"
    },
    {
      id: "corporate-wellness",
      icon: Users,
      title: "GTS Corporate Wellness Program",
      description: "Customized workplace wellness solutions designed to improve employee health, reduce absenteeism, and boost productivity through comprehensive health screenings and wellness initiatives.",
      features: ["Health Screenings", "Wellness Workshops", "Fitness Programs", "Mental Health Support"],
      color: "from-blue-600 to-indigo-600"
    }
  ];

  return (
    <div className="bg-white">
      { }
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              Our Services
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Healthcare Solutions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our range of specialized medical programs designed to address your unique
              health needs with cutting-edge technology and personalized care.
            </p>
          </div>
        </div>
      </section>

      { }
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} to={`/services/${service.id}`}>
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-gray-100 group">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-600"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-teal-600 font-medium group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      { }
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Not Sure Which Service is Right for You?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a consultation with our healthcare experts who will assess your needs
            and recommend the most appropriate treatment program.
          </p>
          <Link to="/contact">
            <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
              Book a Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
