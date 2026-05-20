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
  FolderOpen,
  FileText,
  Video,
  Edit,
  Layout,
  Award,
 
 
  Globe,
  MapPin,

  
} from "lucide-react";

export default function About() {
  const [isHovering, setIsHovering] = useState(false);

  // Skills from resume
  const coreSkills = [
    { name: "Microsoft Office (Word, Excel, PPT)", icon: FileText, color: "text-green-400" },
    { name: "Adobe Photoshop", icon: PenTool, color: "text-blue-400" },
    { name: "Adobe Illustrator", icon: PenTool, color: "text-yellow-400" },
    { name: "Video Editing", icon: Video, color: "text-purple-400" },
    { name: "Computer Hardware Setup", icon: Computer, color: "text-cyan-400" },
    { name: "Hardware Troubleshooting", icon: Wrench, color: "text-orange-400" },
    { name: "Adaptability & Problem Solving", icon: Users, color: "text-violet-400" },
    { name: "Time Management", icon: Clock, color: "text-pink-400" },
    { name: "Organization", icon: FolderOpen, color: "text-indigo-400" },
  ];

  // Languages from resume
  const languages = [
    { name: "Tagalog", level: "Full Professional Proficiency", proficiency: 100 },
    { name: "English", level: "Professional Working Proficiency", proficiency: 85 },
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
      description: "Encoded data and digitized physical documents using Microsoft Word and Excel. Assisted in organizing and filing office records to maintain a systematic workflow. Provided general administrative support to the department staff."
    },
    {
      title: "Truck Helper",
      company: "BAI Trucking",
      period: "2020",
      description: "Safely loaded, secured, and unloaded merchandise to prevent damage during transit. Assisted the driver in navigating routes to ensure on-time delivery of goods. Conducted accurate inventory checks of items before departure and upon delivery. Maintained the cleanliness and proper condition of the delivery vehicle. Collaborated effectively with team members to meet daily delivery quotas."
    }
  ];

  // Education from resume
  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Datamex College of Saint Adeline",
      year: "2023 - Present",
      location: "357 J. Teodoro St, Cor 10th Ave, Caloocan",
      description: "Currently pursuing BSIT degree"
    },
    {
      degree: "TVL Track - ICT Strand",
      school: "Tinajeros National High School",
      year: "2021 - 2022",
      location: "B. Rivera St. Tinajeros, Malabon City",
      description: "Senior High School"
    },
    {
      degree: "Junior High School",
      school: "Catmon Integrated School",
      year: "2017 - 2021",
      location: "Dulong Hernandez St. Catmon Malabon City",
      description: "Secondary Education"
    },
    {
      degree: "Elementary",
      school: "Catmon Integrated School",
      year: "2011 - 2017",
      location: "Dulong Hernandez St. Catmon Malabon City",
      description: "Primary Education"
    }
  ];

  // Certifications from resume
  const certifications = [
    {
      name: "National Certificate III - Visual Graphics Design",
      issuer: "TESDA",
      period: "07/2023 - 07/2028",
      description: "Visual Graphics Design Certification"
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
    <section id="about" className="relative overflow-hidden bg-[#0B132B] pt-16 pb-8 md:pt-20 md:pb-10">
      {/* Background Glow */}
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

        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT - Personal Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Profile</h3>
            <p className="text-[15px] leading-relaxed text-white/70">
              I am looking for a suitable work venue where I could practice my knowledge and develop my personality as a student while utilizing learned skills and theories.
            </p>
            <p className="text-[15px] leading-relaxed text-white/70">
              Based in Malabon City, Philippines, I am an Information Technology student at Datamex College of Saint Adeline with a strong passion for digital design, content creation, and technology.
            </p>
            
            {/* Contact Info */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <h4 className="mb-3 font-semibold text-cyan-400">Contact Info</h4>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>258 Dulong Hernandez St. Barangay Catmon, Malabon, Philippines</span>
              </div>
            </div>

            {/* Skills Grid */}
            <h3 className="text-2xl font-bold text-white pt-4">Skills</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {coreSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition hover:border-cyan-400/30">
                    <Icon className={`h-5 w-5 ${skill.color}`} />
                    <span className="text-[11px] font-semibold text-white/80">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT - Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-cyan-400/30">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold text-cyan-400">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-sm text-violet-400">{edu.school}</p>
                  <p className="text-xs text-white/50 mt-1">{edu.location}</p>
                  <p className="mt-2 text-sm text-white/60">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mt-16">
          <h3 className="mb-8 text-2xl font-bold text-white text-center">Work Experience</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {workExperience.map((work, index) => (
              <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:scale-105 hover:border-cyan-400/30">
                <div className="mb-3">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold text-cyan-400">
                    {work.period}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white">{work.title}</h4>
                <p className="mb-3 text-sm text-violet-400">{work.company}</p>
                <p className="text-sm text-white/60 leading-relaxed">{work.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages & Interests Section */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Languages */}
          {/* Languages */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <h3 className="mb-4 text-lg font-bold text-white">Languages</h3>
            <div className="space-y-3">
                {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                    <Globe className="h-3.5 w-3.5 text-cyan-400" />
                    <span className="text-sm font-semibold text-white">{lang.name}</span>
                    </div>
                    <span className="text-xs text-white/50">{lang.level}</span>
                </div>
                ))}
            </div>
            </div>
          {/* Interests */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-6 text-xl font-bold text-white">Interests</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <span key={index} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm transition hover:border-cyan-400/30 hover:bg-white/10">
                    <Icon className="h-3.5 w-3.5 text-cyan-400" />
                    {interest.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/10 to-cyan-500/10 p-8 backdrop-blur-sm">
          <h3 className="mb-6 text-center text-2xl font-bold text-white">Certifications</h3>
          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-4 rounded-xl bg-white/5 p-5 transition hover:bg-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/20">
                  <Award className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white">{cert.name}</h4>
                  <p className="text-sm text-violet-400">{cert.issuer}</p>
                  <p className="text-xs text-white/50">{cert.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={downloadResume}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-xl"
          >
            <Download className={`h-5 w-5 transition-transform ${isHovering ? "translate-y-1" : ""}`} />
            Download Resume (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}