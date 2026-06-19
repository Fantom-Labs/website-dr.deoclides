"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type Consent = "accepted" | "declined" | null;

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export default function Analytics() {
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    setConsent(localStorage.getItem("lgpd-consent") as Consent);

    const handler = (e: Event) => {
      setConsent((e as CustomEvent<Consent>).detail);
    };
    window.addEventListener("lgpd-consent-change", handler);
    return () => window.removeEventListener("lgpd-consent-change", handler);
  }, []);

  if (consent !== "accepted") return null;

  const hasGtag = GA4_ID || GOOGLE_ADS_ID;

  return (
    <>
      {hasGtag && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID ?? GOOGLE_ADS_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">{`
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            ${GA4_ID ? `gtag('config','${GA4_ID}');` : ""}
            ${GOOGLE_ADS_ID ? `gtag('config','${GOOGLE_ADS_ID}');` : ""}
          `}</Script>
        </>
      )}
      {META_PIXEL_ID && (
        <Script id="meta-pixel-init" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','${META_PIXEL_ID}');
          fbq('track','PageView');
        `}</Script>
      )}
    </>
  );
}
