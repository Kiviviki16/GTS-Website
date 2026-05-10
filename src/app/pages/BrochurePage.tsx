import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const brochureSections = [
  {
    id: "English",
    images: [
      { src: "/images/bochure en.jpeg", alt: "English brochure 1" },
      { src: "/images/broucher2en.jpeg", alt: "English brochure 2" },
      { src: "/images/broucher3en.jpeg", alt: "English brochure 3" },
    ],
  },
  {
    id: "tamil",
    images: [
      { src: "/images/broucher tn.jpeg", alt: "Tamil brochure 1" },
      { src: "/images/broucher2tn.jpeg", alt: "Tamil brochure 2" },
      { src: "/images/broucher3tn.jpeg", alt: "Tamil brochure 3" },
    ],
  },
];

export default function BrochurePage() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              Brochure
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Brochures</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Browse our brochures for treatment information and wellness guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {brochureSections.map((section) => (
              <div key={section.id}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
                <div className="space-y-6">
                  {section.images.map((image, index) => (
                    <Card key={`${section.id}-${index}`} className="overflow-hidden bg-white border-gray-100 shadow-md">
                      <ImageWithFallback
                        src={image.src}
                        alt={image.alt}
                        width={700}
                        height={990}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                      />
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
