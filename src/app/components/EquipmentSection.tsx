import { Card } from "./ui/card";
import { Zap, Radio, Volume2, Activity, Waves, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";

export const EquipmentSection = () => {
  const equipment = [
    {
      icon: Zap,
      title: "PEMF Therapy",
      subtitle: "(Pulsed Electromagnetic Field Therapy)",
      description: "A non-invasive device that delivers low-frequency electromagnetic waves, designed to stimulate cellular repair and regeneration.",
      howItWorks: [
        "Electromagnetic pulses penetrate deep tissues",
        "Enhances oxygenation and cellular metabolism"
      ],
      features: [
        "Reduces inflammation",
        "Speeds recovery",
        "Improves circulation and energy levels"
      ],
      applications: ["Immune enhancement", "Microcirculation repair", "Endocrine conditioning", "Osteoporosis relief", "Anti-aging", "Whole body pain relief", "Fatigue recovery"],
      image: "/images/pemf-therapy.png",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Radio,
      title: "Shockwave Therapy",
      subtitle: "High-Energy Acoustic Wave Treatment",
      description: "Uses high-energy acoustic waves to stimulate healing.",
      howItWorks: [
        "Increases blood flow",
        "Stimulates collagen production",
        "Breaks down calcifications"
      ],
      features: [
        "Non-surgical pain relief",
        "Accelerates tissue regeneration",
        "Quick treatment sessions"
      ],
      applications: ["Muscle weakness", "Muscle relaxation", "Chronic and acute back pain", "Pain Therapy", "Osteoporosis"],
      image: "/images/shockwave.png",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Volume2,
      title: "Neuromodulation Therapy",
      subtitle: "Advanced Electrical Nerve Stimulation",
      description: "An advanced device that alters nerve activity using electrical stimulation.",
      howItWorks: [
        "Modifies pain signals sent to the brain",
        "Regulates abnormal nerve activity"
      ],
      features: [
        "Reduces nerve pain",
        "Improves nerve communication",
        "Personalized non-invasive treatment"
      ],
      applications: ["Diabetic forefoot pressure areas", "Plantar fasciitis", "Chronic heel pain", "Forefoot pressure pain", "Morton's neuroma", "Metatarsalgia"],
      image: "/images/neruo.png",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Waves,
      title: "Normatec",
      subtitle: "(Dynamic Compression Therapy)",
      description: "A dynamic air compression system for circulation improvement.",
      howItWorks: [
        "Uses sequential pulsing compression",
        "Enhances blood flow and lymphatic drainage"
      ],
      features: [
        "Faster recovery",
        "Reduces swelling",
        "Relaxing and comfortable therapy"
      ],
      applications: ["Muscle soreness", "Edema (swelling)", "Poor circulation"],
      image: "/images/Normatec.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Activity,
      title: "StimaWell Therapy",
      subtitle: "Neuromuscular Electrical Stimulation System",
      description: "A neuromuscular electrical stimulation system.",
      howItWorks: [
        "Stimulates deep muscle layers",
        "Improves spinal stability"
      ],
      features: [
        "Strengthens core muscles",
        "Improves posture",
        "Reduces back pain"
      ],
      applications: ["Chronic low back pain", "Muscle weakness", "Postural imbalance"],
      image: "/images/stimwell1.jpg",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "APM Therapy",
      subtitle: "(Advanced Physiotherapy Modalities)",
      description: "Our clinic offers a comprehensive suite of advanced physiotherapy modalities including IFT, Ultrasound Therapy, Wax Therapy, and TENS.",
      howItWorks: [
        "Targeted, evidence-based pain relief",
        "Deep tissue healing and recovery",
        "Therapeutic heat and electrical stimulation techniques"
      ],
      features: [
        "IFT: Relieves deep musculoskeletal pain and reduces inflammation and muscle spasm",
        "Ultrasound Therapy: Uses sound waves for deep tissue healing and supports ligament and tendon repair",
        "Wax Therapy: Provides therapeutic heat, improves flexibility and reduces stiffness",
        "TENS: Blocks pain signals using mild electrical impulses — safe and non-invasive pain relief"
      ],
      applications: ["Musculoskeletal pain", "Inflammation", "Muscle spasm", "Ligament repair", "Tendon repair", "Joint stiffness", "Chronic pain relief"],
      image: "/images/apm-therapy.png",
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <div className="bg-white border-t border-gray-100">
      {/* Hero Section (Retained as per user request) */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              Our Equipment
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-primary">
              State-of-the-Art Medical Technology
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              GTS Clinic is equipped with the latest therapeutic technology to provide you with
              the most advanced, effective, and comfortable treatment experience available.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766299892683-d50398e31823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzEzMTIyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Medical equipment"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Investing in Your Health Through Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At GTS Clinic, we believe in providing our patients with access to the most advanced
                medical equipment available. Our commitment to technological excellence ensures that
                you receive the highest quality care with proven, evidence-based treatment modalities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Each piece of equipment in our facility is carefully selected based on clinical
                efficacy, safety standards, and patient comfort. Our team undergoes continuous
                training to ensure optimal use of these technologies for your benefit.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">FDA-approved medical devices</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">Regular maintenance and calibration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">Expert-operated technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">Patient safety as top priority</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Cards Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="space-y-16">
            {equipment.map((item, index) => (
              <Card key={index} className="overflow-hidden bg-white border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  <div className={`p-8 lg:p-12 flex flex-col justify-center lg:order-1`}>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <div className="text-teal-600 font-medium mb-6">{item.subtitle}</div>
                    <p className="text-gray-600 leading-relaxed mb-8">{item.description}</p>

                    {item.howItWorks && (
                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-900 mb-4">How Does It Work?</h4>
                        <div className="space-y-2">
                          {item.howItWorks.map((step: string, i: number) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <div className="space-y-2">
                        {item.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Clinical Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.applications.map((app, i) => (
                          <span key={i} className="px-3 py-1.5 bg-white text-sm text-gray-700 rounded-full border border-gray-200">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`relative bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden flex items-center justify-center p-8 min-h-[300px] lg:min-h-full lg:order-2`}>
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      loading="lazy"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Advanced Medical Care</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a consultation to learn more about our equipment and how our advanced
            technologies can benefit your specific health condition.
          </p>
          <Link to="/contact">
            <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Book Your Appointment Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
