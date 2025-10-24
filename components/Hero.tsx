import { Shield, Users, Megaphone, Rocket } from 'lucide-react';

export default function Hero(){
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <img src="/brand/cubes-dark.jpg" alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,0,0,0)_0%,#0b0b0f_70%)]" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center gap-6">
        <span className="kicker">The Lab for Shillers</span>
        <h1 className="h1">
          <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#F2C14E,#E8A626)]">
            SHILLAB
          </span> — nástroje, ktoré robia shilling <em>ľahším</em> a <em>zábavným</em>
        </h1>
        <p className="p max-w-2xl">
          The professional shilling ecosystem. We build tools that make shilling easier and fun.
          Od AI Composeru až po KPI tracking — všetko na jednom mieste pre tvoju komunitu.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#demo" className="btn-primary inline-flex items-center gap-2"><Rocket className="h-4 w-4" /> Spustiť demo</a>
          <a href="/docs" className="btn-ghost inline-flex items-center gap-2">Dokumentácia</a>
        </div>
        <div className="flex items-center gap-4 text-slate-400 text-sm">
          <div className="flex items-center gap-2"><Shield className="h-4 w-4"/> Anti‑spam by design</div>
          <div className="flex items-center gap-2"><Users className="h-4 w-4"/> Pre tímy & komunitu</div>
          <div className="flex items-center gap-2"><Megaphone className="h-4 w-4"/> X / Telegram / Discord</div>
        </div>
      </div>
    </section>
  );
}
