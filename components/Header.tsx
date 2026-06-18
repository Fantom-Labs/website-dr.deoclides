import Link from "next/link";

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

        {/* Mobile menu button — Radix Dialog adicionado em T7 */}
        <button className="text-ivory md:hidden" aria-label="Abrir menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
