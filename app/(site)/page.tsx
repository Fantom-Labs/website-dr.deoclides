export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-8 p-16">
      <h1 className="text-navy font-serif text-4xl">Dr. Deoclides</h1>
      <p className="text-slate font-sans">
        Neurocirurgião · Especialista em Coluna
      </p>

      <div className="flex flex-wrap gap-4">
        <div className="bg-navy text-ivory px-4 py-2">navy</div>
        <div className="bg-navy-deep text-ivory px-4 py-2">navy-deep</div>
        <div className="bg-gold text-navy-deep px-4 py-2">gold</div>
        <div className="bg-gold-soft text-navy-deep px-4 py-2">gold-soft</div>
        <div className="bg-ivory border-line text-ink border px-4 py-2">
          ivory
        </div>
        <div className="bg-bone border-line text-ink border px-4 py-2">
          bone
        </div>
        <div className="bg-slate text-ivory px-4 py-2">slate</div>
        <div className="bg-surface border-line text-ink border px-4 py-2">
          surface
        </div>
      </div>

      <p className="text-gold font-serif text-2xl italic">
        Por trás de cada coluna existe uma história.
      </p>
    </main>
  );
}
