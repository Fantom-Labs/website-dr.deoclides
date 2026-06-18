import Link from "next/link";
import { MobileNav } from "@/components/ui/MobileNav";

const navLinks = [
  { href: "/sobre", label: "Sobre" },
  { href: "/especialidades", label: "Especialidades" },
  { href: "/academico", label: "Acadêmico" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="bg-navy">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col gap-0.5">
          <span className="text-ivory font-serif text-xl">Dr. Deoclides</span>
          <span className="text-gold-soft font-sans text-xs">
            Neurocirurgião · Especialista em Coluna
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-ivory/80 hover:text-ivory font-sans text-sm transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contato"
          className="bg-gold text-navy-deep hover:bg-gold-soft hidden rounded px-4 py-2 font-sans text-sm font-medium transition-colors md:block"
        >
          Agendar consulta
        </Link>

        <MobileNav />
      </div>
    </header>
  );
}
