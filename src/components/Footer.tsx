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

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/ryan.terrado.71" target="_blank" className="text-white/50 transition hover:text-cyan-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/its_urboyryanxx/" target="_blank" className="text-white/50 transition hover:text-cyan-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="19" y1="5" x2="19" y2="5.01"/>
                </svg>
              </a>
              <a href="#" className="text-white/50 transition hover:text-cyan-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" target="_blank" className="text-white/50 transition hover:text-cyan-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
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