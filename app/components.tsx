import Link from "next/link";
import { site } from "./data";

export function Header() {
  return <header className="site-header"><Link className="brand" href="/"><img src="/images/optimus-logo-clean.png" alt=""/><span><b>OPTIMUS</b><small>Defense & Sports Enterprise</small></span></Link><nav aria-label="Main navigation"><Link href="/services">Services</Link><Link href="/our-work">Our Work</Link><Link href="/about">About</Link><Link href="/process">Process</Link><Link href="/contact">Contact</Link></nav><Link className="button compact" href="/request-a-consultation">Request consultation</Link></header>;
}

export function Footer() {
  return <footer><div><div className="footer-identity"><img src="/images/optimus-logo-clean.png" alt="Optimus lion shield"/><div className="footer-brand"><strong>OPTIMUS</strong><span>DEFENSE AND SPORTS ENTERPRISE</span></div></div><p>Precision craftsmanship for lawful sport shooters and firearm enthusiasts.</p></div><div><h3>Visit</h3><p>{site.address}</p><p>{site.hours}</p></div><div><h3>Explore</h3><p><Link href="/services">Services</Link> · <Link href="/our-work">Our work</Link> · <Link href="/faq">FAQ</Link></p><p><Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> · <Link href="/disclaimer">Disclaimer</Link></p></div><p className="footer-note">© {new Date().getFullYear()} Optimus Defense and Sports Enterprise. All rights reserved.</p></footer>;
}

export function Shell({ children }: { children: React.ReactNode }) { return <><Header/><main>{children}</main><Footer/></>; }
export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) { return <section className="page-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{intro}</p></section>; }
export function LegalCallout() { return <aside className="legal-callout"><b>Inspection and compliance first.</b> {site.legalNotice} Do not transport, ship or bring an item to the shop until you receive confirmed instructions.</aside>; }
