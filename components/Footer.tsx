"use client";

import Link from "next/link";

const navLinks = [
  // { href: "/sobre", label: "Sobre" }, // rota desativada — ver next.config.ts
  { href: "/especialidades", label: "Especialidades" },
  { href: "/academico", label: "Acadêmico" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-ivory font-serif text-lg">Dr. Deoclides</span>
            <span className="text-ivory/60 font-sans text-sm">
              Neurocirurgião · Especialista em Coluna
            </span>
            <span className="text-ivory/40 mt-1 font-sans text-xs">
              CRM PE 17015 · RQE 1548
            </span>
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-ivory/60 hover:text-ivory font-sans text-sm transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-line mt-8 border-t pt-6">
          <p className="text-ivory/40 font-sans text-xs">
            © 2026 Dr. Deoclides · Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
