import type { Metadata } from "next";
import { Shell, PageHero, LegalCallout } from "../components";
import { projects } from "../data";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Selected examples of Optimus competition, customization and premium gunsmithing craftsmanship.",
};

const reels = [
  ["1306569981258264", "Optimus workshop reel one"],
  ["1597735607608316", "Optimus workshop reel two"],
  ["1340884043555132", "Optimus workshop reel three"],
] as const;

export default function Work() {
  const galleryProjects = projects.filter((project) => project.title !== "Signature Package");

  return <Shell>
    <PageHero
      eyebrow="Selected projects"
      title="Craftsmanship you can see."
      intro="A curated look at competition, finish and precision projects. Final project classifications and publication permissions remain subject to owner review."
    />
    <div className="content work-content">
      <div className="gallery">
        {galleryProjects.map((project) => <article key={project.title}>
          <img src={project.image} alt={project.alt}/>
          <div>
            <h2>{project.title}</h2>
            <p>Selected example of Optimus craftsmanship. Project details are intentionally limited to protect customer privacy.</p>
          </div>
        </article>)}
      </div>

      <section className="work-videos" aria-labelledby="work-videos-title">
        <div className="work-section-heading">
          <h2 id="work-videos-title">Workshop in motion.</h2>
          <p>Watch selected projects and craftsmanship highlights from Optimus.</p>
        </div>
        <div className="video-grid">
          {reels.map(([id, title]) => <article className="video-card" key={id}>
            <iframe
              src={`https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${id}%2F&show_text=false&width=267&t=0`}
              title={title}
              width="267"
              height="476"
              loading="lazy"
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </article>)}
          <article className="video-card video-card-more">
            <span>More from Optimus</span>
            <h3>New workshop highlights coming soon.</h3>
          </article>
        </div>
      </section>

      <LegalCallout/>
    </div>
  </Shell>;
}
