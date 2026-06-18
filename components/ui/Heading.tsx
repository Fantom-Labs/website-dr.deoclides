import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

const sizeMap: Record<HeadingLevel, string> = {
  h1: "text-4xl leading-tight md:text-5xl lg:text-6xl",
  h2: "text-3xl leading-snug md:text-4xl",
  h3: "text-2xl leading-snug md:text-3xl",
  h4: "text-xl leading-snug md:text-2xl",
};

export function Heading({
  as: As = "h2",
  children,
  className,
}: {
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <As className={cn("text-navy font-serif", sizeMap[As], className)}>
      {children}
    </As>
  );
}
