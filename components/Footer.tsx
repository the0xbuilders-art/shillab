export default function Footer(){
  return (
    <footer className="border-t border-white/10">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl" style={{backgroundImage:'linear-gradient(135deg,#F2C14E,#E8A626)'}}/>
          <div>
            <p className="font-semibold">SHILLAB</p>
            <p className="text-slate-400 text-xs">© {new Date().getFullYear()} The Lab for Shillers</p>
          </div>
        </div>
        <nav className="flex items-center gap-6 text-sm text-slate-300">
          <a href="/#pricing" className="hover:underline">Ceny</a>
          <a href="/#tokenomics" className="hover:underline">Tokenomics</a>
          <a href="/#roadmap" className="hover:underline">Roadmap</a>
          <a className="hover:underline" href="/docs">Docs</a>
          <a className="hover:underline" href="/blog">Blog</a>
        </nav>
        <p className="text-xs text-slate-500 max-w-md md:text-right">
          Disclaimer: Obsah generovaný cez SHILLAB neslúži ako investičné odporúčanie. Rešpektujte pravidlá platforiem a lokálne regulácie.
        </p>
      </div>
    </footer>
  );
}
