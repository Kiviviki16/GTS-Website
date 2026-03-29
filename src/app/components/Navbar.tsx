import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Our Services", path: "/services" },
    { label: "Wellness Program", path: "/wellness-program" },
    { label: "Gallery", path: "/gallery" },
    { label: "Equipment", path: "/equipment" },
    { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-100 border-b border-gray-200 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/GTS LOGO.jpeg" alt="GTS Clinic" className="h-20 w-auto object-contain" />
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${isActive(item.path)
                  ? "text-teal-600 font-medium"
                  : "text-gray-600 hover:text-teal-600"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/contact">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-6">
              Book Appointment
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
