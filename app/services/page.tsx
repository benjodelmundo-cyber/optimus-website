import type { Metadata } from "next";
import Link from "next/link";
import { Shell, PageHero, LegalCallout } from "../components";
import { categories, services } from "../data";
export const metadata: Metadata = { title: "Gunsmithing Services in Lipa City", description: "Explore inspection-led competition, repair, restoration, precision and customization services from Optimus in Lipa City." };
export default function Services(){return <Shell><PageHero eyebrow="Our capabilities" title="Services shaped around your goal." intro="From match preparation to careful restoration, every project begins with professional review and a confirmed scope."/><div className="content">{categories.map(c=><section className="service-section" id={c.slug} key={c.slug}><p className="eyebrow">{c.name}</p><h2>{c.intro}</h2><div className="service-cards">{services.filter(s=>s.categorySlug===c.slug).map(s=><Link className="service-card" href={`/services/${s.slug}`} key={s.slug}><h3>{s.name}</h3><p>{s.summary}</p><span className="text-link">View service →</span></Link>)}</div></section>)}<LegalCallout/></div></Shell>}
