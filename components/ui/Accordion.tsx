"use client";

import * as RadixAccordion from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
  className,
}: {
  items: { question: string; answer: string }[];
  className?: string;
}) {
  return (
    <RadixAccordion.Root
      type="single"
      collapsible
      className={cn("divide-line flex flex-col divide-y", className)}
    >
      {items.map((item, i) => (
        <RadixAccordion.Item key={i} value={String(i)}>
          <RadixAccordion.Trigger className="group text-navy flex w-full items-center justify-between py-4 text-left font-sans text-base font-medium">
            {item.question}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="group-hover:text-gold shrink-0 transition-[transform,color] duration-200 group-data-[state=open]:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </RadixAccordion.Trigger>
          <RadixAccordion.Content className="text-slate data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 overflow-hidden">
            <p className="pb-4 font-sans text-sm leading-relaxed">
              {item.answer}
            </p>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
}
