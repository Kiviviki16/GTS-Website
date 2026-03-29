import { Card } from "../components/ui/card";
import { Zap, Radio, Volume2, Activity, Waves, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export default function EquipmentPage() {
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
      image: "data:image/jpeg;base64,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",
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
      image: "/images/neuromodulation-therapy.png",
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
      image: "/images/normatec-therapy.png",
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
      image: "/images/stimawell-therapy.png",
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
    <div className="bg-white">
      { }
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              Our Equipment
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              State-of-the-Art Medical Technology
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              GTS Clinic is equipped with the latest therapeutic technology to provide you with
              the most advanced, effective, and comfortable treatment experience available.
            </p>
          </div>
        </div>
      </section>

      { }
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center mb-20">
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

      { }
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

      { }
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
}
