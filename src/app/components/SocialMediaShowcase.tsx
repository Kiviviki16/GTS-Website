import { Youtube } from "lucide-react";

/* ─── Data ───────────────────────────────────────────────────────────────────── */

const youtubeVideos: { title: string; videoId: string }[] = [
  { title: "Talk about Radiology", videoId: "tnpyLlKsJ3w" },
  { title: "Pain Relief Program Overview", videoId: "KNlvSp5hea8" },
  { title: "IV Therapy & Nutrient Infusions Overview", videoId: "dzlOrnsyeh0" },
  { title: "Hyperbaric Oxygen Therapy Overview", videoId: "oulAsDFkQ3g" },
  { title: "Talk about Aneurysm - Tips and Tricks", videoId: "Lh08J1xB5bA" },
  { title: "Percutaneous Biliary Drainage - Tips and Tricks", videoId: "LJ3JLDMnnZQ" },
  { title: "GTS Wellness – Heart Health Explained", videoId: "9WQrkNFBHKs" },
];

/* ─── Component ───────────────────────────────────────────────────────────────── */
export default function SocialMediaShowcase() {
  return (
    <section className="sms-section" aria-label="Social Media Showcase">
      <div className="sms-container">
        {/* ── Section Header ── */}
        <div className="sms-header">
          <span className="sms-pill">Stay Connected</span>
          <h2 className="sms-heading">Our Media Hub</h2>
          <p className="sms-subheading">
            Watch expert health talks, wellness guides, and clinic updates from
            the GTS team — all in one place.
          </p>
        </div>

        {/* ── YouTube Videos ── */}
        <div className="sms-yt-header">
          <Youtube className="sms-icon-yt" aria-hidden="true" />
          <h3 className="sms-sub-title">YouTube Videos</h3>
        </div>

        <div className="sms-grid">
          {youtubeVideos.map(({ title, videoId }, index) => (
            <article key={videoId} className="sms-card" aria-label={title}>
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
                  title={title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  loading="lazy"
                  aria-label={`YouTube video: ${title}`}
                />
              </div>
              <div className="sms-card-body">
                <span className="sms-video-num">Video {index + 1}</span>
                <h4 className="sms-video-title">{title}</h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
