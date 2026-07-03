"use client";

import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/ui/MobileNav";

const navLinks = [
  { href: "/", label: "Início" },
  // { href: "/sobre", label: "Sobre" }, // rota desativada — ver next.config.ts
  { href: "/especialidades", label: "Especialidades" },
  { href: "/academico", label: "Acadêmico" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex h-24 max-w-[1400px] items-center px-4 sm:px-6 lg:px-8">
        <div className="border-line flex w-full items-center justify-between rounded-2xl border bg-white/90 py-3 pr-3 pl-4 shadow-[0_4px_9px_0_rgba(0,0,0,0.08)] backdrop-blur-md sm:pr-4 sm:pl-6">
          <Link
            href="/"
            className="shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image
              src="/logo.svg"
              alt="Dr. Deoclides - Neurocirurgião Especialista em Coluna"
              width={148}
              height={34}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-ink hover:text-navy font-poppins text-base font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contato"
            className="border-gold/30 text-ivory hidden items-center gap-3 rounded-xl border bg-[#032c58] px-6 py-4 font-sans text-base font-medium backdrop-blur-md transition-colors hover:bg-[#032c58]/90 lg:inline-flex"
          >
            <Image
              src="/zap.svg"
              alt=""
              width={24}
              height={24}
              className="size-6"
            />
            Agende uma avaliação
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
