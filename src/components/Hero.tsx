// src/components/Hero.tsx

import { useState } from "react";
import heroImage from "../assets/hero.png";

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0B132B]">
        {/* Background */}
        <div className="absolute inset-0">
          {/* Glow */}
          <div className="absolute right-[10%] top-[10%] h-[320px] w-[320px] rounded-full bg-cyan-500/20 blur-3xl md:h-[420px] md:w-[420px]" />

          <div className="absolute right-[18%] top-[18%] h-[220px] w-[220px] rounded-full bg-violet-600/20 blur-3xl md:h-[320px] md:w-[320px]" />

          {/* Dots */}
          <div className="absolute right-[10%] top-[20%] hidden grid-cols-7 gap-4 opacity-30 md:grid">
            {Array.from({ length: 35 }).map((_, index) => (
              <div
                key={index}
                className="h-[3px] w-[3px] rounded-full bg-white"
              />
            ))}
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

            {/* Nav */}
            <nav className="hidden items-center gap-8 lg:flex">
              {[
                "HOME",
                "ABOUT",
                "SERVICES",
                "PORTFOLIO",
                "TESTIMONIALS",
                "CONTACT",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[11px] font-bold tracking-[0.12em] text-white/75 transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Button */}
            <button
              onClick={() => setOpenModal(true)}
              className="rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3 text-[10px] font-bold tracking-[0.12em] text-white transition hover:scale-105 sm:px-6 sm:text-[11px]"
            >
              LET'S TALK →
            </button>
          </div>
        </header>

        {/* Hero */}
        <div className="relative mx-auto grid min-h-[100vh] max-w-7xl items-center gap-14 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:px-10">
          {/* LEFT */}
          {/* LEFT */}
<div className="max-w-[560px] animate-[fadeUp_1s_ease]">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-400 sm:text-[11px]">
              DIGITAL MARKETING DESIGNER
            </p>

            <h1 className="text-[42px] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[54px] md:text-[64px]">
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
              <button className="rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-4 text-[11px] font-bold tracking-[0.12em] text-white transition hover:scale-105">
                VIEW MY WORK
              </button>

              <button
                onClick={() => setOpenModal(true)}
                className="rounded-lg border border-white/6 bg-white/[0.02] px-7 py-4 text-[11px] font-bold tracking-[0.12em] text-white/75 backdrop-blur transition hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:text-white"
              >
                LET'S WORK TOGETHER
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex h-[520px] items-center justify-center sm:h-[650px]">
            {/* Circle */}
            <div className="absolute right-[10%] top-1/2 h-[220px] w-[220px] -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 opacity-90 md:h-[360px] md:w-[360px]" />

            {/* Image */}
            <div className="relative z-10 animate-[heroFloat_5s_ease-in-out_infinite]">
              

              <img
                src={heroImage}
                alt="Hero"
                className="
                  relative z-10
                  h-[260px]
                  object-contain
                  sm:h-[560px]
                  md:h-[700px]

                  [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]
                  [-webkit-mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]

                  drop-shadow-[0_10px_40px_rgba(0,0,0,0.28)]
                "
              />
            </div>

            {/* Card 1 */}
<div
  className="
    absolute
    left-3
    top-10
    z-20
    w-[120px]

    before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-white/[0.03] before:to-transparent before:pointer-events-none

    rounded-[22px]
    border border-white/6
    bg-[#08101d]/18
    p-4
    shadow-[0_10px_40px_rgba(0,0,0,0.18)]
    backdrop-blur-md

    sm:left-6
    sm:top-24
    sm:w-[150px]
    sm:p-5
  "
>
  <p className="text-[9px] font-semibold tracking-[0.18em] text-cyan-400">
    VIDEO EDITING
  </p>

  <h3 className="mt-3 text-[14px] font-black leading-[1.15] text-white sm:text-[20px]">
    Cinematic
    <br />
    Reels
  </h3>

  <p className="mt-3 text-[10px] leading-5 text-white/45 sm:text-[11px]">
    Short Form Content
    <br />
    Motion Graphics
  </p>
</div>

           {/* Card 2 */}
<div
  className="
    absolute
    left-4
    top-[170px]
    z-20
    w-[130px]

    rounded-[22px]
    border border-white/6
    bg-[#08101d]/18
    p-4
    shadow-2xl
    backdrop-blur-md

    sm:bottom-24
    sm:left-14
    sm:top-auto
    sm:w-[170px]
    sm:p-5

    before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-white/[0.03] before:to-transparent before:pointer-events-none
  "
>
  <p className="text-[9px] font-semibold tracking-[0.18em] text-violet-400">
    DIGITAL
    <br />
    MARKETING
  </p>

  <h3 className="mt-3 text-[14px] font-black leading-[1.15] text-white sm:text-[20px]">
    Meta Ads
    <br />
    Strategy
  </h3>

  <p className="mt-3 text-[10px] leading-5 text-white/45 sm:text-[11px]">
    Content Marketing
    <br />
    Brand Growth
  </p>
</div>

            {/* Card 3 */}
<div
  className="
    absolute
    right-3
    top-[180px]
    z-20
    w-[125px]

    rounded-[22px]
    border border-white/6
    bg-[#08101d]/18
    p-4
    shadow-2xl
    backdrop-blur-md

    sm:right-10
    sm:top-[52%]
    sm:w-[160px]
    sm:p-5

    before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-white/[0.03] before:to-transparent before:pointer-events-none
  "
>
  <p className="text-[9px] font-semibold tracking-[0.18em] text-green-400">
    GRAPHIC
    <br />
    DESIGN
  </p>

  <h3 className="mt-3 text-[14px] font-black leading-[1.15] text-white sm:text-[20px]">
    Creative
    <br />
    Branding
  </h3>

  <p className="mt-3 text-[10px] leading-5 text-white/45 sm:text-[11px]">
    Media Design
    <br />
    Social Content
  </p>
</div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex animate-[fadeIn_.25s_ease] items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm">
         <div className="relative w-full max-w-[340px] animate-[modalPop_.35s_cubic-bezier(0.16,1,0.3,1)] rounded-[28px] border border-white/6 bg-[#0B132B]/95 p-5 shadow-2xl backdrop-blur-xl sm:max-w-md sm:rounded-[32px] sm:p-8">
            {/* Close */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/6 bg-white/5 text-white/60 transition hover:bg-red-500 hover:text-white"
            >
              ✕
            </button>

            {/* Title */}
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
              CONTACT
            </p>

            <h2 className="text-2xl font-black text-white sm:text-3xl">
              Contact Me With
            </h2>

            <p className="mt-3 text-[13px] leading-6 text-white/55 sm:mt-4 sm:text-sm sm:leading-7">
              Let’s connect and create something amazing together.
            </p>

            {/* Contact Options */}
            <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/ryan.terrado.71"
                target="_blank"
                className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3 transition transition hover:border-[#2563EB]/30 hover:bg-[#2563EB]/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB]">
                  f
                </div>

                <div>
                  <h3 className="font-bold text-white">Facebook</h3>
                  <p className="text-[12px] text-white/50">
                    @ryan.terrado.71
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/its_urboyryanxx/"
                target="_blank"
                className="flex items-center gap-4 rounded-2xl border border-white/6 bg-white/[0.03] px-5 py-4 transition hover:border-pink-500/30 hover:bg-pink-500/10"
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
                className="flex items-center gap-4 rounded-2xl border border-white/6 bg-white/[0.03] px-5 py-4 transition hover:border-green-500/30 hover:bg-green-500/10"
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
                className="flex items-center gap-4 rounded-2xl border border-white/6 bg-white/[0.03] px-5 py-4 transition hover:border-cyan-500/30 hover:bg-cyan-500/10"
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
}