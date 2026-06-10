// src/components/Projects.tsx

import { useState } from "react";
import { 
  Target, 
  AlertTriangle, 
  BarChart3, 
  Wrench, 
  Package,
  Grid3x3,
  Video,
  X,
  ArrowRight
} from "lucide-react";

// Graphics Projects Data
const graphicsProjects = [
  {
    id: 1,
    title: "Health Tips Carousel",
    category: "GRAPHICS",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
    description: "Educational health tips graphics designed to provide value to the community while building brand trust.",
    targetMarket: "Local community members, families, and individuals seeking affordable healthcare options in the area.",
    painPoints: "Lack of accessible health information, mistrust of generic pharmacy ads, confusion about common health issues.",
    awarenessLevel: "Problem-aware - Audience knows they need health information but doesn't know where to find reliable, easy-to-understand content.",
    toolsUsed: ["Canva", "Adobe Photoshop", "Meta Business Suite"],
    deliverables: "5 carousel posts, 10 static graphics, branded templates"
  },
  {
    id: 2,
    title: "Promotional Sale Graphics",
    category: "GRAPHICS",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?q=80&w=600&auto=format&fit=crop",
    description: "Eye-catching promotional graphics for sales, events, and special offers at JuanMeds Pharmacy.",
    targetMarket: "Budget-conscious consumers, regular customers, and new potential customers looking for deals.",
    painPoints: "High medication costs, unaware of ongoing promotions, need for timely sale notifications.",
    awarenessLevel: "Solution-aware - Audience knows they want savings but needs to be informed about specific offers.",
    toolsUsed: ["Adobe Photoshop", "Canva", "Adobe Illustrator"],
    deliverables: "15 promotional posts, 5 countdown graphics, 3 event announcements"
  },
  {
    id: 3,
    title: "Brand Awareness Graphics",
    category: "GRAPHICS",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop",
    description: "Brand-focused graphics highlighting JuanMeds as a trusted neighborhood pharmacy.",
    targetMarket: "Local residents who haven't tried JuanMeds yet, community members seeking trusted healthcare partners.",
    painPoints: "Lack of brand recognition, trust issues with new pharmacies, preference for established chains.",
    awarenessLevel: "Unaware - Audience doesn't know JuanMeds exists or what makes them different.",
    toolsUsed: ["Canva", "Adobe Photoshop", "Meta Business Suite"],
    deliverables: "8 brand story posts, 5 testimonial graphics, 3 community spotlight designs"
  },
  {
    id: 4,
    title: "Seasonal Campaign Graphics",
    category: "GRAPHICS",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600&auto=format&fit=crop",
    description: "Seasonal graphics for holidays and special occasions relevant to the community.",
    targetMarket: "Families celebrating holidays, people needing seasonal health reminders.",
    painPoints: "Forgetting health needs during busy seasons, lack of festive yet professional content.",
    awarenessLevel: "Solution-aware - Knows they need seasonal health content but needs engaging visuals.",
    toolsUsed: ["Adobe Photoshop", "Canva", "Adobe Illustrator"],
    deliverables: "12 seasonal posts, 4 holiday greetings, 3 health awareness day graphics"
  },
  {
    id: 5,
    title: "Product Highlight Graphics",
    category: "GRAPHICS",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a2ec?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1585435557343-3b092031a2ec?q=80&w=600&auto=format&fit=crop",
    description: "Product-focused graphics showcasing available medications and health products.",
    targetMarket: "Customers looking for specific medications, people with ongoing health conditions.",
    painPoints: "Uncertainty about product availability, need for clear product information.",
    awarenessLevel: "Product-aware - Knows what they need but needs confirmation of availability.",
    toolsUsed: ["Canva", "Adobe Photoshop", "Adobe Lightroom"],
    deliverables: "20 product highlight posts, 10 informational graphics, 5 comparison charts"
  }
];

