// src/components/About.tsx

import { useState } from "react";
import { 
  Download, 
  Code, 
  PenTool, 
  Computer, 
  Wrench, 
  Clock, 
  Users, 
  FileText,
  Video,
  Edit,
  Layout,
  Award,
  Globe,
  MapPin
} from "lucide-react";

export default function About() {
  const [isHovering, setIsHovering] = useState(false);

  // Skills from resume
  const coreSkills = [
    { name: "Microsoft Office", icon: FileText, color: "text-green-400" },
    { name: "Adobe Photoshop", icon: PenTool, color: "text-blue-400" },
    { name: "Adobe Illustrator", icon: PenTool, color: "text-yellow-400" },
    { name: "Video Editing", icon: Video, color: "text-purple-400" },
    { name: "Hardware Setup", icon: Computer, color: "text-cyan-400" },
    { name: "Troubleshooting", icon: Wrench, color: "text-orange-400" },
    { name: "Problem Solving", icon: Users, color: "text-violet-400" },
    { name: "Time Management", icon: Clock, color: "text-pink-400" },
  ];

  // Languages from resume
  const languages = [
    { name: "Tagalog", level: "Full Professional Proficiency" },
    { name: "English", level: "Professional Working Proficiency" },
  ];

  // Interests from resume
  const interests = [
    { name: "Coding", icon: Code },
    { name: "Editing", icon: Edit },
    { name: "Video Editing", icon: Video },
    { name: "Digital Design", icon: Layout },
    { name: "Content Creation", icon: PenTool },
  ];

  // Work Experience from resume
  const workExperience = [
    {
      title: "Work Immersion",
      company: "Malabon City Hall",
      period: "2021",
      description: "Encoded data and digitized physical documents. Assisted in organizing office records and provided administrative support."
    },
    {
      title: "Truck Helper",
      company: "BAI Trucking",
      period: "2020",
      description: "Loaded and unloaded merchandise, assisted with navigation, conducted inventory checks, and maintained vehicle cleanliness."
    }
  ];

  // Education from resume
  const education = [
    {
      degree: "BS Information Technology",
      school: "Datamex College of Saint Adeline",
      year: "2023 - Present",
      description: "Currently pursuing BSIT degree"
    },
    {
      degree: "TVL - ICT Strand",
      school: "Tinajeros National High School",
      year: "2021 - 2022",
      description: "Senior High School"
    },
    {
      degree: "Junior High School",
      school: "Catmon Integrated School",
      year: "2017 - 2021",
      description: "Secondary Education"
    },
    {
      degree: "Elementary",
      school: "Catmon Integrated School",
      year: "2011 - 2017",
      description: "Primary Education"
    }
  ];

  // Certifications from resume
  const certifications = [
    {
      name: "National Certificate III - Visual Graphics Design",
      issuer: "TESDA",
      period: "07/2023 - 07/2028",
    }
  ];

  // Download resume function
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume 1.5.pdf";
    link.download = "Ryan_Terrado_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative overflow-hidden bg-[#0B132B] py-20 md:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/2 h-[300px] w-[300px] rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
            GET TO KNOW ME
          </p>
          <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
            About <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
        </div>

        {/* Profile Section - Full Width */}
        <div className="mb-10 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <p className="text-[15px] leading-relaxed text-white/70 md:text-base">
            Based in Malabon City, Philippines, I am an Information Technology student at Datamex College of Saint Adeline with a strong passion for digital design, content creation, and technology.
          </p>
          <div className="mt-3 flex items-center gap-2 text-sm text-white/70 md:text-base">
            <MapPin className="h-4 w-4 text-cyan-400" />
            <span>258 Dulong Hernandez St. Catmon, Malabon</span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Skills */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <span key={index} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80">
                      <Icon className={`h-3.5 w-3.5 ${skill.color}`} />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Work Experience */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">Work Experience</h3>
              <div className="space-y-4">
                {workExperience.map((work, index) => (
                  <div key={index} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-white">{work.title}</h4>
                      <span className="text-sm text-cyan-400">{work.period}</span>
                    </div>
                    <p className="text-base text-violet-400">{work.company}</p>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed md:text-base">{work.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">Languages</h3>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-cyan-400" />
                      <span className="text-base text-white md:text-lg">{lang.name}</span>
                    </div>
                    <span className="text-sm text-white/50 md:text-base">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* Education */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <span className="text-sm text-cyan-400">{edu.year}</span>
                    </div>
                    <p className="text-base text-violet-400">{edu.school}</p>
                    <p className="mt-1 text-sm text-white/60 md:text-base">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <span key={index} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 md:text-base">
                      <Icon className="h-4 w-4 text-cyan-400" />
                      {interest.name}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-xl border border-white/10 bg-gradient-to-r from-violet-600/10 to-cyan-500/10 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-4 rounded-lg bg-white/5 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/20">
                      <Award className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-white md:text-lg">{cert.name}</h4>
                      <p className="text-sm text-violet-400 md:text-base">{cert.issuer}</p>
                      <p className="text-xs text-white/50 md:text-sm">{cert.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resume Download Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={downloadResume}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 text-base font-bold text-white transition-all hover:scale-105 md:px-10 md:py-4 md:text-lg"
          >
            <Download className={`h-5 w-5 transition-transform md:h-6 md:w-6 ${isHovering ? "translate-y-0.5" : ""}`} />
            Download Resume (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}