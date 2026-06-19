import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
      <Header />
      {children}
      <Footer />
    </>
  );
}
