import { Card } from "../components/ui/card";
import { Calendar, User, ArrowRight, Clock, Globe, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Understanding Heart Health: Prevention and Early Detection",
      excerpt: "Learn about the latest advances in cardiovascular health screening and how preventive care can save lives. Discover the key risk factors and lifestyle changes that make a difference.",
      category: "Cardiology",
      author: "Dr. Sarah Mitchell",
      date: "February 10, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1682706841289-9d7ddf5eb999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMGhlYWx0aCUyMG1lZGljYWx8ZW58MXx8fHwxNzcxMzI3NzYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      globalTopics: [
        { name: "World Heart Federation", url: "https://world-heart-federation.org/" },
        { name: "WHO Heart Health", url: "https://www.who.int/health-topics/cardiovascular-diseases" }
      ]
    },
    {
      id: 2,
      title: "The Science Behind Hyperbaric Oxygen Therapy",
      excerpt: "Explore how HBOT works at the cellular level and why it's becoming a popular treatment for wound healing, sports recovery, and various medical conditions.",
      category: "HBOT",
      author: "Dr. Sairam",
      date: "February 5, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1765830403209-a5eceac4c198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXBlcmJhcmljJTIwb3h5Z2VuJTIwY2hhbWJlcnxlbnwxfHx8fDE3NzEzMjc3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      globalTopics: [
        { name: "UHMS Research", url: "https://www.uhms.org/" },
        { name: "Global HBOT Standards", url: "https://www.hyperbaricfoundation.org/" }
      ]
    },
    {
      id: 3,
      title: "Chronic Pain Management Without Medication",
      excerpt: "Discover non-pharmaceutical approaches to managing chronic pain through advanced therapeutic modalities including laser therapy, deep wave treatment, and more.",
      category: "Pain Management",
      author: "Dr. James Patterson",
      date: "January 28, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzcxMjQyODcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      globalTopics: [
        { name: "IASP Global Pain", url: "https://www.iasp-pain.org/" },
        { name: "World Pain Institute", url: "https://worldinstituteofpain.org/" }
      ]
    },
    {
      id: 4,
      title: "Corporate Wellness: Investing in Employee Health",
      excerpt: "Why forward-thinking companies are prioritizing employee wellness programs and how these initiatives deliver measurable ROI in productivity and healthcare costs.",
      category: "Corporate Wellness",
      author: "Dr. Senthil Kumar",
      date: "January 20, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1758653500437-26660f405fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMGRvY3RvcnN8ZW58MXx8fHwxNzcxMjc1OTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      globalTopics: [
        { name: "WHO Occupational Health", url: "https://www.who.int/news-room/fact-sheets/detail/occupational-health" },
        { name: "Global Wellness Institute", url: "https://globalwellnessinstitute.org/" }
      ]
    },
    {
      id: 5,
      title: "Diabetes Remission: Is It Possible?",
      excerpt: "Recent research shows that Type 2 diabetes remission is achievable through comprehensive lifestyle interventions. Learn about the strategies that are proving successful.",
      category: "Diabetes Care",
      author: "Dr. Rajan",
      date: "January 15, 2026",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1614308456595-a59d48697ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzEzMDk3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      globalTopics: [
        { name: "Int. Diabetes Federation", url: "https://www.idf.org/" },
        { name: "Global Diabetes Compact", url: "https://www.who.int/initiatives/the-who-global-diabetes-compact" }
      ]
    },
    {
      id: 6,
      title: "The Benefits of IV Nutrient Therapy",
      excerpt: "From immune support to athletic recovery, discover how intravenous nutrient therapy delivers vitamins and minerals directly to your cells for maximum benefit.",
      category: "IV Therapy",
      author: "Dr. vasant",
      date: "January 8, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1614308456595-a59d48697ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzEzMDk3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      globalTopics: [
        { name: "Global Nutrition", url: "https://www.globalnutritionreport.org/" },
        { name: "Micronutrient Forum", url: "https://micronutrientforum.org/" }
      ]
    },
    {
      id: 7,
      title: "Lymphatic Health: The Overlooked Wellness System",
      excerpt: "Understanding your lymphatic system and how therapies like pneumatic compression can enhance circulation, reduce swelling, and support overall health.",
      category: "Wellness",
      author: "Dr. James Patterson",
      date: "December 30, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1764314399496-aa49b4e4d127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwd2VsbG5lc3MlMjB0aGVyYXB5fGVufDF8fHx8MTc3MTMyNzc2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      globalTopics: [
        { name: "Int. Society Lymphology", url: "https://www.u.arizona.edu/~witte/ISL.htm" },
        { name: "Vascular Health Global", url: "https://vavf.org/" }
      ]
    },
    {
      id: 8,
      title: "Sports Recovery: Advanced Techniques for Athletes",
      excerpt: "Professional athletes are using cutting-edge recovery modalities to heal faster and perform better. Learn about the technologies available at GTS Clinic.",
      category: "Sports Medicine",
      author: "Dr. Michael Chen",
      date: "December 22, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1612732362547-14adf627f24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZml0bmVzcyUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MTMyNzc2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      globalTopics: [
        { name: "FIMS Sports Med", url: "https://www.fims.org/" },
        { name: "Int. Olympic Committee", url: "https://olympics.com/hoc/medical-scientific" }
      ]
    },
    {
      id: 9,
      title: "Uterine Fibroid Treatment: Non-Surgical Options",
      excerpt: "Uterine fibroid embolization offers women a minimally invasive alternative to surgery. Discover how this procedure preserves the uterus while providing relief.",
      category: "Women's Health",
      author: "Dr. Sarah Mitchell",
      date: "December 15, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxMzE5NjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      globalTopics: [
        { name: "WHO Women's Health", url: "https://www.who.int/health-topics/women-s-health" },
        { name: "FIGO Foundation", url: "https://www.figo.org/" }
      ]
    }
  ];


  return (
    <div className="bg-white">
      { }
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              Blog & Resources
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Health Insights & Medical News
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay informed with the latest insights on healthcare, wellness, and medical innovations
              from our expert team of physicians and healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      { }
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="bg-gradient-to-br from-teal-600 to-blue-700 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2">
              <div className="p-12 text-white flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-4">{posts[0].title}</h2>
                <p className="text-xl mb-6 opacity-90 leading-relaxed">{posts[0].excerpt}</p>
                <div className="flex items-center gap-6 mb-8 text-sm opacity-90">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{posts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                    <Calendar className="w-4 h-4" />
                    <span>{posts[0].date}</span>
                  </div>
                </div>
                <div className="mb-10">
                  <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    <Globe className="w-4 h-4 text-teal-300" />
                    <span>Deep Dive Global Insights</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {posts[0].globalTopics.map((topic, index) => (
                      <a
                        key={index}
                        href={topic.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg border border-white/10 hover:border-white/30 transition-all flex items-center gap-2 text-sm font-medium"
                      >
                        Learn More: {topic.name}
                        <ExternalLink className="w-3 h-3 text-teal-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <ImageWithFallback
                  src={posts[0].image}
                  alt={posts[0].title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      { }
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden group cursor-pointer bg-white border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed text-sm">{post.excerpt}</p>
                  
                  {/* Global Perspectives Section */}
                  <div className="mb-0 pt-6 border-t border-gray-100/60">
                    <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                      <Globe className="w-3.5 h-3.5 text-teal-500" />
                      <span>Learn More Globally</span>
                    </div>
                    <div className="flex flex-col gap-3">
                      {post.globalTopics.map((topic, index) => (
                        <a
                          key={index}
                          href={topic.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-sm text-teal-600 hover:text-teal-700 font-semibold flex items-center justify-between bg-teal-50/30 hover:bg-teal-50 p-3 rounded-lg border border-teal-100/50 transition-all group/link"
                        >
                          <span className="flex items-center gap-2">
                            {topic.name}
                          </span>
                          <ExternalLink className="w-4 h-4 text-teal-400 opacity-60 group-hover/link:opacity-100 transition-all" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>


        </div>
      </section>

      { }
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <Card className="p-12 bg-gradient-to-br from-teal-50 to-blue-50 border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch with GTS Clinic</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Have questions about our services or want to book a consultation? Our team is here to help.
              Reach out to us today and take the first step towards better health.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                  Book a Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
