import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white">
      { }
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              Contact Us
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get in Touch with GTS Clinic
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions about our services or ready to schedule an appointment?
              We're here to help you on your journey to optimal health.
            </p>
          </div>
        </div>
      </section>
      { }
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center bg-gradient-to-br from-teal-50 to-blue-50 border-gray-100">
              <div className="w-14 h-14 rounded-full bg-teal-600 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Call us directly</p>
              <a href="tel:+918300170026" className="text-teal-600 font-medium hover:underline">
                +91 83001 70026
              </a>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-cyan-50 border-gray-100">
              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us a message</p>
              <a href="mailto:gtswellnessindia@gmail.com" className="text-blue-600 font-medium hover:underline">
                gtswellnessindia@gmail.com
              </a>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-cyan-50 to-teal-50 border-gray-100">
              <div className="w-14 h-14 rounded-full bg-cyan-600 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600 mb-2">Visit our clinic</p>
              <p className="text-cyan-600 font-medium">
                No.36, Q- Block, 17th Street,<br />Anna Nagar, Chennai - 600040
              </p>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-emerald-50 border-gray-100">
              <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600 mb-2">We're open</p>
              <p className="text-green-600 font-medium">
                Mon-Sat: 8AM-4PM<br />
              </p>
            </Card>
          </div>
        </div>
      </section>

      { }
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-12">
            { }
            <Card className="p-10 bg-white border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="First Name"
                      className="rounded-lg"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Last Name"
                      className="rounded-lg"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    className="rounded-lg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <select
                    id="service"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select a service</option>
                    <option value="heart-wellness">Heart Wellness Program</option>
                    <option value="pain-relief">Pain Relief Program</option>
                    <option value="ifitt">iFITT Program</option>
                    <option value="iv-therapy">IV Therapy</option>
                    <option value="hbot">HBOT Therapy</option>
                    <option value="corporate">Corporate Wellness</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your health concerns or questions..."
                    className="rounded-lg min-h-[120px]"
                    required
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree to the privacy policy and consent to being contacted by GTS Clinic
                    regarding my inquiry.
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-base rounded-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 1 business day
                </p>
              </form>
            </Card>

            { }
            <div className="space-y-6">
              { }
              <Card className="overflow-hidden border-gray-100">
                <div className="aspect-[4/3] bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                    <div className="text-lg font-semibold text-gray-900 mb-2">GTS Clinic Location</div>
                    <div className="text-gray-600">No.36, Q- Block, 17th Street,</div>
                    <div className="text-gray-600 mb-4">Anna Nagar, Chennai - 600040</div>
                    <a
                      href="https://www.google.com/maps/place/GTS+CENTRE+FOR+WELLNESS/@13.0915702,80.2144055,17z/data=!4m15!1m8!3m7!1s0x3a52643b34d0d0b9:0xc66e22a888e15323!2s36,+Q-Block,+17th+Street,+Block+Q,+Anna+Nagar,+Chennai,+Tamil+Nadu+600040!3b1!8m2!3d13.0915702!4d80.2169804!16s%2Fg%2F11c3q4gq2q!3m5!1s0x3a52643b4da6a413:0x210b08512c23127d!8m2!3d13.0916266!4d80.216977!16s%2Fg%2F11btyvkjv4?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 font-medium hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </Card>

              { }
              <Card className="p-8 bg-white border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Monday -  Saturday</span>
                    <span className="text-teal-600 font-semibold">8:00 AM - 4:00 PM</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Doctor Availability</h3>
                <div className="space-y-3"></div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Monday -  Saturday</span>
                    <span className="text-teal-600 font-semibold">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                  <div className="pt-3">
                    <p className="text-sm text-gray-600">
                      * Emergency appointments may be available outside regular hours.
                      Please call for availability.
                    </p>
                  </div>
                </div>
              </Card>

              { }
              <Card className="p-8 bg-gradient-to-br from-teal-600 to-blue-700 text-white border-0">
                <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
                <p className="mb-6 opacity-90">
                  For urgent medical concerns or to speak with our team directly,
                  please call us during business hours.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <div>
                      <div className="text-sm opacity-75">Call Us Now</div>
                      <div className="font-semibold text-sm">
                        <div>+91 83001 70026</div>
                        <div>+044-4864 6636</div>
                        <div>+044-2622 4224</div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="mailto:gtswellnessindia@gmail.com"
                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <div>
                      <div className="text-sm opacity-75">Email Us</div>
                      <div className="font-semibold">gtswellnessindia@gmail.com</div>
                    </div>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      { }
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/*  <Card className="p-6 border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Do you accept insurance?</h3>
              <p className="text-gray-600">
                Yes, we accept most major insurance plans. Please contact us to verify
                your specific coverage.
              </p>
            </Card>*/}

            <Card className="p-6 border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">How do I schedule an appointment?</h3>
              <p className="text-gray-600">
                You can schedule by calling us, filling out the contact form, or visiting
                our clinic during business hours.
              </p>
            </Card>

              {/* <Card className="p-6 border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">What should I bring to my first visit?</h3>
              <p className="text-gray-600">
                Please bring your ID, insurance card, list of current medications, and
                any relevant medical records.
              </p>
            </Card> */}

            <Card className="p-6 border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer virtual consultations?</h3>
              <p className="text-gray-600">
                Yes, we offer telehealth appointments for initial consultations and
                follow-up visits. Ask about availability.
              </p>
            </Card>
            
          </div>
        </div>
      </section>
    </div>
    
  );
}
