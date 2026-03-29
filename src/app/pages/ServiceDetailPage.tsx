import { useParams, Link, Navigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  CheckCircle,
  Clock,
  Users,
  Award,
  ArrowLeft,
  ArrowRight,
  Heart,
  Activity,
  Dumbbell,
  Droplet,
  Shield,
  Leaf,
  Zap
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function ServiceDetailPage() {
  const { serviceId } = useParams();

  const servicesData: Record<string, any> = {
    "heart-wellness": {
      icon: Heart,
      title: "GTS Heart Wellness Program",
      subtitle: "Comprehensive Cardiovascular Care",
      image: "https://images.unsplash.com/photo-1682706841289-9d7ddf5eb999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMGhlYWx0aCUyMG1lZGljYWx8ZW58MXx8fHwxNzcxMzI3NzYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: (
        <>
          <p className="mb-4"><strong className="text-teal-600">"VASCULAR HEALTH TEST"</strong> : This is a unique test that helps to detect changes within the blood vessels 5 - 15 years before changes are noted in ECG, ECHO and treadmill. The test provides us your vascular age which is one of the key indicators for heart attack and stroke. This is also called Vascular Age Test and also provides you with a personalized cardiac risk score card.</p>
          <div className="mt-8 bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">How is it done?</h3>
            <p className="text-gray-700">
              Vascular age testing is simple ultrasound procedure. Using harmless ultrasound, a doctor measures the thickness of the blood vessel wall that supplies blood to the brain called carotid artery. From the thickness and through a mathematical formulation VASCULAR AGE is estimated.
            </p>
          </div>
        </>
      ),
      benefitsTitle: "WHO NEEDS VASCULAR AGE TESTING?",
      benefitsDescription: "This is a combination of Basic master health check plus vascular health assessment. People with the following disorder should get the vascular health check",
      benefits: [
        "Stress.",
        "Smoking.",
        "Diabetes.",
        "Asian origin.",
        "Hypertension.",
        "High cholesterol.",
        "Obese/overweight.",
        "Metabolic syndrome.",
        "Family history of heart disease or stroke."
      ],
      process: [],
      duration: "30-45 minutes",
      ideal: "Individuals with cardiac risk factors, family history of heart disease, or existing heart conditions"
    },
    "pain-relief": {
      icon: Activity,
      title: "GTS Pain Relief Program",
      subtitle: "Advanced Pain Management Solutions",
      image: "https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzcxMjQyODcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "We have one of the most comprehensive treatment for people suffering from pain arising from muscles, tendons, ligaments, bone, fascia etc...",
      therapies: [
        { title: "Photobiomodulation therapy" },
        { title: "Dynamic deep wave therapy" },
        { title: "Lymphatic compression therapy" },
        { title: "Interferential therapy" },
        { title: "Ultrasonic therapy" },
        { title: "Wax therapy" },
        { title: "Mobilization & rehabilitation / Mechanotherapy" },
        { title: "Trigger Point release" },
      ],
      benefits: [
        "Non-pharmaceutical pain management options",
        "Advanced therapeutic technologies",
        "Reduced inflammation and improved healing",
        "Enhanced mobility and function",
        "Long-term pain relief strategies",
        "Personalized treatment protocols"
      ],
      process: [
        { step: "Pain Assessment", description: "Comprehensive evaluation of pain type, location, severity, and impact on daily life" },
        { step: "Diagnostic Imaging", description: "Advanced imaging to identify underlying causes and target treatment areas" },
        { step: "Treatment Design", description: "Custom multi-modal therapy plan combining various pain relief techniques" },
        { step: "Active Treatment", description: "Implementation of therapies including laser, deep wave, and manual techniques" },
        { step: "Rehabilitation", description: "Strengthening and conditioning to prevent recurrence and maintain results" }
      ],
      duration: "8-16 weeks",
      ideal: "Individuals with chronic pain, sports injuries, post-surgical pain, or musculoskeletal conditions"
    },
    "ifitt": {
      icon: Dumbbell,
      title: "GTS iFITT Program",
      subtitle: "Integrated Fitness & Therapeutic Training",
      image: "https://images.unsplash.com/photo-1612732362547-14adf627f24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZml0bmVzcyUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MTMyNzc2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "The iFITT Program is our signature integrated approach to fitness and wellness, combining therapeutic exercise, functional training, and wellness coaching. Designed for all fitness levels, this program helps you build strength, improve flexibility, and enhance overall physical performance while addressing any underlying health concerns.",
      benefits: [
        "Personalized fitness assessment and goal setting",
        "Expert-guided exercise programs",
        "Functional movement training",
        "Strength and conditioning",
        "Flexibility and mobility enhancement",
        "Performance tracking and progress monitoring"
      ],
      process: [
        { step: "Fitness Evaluation", description: "Complete assessment of current fitness level, movement patterns, and goals" },
        { step: "Program Design", description: "Custom exercise program tailored to your abilities and objectives" },
        { step: "Training Sessions", description: "Guided workout sessions with certified trainers and therapists" },
        { step: "Progress Tracking", description: "Regular assessments to measure improvements and adjust programming" },
        { step: "Lifestyle Integration", description: "Strategies for maintaining fitness and wellness long-term" }
      ],
      duration: "12+ weeks",
      ideal: "Anyone seeking to improve fitness, recover from injury, or enhance athletic performance"
    },
    "iv-therapy": {
      icon: Droplet,
      title: "GTS ORTHOMOLECULAR MEDICINE/ IV THERAPY",
      subtitle: "our motive is to provide the best possible care to our patients",
      image: "https://images.unsplash.com/photo-1614308456595-a59d48697ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzEzMDk3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Our IV Therapy program delivers essential vitamins, minerals, and nutrients directly into your bloodstream for maximum absorption and rapid effect. Using orthomolecular medicine principles, we create customized infusion formulas to address specific health concerns, boost immunity, enhance energy, and support overall cellular health.",
      benefitsTitle: "Helps To",
      benefitsDescription: "",
      benefits: [
        "Increase your energy levels.",
        "Promote better cardiovascular health.",
        "Keeps your skin glowing and wrinkle free.",
        "Boosts your vitality and cleanses your body.",
        "Cleanse your body of toxins and free radicals.",
        "Antiageing/ Reversal of ageing.",
        "Easing anxiety and promoting relaxation.",
        "Achieve and maintain optimum health and well-being.",
        "Stimulate the personal potential of each individual and contributes to a life of maximum quality."
      ],
      process: [
        { step: "Health Consultation", description: "Detailed assessment of health status, concerns, and nutritional needs" },
        { step: "Lab Testing", description: "Optional blood work to identify deficiencies and optimize formulation" },
        { step: "Formula Design", description: "Custom IV drip created based on your specific requirements" },
        { step: "Infusion Session", description: "Comfortable 45-60 minute treatment in our relaxation suite" },
        { step: "Follow-up", description: "Monitoring of results and recommendations for ongoing therapy" }
      ],
      duration: "Single session to series",
      ideal: "Those seeking immune support, energy enhancement, athletic recovery, or wellness optimization"
    },

    "hbot": {
      icon: Zap,
      title: "GTS HBOT (Hyperbaric Oxygen Therapy)",
      subtitle: "Advanced Healing & Recovery",
      image: "https://images.unsplash.com/photo-1765830403209-a5eceac4c198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXBlcmJhcmljJTIwb3h5Z2VuJTIwY2hhbWJlcnxlbnwxfHx8fDE3NzEzMjc3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Hyperbaric Oxygen Therapy (HBOT) involves breathing pure oxygen in a pressurized chamber, allowing your lungs to gather more oxygen than breathing pure oxygen at normal air pressure. This increased oxygen delivery promotes healing, reduces inflammation, and enhances your body's natural healing processes at the cellular level.",
      benefits: [
        "Enhanced tissue healing and regeneration",
        "Reduced inflammation and swelling",
        "Improved wound healing",
        "Enhanced athletic recovery",
        "Neuroprotective effects",
        "Increased energy and cognitive function"
      ],
      process: [
        { step: "Medical Clearance", description: "Health screening to ensure HBOT is appropriate and safe" },
        { step: "Treatment Planning", description: "Customized protocol based on condition and treatment goals" },
        { step: "Chamber Sessions", description: "60-90 minute sessions in comfortable hyperbaric chamber" },
        { step: "Monitoring", description: "Continuous observation and safety checks during treatment" },
        { step: "Progress Evaluation", description: "Regular assessments to track healing and recovery" }
      ],
      duration: "20-40 sessions",
      ideal: "Wound healing, sports recovery, post-surgery healing, and various medical conditions"
    },
    "corporate-wellness": {
      icon: Users,
      title: "GTS Corporate Wellness Program",
      subtitle: "Workplace Health Solutions",
      image: "https://images.unsplash.com/photo-1758653500437-26660f405fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMGRvY3RvcnN8ZW58MXx8fHwxNzcxMjc1OTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Our Corporate Wellness Program is designed to improve employee health, reduce healthcare costs, and boost workplace productivity. We offer comprehensive health screenings, wellness workshops, fitness programs, and mental health support tailored to your organization's unique needs and culture.",
      benefits: [
        "Comprehensive employee health screenings",
        "Reduced absenteeism and healthcare costs",
        "Increased productivity and morale",
        "Customized wellness initiatives",
        "On-site or virtual program delivery",
        "Measurable health outcome tracking"
      ],
      process: [
        { step: "Needs Assessment", description: "Analysis of workforce demographics, health risks, and organizational goals" },
        { step: "Program Design", description: "Custom wellness strategy aligned with company culture and objectives" },
        { step: "Implementation", description: "Launch of screenings, workshops, and wellness activities" },
        { step: "Engagement", description: "Ongoing programs and incentives to maintain participation" },
        { step: "Outcomes Analysis", description: "Regular reporting on health metrics and ROI" }
      ],
      duration: "Ongoing annual program",
      ideal: "Organizations seeking to invest in employee health and well-being"
    },
    "save-legs": {
      icon: Activity,
      title: "GTS Save Your Legs for Life",
      subtitle: "Prevent Amputation & Restore Circulation",
      image: "https://gtsclinic.com/wp-content/uploads/2015/11/34.jpg",
      description: (
        <>
          <p className="mb-4">Diabetic patients are at high risk for foot ulcers. If the ulcer has not healed within 3 – 4 weeks one needs to check to blood supply to the foot. One of the common reasons for amputation in Diabetic patients is poor blood flow. If poor blood flow is detected early one can Save their feet.</p>
          <div className="mt-8 bg-orange-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Balloon Angioplasty</h3>
            <h4 className="text-lg font-semibold text-teal-600 mb-2">What is balloon angioplasty?</h4>
            <p className="text-gray-700">
              It is a non surgical procedure where the blocked blood vessel is once again opened and blood supply is restored. A thin, flexible tube called a catheter is inserted through a artery and guided to place where the artery is narrowed. When the tube reaches the narrowed artery, a small balloon at the end of the tube inflates for a short time. The pressure from the inflated balloon presses the fat and calcium (plaque) against the wall of the artery to improve blood flow.
            </p>
          </div>
        </>
      ),
      benefitsTitle: "Why Choose This Procedure?",
      benefits: [
        "Non-surgical intervention",
        "Restores blood supply to the foot",
        "Prevents amputation",
        "Minimally invasive",
        "Improves wound healing",
        "Reduces risk of complications"
      ],
      process: [
        { step: "Diagnosis", description: "Checking blood supply to the foot if ulcers haven't healed in 3-4 weeks." },
        { step: "Preparation", description: "Inserting a catheter through an artery." },
        { step: "Guidance", description: "Guiding the catheter to the narrowed artery." },
        { step: "Inflation", description: "Inflating a small balloon to press plaque against artery walls." },
        { step: "Restoration", description: "Improving blood flow to save the foot." }
      ],
      duration: "45-90 minutes",
      ideal: "Diabetic patients with non-healing foot ulcers or poor blood flow"
    },
    "diabetes-remission": {
      icon: Leaf,
      title: "GTS ONLINE/OFFLINE DIABETES REMISSION OUTCOME PROGRAM",
      subtitle: "GTS DROP PROGRAM",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1080",
      description: "The Diabetes Remission Outcome Program (DROP) is a specialized program designed to achieve remission or reversal of type 2 diabetes in individual who have been diagnosed with the condition. The PRIMARY GOAL OF THIS PROGRAM is to help individuals with type 2 diabetes achieve long-term glycemic control without the need for ongoing medication.",
      benefitsTitle: "Program Highlights",
      benefits: [
        "Achieve remission or reversal of Type 2 Diabetes",
        "Lifestyle changes and dietary modification",
        "Physical activity and stress management",
        "Sleep regulation and overall health improvement",
        "Optimal blood glucose control",
        "Long-term glycemic control without medication",
        "Supported by a team of dietitians and physical trainers"
      ],
      process: [
        { step: "Initial Evaluation", description: "Comprehensive assessment of diabetes status and health metrics" },
        { step: "Personalized Plan", description: "Tailored diet, exercise, and lifestyle modification strategy" },
        { step: "Implementation", description: "Guided execution with regular monitoring and support" },
        { step: "Progress Review", description: "Tracking blood glucose and adjusting the plan as needed" },
        { step: "Maintenance", description: "Strategies for sustaining remission long-term" }
      ],
      duration: "12-24 weeks",
      ideal: "Individuals diagnosed with Type 2 Diabetes seeking remission"
    },
    "uterine-fibroid": {
      icon: Shield,
      title: "GTS Uterine Fibroid Embolization",
      subtitle: "Minimally invasive, non-surgical treatment for uterine fibroids.",
      image: "https://atlantafibroidclinic.com/wp-content/uploads/2023/03/Fibroid-Embolization.jpg",
      description: (
        <>
          <p className="mb-4">Fibroids are benign tumours of the uterus. They are non-cancerous and very common in women between 30–50 years of age. While many women experience no symptoms, some may suffer from significant discomfort.</p>
          <div className="mt-8 bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Uterine Fibroid Embolization (UFE)</h3>
            <p className="text-gray-700">
              UFE, also known as uterine artery embolization, is a minimally invasive procedure performed by an Interventional Radiologist. It is done while the patient is conscious but sedated and does not require general anesthesia.
            </p>
          </div>
        </>
      ),
      benefitsTitle: "Uterine Fibroids Can Cause",
      benefits: [
        "Heavy or prolonged menstrual bleeding (sometimes with clots, leading to anemia)",
        "Pelvic pain and pressure",
        "Pain in the back and legs",
        "Pain during sexual intercourse",
        "Bladder pressure causing frequent urination",
        "Bowel pressure leading to constipation and bloating",
        "Abnormally enlarged abdomen"
      ],
      process: [
        { step: "Incision", description: "A small incision is made in the groin area to access the femoral artery." },
        { step: "Catheter Insertion", description: "A catheter is inserted into the femoral artery to begin the procedure." },
        { step: "Imaging Guidance", description: "Real-time imaging guides the catheter precisely to the uterine arteries." },
        { step: "Embolization", description: "Tiny embolic particles are released to block the blood supply to uterine fibroids." },
        { step: "Fibroid Shrinkage", description: "Deprived of blood flow, fibroids gradually shrink over time, relieving symptoms." }
      ],
      duration: "1-2 hours (procedure); 1-2 weeks recovery",
      ideal: "Women with symptomatic uterine fibroids seeking a minimally invasive, non-surgical treatment option"
    }
  };

  const service = servicesData[serviceId || ""];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const ServiceIcon = service.icon;

  return (
    <div className="bg-white">
      { }
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-teal-600">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-teal-600">Services</Link>
            <span>/</span>
            <span className="text-gray-900">{service.title}</span>
          </div>
        </div>
      </div>

      { }
      <section className="py-16 bg-gradient-to-br from-teal-50 via-blue-50 to-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <ServiceIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">{service.title}</h1>
                  <p className="text-lg text-teal-600 mt-1">{service.subtitle}</p>
                </div>
              </div>

              <div className="text-lg text-gray-600 leading-relaxed mb-8">
                {service.description}
              </div>

              <div className="flex gap-4">
                <Link to="/contact">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base rounded-lg">
                    Book Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {service.therapies && (
                <div className="grid grid-cols-2 gap-4">
                  {service.therapies.map((therapy: any, index: number) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center min-h-[80px]">
                      <p className="font-medium text-gray-900 text-sm text-center">{therapy.title}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      { }
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold text-gray-900">{service.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Ideal For</div>
                <div className="font-semibold text-gray-900">Personalized Care</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Results</div>
                <div className="font-semibold text-gray-900">Evidence-Based</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      { }
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.benefitsTitle || "Program Benefits"}</h2>
          {service.benefitsDescription && (
            <p className="text-lg text-gray-600 mb-8 max-w-3xl">{service.benefitsDescription}</p>
          )}
          <div className="grid grid-cols-2 gap-6">
            {service.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      { }
      {service.process && service.process.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-[1440px] mx-auto px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How It Works</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Our structured approach ensures you receive comprehensive care every step of the way.
            </p>

            <div className="grid grid-cols-5 gap-6">
              {service.process.map((step: any, index: number) => (
                <Card key={index} className="p-6 bg-white border-gray-100 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.step}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      { }
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Consider This Program?</h2>
            <p className="text-lg text-gray-700 mb-8">{service.ideal}</p>
            <Link to="/contact">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base rounded-lg">
                Schedule Your Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      { }
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to learn more about this program and schedule your initial consultation.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button
                variant="outline"
                className="bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50 px-8 py-6 text-base rounded-lg transition-colors"
              >
                Book Appointment
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                className="bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50 px-8 py-6 text-base rounded-lg transition-colors"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
