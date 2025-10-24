import { Sparkles, Wand2, BarChart3, Puzzle, Shield, Check } from "lucide-react";

const features = [
  { icon: Wand2, title: "AI Shill Composer", desc: "Generuj vlákna, posty a repliky priamo pre X/Telegram/Reddit s jedným klikom."},
  { icon: BarChart3, title: "KPI & Tracking", desc: "Sleduj CTR, engagement, príspevky komunity a atribúciu referralov."},
  { icon: Puzzle, title: "Integrácie", desc: "Webhooky, Zapier, Discord bot a export do CSV/Sheets/Notion."},
  { icon: Shield, title: "Anti‑Spam & Guard", desc: "Automatické limity, detekcia toxického textu a bezpečné šablóny."},
];

const plans = [
  { name: "Free", price: "0€", bullets: ["Shill Composer (základ)", "10 generácií denne", "Základné štatistiky"], cta: "Začni zdarma", popular: false },
  { name: "Pro", price: "29€", bullets: ["Neobmedzený Composer", "Tímové workspace (5 účtov)", "Pokročilé KPI + export"], cta: "Vyskúšať Pro", popular: true },
  { name: "Enterprise", price: "Kontaktuj nás", bullets: ["SLA, SSO, audit logy", "Custom integrácie a on‑prem", "Dedikovaná podpora"], cta: "Dohodnúť call", popular: false },
];

function SectionHeading({ kicker, title, sub }:{ kicker?:string; title:React.ReactNode; sub?:string }){
  return (
    <div className="text-center space-y-3 max-w-3xl mx-auto">
      {kicker && <div className="flex justify-center"><span className="kicker">{kicker}</span></div>}
      <h2 className="h2">{title}</h2>
      {sub && <p className="text-slate-400">{sub}</p>}
    </div>
  )
}

export function Features(){
  return (
    <section className="section">
      <div className="container">
        <SectionHeading kicker="Čo v Labáku nájdeš" title={<>Toolkit pre <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#F2C14E,#E8A626)]">shillerov</span></>} sub="Vytváraj, distribuuj, sleduj. Bez chaosu medzi nástrojmi." />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((f,i)=>{
            const Icon = f.icon;
            return (
              <div key={i} className="card card-hover p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-white/10"><Icon className="h-5 w-5"/></div>
                  <div className="text-white text-lg font-semibold">{f.title}</div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export function Tokenomics(){
  return (
    <section id="tokenomics" className="section">
      <div className="container">
        <SectionHeading kicker="Tokenomics" title={<>Príprava modelu pre <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#F2C14E,#E8A626)]">$LAB</span></>} sub="Nižšie je kostra sekcie. Nahraď čísla tvojimi parametrami." />
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-6">
            <div className="text-sm text-slate-400">Supply</div>
            <div className="text-2xl font-bold">1,000,000,000 LAB</div>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm">
              <li className="flex gap-2"><Sparkles className="h-4 w-4 mt-0.5"/> 30% ekosystém & odmeny</li>
              <li className="flex gap-2"><Sparkles className="h-4 w-4 mt-0.5"/> 25% treasury & vývoj</li>
              <li className="flex gap-2"><Sparkles className="h-4 w-4 mt-0.5"/> 20% tím (vesting 24m)</li>
              <li className="flex gap-2"><Sparkles className="h-4 w-4 mt-0.5"/> 15% public sale</li>
              <li className="flex gap-2"><Sparkles className="h-4 w-4 mt-0.5"/> 10% liquidity</li>
            </ul>
            <p className="small mt-3">*Vzorka — uprav podľa reality. Nie je to investičné poradenstvo.</p>
          </div>
          <div className="card p-6">
            <div className="text-sm text-slate-400">Utility</div>
            <ul className="mt-2 space-y-2 text-slate-300 text-sm">
              <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Prístup k Pro nástrojom</li>
              <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Zľava na marketplace šablón</li>
              <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Governance nápadov & roadmapy</li>
            </ul>
          </div>
          <div className="card p-6">
            <div className="text-sm text-slate-400">Emisia & vesting</div>
            <p className="text-slate-300 text-sm mt-2">Definuj cliffy, mesačné uvoľňovanie a smart‑contract adresy. Pridaj graf, keď budú dáta.</p>
            <img src="/brand/cube-white.jpg" alt="" className="rounded-xl border border-white/10 mt-4"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing(){
  return (
    <section id="pricing" className="section">
      <div className="container">
        <SectionHeading kicker="Ceny" title={<>Jednoduchý <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#F2C14E,#E8A626)]">pricing</span></>} sub="Vyber si plán, ktorý dáva zmysel tvojmu projektu." />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p,i)=>(
            <div key={i} className={"card p-6 " + (p.popular ? "ring-2 ring-[rgba(242,193,78,0.6)]" : "")}>
              {p.popular && <span className="badge -mt-8 mb-2">Najobľúbenejší</span>}
              <div className="flex items-baseline justify-between">
                <span className="text-white text-lg font-semibold">{p.name}</span>
                <span className="text-2xl font-bold">{p.price}</span>
              </div>
              <ul className="space-y-2 text-slate-300 text-sm mt-4">
                {p.bullets.map((b,idx)=>(
                  <li key={idx} className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/>{b}</li>
                ))}
              </ul>
              <a className="btn-primary mt-4 inline-flex w-full justify-center" href="#contact">{p.cta}</a>
            </div>
          ))}
        </div>
        <p className="text-center small mt-4">Uvedené ceny sú orientačné. Nejde o investičné poradenstvo.</p>
      </div>
    </section>
  );
}

export function Roadmap(){
  return (
    <section id="roadmap" className="section">
      <div className="container">
        <SectionHeading kicker="Roadmap" title={<>Kam smeruje <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#F2C14E,#E8A626)]">SHILLAB</span></>} sub="Transparentne komunikujeme priority a doručovanie funkcií." />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {q:'Q4 2025', items:['Composer V2 (prompts + šablóny)','Discord & Telegram bot','CSV/Sheets export']},
            {q:'Q1 2026', items:['API v1 + webhooks','Atribúcia referralov','Anti‑spam heuristiky']},
            {q:'Q2 2026', items:['Marketplace šablón','On‑prem pre enterprise','Sústava KPI dashboardov']},
          ].map((col,i)=>(
            <div key={i} className="card p-6">
              <span className="badge">{col.q}</span>
              <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                {col.items.map((it,idx)=>(<li key={idx} className="flex gap-2"><Sparkles className="h-4 w-4 mt-0.5"/>{it}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DocsAndBlog(){
  return (
    <section id="resources" className="section">
      <div className="container">
        <SectionHeading kicker="Resources" title={<>Dokumentácia & Blog</>} sub="Začni s integráciami a sleduj novinky z Labu." />
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <a href="/docs" className="card card-hover p-6 block">
            <div className="text-xl font-semibold">Dokumentácia</div>
            <p className="text-slate-300 mt-1">API, integrácie, best practices, bezpečnostné zásady.</p>
            <img src="/brand/cube-white.jpg" alt="" className="rounded-xl border border-white/10 mt-4"/>
          </a>
          <a href="/blog" className="card card-hover p-6 block">
            <div className="text-xl font-semibold">Blog</div>
            <p className="text-slate-300 mt-1">Novinky, návody a príbehy z komunity.</p>
            <img src="/brand/cubes-dark.jpg" alt="" className="rounded-xl border border-white/10 mt-4"/>
          </a>
        </div>
      </div>
    </section>
  );
}
