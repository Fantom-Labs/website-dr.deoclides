"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Início" },
  // { href: "/sobre", label: "Sobre" }, // rota desativada — ver next.config.ts
  { href: "/#especialidades", label: "Especialidades" },
  { href: "/academico", label: "Acadêmico" },
  { href: "/blog", label: "Blog" },
  // { href: "/contato", label: "Contato" }, // rota ainda não construída
];

export function MobileNav() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-ink lg:hidden" aria-label="Abrir menu">
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
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-navy-deep/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-40 backdrop-blur-sm" />

        <Dialog.Content className="bg-navy data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right fixed inset-y-0 right-0 z-50 flex w-72 flex-col p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-ivory font-serif text-lg">
              Dr. Deoclides
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="text-ivory/60 hover:text-ivory"
                aria-label="Fechar menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </Dialog.Close>
          </div>

          <nav className="mt-8 flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <Dialog.Close key={href} asChild>
                <Link
                  href={href}
                  className="text-ivory/80 hover:text-ivory font-sans text-base transition-colors"
                >
                  {label}
                </Link>
              </Dialog.Close>
            ))}
          </nav>

          <div className="mt-auto">
            <Dialog.Close asChild>
              <Link
                href="/contato"
                className="bg-gold text-navy-deep hover:bg-gold-soft block rounded px-4 py-3 text-center font-sans text-sm font-medium transition-colors"
              >
                Agendar consulta
              </Link>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
