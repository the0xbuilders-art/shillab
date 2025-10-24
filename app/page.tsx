import Hero from "@/components/Hero";
import ShillComposer from "@/components/ShillComposer";
import { Features, Pricing, Roadmap, Tokenomics, DocsAndBlog } from "@/components/Sections";
import Footer from "@/components/Footer";

export default function Page(){
  return (
    <main>
      <Hero />
      <section id="demo" className="section">
        <div className="container">
          <ShillComposer />
        </div>
      </section>
      <Features />
      <section className="py-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "vygenerovaných postov", value: "1.2M+" },
            { label: "tímov v beta", value: "340+" },
            { label: "podporovaných kanálov", value: "8" },
          ].map((s,i)=>(
            <div key={i} className="card p-6">
              <p className="text-3xl font-bold">{s.value}</p>
              <p className="text-slate-400 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
      <Pricing />
      <Tokenomics />
      <DocsAndBlog />
      <Footer />
    </main>
  );
}
