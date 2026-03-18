"use client";

import { useState } from "react";

const decks = [
  {
    chapter: "Chapter 2",
    items: [
      { name: "Airplane Systems", due: 12 },
      { name: "Powerplant", due: 0 },
      { name: "Flight Instruments", due: 0 },
    ],
  },
  {
    chapter: "Chapter 4",
    items: [
      { name: "Airspace", due: 8 },
      { name: "Airports", due: 0 },
      { name: "Radio Procedures", due: 0 },
    ],
  },
  {
    chapter: "Chapter 6",
    items: [
      { name: "Weather Theory", due: 5 },
      { name: "Weather Hazards", due: 0 },
    ],
  },
  {
    chapter: "Chapter 7",
    items: [
      { name: "METARs & TAFs", due: 0 },
    ],
  },
];

const sampleCard = {
  deck: "Airplane Systems",
  num: 7,
  total: 12,
  question: "What is the purpose of trim tabs on control surfaces?",
  answer: "Trim tabs are small hinged surfaces attached to control surfaces that reduce the resistance felt by the pilot, allowing hands-off maintenance of a desired flight attitude.",
};

export default function Flashcards() {
  const [answered, setAnswered] = useState(false);
  const [activeDeck, setActiveDeck] = useState("Airplane Systems");

  return (
    <div className="flex h-full overflow-hidden bg-white">

      {/* Deck Sidebar */}
      <div className="w-[210px] min-w-[210px] border-r border-gray-200 flex flex-col bg-white">
        <div className="flex items-center justify-between px-3 py-3 border-b border-gray-100 flex-shrink-0">
          <span className="text-xs font-bold text-black">Decks</span>
          <span className="text-xs text-gray-400 cursor-pointer hover:text-black">‹</span>
        </div>
        <div className="flex-1 overflow-y-auto py-2 px-2">
          {decks.map((group) => (
            <div key={group.chapter} className="mb-3">
              <p className="text-[9px] font-semibold uppercase tracking-widest text-gray-400 px-2 py-1">
                {group.chapter}
              </p>
              {group.items.map((deck) => (
                <button
                  key={deck.name}
                  onClick={() => { setActiveDeck(deck.name); setAnswered(false); }}
                  className={`w-full flex items-center justify-between px-2 py-1.5 rounded-md transition-colors mb-0.5 ${
                    activeDeck === deck.name
                      ? "bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span className={`text-[11px] font-medium ${activeDeck === deck.name ? "text-blue-600 font-semibold" : "text-gray-600"}`}>
                    {deck.name}
                  </span>
                  {deck.due > 0 ? (
                    <span className="text-[9px] font-bold text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded-full">
                      {deck.due} due
                    </span>
                  ) : (
                    <span className="text-[9px] font-semibold text-gray-300 bg-gray-50 px-1.5 py-0.5 rounded-full">
                      0
                    </span>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden bg-white">

        {/* Topbar */}
        <div className="h-[44px] border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-gray-400">Flashcards</span>
            <span className="text-gray-200">/</span>
            <span className="font-semibold text-black">{activeDeck}</span>
          </div>
          <span className="text-xs text-gray-400">
            <span className="font-bold text-black">{sampleCard.num}</span> / {sampleCard.total}
          </span>
        </div>

        {/* Progress + stats */}
        <div className="flex items-center gap-3 px-6 py-2 border-b border-gray-100 flex-shrink-0">
          <div className="flex-1 h-[3px] bg-gray-100 rounded-full">
            <div
              className="h-[3px] bg-blue-500 rounded-full"
              style={{ width: `${(sampleCard.num / sampleCard.total) * 100}%` }}
            />
          </div>
          <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">4 known</span>
          <span className="text-[10px] font-semibold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">2 review</span>
          <span className="text-[10px] font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">6 left</span>
        </div>

        {/* Card area */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-6 gap-4 bg-gray-50">

          {/* The card */}
          <div className="w-full max-w-[520px] bg-white rounded-[20px] px-9 py-10 shadow-[0_1px_4px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.07)] relative">
            <span className="absolute top-5 right-6 text-[11px] font-semibold text-gray-200">
              {String(sampleCard.num).padStart(2, "0")}
            </span>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-500 mb-4">
              {sampleCard.deck}
            </p>
            <p className="text-[20px] font-bold text-black leading-snug tracking-tight">
              {sampleCard.question}
            </p>

            {answered && (
              <>
                <div className="h-px bg-gray-100 my-6" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2">
                  Answer
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {sampleCard.answer}
                </p>
              </>
            )}
          </div>

          {/* Show answer button */}
          {!answered && (
            <button
              onClick={() => setAnswered(true)}
              className="w-full max-w-[520px] py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-black hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              Show Answer
            </button>
          )}

          {/* Rating buttons */}
          {answered && (
            <div className="w-full max-w-[520px] grid grid-cols-4 gap-2">
              {[
                { label: "Again", border: "border-red-200", text: "text-red-500", hover: "hover:bg-red-50" },
                { label: "Hard", border: "border-orange-200", text: "text-orange-500", hover: "hover:bg-orange-50" },
                { label: "Good", border: "border-green-200", text: "text-green-600", hover: "hover:bg-green-50" },
                { label: "Easy", border: "border-blue-200", text: "text-blue-500", hover: "hover:bg-blue-50 bg-blue-50" },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={() => setAnswered(false)}
                  className={`py-2.5 rounded-xl text-xs font-semibold border bg-white ${btn.border} ${btn.text} ${btn.hover} transition-colors`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}