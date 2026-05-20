// src/components/Projects.tsx
<section id="portfolio" className="relative overflow-hidden bg-[#0B132B] py-20 md:py-28"></section>
import { useState } from "react";

const projects = [
  {
    title: "Social Media Campaign",
    category: "META ADS CREATIVE",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Brand Landing Page",
    category: "UI/UX DESIGN",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Analytics Dashboard",
    category: "MARKETING DASHBOARD",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },

  // MORE PROJECTS
  {
    title: "Email Marketing Design",
    category: "EMAIL DESIGN",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Facebook Ads Creative",
    category: "PAID ADS",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Creative Branding",
    category: "BRAND IDENTITY",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Projects() {
  const [openModal, setOpenModal] = useState(false);

  // MAIN PROJECTS
  const featuredProjects = projects.slice(0, 3);

  // REST PROJECTS
  const allProjects = projects.slice(3);
  
  return (
    <>
      <section id="portfolio" className="relative overflow-hidden bg-[#0B132B] py-20 md:py-28"></section>
      <section className="relative overflow-hidden bg-[#0B132B] py-20 md:py-28">
        {/* Glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-violet-600/10 blur-3xl md:h-[420px] md:w-[420px]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
                FEATURED WORK
              </p>

              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                Selected Projects &
                <br />
                Creative Works
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base md:text-lg md:leading-8">
                A collection of high-converting digital designs,
                marketing creatives, and user-focused experiences.
              </p>
            </div>

            {/* OPEN MODAL BUTTON */}
            <button
              onClick={() => setOpenModal(true)}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 text-[11px] font-bold tracking-[0.14em] text-white/80 backdrop-blur transition hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:text-white sm:w-fit"
            >
              VIEW ALL PROJECTS
            </button>
          </div>

          {/* FEATURED PROJECTS */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110 md:h-[420px]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 z-10 p-6 md:p-8">
                  <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-cyan-300">
                    {project.category}
                  </div>

                  <h3 className="mt-5 text-2xl font-black leading-tight text-white md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
                    Modern digital marketing visuals designed to
                    increase engagement and conversions.
                  </p>

                  <button className="mt-6 text-[11px] font-bold tracking-[0.12em] text-cyan-400">
                    VIEW PROJECT →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm">
          {/* Modal Content */}
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-[32px] border border-white/10 bg-[#111827] p-6 md:p-10">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-red-500 hover:text-white"
            >
              ✕
            </button>

            {/* Header */}
            <div className="mb-10">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
                ALL PROJECTS
              </p>

              <h2 className="text-3xl font-black text-white md:text-5xl">
                More Creative Works
              </h2>
            </div>

            {/* GRID */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {allProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
                >
                  {/* IMAGE */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent" />

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 z-10 p-6">
                    <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-cyan-300">
                      {project.category}
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-white">
                      {project.title}
                    </h3>

                    <button className="mt-5 text-[11px] font-bold tracking-[0.12em] text-cyan-400">
                      VIEW PROJECT →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}