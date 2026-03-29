import { Card } from "../components/ui/card";
import { Heart, Target, Award, Users, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function AboutPage() {


  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every treatment plan is designed around your unique needs, preferences, and health goals."
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description: "We maintain the highest standards of medical practice with continuous education and quality assurance."
    },
    {
      icon: Target,
      title: "Evidence-Based",
      description: "All our treatments are grounded in scientific research and proven clinical outcomes."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Our multidisciplinary team works together to provide comprehensive, coordinated care."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              About Us
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Pioneering Excellence in Healthcare
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over 15 years, GTS Clinic has been at the forefront of integrative healthcare,
              combining cutting-edge medical technology with personalized, compassionate care to
              help thousands achieve optimal health and wellness.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="rounded-2xl overflow-hidden shadow-xl sticky top-24">
              <ImageWithFallback
                src="https://content3.jdmagicbox.com/v2/comp/chennai/i4/044pxx44.xx44.170912141742.i1i4/catalogue/gts-centre-for-wellness-anna-nagar-chennai-weight-loss-centres-2m3w5e05qf.jpg"
                alt="GTS Clinic Building"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Medical & HealthCare Solutions to Our Patients</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  <span className="font-semibold text-teal-700">GTS stands for "Goodbye To Sickness".</span> GTS wellness is truly a Disruptive Innovative Integrated Healthcare and Wellness approach offering Tailor made wellness program.
                </p>
                <p>
                  It is not limited to any specific speciality but offers the safest and most effective combination of approaches and treatments from the world of conventional and complimentary/Alternative Medicine.
                </p>
                <p>
                  They are selected according to but not limited to evidence based practice alone but also depends on the expertise, experience and insights gained by Dr Ravikumar R (Dr RK) over a period of more than 20+ years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      { }
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-12">
            <Card className="p-10 bg-white border-gray-100">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver comprehensive, patient-centered healthcare that empowers individuals to
                achieve their optimal health through innovative treatments, compassionate care, and
                evidence-based medicine. We strive to make advanced therapeutic solutions accessible
                to all who seek to improve their quality of life.
              </p>
            </Card>

            <Card className="p-10 bg-white border-gray-100">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as a leader in integrative healthcare, setting the standard for
                excellence in wellness and therapeutic medicine. We envision a future where every
                patient has access to personalized, cutting-edge treatments that address not just
                illness, but promote lifelong vitality and well-being.
              </p>
            </Card>
          </div>
        </div>
      </section>
      { }
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every interaction we have with patients.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      { }
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-12 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Founder & Director</h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative h-[500px] lg:h-auto">
                <ImageWithFallback
                  src="https://gtsclinic.com/wp-content/uploads/2023/06/7.jpg"
                  alt="Dr. R. Ravikumar"
                  width={600}
                  height={800}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
                <div className="absolute bottom-6 left-6 text-white lg:hidden">
                  <h3 className="text-2xl font-bold">Dr. R. Ravikumar</h3>
                  <p className="opacity-90">Director, GTS Centre for Wellness</p>
                </div>
              </div>

              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
                <div className="hidden lg:block mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Dr. R. Ravikumar (RK)</h3>
                  <div className="text-xl text-teal-700 font-medium">Senior Consultant & Interventional Radiologist</div>
                  <div className="text-gray-500">Apollo Hospitals, Greams Road, Chennai</div>
                </div>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    <span className="font-semibold text-gray-900">Dr. R. Ravikumar (RK)</span> is a Senior Consultant & Interventional Radiologist at Apollo Hospitals, Greams Road, Chennai.
                  </p>
                  <p>
                    His wellness approach is an <span className="font-semibold text-teal-700">Eclectic approach</span> that does not hold to a single set of assumptions but rather has been drawn upon from several clinical scenarios and clinical studies. It comes from various insights and also having understood how to overcome the limitations of allopathy.
                  </p>
                  <p>
                    The wellness diagnostics, treatment techniques, and methodology are technology-driven and scalable.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-teal-500 mt-6">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Qualifications & Designations</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• MBBS; DMRD; DMRE; DNB; PhD; FIAMS; FICS</li>
                      <li>• Advanced Cardiovascular Imaging fellowship (University of Toronto, Canada)</li>
                      <li>• Heart Attack Prevention Specialist (SHAPE Society, Texas, USA)</li>
                      <li>• Preventive Health Care Physician</li>
                      <li>• Minimally Invasive Endovascular Specialist (Interventional Radiologist)</li>
                      <li>• Director: Thambiran Heart and Vascular Institute</li>
                      <li>• Director: GTS Centre for Wellness</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      { }

    </div>
  );
}
