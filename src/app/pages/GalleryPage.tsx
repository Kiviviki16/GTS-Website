import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "clinic", label: "Clinic" },
    { id: "treatment", label: "Treatment" }
  ];

  const images = [
    {
      id: 1,
      category: "clinic",
      url: "data:image/jpeg;base64,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",
      title: "Reception Area",
      description: "Welcoming entrance and waiting area"
    },
    {
      id: 2,
      category: "treatment",
      url: "https://gtsclinic.com/wp-content/uploads/2023/05/big19-250x250.jpg",
      title: "Therapy Session",
      description: "Advanced therapeutic treatment"
    },

    {
      id: 5,
      category: "treatment",
      url: "https://gtsclinic.com/wp-content/uploads/2023/05/big23-250x250.jpg",
      title: "Physical Therapy",
      description: "Rehabilitation and recovery "
    },
    {
      id: 6,
      category: "clinic",
      url: "https://gtsclinic.com/wp-content/uploads/2023/05/big2-250x250.jpg",
      title: "Consultation Room",
      description: "Private consultation spaces"
    },
    {
      id: 7,
      category: "treatment",
      url: "https://gtsclinic.com/wp-content/uploads/2023/05/big10-250x250.jpg",
      title: "Modern Equipments",
      description: "Equipment therapy room"
    },

    {
      id: 9,
      category: "clinic",
      url: "https://content3.jdmagicbox.com/v2/comp/chennai/i4/044pxx44.xx44.170912141742.i1i4/catalogue/gts-centre-for-wellness-anna-nagar-chennai-weight-loss-centres-64g6i3elx3.jpg",
      title: "Cardiology Suite",
      description: "Heart health monitoring center"
    }
  ];

  const filteredImages = activeCategory === "all"
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              Gallery
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Tour Our Facility
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Take a visual journey through our state-of-the-art clinic, treatment rooms, and
              advanced medical facilities designed with your comfort and care in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-white border-b border-gray-100 sticky top-[73px] z-40">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-lg px-6 py-3 ${activeCategory === category.id
                  ? "bg-teal-600 hover:bg-teal-700 text-white"
                  : "border-gray-300 text-gray-700 hover:border-teal-600 hover:text-teal-600"
                  }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <Card key={image.id} className="overflow-hidden group cursor-pointer bg-white border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-600">{image.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
