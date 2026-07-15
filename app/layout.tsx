import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://optimusdefense.online"),
  title: { default: "Optimus Defense and Sports Enterprise | Gunsmithing in Lipa City", template: "%s | Optimus Defense and Sports Enterprise" },
  description: "Professional gunsmithing, competition preparation, restoration, repair and customization services for sport shooters and firearm enthusiasts in Lipa City, Batangas.",
  alternates: { canonical: "/" },
  openGraph: { title: "Optimus Defense and Sports Enterprise", description: "Precision built. Performance inspired.", url: "https://optimusdefense.online", siteName: "Optimus Defense and Sports Enterprise", locale: "en_PH", type: "website" },
  robots: process.env.NO_INDEX === "true" ? { index: false, follow: false } : { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
