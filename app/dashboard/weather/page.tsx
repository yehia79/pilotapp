"use client";

import { useState } from "react";

const mockWeather = {
  airport: "Cairo Intl",
  icao: "HECA",
  time: "14:50Z · March 18, 2026",
  metar: "HECA 181450Z 09015KT 9999 FEW030 25/10 Q1013 NOSIG",
  goNogo: "go" as "go" | "marginal" | "nogo",
  conditions: [
    { val: "15", unit: "kt", label: "Wind · 090°", status: "ok", statusText: "Within limits" },
    { val: "10", unit: "km", label: "Visibility", status: "ok", statusText: "Excellent" },
    { val: "3,000", unit: "ft", label: "Ceiling (FEW)", status: "ok", statusText: "No ceiling" },
    { val: "25", unit: "°C", label: "Temperature", status: "ok", statusText: "Normal" },
    { val: "1013", unit: "hPa", label: "Altimeter", status: "ok", statusText: "Standard" },
    { val: "15°", unit: "spread", label: "Temp/Dewpoint", status: "ok", statusText: "Low fog risk" },
  ],
  summary: "Good flying conditions at Cairo today. Wind is from the east at 15 knots — expect a crosswind on runway 05. Visibility is excellent at 10km or more with a few clouds well above 3,000 feet. Temperature and dewpoint spread of 15°C means very low risk of fog. Set your altimeter to 1013 hPa before departure.",
  summaryNote: "Conditions are expected to deteriorate after 20:00Z — plan to be on the ground before then if flying VFR.",
};

const recentAirports = ["HECA", "HEAT", "LLBG"];

const statusColor: Record<string, string> = {
  ok: "text-green-600",
  warn: "text-orange-500",
  bad: "text-red-500",
};

export default function Weather() {
  const [input, setInput] = useState("HECA");
  const [searched, setSearched] = useState(true);
  const [data] = useState(mockWeather);

  return (
    <div className="flex flex-col h-full overflow-hidden bg-white">

      {/* Topbar */}
      <div className="h-[44px] border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
        <span className="text-[13px] font-bold text-black">Weather Briefing</span>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 px-6 py-2.5 border-b border-gray-100 flex-shrink-0">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          placeholder="Enter ICAO code e.g. HECA"
          className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-black tracking-widest outline-none focus:border-blue-500 transition-colors w-48"
        />
        <button
          onClick={() => setSearched(true)}
          className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-lg transition-colors"
        >
          Get Briefing
        </button>
        <div className="flex items-center gap-1.5 ml-2">
          {recentAirports.map((ap) => (
            <button
              key={ap}
              onClick={() => { setInput(ap); setSearched(true); }}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold tracking-widest transition-colors ${
                input === ap && searched ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {ap}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {searched && (
        <div className="flex-1 overflow-y-auto px-6 py-5">

          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <h1 className="text-[18px] font-bold text-black tracking-tight">{data.airport} — {data.icao}</h1>
              <p className="text-[11px] text-gray-400 mt-1">Updated 4 minutes ago · {data.time}</p>
            </div>
            <div className="text-right">
              {data.goNogo === "go" && (
                <span className="inline-block bg-green-50 text-green-600 border border-green-200 text-[12px] font-bold px-3 py-1.5 rounded-full">✓ VFR — Good to fly</span>
              )}
              {data.goNogo === "marginal" && (
                <span className="inline-block bg-orange-50 text-orange-500 border border-orange-200 text-[12px] font-bold px-3 py-1.5 rounded-full">⚠ Marginal VFR</span>
              )}
              {data.goNogo === "nogo" && (
                <span className="inline-block bg-red-50 text-red-500 border border-red-200 text-[12px] font-bold px-3 py-1.5 rounded-full">✗ Below VFR minimums</span>
              )}
            </div>
          </div>

          {/* Condition grid */}
          <div className="grid grid-cols-3 gap-3 mb-5 max-w-2xl">
            {data.conditions.map((c) => (
              <div key={c.label} className="bg-gray-50 rounded-xl px-4 py-3">
                <div className="text-[20px] font-bold text-black tracking-tight leading-none">
                  {c.val}<span className="text-[11px] font-normal text-gray-400 ml-0.5">{c.unit}</span>
                </div>
                <div className="text-[10px] text-gray-400 mt-1">{c.label}</div>
                <div className={`text-[10px] font-semibold mt-1 ${statusColor[c.status]}`}>{c.statusText}</div>
              </div>
            ))}
          </div>

          {/* Plain English summary */}
          <div className="max-w-2xl mb-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Plain English Summary</p>
            <div className="bg-gray-50 rounded-xl px-4 py-3.5">
              <p className="text-[13px] text-gray-700 leading-relaxed">{data.summary}</p>
              {data.summaryNote && (
                <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">{data.summaryNote}</p>
              )}
            </div>
          </div>

          {/* Raw METAR */}
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Raw METAR</p>
            <div className="font-mono text-[11px] text-gray-600 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 leading-relaxed break-all">
              {data.metar}
            </div>
          </div>

        </div>
      )}

      {!searched && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[32px] mb-3">🌤</p>
            <p className="text-sm font-semibold text-black mb-1">Enter an airport code</p>
            <p className="text-xs text-gray-400">Type an ICAO code above and press Get Briefing</p>
          </div>
        </div>
      )}
    </div>
  );
}