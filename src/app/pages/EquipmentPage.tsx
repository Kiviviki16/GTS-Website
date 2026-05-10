import { EquipmentSection } from "../components/EquipmentSection";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function EquipmentPage() {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto px-8 pt-8">
        <Link to="/services/pain-relief" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Pain Relief Program
        </Link>
      </div>
      <EquipmentSection />
    </div>
  );
}
