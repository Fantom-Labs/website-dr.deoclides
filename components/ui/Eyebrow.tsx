import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-gold font-sans text-xs font-semibold tracking-widest uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}
