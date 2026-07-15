export const site = {
  name: "Optimus Defense and Sports Enterprise",
  shortName: "Optimus",
  url: "https://optimusdefense.online",
  address: "#108, Zone 2, Brgy. Sampaguita, Lipa City, Batangas 4217, Philippines",
  phone: "Phone to be confirmed",
  email: "Email to be confirmed",
  hours: "Visits by confirmed appointment only",
  serviceArea: "Lipa City, Batangas, CALABARZON, and eligible customers across the Philippines",
  legalNotice: "Services are subject to inspection, parts availability, licensing requirements, and applicable Philippine law.",
};

export const categories = [
  { name: "Competition & Performance", slug: "competition-performance", intro: "Match-focused inspection, tuning and setup for dependable sporting performance." },
  { name: "Customization & Personalization", slug: "customization-personalization", intro: "Purposeful finishes, ergonomic work and professionally fitted accessories." },
  { name: "Restoration Services", slug: "restoration", intro: "Careful renewal of valued, vintage and heirloom pieces." },
  { name: "Repair & Maintenance", slug: "repair-maintenance", intro: "Inspection-led diagnosis, maintenance and repair for safe, reliable function." },
  { name: "Precision Rifle Services", slug: "precision-rifle", intro: "Professionally reviewed precision work for sporting and competition applications." },
  { name: "Inspection & Consultation", slug: "inspection-consultation", intro: "Clear guidance before a purchase, competition setup or custom project." },
  { name: "Premium Custom Shop", slug: "premium-custom", intro: "Collaborative, highly considered builds shaped around a lawful sporting goal." },
] as const;

const rawServices: Record<string, string[]> = {
  "competition-performance": ["Competition Performance Packages", "Trigger Jobs", "Action Tuning", "Accuracy Enhancement", "Recoil Management Upgrades", "Competition Reliability Packages"],
  "customization-personalization": ["Cerakote Finishes", "Firearm Refinishing", "Custom Engraving", "Slide Milling and Optic Cuts", "Porting and Compensation", "Grip Enhancements", "Custom Controls Installation", "Competition Accessory Installation"],
  restoration: ["Firearm Restoration", "Rust Removal and Corrosion Treatment", "Wood Stock Restoration", "Metal Restoration", "Historical Reproductions"],
  "repair-maintenance": ["General Gunsmith Repairs", "Preventative Maintenance Service", "Parts Replacement and Fitting", "Feed and Extraction Corrections", "Sight Installation and Adjustment", "Spring Replacement Services"],
  "precision-rifle": ["Barrel Installation and Replacement", "Barrel Threading", "Chambering and Rechambering", "Action Blueprinting", "Stock Bedding"],
  "inspection-consultation": ["Pre-Purchase Inspections", "Competition Setup Consultation", "Custom Build Consultation"],
  "premium-custom": ["Full Custom Competition Builds", "Signature Package Builds", "Showpiece and Collector Builds"],
};

const slugify = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const services = categories.flatMap((category) =>
  rawServices[category.slug].map((name) => ({
    name,
    slug: slugify(name),
    category: category.name,
    categorySlug: category.slug,
    summary: `${name} delivered through an inspection-led process, with the scope shaped around the customer’s lawful sporting, reliability or preservation goals.`,
  })),
);

export const projects = [
  { title: "Competition Build", category: "Competition", image: "/images/projects/competition-firearm-cutout.png", alt: "Isolated black competition firearm with precision-machined chassis and mounted optic" },
  { title: "Signature Package Build", category: "Personalization", image: "/images/projects/signature-package-detail.jpg", alt: "Detail view of a black and bronze signature package build" },
  { title: "Custom Slide Work", category: "", image: "/images/projects/custom-slide-work-02.jpg", alt: "Precision-machined silver and black sporting pistol slide held during inspection" },
  { title: "Custom Finish Study", category: "Customization & Personalization", image: "/images/projects/custom-finish-slide-01.jpg", alt: "Bronze-finished sporting pistol slide in a protective case" },
  { title: "Showpiece Competition Build", category: "Premium Custom Shop", image: "/images/projects/showpiece-pistol-01.jpg", alt: "Black and silver custom sporting pistol displayed on a light background" },
];

export const faqs = [
  ["Can I bring an item directly to the shop?", "Please contact us first and wait for confirmed handling, transport and appointment instructions. A web request is not permission to transport or deliver an item."],
  ["Can you quote from a photo?", "Images can help with an initial conversation, but final scope, price and timing require professional inspection and written confirmation."],
  ["How long will a project take?", "Timing varies with inspection findings, parts availability and project complexity. We provide an estimate after review."],
  ["Do you accept every project?", "No. Work may be declined when it is unsafe, unlawful, outside available licenses, incompatible, or outside shop capabilities."],
];
