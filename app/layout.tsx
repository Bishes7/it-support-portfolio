import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile, siteUrl } from "./data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Bishes Adhikari — IT Support | Launceston, Tasmania";
const description =
  "IT Support professional in Launceston, TAS. Microsoft 365, Active Directory, Azure and Windows troubleshooting. AZ-900 & MS-900 certified, full work rights, available immediately.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title,
  description,
  keywords: [
    "IT Support",
    "Service Desk",
    "Help Desk",
    "Desktop Support",
    "Launceston",
    "Hobart",
    "Tasmania",
    "Microsoft 365",
    "Active Directory",
    "Azure",
    "Entra ID",
  ],
  authors: [{ name: "Bishes Adhikari" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_AU",
  },
  twitter: { card: "summary", title, description },
};

// Structured data so search engines understand this is a person's profile.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "IT Support Specialist",
  email: `mailto:${profile.email}`,
  telephone: "+61451280806",
  url: siteUrl,
  image: `${siteUrl}/bishes.jpg`,
  address: { "@type": "PostalAddress", addressLocality: "Launceston", addressRegion: "TAS", addressCountry: "AU" },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: ["Microsoft 365", "Active Directory", "Microsoft Entra ID", "Azure", "Windows", "Ubuntu Linux", "IT Support"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
