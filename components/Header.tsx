import Image from "next/image";
import Link from "next/link";
import { CalendarIcon } from "@/components/ui/icons";
import { MobileNav } from "@/components/ui/MobileNav";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/especialidades", label: "Especialidades" },
  { href: "/academico", label: "Acadêmico" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex h-24 max-w-[1400px] items-center px-4 sm:px-6 lg:px-8">
        <div className="border-line flex w-full items-center justify-between rounded-2xl border bg-white/95 py-3 pr-3 pl-4 shadow-[0_4px_9px_0_rgba(0,0,0,0.08)] backdrop-blur-md sm:pr-4 sm:pl-6">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.svg"
              alt="Dr. Deoclides — Neurocirurgião Especialista em Coluna"
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
                className="text-ink hover:text-navy font-sans text-sm font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contato"
            className="bg-navy border-gold hover:bg-navy-deep text-ivory hidden items-center gap-2 rounded-xl border px-5 py-3 font-sans text-sm font-medium transition-colors lg:flex"
          >
            <CalendarIcon className="size-5" />
            Agendar Avaliação
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
