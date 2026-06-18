import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "gold" | "ghost";

const variantMap: Record<ButtonVariant, string> = {
  primary: "bg-navy text-ivory hover:bg-navy-deep",
  gold: "bg-gold text-navy-deep hover:bg-gold-soft",
  ghost: "border border-navy text-navy hover:bg-navy hover:text-ivory",
};

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
}) {
  return (
    <button
      className={cn(
        "rounded px-6 py-3 font-sans text-sm font-medium transition-colors",
        variantMap[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
