"use client";
import { useState } from "react";

export default function Dashboard() {
    
// inside the function:
const [hoursOpen, setHoursOpen] = useState(false);
    
    return (
 <>
      {/* Topbar */}
      <div className="h-[50px] border-b border-gray-200 flex items-center justify-between px-8 flex-shrink-0">
        <div className="flex items-center gap-1.5 text-sm">
          <span className="font-bold text-black">CoPilot</span>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500 font-medium">Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 border border-green-100 px-3 py-1 rounded-full">
            ☀️ HECA — VFR — Good to fly
          </div>
          <span className="text-xs font-semibold text-orange-400">🔥 3 day streak</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-12 py-8 w-full max-w-5xl ">
        <h1 className="text-xl font-bold text-black mb-1">Good morning, Yehia</h1>
        <p className="text-xs text-gray-400 mb-8">PPL Stage</p>
      <div className="grid grid-cols-2 gap-x-16 gap-y-10">

  {/* PPL Progress */}
  <div>
    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">PPL Progress</p>
    <div className="flex justify-between text-sm mb-1.5">
      <span className="font-semibold text-black">Overall completion</span>
      <span className="font-semibold text-blue-500">42%</span>
    </div>
    <div className="h-[4px] bg-gray-100 rounded-full mb-4">
      <div className="h-[4px] bg-blue-500 rounded-full w-[42%]" />
    </div>
<div 
  className="flex items-center justify-between py-2 border-t border-gray-100 cursor-pointer"
  onClick={() => setHoursOpen(!hoursOpen)}
>
  <span className="text-xs font-medium text-gray-500">Flight Hours</span>
  <div className="flex items-center gap-2">
    <span className="text-[11px] text-gray-400">17 / 40 hrs</span>
    <span className="text-[10px] text-gray-300">{hoursOpen ? "▲" : "▼"}</span>
  </div>
</div>

{hoursOpen && (
  <div className="flex flex-col gap-2 pt-2">
    {[
      { label: "Total", value: "17 / 40", pct: "42%" },
      { label: "Solo", value: "2 / 10", pct: "20%" },
      { label: "Cross country", value: "1.5 / 5", pct: "30%" },
      { label: "Night", value: "3 / 3", pct: "100%" },
      { label: "Dual received", value: "15 / 20", pct: "75%" },
    ].map((h) => (
      <div key={h.label} className="flex items-center gap-2">
        <span className="text-[11px] text-gray-400 w-24">{h.label}</span>
        <div className="flex-1 h-[3px] bg-gray-100 rounded-full">
          <div className="h-[3px] bg-blue-500 rounded-full" style={{ width: h.pct }} />
        </div>
        <span className="text-[11px] font-semibold text-black w-12 text-right">{h.value}</span>
      </div>
    ))}
  </div>
)}
  </div>

  {/* Study Progress */}
 {/* Study Progress */}
<div>
  <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Study Progress</p>

  {[
    { label: "Notes", value: "58%", sub: "Chapter 7 of 12", pct: 58, color: "#3b82f6" },
    { label: "Flashcards", value: "71%", sub: "284 of 400 mastered", pct: 71, color: "#8b5cf6" },
    { label: "Question Bank", value: "35%", sub: "312 of 900 · avg 78%", pct: 35, color: "#16a34a" },
  ].map((item) => (
    <div key={item.label} className="flex items-center gap-4 py-2.5 border-b border-gray-100 last:border-none">
      <div className="w-[120px] flex-shrink-0">
        <p className="text-xs font-medium text-black">{item.label}</p>
        <p className="text-[10px] text-gray-400 mt-0.5">{item.sub}</p>
      </div>
      <div className="flex-1 h-[3px] bg-gray-100 rounded-full">
        <div
          className="h-[3px] rounded-full"
          style={{ width: `${item.pct}%`, background: item.color }}
        />
      </div>
      <span className="text-xs font-semibold w-8 text-right" style={{ color: item.color }}>
        {item.value}
      </span>
    </div>
  ))}
</div>

  {/* Weak Topics */}
  <div>
    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Weak Topics</p>

    {[
      { name: "Weather Theory", score: "43%", last: "2 days ago" },
      { name: "Airspace", score: "51%", last: "Today" },
      { name: "Navigation", score: "55%", last: "5 days ago" },
    ].map((topic) => (
      <div key={topic.name} className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-none">
        <div>
          <p className="text-xs font-medium text-black">{topic.name}</p>
          <p className="text-[10px] text-gray-400">{topic.last}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-red-500">{topic.score}</span>
          <span className="text-[10px] font-semibold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full cursor-pointer">
            Study →
          </span>
        </div>
      </div>
    ))}
  </div>

  {/* Quick Actions */}
{/* Upcoming Lesson */}
<div>

    
  <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Upcoming Lesson</p>

  <div className="mt-3">
    <span className="text-[11px] font-semibold text-blue-500 cursor-pointer hover:text-blue-600">
      + Add lesson →
    </span>
  </div>

  {[
    {
      date: "Tomorrow · 09:00",
      title: "Circuits and Landings",
      suggestion: "Review traffic pattern procedures and VASI/PAPI reading",
    },
    {
      date: "Saturday · 14:00",
      title: "Navigation Exercise",
      suggestion: "Review VOR tracking and pilotage techniques",
    },
  ].map((lesson) => (
    <div key={lesson.title} className="py-2.5 border-b border-gray-100 last:border-none">
      <p className="text-[10px] text-gray-400 font-medium mb-0.5">{lesson.date}</p>
      <p className="text-xs font-semibold text-black mb-1">{lesson.title}</p>
      <p className="text-[10px] text-gray-400 leading-relaxed">Suggested: {lesson.suggestion}</p>
    </div>
  ))}


</div>
</div>
      </div>
    </>
  );
}