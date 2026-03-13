import Link from "next/link";
import Image from "next/image"
import { Plane, BookOpen, Square, CheckSquare, Cloud, Mic, Map } from "lucide-react"

export default function Home() {
const features = [
  { title: "Study Notes", icon: BookOpen, description: "Clear concise notes focused on what matters for your exam, with deep dives for those who want to understand the why." },
  { title: "Flashcards", icon: Square, description: "Spaced repetition system that drills you on exactly what you need to memorize — V-speeds, airspace, regulations and more." },
  { title: "Exam Tester", icon: CheckSquare, description: "Full FAA question bank with detailed explanations for every wrong answer, not just the correct option." },
  { title: "Weather Briefing", icon: Cloud, description: "METARs and TAFs translated into plain English with a simple go/no-go recommendation for your flight." },
  { title: "ATC Simulator", icon: Mic, description: "Practice radio calls before your first lesson so you never feel lost on the radio." },
  { title: "Chart Reader", icon: Map, description: "Interactive sectional charts with tap-to-explain symbols and video walkthroughs of real chart navigation." },
];
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
       <div className="flex items-center gap-2">
        <Plane size={28} className="text-blue-500" />
        <span className="text-xl font-bold text-black">Co-Pilot</span>
       </div>
       <div className="flex items-center gap-3">
        <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
          Login
        </Link>
        <Link href="/signup" className="text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors">
          Sign Up
        </Link>
       </div>
      </nav>
     <section className="flex flex-col items-center text-center px-6 py-24 gap-6">
      <div className="text-sm text-gray-400 font-medium">
       Made by a student pilot, for student pilots
      </div>
      <h1 className="text-5xl font-extrabold tracking-tight text-black max-w-2xl">
        Everything a student pilot will ever need —{" "}
        <span className="text-blue-500">in one place.</span>
      </h1>
      <p className="text-lg text-gray-400 max-w-xl">
        Notes, flashcards, exam prep, weather briefings and ATC practice — 
        everything a student pilot will ever need, in one place.
      </p>
      <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-colors text-base">
        Get Started Free 
      </Link>
     </section>
     <section className="bg-gray-50 px-8 py-24">
      <div className="max-w-5xl mx-auto">
      <p className="text-center text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">
       Features
      </p>
      <h2 className="text-center text-3xl font-bold text-black tracking-tight mb-14">
       Everything you need, nothing you don't
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map((feature) => (
        <div key={feature.title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
          <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
            <feature.icon size={18} className="text-blue-500" />
          </div>
          <h3 className="text-base font-bold text-black mb-2">{feature.title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
        </div>
      ))}
     </div>
     </div>
     </section>
     <footer className="bg-black px-8 py-12">
  <div className="max-w-5xl mx-auto flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Plane size={20} className="text-blue-500" />
      <span className="text-white font-bold text-base">CoPilot</span>
    </div>
    <p className="text-gray-500 text-sm">
      © 2026 CoPilot. Built for student pilots.
    </p>
    <div className="flex items-center gap-6">
      <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
        Privacy
      </Link>
      <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
        Terms
      </Link>
    </div>
  </div>
</footer>
    </main>
  )

}