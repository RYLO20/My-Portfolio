// src/components/Hero.tsx

import { useState } from "react";
import heroImage from "../assets/hero.png";

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);
  const [floatingMenuOpen, setFloatingMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("HOME");
  
  const navItems = ["HOME", "ABOUT", "SERVICES", "PORTFOLIO", "TESTIMONIALS", "CONTACT"];

  // Map nav items to section IDs
  const sectionMap: { [key: string]: string } = {
    "HOME": "home",
    "ABOUT": "about",
    "SERVICES": "services",
    "PORTFOLIO": "portfolio",
    "TESTIMONIALS": "testimonials",
    "CONTACT": "contact"
  };

  // Scroll to section function
  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setFloatingMenuOpen(false);
    
    const sectionId = sectionMap[section];
    const element = document.getElementById(sectionId);
    
    if (element) {
      const offset = 80; // Height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#0B132B]">
        {/* Background - Clean without excessive glow */}
        <div className="absolute inset-0">
          {/* Simple Grid Pattern */}
          <div className="absolute inset-0 hidden lg:block">
            <div className="absolute left-0 top-0 h-full w-full" 
                 style={{
                   backgroundImage: `
                     linear-gradient(rgba(6, 182, 212, 0.02) 1px, transparent 1px),
                     linear-gradient(90deg, rgba(6, 182, 212, 0.02) 1px, transparent 1px)
                   `,
                   backgroundSize: '60px 60px'
                 }}
            />
          </div>
        </div>

        {/* Navbar */}
        <header className="relative z-30 border-b border-white/[0.03]">
          <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
            {/* Logo */}
            <h1 className="text-xl font-black tracking-tight sm:text-2xl md:text-3xl">
              <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                RYAN ANTHONY TERRADO
              </span>
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-[11px] font-bold tracking-[0.12em] transition hover:text-white cursor-pointer ${
                    activeSection === item 
                      ? "text-cyan-400 border-b-2 border-cyan-400 pb-1" 
                      : "text-white/75"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Desktop Button */}
            <button
              onClick={() => setOpenModal(true)}
              className="hidden rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3 text-[10px] font-bold tracking-[0.12em] text-white transition hover:scale-105 sm:block sm:px-6 sm:text-[11px]"
            >
              LET'S TALK →
            </button>
            
            {/* Floating Navigation Button - Mobile Only */}
            <div className="fixed bottom-6 right-6 z-[100] md:hidden lg:hidden">
              {/* Backdrop Blur Overlay - appears when menu is open */}
              {floatingMenuOpen && (
                <div 
                  className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300"
                  onClick={() => setFloatingMenuOpen(false)}
                />
              )}

              {/* Floating Action Button */}
              <button
                onClick={() => setFloatingMenuOpen(!floatingMenuOpen)}
                className="relative z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <div className={`absolute transition-transform duration-300 ${floatingMenuOpen ? 'rotate-45' : 'rotate-0'}`}>
                  <span className="text-2xl font-bold text-white">+</span>
                </div>
              </button>

              {/* Menu Items - Popup when clicked */}
              <div className={`absolute bottom-20 right-0 z-50 transition-all duration-300 ${floatingMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="flex flex-col gap-3">
                  {navItems.map((item, index) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`flex items-center justify-center rounded-full border px-5 py-3 text-[12px] font-bold tracking-[0.12em] shadow-lg backdrop-blur-md transition-all hover:scale-105 whitespace-nowrap cursor-pointer ${
                        activeSection === item
                          ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white border-transparent"
                          : "bg-[#0B132B] border-white/10 text-white/90 hover:bg-white/10"
                      }`}
                      style={{
                        animation: floatingMenuOpen ? `slideIn 0.2s ease ${index * 0.05}s both` : 'none'
                      }}
                    >
                      {item}
                    </button>
                  ))}
                  
                  {/* Contact Button */}
                  <button
                    onClick={() => {
                      setFloatingMenuOpen(false);
                      setOpenModal(true);
                    }}
                    className="flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3 text-[12px] font-bold tracking-[0.12em] text-white shadow-lg transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
                    style={{
                      animation: floatingMenuOpen ? `slideIn 0.2s ease ${navItems.length * 0.05}s both` : 'none'
                    }}
                  >
                    LET'S TALK →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* HOME Section */}
        <div id="home">
          {/* DESKTOP LAYOUT (lg and above) */}
          <div className="relative mx-auto hidden max-w-7xl items-center gap-8 px-5 py-16 lg:grid lg:grid-cols-2 lg:px-10">
            {/* LEFT */}
            <div className="max-w-[560px] animate-[fadeUp_1s_ease]">
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
                DIGITAL MARKETING DESIGNER
              </p>

              <h1 className="text-[64px] font-black leading-[1.05] tracking-[-0.04em] text-white">
                I Design Digital
                <br />
                Experiences That
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                  Drive Results.
                </span>
              </h1>

              <div className="mt-6 h-[4px] w-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />

              <p className="mt-7 max-w-[460px] text-[15px] leading-8 text-white/55">
                I create high-converting visual content and strategies
                that help brands grow, engage, and stand out in the
                digital world.
              </p>

              <div className="mt-10 flex gap-4">
                <button 
                  onClick={() => scrollToSection("PORTFOLIO")}
                  className="rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-4 text-[11px] font-bold tracking-[0.12em] text-white transition hover:scale-105 cursor-pointer"
                >
                  VIEW MY WORK
                </button>

                <button
                  onClick={() => setOpenModal(true)}
                  className="rounded-lg border border-white/6 bg-white/[0.02] px-7 py-4 text-[11px] font-bold tracking-[0.12em] text-white/75 backdrop-blur transition hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:text-white cursor-pointer"
                >
                  LET'S WORK TOGETHER
                </button>
              </div>
            </div>

            {/* RIGHT - Double Circle Background */}
            <div className="relative flex h-[650px] items-center justify-center">
              {/* Outer Blurry Circle */}
              <div className="absolute right-[0%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 blur-2xl" />
              
              {/* Inner Sharp Gradient Circle */}
              <div className="absolute right-[5%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-600 via-cyan-500 to-violet-600 opacity-60" />

              {/* Image */}
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="Hero"
                  className="relative z-10 h-[550px] object-contain [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
                />
              </div>

              {/* Cards */}
              <div className="absolute left-6 top-16 z-20 w-[150px] rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm">
                <p className="text-[10px] font-semibold tracking-wide text-cyan-400">VIDEO EDITING</p>
                <h3 className="mt-2 text-lg font-bold leading-tight text-white">Cinematic<br />Reels</h3>
                <p className="mt-2 text-[11px] leading-4 text-white/50">Short Form Content<br />Motion Graphics</p>
              </div>

              <div className="absolute bottom-24 left-10 z-20 w-[160px] rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm">
                <p className="text-[10px] font-semibold tracking-wide text-violet-400">DIGITAL<br />MARKETING</p>
                <h3 className="mt-2 text-lg font-bold leading-tight text-white">Meta Ads<br />Strategy</h3>
                <p className="mt-2 text-[11px] leading-4 text-white/50">Content Marketing<br />Brand Growth</p>
              </div>

              <div className="absolute right-10 top-[52%] z-20 w-[155px] rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm">
                <p className="text-[10px] font-semibold tracking-wide text-green-400">GRAPHIC<br />DESIGN</p>
                <h3 className="mt-2 text-lg font-bold leading-tight text-white">Creative<br />Branding</h3>
                <p className="mt-2 text-[11px] leading-4 text-white/50">Media Design<br />Social Content</p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT (below lg) */}
        <div className="relative mx-auto block px-5 py-12 lg:hidden">
          {/* Text Content */}
          <div className="max-w-[560px] animate-[fadeUp_1s_ease]">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-400 sm:text-[11px]">
              DIGITAL MARKETING DESIGNER
            </p>

            <h1 className="text-[42px] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[54px]">
              I Design Digital
              <br />
              Experiences That
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Drive Results.
              </span>
            </h1>

            <div className="mt-6 h-[4px] w-20 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 sm:w-24" />

            <p className="mt-7 max-w-[460px] text-sm leading-7 text-white/55 sm:text-[15px] sm:leading-8">
              I create high-converting visual content and strategies
              that help brands grow, engage, and stand out in the
              digital world.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button 
                onClick={() => scrollToSection("PORTFOLIO")}
                className="rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-4 text-[11px] font-bold tracking-[0.12em] text-white transition hover:scale-105 cursor-pointer"
              >
                VIEW MY WORK
              </button>

              <button
                onClick={() => setOpenModal(true)}
                className="rounded-lg border border-white/6 bg-white/[0.02] px-7 py-4 text-[11px] font-bold tracking-[0.12em] text-white/75 backdrop-blur transition hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:text-white cursor-pointer"
              >
                LET'S WORK TOGETHER
              </button>
            </div>
          </div>

          {/* Cards and Image Row */}
          <div className="relative mt-12 flex flex-row items-center justify-between gap-3">
            <div className="absolute right-[-25%] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500/15 to-cyan-500/15 blur-2xl sm:h-[380px] sm:w-[380px]" />
            <div className="absolute right-[-15%] top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-600 via-cyan-500 to-violet-600 opacity-60 sm:h-[300px] sm:w-[300px]" />

            <div className="relative z-20 flex flex-col gap-3">
              <div className="w-[115px] rounded-xl border border-white/10 bg-white/5 p-2.5 shadow-lg backdrop-blur-sm sm:w-[135px] sm:p-3">
                <p className="text-[8px] font-semibold tracking-wide text-cyan-400 sm:text-[9px]">VIDEO EDITING</p>
                <h3 className="mt-1.5 text-xs font-bold leading-tight text-white sm:mt-2 sm:text-sm">Cinematic<br />Reels</h3>
                <p className="mt-1.5 text-[9px] leading-3.5 text-white/50 sm:mt-2 sm:text-[10px] sm:leading-4">Short Form Content<br />Motion Graphics</p>
              </div>

              <div className="w-[120px] rounded-xl border border-white/10 bg-white/5 p-2.5 shadow-lg backdrop-blur-sm sm:w-[145px] sm:p-3">
                <p className="text-[8px] font-semibold tracking-wide text-violet-400 sm:text-[9px]">DIGITAL<br />MARKETING</p>
                <h3 className="mt-1.5 text-xs font-bold leading-tight text-white sm:mt-2 sm:text-sm">Meta Ads<br />Strategy</h3>
                <p className="mt-1.5 text-[9px] leading-3.5 text-white/50 sm:mt-2 sm:text-[10px] sm:leading-4">Content Marketing<br />Brand Growth</p>
              </div>

              <div className="w-[110px] rounded-xl border border-white/10 bg-white/5 p-2.5 shadow-lg backdrop-blur-sm sm:w-[130px] sm:p-3">
                <p className="text-[8px] font-semibold tracking-wide text-green-400 sm:text-[9px]">GRAPHIC<br />DESIGN</p>
                <h3 className="mt-1.5 text-xs font-bold leading-tight text-white sm:mt-2 sm:text-sm">Creative<br />Branding</h3>
                <p className="mt-1.5 text-[9px] leading-3.5 text-white/50 sm:mt-2 sm:text-[10px] sm:leading-4">Media Design<br />Social Content</p>
              </div>
            </div>

            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Hero"
                className="relative z-10 h-[380px] w-auto object-contain sm:h-[480px] [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex animate-[fadeIn_.25s_ease] items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-[340px] animate-[modalPop_.35s_cubic-bezier(0.16,1,0.3,1)] rounded-[28px] border border-white/6 bg-[#0B132B]/95 p-5 shadow-2xl backdrop-blur-xl sm:max-w-md sm:rounded-[32px] sm:p-8">
            <button onClick={() => setOpenModal(false)} className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/6 bg-white/5 text-white/60 transition hover:bg-red-500 hover:text-white">✕</button>

            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">CONTACT</p>
            <h2 className="text-2xl font-black text-white sm:text-3xl">Contact Me With</h2>
            <p className="mt-3 text-[13px] leading-6 text-white/55 sm:mt-4 sm:text-sm sm:leading-7">Let's connect and create something amazing together.</p>

            <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              <a href="https://www.facebook.com/ryan.terrado.71" target="_blank" className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3 transition hover:border-[#2563EB]/30 hover:bg-[#2563EB]/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB]">f</div>
                <div><h3 className="font-bold text-white">Facebook</h3><p className="text-[12px] text-white/50">@ryan.terrado.71</p></div>
              </a>

              <a href="https://www.instagram.com/its_urboyryanxx/" target="_blank" className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3 transition hover:border-pink-500/30 hover:bg-pink-500/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">◎</div>
                <div><h3 className="font-bold text-white">Instagram</h3><p className="text-[12px] text-white/50">@its_urboyryanxx</p></div>
              </a>

              <a href="tel:09304999228" className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3 transition hover:border-green-500/30 hover:bg-green-500/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400">☎</div>
                <div><h3 className="font-bold text-white">Phone</h3><p className="text-[12px] text-white/50">09304999228</p></div>
              </a>

             {/* Email */}
                <a
                  href="mailto:ryananthonyterrado21@gmail.com"
                  className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3 transition hover:border-cyan-500/30 hover:bg-cyan-500/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    ✉
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Email</h3>
                    <p className="max-w-[180px] break-words text-[11px] leading-5 text-white/50">
                      ryananthonyterrado21@gmail.com
                    </p>
                  </div>
                </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}