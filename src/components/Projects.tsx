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
  ArrowRight,
  Plus
} from "lucide-react";

// ============================================
// 📁 HOW TO ADD NEW PROJECTS:
// ============================================
// 
// FOR GRAPHICS (Images):
// 1. Add your image to: src/assets/graphics/
// 2. Add import: import projectName from "../assets/graphics/your-image.png";
// 3. Add to graphicsProjects array below
//
// FOR VIDEOS:
// 1. Add video to: public/videos/
// 2. Add thumbnail to: src/assets/videos/
// 3. Add import: import videoThumb from "../assets/videos/your-thumb.jpg";
// 4. Add to videoProjects array below
//
// ============================================

// ============================================
// IMPORT YOUR GRAPHICS IMAGES HERE
// ============================================
import graphic1 from "../assets/graphics/firstpost.png";
import graphic2 from "../assets/graphics/2ndpost.png";
import graphic3 from "../assets/graphics/3rd post.png";
import graphic4 from "../assets/graphics/4th post.png";

// ============================================
// GRAPHICS PROJECTS - Add your graphic projects here
// ============================================
const graphicsProjects = [
  {
    id: 1,
    title: "Health Tips Carousel",
    category: "GRAPHICS",
    image: graphic1,
    thumbnail: graphic1,
    description: "Educational health tips graphics designed to provide value to the community while building brand trust.",
    targetMarket: "Local community members, families, and individuals seeking affordable healthcare options.",
    painPoints: "Lack of accessible health information, mistrust of generic pharmacy ads.",
    awarenessLevel: "Problem-aware - Audience needs health information but doesn't know where to find reliable content.",
    toolsUsed: ["Canva", "Adobe Photoshop", "Meta Business Suite"],
    deliverables: "5 carousel posts, 10 static graphics"
  },
  {
    id: 2,
    title: "Promotional Sale Graphics",
    category: "GRAPHICS",
    image: graphic2,
    thumbnail: graphic2,
    description: "Eye-catching promotional graphics for sales and special offers at JuanMeds Pharmacy.",
    targetMarket: "Budget-conscious consumers looking for deals and discounts.",
    painPoints: "High medication costs, unaware of ongoing promotions.",
    awarenessLevel: "Solution-aware - Audience knows they want savings but needs to be informed.",
    toolsUsed: ["Adobe Photoshop", "Canva", "Adobe Illustrator"],
    deliverables: "15 promotional posts, 5 countdown graphics"
  },
  {
    id: 3,  // Fixed: Changed from 3 to 3 (only one id:3)
    title: "Juanmeds Daily Posting",
    category: "GRAPHICS",
    image: graphic3,
    thumbnail: graphic3,
    description: "Daily social media posts maintaining brand presence and engaging with the community.",
    targetMarket: "Families and Households Needing Affordable Medicines",
    painPoints: "Medicines are too expensive for the family's budget.",
    awarenessLevel: "Solution-aware",
    toolsUsed: ["ChatGPT", "Photoshop", "Obsidian"],
    deliverables: "Increase pharmacy visits and position JuanMeds as the trusted affordable pharmacy for families"
  },
  {
    id: 4,  // Fixed: Changed from 3 to 3 (only one id:3)
    title: "Juanmeds Daily Posting",
    category: "GRAPHICS",
    image: graphic4,
    thumbnail: graphic4,
    description: "Daily social media posts maintaining brand presence and engaging with the community.",
    targetMarket: "Families and Households Needing Affordable Medicines",
    painPoints: "Medicines are too expensive for the family's budget.",
    awarenessLevel: "Solution-aware",
    toolsUsed: ["ChatGPT", "Photoshop", "Obsidian"],
    deliverables: "Increase pharmacy visits and position JuanMeds as the trusted affordable pharmacy for families"
  }
  // REMOVED the duplicate id:3 project with placeholder text
];

// ============================================
// VIDEOS PROJECTS - Add your video projects here
// ============================================
const videoProjects: any[] = []; // Empty array for now

//{
    //id: 1,
    //title: "JuanMeds Promotional Video",
    //category: "VIDEOS",
    //image: promoVideoThumb,
    //thumbnail: promoVideoThumb,
    //videoUrl: "/videos/promo-video.mp4",  // Make sure this file exists in public/videos/
    //description: "Promotional video highlighting JuanMeds' affordable medicines and friendly service.",
    //targetMarket: "Budget-conscious families in need of affordable medicines.",
    //painPoints: "High medication costs, long lines at major pharmacies.",
    //awarenessLevel: "Consideration - Choosing between pharmacy options",
    //toolsUsed: ["CapCut", "Adobe Photoshop", "Meta Ads Manager"],
    //deliverables: "30-second promo video, 15-second cut for reels"
//},


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

  const isYouTubeUrl = (url: string) => {
    return url?.includes("youtube.com") || url?.includes("youtu.be");
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
              Social Media Marketing Works
              <br />
              
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

          {/* Featured Projects Grid */}
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

          {/* View All Button */}
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

          {/* Empty State */}
          {currentProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-white/10 bg-white/5 mb-4">
                <Plus className="w-10 h-10 text-white/30" />
              </div>
              <p className="text-white/40 text-lg">No projects added yet</p>
              <p className="text-white/30 text-sm mt-2">Add your first project using the template above</p>
            </div>
          )}
        </div>
      </section>

      {/* PROJECT DETAILS MODAL - FIXED VERSION */}
      {openModal && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0B132B] p-6 shadow-2xl md:p-8 custom-scrollbar"
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
              <div className="relative mb-6 overflow-hidden rounded-xl bg-[#0B132B]">
                {selectedProject.category === "VIDEOS" && selectedProject.videoUrl ? (
                  isYouTubeUrl(selectedProject.videoUrl) ? (
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
                    <video
                      src={selectedProject.videoUrl}
                      controls
                      className="w-full rounded-xl"
                      poster={selectedProject.image}
                    />
                  )
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto rounded-xl"
                  />
                )}
                
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
                  {currentProjects.length} total {activeCategory.toLowerCase()} created for JuanMeds Pharmacy
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