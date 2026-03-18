"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Square,
  CheckSquare,
  Cloud,
  Mic,
  Map,
  BookMarked,
  Settings,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Notes", href: "/dashboard/notes", icon: BookOpen },
  { label: "Flashcards", href: "/dashboard/flashcards", icon: Square },
  { label: "Exam Tester", href: "/dashboard/tester", icon: CheckSquare },
  { label: "Weather", href: "/dashboard/weather", icon: Cloud },
  { label: "ATC Simulator", href: "/dashboard/atc", icon: Mic },
  { label: "Chart Reader", href: "/dashboard/charts", icon: Map },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isNotes = pathname.startsWith("/dashboard/notes") || pathname.startsWith("/dashboard/flashcards");

if (isNotes) {
  return (
    <div className="h-screen bg-white overflow-hidden">
      {children}
    </div>
  );
}

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <aside className="w-[220px] min-w-[220px] border-r border-gray-200 flex flex-col">
        <div className="px-4 py-4 border-b border-gray-100 flex items-center gap-2.5 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            Y
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-black truncate">Yehia</div>
            <div className="text-[10px] font-semibold text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded-full inline-block mt-0.5">
              ✈ PPL Student
            </div>
          </div>
        </div>
        <div className="flex-1 px-2 py-3 flex flex-col gap-0.5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 px-2 pb-1">
            Study
          </p>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-500 hover:bg-gray-50 hover:text-black"
                }`}
              >
                <item.icon size={14} />
                {item.label}
              </Link>
            );
          })}
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 px-2 pb-1 mt-3">
            Logbook
          </p>
          <Link
            href="/dashboard/flightlog"
            className={`flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              pathname === "/dashboard/flightlog"
                ? "bg-blue-50 text-blue-600"
                : "text-gray-500 hover:bg-gray-50 hover:text-black"
            }`}
          >
            <BookMarked size={14} />
            Flight Log
          </Link>
        </div>
        <div className="px-2 py-3 border-t border-gray-100">
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm font-medium text-gray-400 hover:bg-gray-50 hover:text-black transition-colors"
          >
            <Settings size={14} />
            Settings
          </Link>
        </div>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}