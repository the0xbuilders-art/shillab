'use client';
import { useMemo, useState } from 'react';
import { Copy, Wand2, Zap } from 'lucide-react';

const samplePrompts = [
  'Oznám nový utility drop pre token $LAB s dôrazom na fun a jednoduchosť.',
  'Napíš krátke vlákno o tom, prečo je community‑driven marketing pri krypto projektoch dôležitý.',
  'Vtipný promo post pre telegram komunitu, CTA: skúšať SHILLAB beta.',
];

export default function ShillComposer(){
  const [prompt, setPrompt] = useState(samplePrompts[0]);
  const [tone, setTone] = useState('energický');
  const [includeHashtags, setIncludeHashtags] = useState(true);
  const [outputs, setOutputs] = useState<string[]>([]);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const hashtags = useMemo(()=>['#crypto','#web3','#shilling','#TheLab','#SHILLAB'],[]);

  const generate = () => {
    const base = prompt.replace(/\.$/, '');
    const variants = [
      `${base}! ⚗️ V SHILLAB miešame nástroje, ktoré robia shilling zábavou. Pridaj sa a uvidíš. ${includeHashtags ? hashtags.slice(0,3).join(' ') : ''}`,
      `🚀 ${base} – bez chaosu a spamovania. Len čistý rast s dátami. ${includeHashtags ? hashtags.slice(2).join(' ') : ''}`,
      `${base}? Daj to do praxe s naším Composerom a trackni výsledky. ${includeHashtags ? hashtags.join(' ') : ''}`,
      `Community first. ${base}. ${tone === 'vtipný' ? '(aj trocha memes, jasné) ' : ''}${includeHashtags ? hashtags.slice(0,2).join(' ') : ''}`,
    ];
    const picks = variants.sort(()=>Math.random()-0.5).slice(0,3);
    setOutputs(picks);
  };

  const copy = async (text:string, idx:number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      setTimeout(()=>setCopiedIdx(null), 1200);
    } catch {}
  };

  return (
    <div className="card card-hover p-6">
      <div className="flex items-center gap-2 text-white text-lg font-semibold mb-3">
        <Wand2 className="h-5 w-5" /> Shill Composer (demo)
      </div>
      <div className="space-y-3">
        <label className="text-sm text-slate-300" htmlFor="prompt">Brief / prompt</label>
        <textarea id="prompt" className="min-h-[90px] rounded-xl bg-slate-900 border border-white/10 p-3 w-full"
          value={prompt} onChange={(e)=>setPrompt(e.target.value)} />
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-slate-300 text-sm">Tón</span>
            <select value={tone} onChange={(e)=>setTone(e.target.value)}
              className="rounded-md bg-slate-900 border border-white/10 px-2 py-1 text-sm">
              <option>energický</option>
              <option>informatívny</option>
              <option>vtipný</option>
            </select>
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
            <input type="checkbox" checked={includeHashtags} onChange={(e)=>setIncludeHashtags(e.target.checked)} />
            Pridať hashtags
          </label>
          <button onClick={generate} className="btn-primary shadow-glow inline-flex items-center gap-2">
            <Zap className="h-4 w-4" /> Vygenerovať
          </button>
        </div>

        {outputs.length > 0 && (
          <div className="grid gap-3 pt-2">
            {outputs.map((o, i)=>(
              <div key={i} className="relative rounded-xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-slate-200 text-sm leading-relaxed whitespace-pre-wrap">{o}</p>
                <button onClick={()=>copy(o,i)} className="btn-ghost absolute top-2 right-2 text-sm inline-flex items-center gap-2">
                  <Copy className="h-4 w-4" />
                  {copiedIdx===i ? 'Skopírované' : 'Kopírovať'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
