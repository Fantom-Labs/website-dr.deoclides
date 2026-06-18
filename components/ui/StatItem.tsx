export function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-navy font-serif text-4xl">{value}</span>
      <span className="text-slate font-sans text-sm">{label}</span>
    </div>
  );
}
