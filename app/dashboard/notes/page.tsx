"use client";

import { useState } from "react";

const chapters = [
  {
    part: "Part I — Fundamentals of Flight",
    items: [
      { num: "01", title: "Discovering Aviation", sections: ["Pilot Training", "Aviation Opportunities", "Introduction to Human Factors", "Developing Pilot Resilience with CBTA"] },
      { num: "02", title: "Airplane Systems", sections: ["Airplanes", "The Powerplant & Related Systems", "Flight Instruments"] },
      { num: "03", title: "Aerodynamic Principles", sections: ["Four Forces of Flight", "Stability", "Aerodynamics of Maneuvering"] },
    ],
  },
  {
    part: "Part II — Flight Operations",
    items: [
      { num: "04", title: "The Flight Environment", sections: ["Safety of Flight", "Airports", "Aeronautical Charts", "Airspace"] },
      { num: "05", title: "Communication & Information", sections: ["ATC Services", "Radio Procedures", "Sources of Flight Information"] },
    ],
  },
  {
    part: "Part III — Aviation Weather",
    items: [
      { num: "06", title: "Meteorology for Pilots", sections: ["Basic Weather Theory", "Weather Patterns", "Weather Hazards"] },
      { num: "07", title: "Interpreting Weather", sections: ["The Forecasting Process", "Aviation Weather Reports & Forecasts", "Graphic Weather Products", "Sources of Weather Information"] },
    ],
  },
  {
    part: "Part IV — Performance & Navigation",
    items: [
      { num: "08", title: "Airplane Performance", sections: ["Predicting Performance", "Weight & Balance", "Flight Computers"] },
      { num: "09", title: "Navigation", sections: ["Pilotage & Dead Reckoning", "VOR Navigation", "ADF Navigation", "Advanced Navigation"] },
    ],
  },
  {
    part: "Part V — Integrating Knowledge & Skills",
    items: [
      { num: "10", title: "Applying Human Factors", sections: ["Aviation Physiology", "Aeronautical Decision Making"] },
      { num: "11", title: "Flying Cross-Country", sections: ["The Flight Planning Process", "The Flight"] },
    ],
  },
];

export default function Notes() {
  const [tocOpen, setTocOpen] = useState(true);
  const [openChapter, setOpenChapter] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="flex h-full overflow-hidden bg-white">

      {/* TOC Sidebar */}
      <div
        className={`${
          tocOpen ? "w-[220px] min-w-[220px]" : "w-8 min-w-8"
        } border-r border-gray-200 flex flex-col transition-all duration-200 overflow-hidden bg-white`}
      >
        {/* TOC Header */}
        <div className="flex items-center justify-between px-3 py-3 border-b border-gray-100 flex-shrink-0 bg-white">
          {tocOpen && (
            <span className="text-xs font-bold text-black">PPL Contents</span>
          )}
          <button
            onClick={() => setTocOpen(!tocOpen)}
            className="text-gray-400 hover:text-black text-xs ml-auto transition-colors"
          >
            {tocOpen ? "‹" : "›"}
          </button>
        </div>

        {/* TOC Body */}
        {tocOpen && (
          <div className="flex-1 overflow-y-auto py-2 px-2 bg-white">
            {chapters.map((part) => (
              <div key={part.part} className="mb-3">
                <p className="text-[9px] font-semibold uppercase tracking-widest text-gray-400 px-2 py-1">
                  {part.part}
                </p>
                {part.items.map((ch) => (
                  <div key={ch.num} className="mb-0.5">
                    <button
                      onClick={() =>
                        setOpenChapter(openChapter === ch.num ? null : ch.num)
                      }
                      className="w-full flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-bold text-gray-300 w-5 text-left flex-shrink-0">
                          {ch.num}
                        </span>
                        <span className="text-[11px] font-semibold text-black text-left">
                          {ch.title}
                        </span>
                      </div>
                      <span className="text-[9px] text-gray-300 flex-shrink-0">
                        {openChapter === ch.num ? "▼" : "▶"}
                      </span>
                    </button>

                    {openChapter === ch.num && (
                      <div className="pl-6 pb-1">
                        {ch.sections.map((sec) => (
                          <button
                            key={sec}
                            onClick={() => setActiveSection(sec)}
                            className={`w-full text-left text-[10px] py-1 px-2 rounded transition-colors ${
                              activeSection === sec
                                ? "text-blue-500 font-semibold"
                                : "text-gray-500 hover:text-black"
                            }`}
                          >
                            {sec}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-white">
        <div className="h-[44px] border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0 bg-white">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-gray-400">Notes</span>
            <span className="text-gray-200">/</span>
            <span className="font-semibold text-black">
              {activeSection ?? "Select a chapter"}
            </span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-10 py-8 bg-white">
          {activeSection ? (
            <p className="text-sm text-gray-400">
              Content for <strong>{activeSection}</strong> coming soon.
            </p>
          ) : (
            <p className="text-sm text-gray-400">
              Select a chapter from the left to begin.
            </p>
          )}
        </div>
      </div>

    </div>
  );
}