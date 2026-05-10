import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function WellnessProgramPage() {
  const therapies = [
    {
      title: "Mechanotherapy ",
      subtitle: "Controlled movements and mechanical stimulation",
      description: "Mechanotherapy is a science-based treatment that uses controlled movements and mechanical stimulation to activate the body’s natural healing process. It helps restore function, reduce pain, and improve overall mobility—without relying heavily on medication.",
      benefits: [ 
       "Promotes natural tissue healing",
       "Improves joint mobility and flexibility",
       "Reduces pain effectively",
       "Builds strength and stability",
      "Supports long-term recovery and prevention"
        
      ],
      applications: ["Knee, back, and shoulder pain","Sports injuries","Post-surgery recovery","Arthritis and joint stiffness","Reduced mobility or flexibility"],
      color: "from-green-500 to-teal-500"
    },
    {
      
      title: "Prolotherapy",
      subtitle: "Regenerative Injection Therapy",
      description: "A novel treatment for joint and muscle pain that stimulates the body's natural healing response. Often called proliferation therapy, it involves quick, relatively painless injections to repair damaged tissues without surgery. We utilize ultrasound guidance for nearly 100% accuracy in moderate-to-severe joint pains, allowing patients to walk, run, and sprint shortly after the procedure.",
      benefits: [
        "No Surgery & No Scar",
        "No Steroids or Blood Loss",
        "Stimulates New Cartilage",
        "Reduces Chronic Pain",
        "Improves Joint Mobility",
        "Quick Recovery & Return to Activity"
      ],
      applications: ["Spine (Back & Neck)", "Shoulders & Arms", "Wrist & Hand", "Hip & Pelvis", "Knee Pain", "Foot & Ankle"],
      color: "from-purple-500 to-pink-500"
    },

    {
      title: "Photobiomodulation Therapy",
      subtitle: "Advanced Light Therapy",
      description: "Photobiomodulation (PBM) therapy uses specific wavelengths of light to stimulate cellular function and promote healing. This non-invasive treatment penetrates deep into tissues to reduce inflammation, accelerate tissue repair, and relieve pain.",
      benefits: [
        "Reduces inflammation and pain",
        "Accelerates wound healing",
        "Enhances cellular energy production",
        "Improves circulation",
        "Non-invasive with no side effects",
        "Effective for various conditions"
      ],
      applications: ["Chronic pain", "Sports injuries", "Arthritis", "Wound healing", "Neuropathy"],
      color: "from-yellow-500 to-orange-500"
    },
    
    {
      title: "Dynamic Deep Wave Therapy",
      subtitle: "Deep Tissue Treatment",
      description: "Dynamic Deep Wave Therapy delivers targeted mechanical waves deep into tissue to break up calcifications, stimulate metabolism, and enhance blood flow. This powerful therapy is particularly effective for chronic musculoskeletal conditions and pain management.",
      benefits: [
        "Penetrates deep into tissue",
        "Breaks up calcifications and adhesions",
        "Increases blood flow and metabolism",
        "Reduces chronic pain",
        "Promotes tissue regeneration",
        "Quick treatment sessions"
      ],
      applications: ["Tendinitis", "Plantar fasciitis", "Chronic back pain", "Shoulder pain", "Sports injuries"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Lymphatic Compression Therapy",
      subtitle: "Enhanced Circulation & Detoxification",
      description: "Lymphatic Compression Therapy uses sequential pneumatic compression to stimulate lymphatic drainage and improve circulation. This therapy helps reduce swelling, enhance detoxification, and support the body's natural healing processes.",
      benefits: [
        "Enhances lymphatic drainage",
        "Reduces swelling and edema",
        "Improves circulation",
        "Supports detoxification",
        "Accelerates recovery",
        "Boosts immune function"
      ],
      applications: ["Lymphedema", "Post-surgery recovery", "Athletic recovery", "Chronic venous insufficiency", "Detoxification"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Interferential Therapy (IFT)",
      subtitle: "Pain Relief & Muscle Stimulation",
      description: "Interferential Therapy uses medium-frequency electrical currents to penetrate deeply into tissues, providing effective pain relief and muscle stimulation. This therapy is excellent for managing pain, reducing inflammation, and improving muscle function.",
      benefits: [
        "Deep tissue pain relief",
        "Reduces inflammation",
        "Improves muscle function",
        "Enhances circulation",
        "Non-invasive treatment",
        "Quick and comfortable sessions"
      ],
      applications: ["Acute and chronic pain", "Muscle spasms", "Post-operative pain", "Joint disorders", "Nerve pain"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Ultrasonic Therapy",
      subtitle: "Sound Wave Healing",
      description: "Ultrasonic Therapy uses high-frequency sound waves to create deep heat in tissues, promoting healing and reducing pain. This proven modality is widely used in physical therapy to treat various musculoskeletal conditions and accelerate recovery.",
      benefits: [
        "Deep tissue heating",
        "Increases blood flow",
        "Reduces muscle spasms",
        "Promotes tissue healing",
        "Decreases joint stiffness",
        "Safe and effective"
      ],
      applications: ["Soft tissue injuries", "Arthritis", "Tendonitis", "Bursitis", "Muscle strains"],
      color: "from-indigo-500 to-blue-500"
    }
    
    
  ];

  return (
    <div className="bg-white">
      { }
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-block px-6 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-semibold mb-8">
              Wellness Programs
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Advanced Therapeutic Modalities
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
              Experience the latest in therapeutic technology with our comprehensive wellness programs.
              Each modality is designed to target specific health concerns and promote optimal healing.
            </p>
          </div>
        </div>
      </section>

      { }
      <section className="py-24 bg-gradient-to-br from-teal-50 via-blue-50 to-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Multi-Modal Approach to Wellness
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-center">
              Our wellness programs integrate multiple therapeutic technologies to provide comprehensive
              care that addresses your health from every angle. Each therapy complements the others,
              creating a synergistic effect that enhances healing and recovery.
            </p>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              Whether you're managing chronic pain, recovering from injury, or seeking to optimize your
              health, our evidence-based therapies offer safe, non-invasive solutions with proven results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8 max-w-fit mx-auto text-left">
              <div className="text-2xl font-medium text-gray-800">Non-invasive, drug-free treatments</div>
              <div className="text-2xl font-medium text-gray-800">Evidence-based therapeutic approaches</div>
              <div className="text-2xl font-medium text-gray-800">Customized treatment protocols</div>
              <div className="text-2xl font-medium text-gray-800">Experienced therapeutic specialists</div>
            </div>
          </div>
        </div>
      </section>

      { }
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="space-y-16">
            {therapies.map((therapy, index) => (
              <Card key={index} className="p-10 bg-white border-gray-100">
                <div className="grid grid-cols-2 gap-12">
                  <div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{therapy.title}</h3>
                    <div className="text-teal-600 font-medium mb-6">{therapy.subtitle}</div>
                    <p className="text-gray-600 leading-relaxed mb-8">{therapy.description}</p>

                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {therapy.benefits.map((benefit, i) => (
                          <div key={i} className="text-center py-2 bg-gray-50 rounded-lg">
                            <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    {/*<div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Common Applications:</h4>
                      <div className="space-y-2">
                        {therapy.applications.map((app, i) => (
                          <div key={i} className="flex items-center">
                            <span className="text-gray-700">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                     
                    <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Treatment Details</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Session Duration:</span>
                          <span className="font-medium text-gray-900">20-45 minutes</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Recommended Frequency:</span>
                          <span className="font-medium text-gray-900">2-3 times/week</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Typical Course:</span>
                          <span className="font-medium text-gray-900">6-12 sessions</span>
                        </div> 
                      </div> 
                    </div> */}
                  </div>
                </div>
              </Card>
            ))} 
          </div>
        </div> 
      </section>

      {/* Combination Therapy */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Combination Therapy Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For optimal results, many of our patients benefit from combining multiple therapeutic
              modalities in a customized treatment plan.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-teal-50 to-blue-50 border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pain Management Protocol</h3>
              <p className="text-gray-600 mb-4">
                Combines Photobiomodulation, Deep Wave Therapy, and IFT for comprehensive pain relief.
              </p>
              <div className="text-sm text-teal-600 font-medium">
                Ideal for chronic pain conditions
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recovery Enhancement</h3>
              <p className="text-gray-600 mb-4">
                Integrates Lymphatic Compression, Ultrasonic Therapy, and PBM for faster recovery.
              </p>
              <div className="text-sm text-cyan-600 font-medium">
                Perfect for post-injury or post-surgery
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-cyan-50 to-teal-50 border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Wellness Optimization</h3>
              <p className="text-gray-600 mb-4">
                Blends all modalities in a rotating schedule for comprehensive wellness support.
              </p>
              <div className="text-sm text-cyan-600 font-medium">
                Great for preventive care
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Advanced Wellness Therapy</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover how our therapeutic modalities can help you achieve your health and wellness goals.
            Schedule a consultation to learn which therapies are right for you.
          </p>
          <Link to="/contact">
            <Button
              variant="outline"
              className="bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50 hover:text-teal-700 px-8 py-6 text-base rounded-lg transition-colors"
            >
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
