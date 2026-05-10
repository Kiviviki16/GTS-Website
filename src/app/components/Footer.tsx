import { Link } from "react-router";
import { Activity, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { styles } from "../../styles/styles";

export default function Footer() {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/services" },
    { label: "Wellness Program", path: "/wellness-program" },
    { label: "Contact", path: "/contact" },
  ];

  const services = [
    "Heart Wellness Program",
    "Pain Relief Program",
    "IV Therapy",
    "HBOT Therapy",
    "Corporate Wellness",
  ];

  return (
    <footer className="bg-black border-t border-gray-800" style={{ fontFamily: styles.baseText.fontFamily }}>
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-4 gap-12 mb-12">
          {/* About GTS Clinic */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/images/GTS.png" alt="GTS Clinic" className="h-16 w-auto object-contain" />
            </Link>
            <p style={styles.lightText} className="mb-6">
              Your trusted partner in holistic wellness and advanced therapeutic care.
              We're committed to helping you achieve optimal health.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/GTSwellnessCentre/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-teal-100 hover:bg-teal-200 flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-teal-700" />
              </a>
              <a href="https://www.linkedin.com/in/dr-radhakrishnan-ravikumar-17578b32/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-teal-100 hover:bg-teal-200 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-teal-700" />
              </a>
              <a href="https://www.instagram.com/gtswellness/?hl=en" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-teal-100 hover:bg-teal-200 flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4 text-teal-700" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">
                  N0.36, Q- Block, 17th street,<br />
                  Anna nagar, Chennai-40
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 text-sm text-gray-300">
                  <a href="tel:04448646636" className="hover:text-teal-400 transition-colors">044-4864 6636</a>
                  <a href="tel:04426224224" className="hover:text-teal-400 transition-colors">044-2622 4224</a>
                  <a href="tel:+918300170026" className="hover:text-teal-400 transition-colors">+91 83001 70026</a>
                  <a href="tel:+919944466666" className="hover:text-teal-400 transition-colors">+91 99444 66666</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a href="mailto:gtswellnessindia@gmail.com" className="text-sm text-gray-300 hover:text-teal-400 transition-colors">
                  gtswellnessindia@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">
              © 2026 GTS Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}
