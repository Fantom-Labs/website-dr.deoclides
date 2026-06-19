"use client";

import { useEffect, useState } from "react";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("lgpd-consent")) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("lgpd-consent", "accepted");
    window.dispatchEvent(
      new CustomEvent("lgpd-consent-change", { detail: "accepted" }),
    );
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("lgpd-consent", "declined");
    window.dispatchEvent(
      new CustomEvent("lgpd-consent-change", { detail: "declined" }),
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="bg-navy border-line fixed bottom-0 left-0 right-0 z-50 border-t px-6 py-4 md:py-5">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-ivory/80 font-sans text-sm max-w-prose">
          Usamos cookies e tecnologias de rastreamento para análise de
          desempenho e publicidade personalizada. Ao aceitar, você concorda com
          nosso{" "}
          <a href="/privacidade" className="underline hover:text-ivory transition-colors">
            uso de cookies
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            className="text-ivory/60 hover:text-ivory font-sans text-sm transition-colors"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="bg-gold hover:bg-gold-soft text-navy rounded px-4 py-2 font-sans text-sm transition-colors"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
