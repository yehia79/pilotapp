"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plane } from "lucide-react";

const navLinks = [
  { label: "Notes", href: "/dashboard/notes" },
  { label: "Flashcards", href: "/dashboard/flashcards" },
  { label: "Exam Tester", href: "/dashboard/tester" },
  { label: "Weather", href: "/dashboard/weather" },
  { label: "ATC", href: "/dashboard/atc" },
  { label: "Charts", href: "/dashboard/charts" },
  { label: "Flight Log", href: "/dashboard/flightlog" },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="h-[46px] bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
      <div className="flex items-center gap-1.5">
        <Plane size={16} className="text-blue-500" />
        <span className="text-sm font-bold text-black">CoPilot</span>
      </div>
      <div className="flex items-center gap-0.5">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              pathname.startsWith(link.href)
                ? "bg-blue-50 text-blue-600"
                : "text-gray-500 hover:text-black hover:bg-gray-50"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-orange-400">🔥 3</span>
        <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-[11px] font-bold">
          Y
        </div>
      </div>
    </nav>
  );
}