import HeroPremium from "@/components/HeroPremium";
import ImpactSimulator from "@/components/ImpactSimulator";
import Showreel from "@/components/Showreel";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import SocialProof from "@/components/SocialProof";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#E5A93C] selection:text-black">
      <HeroPremium />

      {/* Social Proof Ticker */}
      <SocialProof />

      {/* Luxury Process Section */}
      <Process />

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Context Section */}
      <section id="context" className="py-16 md:py-24 px-4 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E5A93C]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-6 relative">
              Une approche <br /><span className="text-[#E5A93C]">ROIste</span>
              <div className="absolute -left-4 top-2 w-1 h-12 bg-[#E5A93C]"></div>
            </h2>
            <p className="text-[#555] font-medium leading-relaxed mb-4 text-sm tracking-wide">
              En tant que spécialiste digital, je ne produis pas de simples vidéos. Je conçois des assets marketing conçus pour capturer l'attention dans les 3 premières secondes et diriger l'audience vers une intention d'achat.
            </p>
            <div className="flex gap-4 mt-8">
              <div className="border border-white/10 p-4 bg-black/40 backdrop-blur">
                <div className="text-[#E5A93C] font-black text-2xl mb-1">4K</div>
                <div className="text-[10px] text-[#888] uppercase tracking-[0.1em] font-bold">Cinématique</div>
              </div>
              <div className="border border-white/10 p-4 bg-black/40 backdrop-blur">
                <div className="text-[#E5A93C] font-black text-2xl mb-1">9:16</div>
                <div className="text-[10px] text-[#888] uppercase tracking-[0.1em] font-bold">Optimisé Meta</div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full aspect-square bg-[#111] border border-white/5 relative group p-2">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#E5A93C] -translate-y-[2px] translate-x-[2px]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#E5A93C] translate-y-[2px] -translate-x-[2px]" />
            <video autoPlay loop muted playsInline className="object-cover w-full h-full grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
              <source src="/placeholder-sports-car.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* ROI Calculator Section */}
      <section id="roi" className="py-16 md:py-24 px-4 bg-[#0A0A0A] relative border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E5A93C]/5 via-[#0A0A0A] to-[#050505]"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <ImpactSimulator />
        </div>
      </section>

      {/* Showreel / Portfolio Section */}
      <Showreel />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact & Booking Section */}
      <Contact />

      {/* WhatsApp Floating Button */}
      <WhatsApp />

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1 bg-gradient-to-r from-transparent via-[#E5A93C]/50 to-transparent blur-[2px]"></div>
        <div className="text-white font-extrabold text-xl tracking-[0.2em] uppercase mb-4">
          T<span className="text-[#E5A93C]">.</span>STUDIO
        </div>
        <div className="flex justify-center gap-6 mb-8 text-[11px] font-bold tracking-[0.15em] text-[#555] uppercase">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#roi" className="hover:text-white transition-colors">Simulateur</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="https://instagram.com/tom.carx" target="_blank" rel="noopener noreferrer" className="hover:text-[#E5A93C] transition-colors">Instagram</a>
        </div>
        <p className="text-[#333] text-[10px] tracking-[0.1em] font-medium">
          © {new Date().getFullYear()} T.STUDIO AUTOMOTIVE. TOUS DROITS RÉSERVÉS.
        </p>
      </footer>
    </main >
  );
}
