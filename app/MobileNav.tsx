"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [["Home", "/"], ["Services", "/services"], ["Our Work", "/our-work"], ["About", "/about"], ["Process", "/process"], ["Contact", "/contact"], ["FAQ", "/faq"]] as const;

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return <div className="mobile-navigation">
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen((current) => !current)}>
      <span/><span/><span/>
    </button>
    <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation" hidden={!open}>
      {links.map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link className="button mobile-menu-cta" href="/request-a-consultation" onClick={() => setOpen(false)}>Request consultation</Link>
    </nav>
  </div>;
}
