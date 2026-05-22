// src/components/Footer.tsx

import React, { useState } from "react";

const Footer: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <footer id="contact" className="overflow-hidden bg-[#0B132B] px-5 py-8 font-['Poppins',sans-serif] text-[#F8FAFC] sm:px-6 md:px-12">
        <div className="mx-auto w-full max-w-7xl">
          
          {/* Thin Line Top */}
          <div className="mb-8 h-px w-full bg-white/10" />
          
          {/* Simple Footer */}
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            {/* Logo */}
            <h2 className="text-base font-black tracking-tight">
              <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                RYAN ANTHONY TERRADO
              </span>
            </h2>

            {/* Social Icons & Contact */}
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/ryan.terrado.71" target="_blank" rel="noreferrer" className="text-white/50 transition hover:text-cyan-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/its_urboyryanxx/" target="_blank" rel="noreferrer" className="text-white/50 transition hover:text-cyan-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              
              {/* Phone */}
              <a href="tel:09304999228" className="text-white/50 transition hover:text-cyan-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
              
              {/* Email */}
              <a href="mailto:ryananthonyterrado21@gmail.com" className="text-white/50 transition hover:text-cyan-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-[11px] text-white/40">
              © 2026 Ryan Anthony Terrado. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex animate-[fadeIn_.25s_ease] items-center justify-center bg-black/70 p-5 backdrop-blur-sm">
          <div className="relative w-full max-w-md animate-[modalPop_.35s_cubic-bezier(0.16,1,0.3,1)] rounded-[32px] border border-white/10 bg-[#0B132B]/95 p-8 shadow-2xl backdrop-blur-xl">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:bg-red-500 hover:text-white"
            >
              ✕
            </button>

            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
              CONTACT
            </p>

            <h2 className="text-3xl font-black text-white">
              Contact Me With
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/55">
              Let's connect and create something amazing together.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="https://www.facebook.com/ryan.terrado.71"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-[#2563EB]/30 hover:bg-[#2563EB]/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB] text-xl font-bold">
                  f
                </div>
                <div>
                  <h3 className="font-bold text-white">Facebook</h3>
                  <p className="text-sm text-white/50">@ryan.terrado.71</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/its_urboyryanxx/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-pink-500/30 hover:bg-pink-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 text-xl">
                  ◎
                </div>
                <div>
                  <h3 className="font-bold text-white">Instagram</h3>
                  <p className="text-sm text-white/50">@its_urboyryanxx</p>
                </div>
              </a>

              <a
                href="tel:09304999228"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-green-500/30 hover:bg-green-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400 text-xl">
                  ☎
                </div>
                <div>
                  <h3 className="font-bold text-white">Phone</h3>
                  <p className="text-sm text-white/50">09304999228</p>
                </div>
              </a>

              <a
                href="mailto:ryananthonyterrado21@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-cyan-500/30 hover:bg-cyan-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 text-xl">
                  ✉
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white">Email</h3>
                  <p className="text-xs leading-5 text-white/50 break-all">
                    ryananthonyterrado21@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;