// Videos Projects Data
const videoProjects = [
  {
    id: 1,
    title: "Community Engagement Video",
    category: "VIDEOS",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Short-form video content showcasing JuanMeds' role in the local community and commitment to accessible healthcare.",
    targetMarket: "Local community members, families, and individuals seeking relatable healthcare content.",
    painPoints: "Lack of personal connection with pharmacy brands, need for authentic community representation.",
    awarenessLevel: "Awareness - Needs to see real people and real stories to build trust.",
    toolsUsed: ["CapCut", "Adobe Premiere Rush", "Meta Business Suite"],
    deliverables: "30-second brand story video, behind-the-scenes clips, customer testimonial"
  },
  {
    id: 2,
    title: "Health Tips Reels",
    category: "VIDEOS",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=600&auto=format&fit=crop",
    description: "Quick, engaging health tips delivered through Facebook Reels format.",
    targetMarket: "Young adults and social media users who prefer video content over text.",
    painPoints: "Short attention span, need for quick, digestible health information.",
    awarenessLevel: "Problem-aware - Knows they need health information but wants it in entertaining format.",
    toolsUsed: ["CapCut", "Canva Video Editor", "Facebook Reels"],
    deliverables: "15 short Reels (15-30 seconds), animated text overlays, trending audio integration"
  },
  {
    id: 3,
    title: "Promotional Video Ads",
    category: "VIDEOS",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop",
    description: "High-converting video ads for Facebook promotion campaigns.",
    targetMarket: "Potential customers who haven't visited JuanMeds yet.",
    painPoints: "Need convincing to try a new pharmacy, require visual proof of value.",
    awarenessLevel: "Consideration - Knows about pharmacy options but needs push to choose JuanMeds.",
    toolsUsed: ["CapCut", "Adobe Premiere Pro", "Meta Ads Manager"],
    deliverables: "3 promotional videos (30-45 seconds), 5 ad variations, A/B tested versions"
  },
  {
    id: 4,
    title: "Educational Video Series",
    category: "VIDEOS",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
    description: "Educational video series explaining common health topics and medication use.",
    targetMarket: "Patients needing medication guidance, first-time medicine users.",
    painPoints: "Confusion about proper medication use, need for clear instructions.",
    awarenessLevel: "Solution-aware - Has the problem but needs guidance on solution.",
    toolsUsed: ["CapCut", "Adobe After Effects", "Canva"],
    deliverables: "5 educational videos (60 seconds each), motion graphics, subtitle integration"
  },
  {
    id: 5,
    title: "Customer Testimonial Videos",
    category: "VIDEOS",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop",
    description: "Authentic customer testimonial videos building social proof and trust.",
    targetMarket: "Skeptical customers who trust peer recommendations over ads.",
    painPoints: "Distrust of advertising, need for social proof before trying new pharmacy.",
    awarenessLevel: "Consideration - Needs validation from real customers to make decision.",
    toolsUsed: ["CapCut", "Adobe Premiere Rush", "Mobile Video Tools"],
    deliverables: "4 testimonial videos, before/after transitions, customer story highlights"
  }
];

