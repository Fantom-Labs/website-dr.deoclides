import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Analytics from "@/components/analytics/Analytics";
import ConsentBanner from "@/components/analytics/ConsentBanner";
import { medicalBusinessJsonLd, physicianJsonLd } from "@/lib/seo/jsonld";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([physicianJsonLd(), medicalBusinessJsonLd()]),
        }}
      />
      <Analytics />
      <Header />
      {children}
      <Footer />
      <ConsentBanner />
    </>
  );
}
