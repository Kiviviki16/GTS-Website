import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  Heart,
  Activity,
  Dumbbell,
  Droplet,
  Users,
  Stethoscope,
  Shield,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  Footprints,
  Venus,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import InteractiveConcernSection from "../components/InteractiveConcernSection";

export default function HomePage() {
  const services = [
    {
      id: "heart-wellness",
      icon: Heart,
      title: "Heart Wellness Program",
      description: "Comprehensive cardiac care and prevention programs designed for optimal heart health.",
      color: "from-red-500 to-pink-500"
    },
    {
      id: "pain-relief",
      icon: Activity,
      title: "Pain Relief Program",
      description: "Advanced therapeutic solutions for chronic and acute pain management.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "ifitt",
      icon: Dumbbell,
      title: "iFITT Program",
      description: "Integrated fitness and therapeutic training for overall wellness and vitality.",
      color: "from-green-500 to-teal-500"
    },
    {
      id: "iv-therapy",
      icon: Droplet,
      title: "IV Therapy",
      description: "Orthomolecular medicine and nutrient infusion therapy for cellular health.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: "hbot",
      icon: Activity,
      title: "HBOT Therapy",
      description: "Hyperbaric Oxygen Therapy for enhanced healing and recovery.",
      color: "from-teal-500 to-blue-500"
    },

{
      id: "save-legs",
      icon: Footprints,
      title: "Save Your Knees ",
      description: "Knee replacement is not the only option.",
      color: "from-purple-500 to-teal-500" ,
      link: "/save-legs"

    },

{
      id: "uterine-fibroid",
      icon: Venus,
      title: "Save Your Uterus",
      description: "Because Every Woman Deserves a Choice.",
      color: "from-white-500 to-pink-500",
      link: "/uterine-fibroid"
    },
    {
      id: "corporate-wellness",
      icon: Users,
      title: "Corporate Wellness",
      description: "Customized wellness programs designed for workplace health optimization.",
      color: "from-orange-500 to-amber-500"
    }
  ];

  const benefits = [
    {
      icon: Stethoscope,
      title: "Expert Medical Team",
      description: "Board-certified physicians and specialists dedicated to your health"
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art medical equipment and treatment facilities"
    },
    {
      icon: Clock,
      title: "Personalized Care",
      description: "Customized treatment plans tailored to your unique needs"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Evidence-based approaches with measurable health outcomes"
    }
  ];

  const testimonials = [
    {
      name: "Yuvaraj",
      role: "Heart Wellness Program",
      content: "The GTS Heart Wellness Program transformed my life. Within 3 months, my cardiovascular health improved dramatically. The team's expertise and care are exceptional.",
      rating: 5
    },
    {
      name: "Gayathri Devi",
      role: "Pain Relief Program",
      content: "After years of chronic back pain, I finally found relief through GTS's innovative pain management program. I'm now pain-free and back to my active lifestyle.",
      rating: 5
    },
    {
      name: "Sri Devi",
      role: "Corporate Wellness",
      content: "Our company partnered with GTS for our employee wellness program. The results have been outstanding – improved health metrics and increased productivity across the board.",
      rating: 5
    }
  ];

  return (
    <div className="bg-white">
      { }
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-white py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
                Advanced Healthcare Solutions
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Holistic Wellness & Advanced Therapy
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience comprehensive healthcare that addresses your whole well-being.
                At GTS Clinic, we combine cutting-edge medical technology with personalized
                care to help you achieve optimal health and vitality.
              </p>
              <div className="flex gap-4">
                <Link to="/services">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base rounded-lg">
                    Explore Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-6 text-base rounded-lg transition-colors"
                  >
                    Book Appointment
                  </Button>
                </Link>
              </div>
              <div className="mt-12 flex gap-12">
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-1">10K+</div>
                  <div className="text-sm text-gray-600">Patients Treated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Patient Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxMzE5NjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern GTS Clinic interior"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              { }
            </div>
          </div>
        </div>
      </section>

      <InteractiveConcernSection />

      { }
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions designed to address your unique health needs
              with cutting-edge treatments and compassionate care.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} to={`/services/${service.id}`}>
                <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-100 h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-teal-600 font-medium">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                variant="outline"
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-6 text-base rounded-lg transition-colors"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
            {/*  NEW: ANIMATED EXPANSION CARDS SECTION */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-[1440px] mx-auto px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Preventive & Regenerative Programs
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8">

            {/* VASCULAR CARD */}
            <Link to="/services/heart-wellness">
              <Card className="group relative overflow-hidden p-8 bg-white border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">

                <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">GTS Vascular Health Check</h3>
                  <p className="text-red-500 font-medium mb-4">
                    Detect heart risks before symptoms appear
                  </p>

                  <p className="text-gray-600 mb-6">
                    Advanced screening for vascular age and cardiac risk.
                  </p>

                  <div className="opacity-0 group-hover:opacity-100 transition text-red-500 font-medium flex items-center">
                    Explore <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Card>
            </Link>

            {/* PROLOTHERAPY CARD */}
            <Link to="/wellness-program">
              <Card className="group relative overflow-hidden p-8 bg-white border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">

                <div className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Prolotherapy Treatment</h3>
                  <p className="text-green-600 font-medium mb-4">
                    Heal naturally. Avoid surgery.
                  </p>

                  <p className="text-gray-600 mb-6">
                    Regenerative injections for long-term healing.
                  </p>

                  <div className="opacity-0 group-hover:opacity-100 transition text-green-600 font-medium flex items-center">
                    Explore <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Card>
            </Link>

          </div>
        </div>
      </section>
      { }
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Wellness Programs
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our integrated wellness programs combine multiple therapeutic modalities to
                address your health from every angle. From photobiomodulation to lymphatic
                compression therapy, we offer the latest in medical wellness technology.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Photobiomodulation Therapy</div>
                    <div className="text-gray-600">Advanced light therapy for cellular healing</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dynamic Deep Wave Therapy</div>
                    <div className="text-gray-600">Deep tissue treatment for pain management</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Lymphatic Compression</div>
                    <div className="text-gray-600">Enhanced circulation and detoxification</div>
                  </div>
                </div>
              </div>
              <Link to="/wellness-program">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base rounded-lg">
                  Explore Wellness Programs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764314399496-aa49b4e4d127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwd2VsbG5lc3MlMjB0aGVyYXB5fGVufDF8fHx8MTc3MTMyNzc2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wellness therapy session"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GTS Clinic */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose GTS Clinic</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional healthcare with a focus on personalized
              treatment, advanced technology, and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people who have transformed their health at GTS Clinic.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-teal-200 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Health?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step towards optimal wellness. Book a consultation with our expert team today.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button
                variant="outline"
                className="bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50 px-8 py-6 text-base rounded-lg transition-colors"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-6 text-base rounded-lg transition-colors"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


