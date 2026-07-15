import { Shell, PageHero, LegalCallout } from "../components";
import { site } from "../data";

export default function About() {
  return <Shell>
    <PageHero
      eyebrow="About Optimus"
      title="Built with precision. Proven through performance."
      intro="Optimus Defense and Sports Enterprise is focused on exceptional build quality, precision engineering, reliable performance and a customer experience shaped around trust, clarity and satisfaction."
    />
    <div className="content">
      <div className="info-grid about-values">
        <div className="info-card"><p className="eyebrow">Mission</p><h2>Purposeful work.</h2><p>Our mission is to deliver exceptional build quality and dependable performance through skilled craftsmanship, precise execution and an uncompromising attention to detail.</p></div>
        <div className="info-card"><p className="eyebrow">Precision engineering</p><h2>Details matter.</h2><p>Inspection, measurement and considered workmanship guide each project so every component works together with purpose.</p></div>
        <div className="info-card"><p className="eyebrow">Reliable performance</p><h2>Built to perform.</h2><p>Our work is shaped around consistency, dependable operation and the performance goals of each customer and sporting discipline.</p></div>
        <div className="info-card"><p className="eyebrow">Customer satisfaction</p><h2>Your vision, realized.</h2><p>Clear communication, thoughtful recommendations and agreed expectations keep the customer informed from consultation through completion.</p></div>
      </div>
      <section className="side-panel about-reach">
        <p className="eyebrow">Service reach</p>
        <h2>Based in Lipa City. Serving enthusiasts nationwide.</h2>
        <p>We serve customers throughout Lipa City, Batangas and surrounding areas, with eligible projects considered from across the Philippines.</p>
        <p>{site.address}</p><p>{site.hours}.</p>
      </section>
      <LegalCallout/>
    </div>
  </Shell>;
}