export default function Projects() {
  const [openModal, setOpenModal] = useState(false);
  const [openAllProjectsModal, setOpenAllProjectsModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState<"GRAPHICS" | "VIDEOS">("GRAPHICS");

  const currentProjects = activeCategory === "GRAPHICS" ? graphicsProjects : videoProjects;
  const featuredProjects = currentProjects.slice(0, 3);
  const remainingProjects = currentProjects.slice(3);

  const handleViewProject = (project: any) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };

  const closeAllProjectsModal = () => {
    setOpenAllProjectsModal(false);
  };

  return (
    <>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #06b6d4, #8b5cf6);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #0891b2, #7c3aed);
        }
        
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #8b5cf6 rgba(255, 255, 255, 0.05);
        }
      `}</style>

      <section id="portfolio" className="relative overflow-hidden bg-white dark:bg-[#0B132B] pt-8 pb-20 md:pt-10 md:py-28 transition-colors duration-300">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-violet-600/10 blur-3xl md:h-[420px] md:w-[420px]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
              MY PORTFOLIO
            </p>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
              Social Media Marketing Work
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                For JuanMeds Pharmacy
              </span>
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-sm leading-7 text-white/60 sm:text-base md:text-lg">
              Graphics and videos created for brand awareness campaigns on Facebook
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory("GRAPHICS")}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all ${
                activeCategory === "GRAPHICS"
                  ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg"
                  : "border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-cyan-400/30"
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
              GRAPHICS ({graphicsProjects.length})
            </button>
            <button
              onClick={() => setActiveCategory("VIDEOS")}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all ${
                activeCategory === "VIDEOS"
                  ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg"
                  : "border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-cyan-400/30"
              }`}
            >
              <Video className="w-4 h-4" />
              VIDEOS ({videoProjects.length})
            </button>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/30"
                onClick={() => handleViewProject(project)}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent" />
                
                <div className="absolute top-4 right-4 z-10">
                  <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-cyan-300 backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 z-10 p-6">
                  <h3 className="text-xl font-black leading-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/65 line-clamp-2">
                    {project.description}
                  </p>
                  <button className="mt-4 text-[11px] font-bold tracking-[0.12em] text-cyan-400 group-hover:text-cyan-300 transition">
                    VIEW DETAILS →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {remainingProjects.length > 0 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setOpenAllProjectsModal(true)}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white/80 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-white hover:scale-105"
              >
                <span>VIEW ALL {activeCategory}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PROJECT DETAILS MODAL */}
      {openModal && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0B132B] p-6 shadow-2xl md:p-8 custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-20 float-right -mt-2 -mr-2">
              <button
                onClick={closeModal}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0B132B] text-white/70 transition hover:bg-red-500 hover:text-white shadow-lg backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="clear-both">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                {selectedProject.category === "VIDEOS" && selectedProject.videoUrl ? (
                  <div className="relative pb-[56.25%] h-0">
                    <iframe
                      src={selectedProject.videoUrl}
                      title={selectedProject.title}
                      className="absolute top-0 left-0 w-full h-full rounded-xl"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-[240px] w-full object-cover md:h-[320px]"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] to-transparent" />
                
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[11px] font-bold tracking-[0.14em] text-cyan-300 backdrop-blur-sm">
                    {selectedProject.category}
                  </div>
                </div>
              </div>

              <h2 className="mb-4 text-2xl font-black text-white md:text-3xl">
                {selectedProject.title}
              </h2>

              <div className="mb-6">
                <p className="text-sm leading-relaxed text-white/70 md:text-base">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-5 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-cyan-400/20">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base font-bold text-cyan-400">Target Market</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/80">
                  {selectedProject.targetMarket}
                </p>
              </div>

              <div className="mb-5 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-orange-400/20">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                  <h3 className="text-base font-bold text-orange-400">Pain Points</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/80">
                  {selectedProject.painPoints}
                </p>
              </div>

              <div className="mb-5 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-green-400/20">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  <h3 className="text-base font-bold text-green-400">Awareness Level</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/80">
                  {selectedProject.awarenessLevel}
                </p>
              </div>

              <div className="mb-5 rounded-xl border border-violet-400/20 bg-gradient-to-r from-violet-400/5 to-cyan-500/5 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-5 h-5 text-violet-400" />
                  <h3 className="text-base font-bold text-violet-400">Tools Used</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.toolsUsed.map((tool: string, idx: number) => (
                    <span key={idx} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition-all hover:border-violet-400/30 hover:bg-violet-400/10">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.deliverables && (
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-white/50" />
                    <span className="text-xs text-white/50 md:text-sm">Deliverables</span>
                  </div>
                  <span className="text-sm font-semibold text-cyan-400 md:text-base text-right">
                    {selectedProject.deliverables}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* VIEW ALL PROJECTS MODAL */}
      {openAllProjectsModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeAllProjectsModal}
        >
          <div 
            className="relative w-full max-w-6xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0B132B] p-6 shadow-2xl md:p-8 custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-20 float-right -mt-2 -mr-2">
              <button
                onClick={closeAllProjectsModal}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0B132B] text-white/70 transition hover:bg-red-500 hover:text-white shadow-lg backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="clear-both">
              <div className="mb-8 text-center">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
                  COMPLETE PORTFOLIO
                </p>
                <h2 className="text-3xl font-black text-white md:text-4xl">
                  All {activeCategory} Projects
                </h2>
                <p className="mt-3 text-white/60">
                  {remainingProjects.length + 3} total {activeCategory.toLowerCase()} created for JuanMeds Pharmacy
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {currentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/30"
                    onClick={() => {
                      closeAllProjectsModal();
                      handleViewProject(project);
                    }}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent" />
                    
                    <div className="absolute top-4 right-4 z-10">
                      <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-cyan-300 backdrop-blur-sm">
                        {project.category}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 z-10 p-5">
                      <h3 className="text-lg font-black leading-tight text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs text-white/65 line-clamp-2">
                        {project.description}
                      </p>
                      <button className="mt-3 text-[10px] font-bold tracking-[0.12em] text-cyan-400 group-hover:text-cyan-300 transition">
                        VIEW DETAILS →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}