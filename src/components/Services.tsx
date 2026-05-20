// src/components/Services.tsx
<section id="services" className="relative overflow-hidden bg-[#0B132B] py-20 md:py-28"></section>
import {
  BarChart3,
  Megaphone,
  MonitorSmartphone,
  PieChart,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Design",
    description:
      "Scroll-stopping content and creative assets that boost engagement and brand awareness.",
    iconColor: "text-violet-500",
    iconBg:
      "from-violet-500/10 to-violet-500/5",
  },
  {
    icon: BarChart3,
    title: "Paid Ads Creative",
    description:
      "High-converting ad creatives designed to maximize clicks, conversions, and ROI.",
    iconColor: "text-blue-500",
    iconBg:
      "from-blue-500/10 to-blue-500/5",
  },
  {
    icon: MonitorSmartphone,
    title: "Landing Page Design",
    description:
      "Modern and responsive landing pages optimized for conversions and user experience.",
    iconColor: "text-cyan-400",
    iconBg:
      "from-cyan-400/10 to-cyan-400/5",
  },
  {
    icon: PieChart,
    title: "Analytics & Reporting",
    description:
      "Performance insights and reporting dashboards that help brands make better decisions.",
    iconColor: "text-green-400",
    iconBg:
      "from-green-400/10 to-green-400/5",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#0B132B] py-20 md:py-28">
      {/* Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl md:h-[320px] md:w-[320px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
            WHAT I DO
          </p>

          <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Services That Help
            <br />
            Your Brand Grow
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base md:mt-6 md:text-lg md:leading-8">
            I combine creative design, digital marketing strategy,
            and conversion-focused experiences to help businesses
            stand out and grow online.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 xl:grid-cols-4 xl:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/20 hover:bg-white/[0.05] sm:p-7 md:p-8"
              >
                {/* Hover Glow */}
                {/* Hover Glow */}
                <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
                </div>

                {/* Icon */}
                <div
                  className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.iconBg} sm:h-16 sm:w-16`}
                >
                  <Icon
                    className={`h-7 w-7 ${service.iconColor} sm:h-8 sm:w-8`}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Content */}
                <div className="relative mt-6 sm:mt-8">
                  <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/60 sm:text-[15px]">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Border */}
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}