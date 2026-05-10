import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "clinic", label: "Clinic" },
    { id: "treatment", label: "Treatment" },
    { id: "camp", label: "Camp" },
  ];

  const galleryData = [
    {
      id: 1,
      category: "clinic",
      image: "/images/clinic4.jpeg",
      title: "Reception Area",
    },
    {
      id: 2,
      category: "treatment",
      image: "/images/treatment1.jpeg",
      title: "Therapy Session",
    },
    {
      id: 3,
      category: "clinic",
      image: "/images/clinic1.jpeg",
      title: "Reception Area",
    },
    {
      id: 4,
      category: "clinic",
      image: "/images/clinic2.jpeg",
      title: "Waiting Area",
    },
    {
      id: 5,
      category: "treatment",
      image: "/images/treatment2.jpeg",
      title: "Therapy Session",
    },
    {
      id: 6,
      category: "clinic",
      image: "/images/clinic3.jpeg",
      title: "Patient interaction",
    },
    {
      id: 7,
      category: "treatment",
      image: "/images/treatment3.jpeg",
      title: "Diagnostic Session",
    },
    {
      id: 8,
      category: "camp",
      image: "/images/camp1.jpeg",
      title: "Heart and Vascular Camp",
    },
    {
      id: 9,
      category: "camp",
      image: "/images/camp2.jpeg",
      title: "Therapy Session",
    },
    {
      id: 10,
      category: "camp",
      image: "/images/camp3.jpeg",
      title: "Medical Camp",
    },
    {
      id: 11,
      category: "camp",
      image: "/images/camp4.jpeg",
      title: "Patient Examination Camp",
    },
    {
      id: 12,
      category: "camp",
      image: "/images/camp5.jpeg",
      title: "Community Camp",
    },
    {id: 13, category: "clinic", image: "/images/clinic5.jpeg", title: "Clinic Exterior"},
    {id: 14, category: "clinic", image: "/images/clinic6.jpeg", title: "Clinic Interior"},
  
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

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
                <div className="h-64 md:h-72 lg:h-80 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={image.image}
                    alt={image.title}
                    className="block w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
