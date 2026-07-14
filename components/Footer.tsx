import Image from "next/image";
import Link from "next/link";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";

const navLinks = [
  // { href: "/sobre", label: "Sobre" }, // rota desativada — ver next.config.ts
  { href: "/#especialidades", label: "Especialidades" },
  { href: "/academico", label: "Acadêmico" },
  { href: "/blog", label: "Blog" },
  // { href: "/contato", label: "Contato" }, // rota ainda não construída
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <span className="text-ivory font-serif text-2xl">
              Dr. Deoclides
            </span>
            <p className="text-ivory/60 mt-2 font-sans text-sm">
              Neurocirurgião · Especialista em Coluna
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-ivory/40 font-sans text-xs font-semibold tracking-widest uppercase">
              Navegação
            </span>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-ivory/70 hover:text-ivory font-sans text-sm transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3">
            <span className="text-ivory/40 font-sans text-xs font-semibold tracking-widest uppercase">
              Redes sociais
            </span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/70 hover:text-ivory font-sans text-sm transition-colors"
            >
              Instagram
            </a>
          </nav>

          <nav className="flex flex-col gap-3">
            <span className="text-ivory/40 font-sans text-xs font-semibold tracking-widest uppercase">
              Contato
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/70 hover:text-ivory flex items-center gap-2 font-sans text-sm transition-colors"
            >
              <Image src="/zap.svg" alt="" width={16} height={16} className="size-4" />
              +55 81 99982-3567
            </a>
          </nav>
        </div>

        <div className="border-line mt-12 flex flex-col gap-2 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ivory/40 font-sans text-xs">
            © 2026 Dr. Deoclides · Todos os direitos reservados
          </p>
          <p className="text-ivory/40 font-sans text-xs">
            CRM PE 17015 · RQE 1548
          </p>
        </div>
      </div>
    </footer>
  );
}
