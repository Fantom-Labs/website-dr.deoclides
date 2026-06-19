import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://doutordeoclides.com.br"),
  title: {
    template: "%s · Dr. Deoclides",
    default: "Dr. Deoclides — Neurocirurgião Especialista em Coluna | Recife",
  },
  description:
    "Dr. Deoclides, neurocirurgião especialista em coluna vertebral em Recife/PE. 14 anos de experiência, fellowship UCL Londres. CRM PE 17015 · RQE 1548.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Dr. Deoclides",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${newsreader.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
