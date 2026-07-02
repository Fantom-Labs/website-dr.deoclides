import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "border-gold/40 bg-gold/10 text-ivory inline-flex w-fit items-center rounded-full border px-8 py-2.5 font-sans text-lg",
        className,
      )}
    >
      {children}
    </span>
  );
}
