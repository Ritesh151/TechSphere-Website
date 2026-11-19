import { Handshake, Layers, Users, Trophy } from "lucide-react";

export default function HeroStats() {
  const stats = [
    {
      value: "120+",
      label: "Happy Clients",
      icon: Handshake,
    },
    {
      value: "250+",
      label: "Projects Delivered",
      icon: Layers,
    },
    {
      value: "50+",
      label: "Team Experts",
      icon: Users,
    },
    {
      value: "5+",
      label: "Years of Excellence",
      icon: Trophy,
    },
  ];

  return (
    <div className="w-full pt-6 mt-6 sm:mt-7 border-t border-[#E8DCD1]/80">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, i) => {
          const IconComp = stat.icon;
          return (
            <div
              key={stat.label}
              className={`flex items-center gap-3 sm:gap-3.5 ${
                i !== 0 ? "sm:border-l sm:border-[#E8DCD1]/80 sm:pl-5" : ""
              }`}
            >
              <div className="w-9 h-9 rounded-xl bg-[#FAF1E8] border border-[#E8DCD1] text-[#94613F] flex items-center justify-center flex-shrink-0 shadow-2xs">
                <IconComp className="h-4 w-4" strokeWidth={1.85} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-lg sm:text-xl font-extrabold text-[#2D1E14] leading-tight tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs text-[#785A44] font-medium leading-tight mt-0.5">
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

