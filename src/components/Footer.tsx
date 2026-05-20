// src/components/Footer.tsx
// Find the footer and add id
<footer id="contact" className="overflow-hidden bg-[#0B132B] px-5 pb-10 font-['Poppins',sans-serif] text-[#F8FAFC] sm:px-6 md:px-12 md:pb-12"></footer>
import React, { useState } from "react";

const Footer: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <footer className="overflow-hidden bg-[#0B132B] px-5 pb-10 font-['Poppins',sans-serif] text-[#F8FAFC] sm:px-6 md:px-12 md:pb-12"></footer>
      <footer className="overflow-hidden bg-[#0B132B] px-5 pb-10 font-['Poppins',sans-serif] text-[#F8FAFC] sm:px-6 md:px-12 md:pb-12">
        <div className="mx-auto w-full max-w-7xl">
          {/* CTA Banner */}
          <div className="relative mb-16 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#6C3AED] via-[#2563EB] to-[#06B6D4] p-6 sm:p-8 md:mb-20 md:p-16">
            {/* Glow */}
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
              {/* Left */}
              <div className="max-w-xl">
                <h2 className="mb-4 text-2xl font-black leading-tight text-white sm:text-3xl md:text-4xl">
                  Let’s Create Something
                  <br className="hidden md:block" />
                  Amazing Together!
                </h2>

                <p className="max-w-lg text-sm leading-7 text-white/80 md:text-base">
                  Have a project in mind? Let’s work together to
                  bring your brand to the next level.
                </p>
              </div>

              {/* Button */}
              <button
                onClick={() => setOpenModal(true)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B132B] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#111A36] sm:w-fit sm:px-10"
              >
                LET’S TALK →
              </button>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 text-center md:flex-row md:text-left">
            {/* Logo */}
            <h1 className="text-xl font-black tracking-tight sm:text-2xl md:text-3xl">
              <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                RYAN ANTHONY TERRADO
              </span>
            </h1>

            {/* Copyright */}
            <p className="order-3 text-[10px] text-white/40 sm:text-xs md:order-2">
              © 2026 Ryan Anthony Terrado. All Rights Reserved.
            </p>

            {/* Socials */}
            <div className="order-2 flex items-center gap-5 md:order-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/ryan.terrado.71"
                target="_blank"
                className="text-white/60 transition hover:text-[#2563EB]"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 22v-9h3l1-4h-4V7c0-1.03 0-2 2-2h2V1h-3c-4 0-5 2-5 5v3H6v4h3v9h4z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/its_urboyryanxx/"
                target="_blank"
                className="text-white/60 transition hover:text-[#E1306C]"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.322 4 20 5.678 20 7.75v8.5c0 2.072-1.678 3.75-3.75 3.75h-8.5C5.678 20 4 18.322 4 16.25v-8.5C4 5.678 5.678 4 7.75 4zm8.75 1a1.25 1.25 0 100 2.5A1.25 1.25 0 0016.5 5zm-4.5 1.5A5 5 0 107 11.5a5 5 0 004.5-5zm0 2A3 3 0 119 11.5a3 3 0 013-3z" />
                </svg>
              </a>

              {/* Phone */}
              <a
                href="tel:09304999228"
                className="text-white/60 transition hover:text-[#22C55E]"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.57 2.28a2 2 0 01-.45 1.91l-1.27 1.27a16 16 0 006.36 6.36l1.27-1.27a2 2 0 011.91-.45l2.28.57A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:ryananthonyterrado21@gmail.com"
                className="text-white/60 transition hover:text-[#06B6D4]"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18"
                  />
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {openModal && (
       <div className="fixed inset-0 z-50 flex animate-[fadeIn_.25s_ease] items-center justify-center bg-black/70 p-5 backdrop-blur-sm">
          <div className="relative w-full max-w-md animate-[modalPop_.35s_cubic-bezier(0.16,1,0.3,1)] rounded-[32px] border border-white/10 bg-[#0B132B]/95 p-8 shadow-2xl backdrop-blur-xl">
            {/* Close */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:bg-red-500 hover:text-white"
            >
              ✕
            </button>

            {/* Title */}
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
              CONTACT
            </p>

            <h2 className="text-3xl font-black text-white">
              Contact Me With
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/55">
              Let’s connect and create something amazing together.
            </p>

            {/* Contact Options */}
            <div className="mt-8 space-y-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/ryan.terrado.71"
                target="_blank"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-[#2563EB]/30 hover:bg-[#2563EB]/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB]">
                  f
                </div>

                <div>
                  <h3 className="font-bold text-white">Facebook</h3>
                  <p className="text-sm text-white/50">
                    @ryan.terrado.71
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/its_urboyryanxx/"
                target="_blank"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-pink-500/30 hover:bg-pink-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                  ◎
                </div>

                <div>
                  <h3 className="font-bold text-white">Instagram</h3>
                  <p className="text-sm text-white/50">
                    @its_urboyryanxx
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:09304999228"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-green-500/30 hover:bg-green-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                  ☎
                </div>

                <div>
                  <h3 className="font-bold text-white">Phone</h3>
                  <p className="text-sm text-white/50">
                    09304999228
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:ryananthonyterrado21@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-cyan-500/30 hover:bg-cyan-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  ✉
                </div>

                <div>
                  <h3 className="font-bold text-white">Email</h3>
                  <p className="max-w-[180px] break-words text-[11px] leading-5 text-white/50 sm:max-w-none sm:text-[12px]">
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