const BASE_URL = "https://doutordeoclides.com.br";

export function physicianJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${BASE_URL}/#physician`,
    name: "Dr. Deoclides",
    alternateName: "Deoclides Lima Bezerra Junior",
    identifier: [
      { "@type": "PropertyValue", name: "CRM", value: "PE 17015" },
      { "@type": "PropertyValue", name: "RQE", value: "1548" },
    ],
    medicalSpecialty: [
      { "@type": "MedicalSpecialty", name: "Neurosurgery" },
      { "@type": "MedicalSpecialty", name: "SpineSurgery" },
    ],
    description:
      "Neurocirurgião especialista em coluna vertebral, com 14 anos de experiência, fellowship UCL Londres e 5 publicações científicas.",
    url: BASE_URL,
    sameAs: [
      "https://www.doctoralia.com.br/deoclides-lima-bezerra-junior/neurocirurgiao/recife",
    ],
    worksFor: [
      {
        "@type": "Hospital",
        name: "Hospital Memorial São José",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Recife",
          addressRegion: "PE",
          addressCountry: "BR",
        },
      },
      {
        "@type": "Hospital",
        name: "Hospital Esperança",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Recife",
          addressRegion: "PE",
          addressCountry: "BR",
        },
      },
    ],
  };
}

export function medicalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${BASE_URL}/#consultorio`,
    name: "Dr. Deoclides — Neurocirurgião",
    url: BASE_URL,
    medicalSpecialty: { "@type": "MedicalSpecialty", name: "Neurosurgery" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. República do Líbano, 251, 12º andar",
      addressLocality: "Recife",
      addressRegion: "PE",
      addressCountry: "BR",
      description: "RioMar Trade Center — Esmere Cowork",
    },
    physician: { "@id": `${BASE_URL}/#physician` },
  };
}
