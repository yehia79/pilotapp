"use client";

import { useState } from "react";

const flights = [
  { id: 1, date: "Mar 14", route: "HECA → HECA", aircraft: "C172", type: "Dual", time: "1.5", total: "1.5", solo: "0.0", night: "0.0", xc: "0.0", instructor: "Capt. Ahmed Hassan", reg: "SU-YEH", remarks: "Practiced circuits and touch-and-goes. Crosswind landings improving. Need to work on final approach speed control." },
  { id: 2, date: "Mar 10", route: "HECA → HEAT", aircraft: "C172", type: "X-Country", time: "1.5", total: "1.5", solo: "0.0", night: "0.0", xc: "1.5", instructor: "Capt. Ahmed Hassan", reg: "SU-YEH", remarks: "First cross-country. Good navigation, one wrong turn corrected quickly." },
  { id: 3, date: "Mar 7", route: "HECA → HECA", aircraft: "C172", type: "Solo", time: "0.8", total: "0.8", solo: "0.8", night: "0.0", xc: "0.0", instructor: "—", reg: "SU-YEH", remarks: "First solo! Three circuits, all smooth landings. One of the best days." },
  { id: 4, date: "Mar 3", route: "HECA → HECA", aircraft: "C172", type: "Dual", time: "1.2", total: "1.2", solo: "0.0", night: "0.0", xc: "0.0", instructor: "Capt. Ahmed Hassan", reg: "SU-YEH", remarks: "Pre-solo practice. Circuits improving." },
  { id: 5, date: "Feb 28", route: "HECA → HECA", aircraft: "C172", type: "Dual", time: "1.0", total: "1.0", solo: "0.0", night: "1.0", xc: "0.0", instructor: "Capt. Ahmed Hassan", reg: "SU-YEH", remarks: "Night circuits with instructor. Good progress on night landings." },
  { id: 6, date: "Feb 24", route: "HECA → HECA", aircraft: "C172", type: "Solo", time: "0.7", total: "0.7", solo: "0.7", night: "0.0", xc: "0.0", instructor: "—", reg: "SU-YEH", remarks: "Solo circuits. Feeling more confident on finals." },
  { id: 7, date: "Feb 20", route: "HECA → HECA", aircraft: "C172", type: "Dual", time: "1.3", total: "1.3", solo: "0.0", night: "0.0", xc: "0.0", instructor: "Capt. Ahmed Hassan", reg: "SU-YEH", remarks: "Stalls and slow flight practice." },
  { id: 8, date: "Feb 15", route: "HECA → HECA", aircraft: "C172", type: "Dual", time: "1.1", total: "1.1", solo: "0.0", night: "0.0", xc: "0.0", instructor: "Capt. Ahmed Hassan", reg: "SU-YEH", remarks: "First lesson. Straight and level flight introduction." },
];

const typeStyles: Record<string, string> = {
  "Dual": "bg-blue-50 text-blue-600",
  "Solo": "bg-green-50 text-green-600",
  "X-Country": "bg-orange-50 text-orange-500",
};

export default function FlightLog() {
  const [selected, setSelected] = useState(flights[0]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex h-full overflow-hidden bg-white">

      {/* Flight list */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Topbar */}
        <div className="h-[44px] border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
          <span className="text-[13px] font-bold text-black">Flight Logbook</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-200 text-gray-600 hover:border-gray-300 transition-colors">
              Filter
            </button>
            <button
              onClick={() => setShowForm(true)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-500 hover:bg-blue-600 text-white transition-colors"
            >
              + Log Flight
            </button>
          </div>
        </div>

        {/* Stats strip */}
        <div className="flex border-b border-gray-200 flex-shrink-0">
          {[
            { val: "17.0", label: "Total Hours", sub: "23 to go", color: "text-blue-500" },
            { val: "2.0", label: "Solo", sub: "8 to go", color: "text-blue-500" },
            { val: "1.5", label: "Cross Country", sub: "3.5 to go", color: "text-blue-500" },
            { val: "3.0", label: "Night", sub: "Done ✓", color: "text-green-600" },
            { val: "12", label: "Flights Logged", sub: "This training", color: "text-blue-500" },
          ].map((s) => (
            <div key={s.label} className="flex-1 px-4 py-2.5 border-r border-gray-100 last:border-r-0">
              <div className="text-[18px] font-bold text-black tracking-tight">{s.val}</div>
              <div className="text-[10px] text-gray-400 font-medium mt-0.5">{s.label}</div>
              <div className={`text-[10px] font-semibold mt-0.5 ${s.color}`}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto">
          {flights.map((flight) => (
            <div
              key={flight.id}
              onClick={() => { setSelected(flight); setShowForm(false); }}
              className={`flex items-center gap-3 px-5 py-2.5 border-b border-gray-100 cursor-pointer transition-colors ${
                selected.id === flight.id && !showForm ? "bg-blue-50" : "hover:bg-gray-50"
              }`}
            >
              <span className="text-[11px] font-semibold text-black min-w-[64px]">{flight.date}</span>
              <span className="text-[12px] font-semibold text-black flex-1">{flight.route}</span>
              <span className="text-[10px] text-gray-400 min-w-[40px]">{flight.aircraft}</span>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full min-w-[60px] text-center ${typeStyles[flight.type] || "bg-gray-50 text-gray-500"}`}>
                {flight.type}
              </span>
              <span className="text-[12px] font-bold text-black min-w-[32px] text-right">{flight.time}h</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div className="w-[280px] min-w-[280px] border-l border-gray-200 flex flex-col bg-white">

        {/* DETAIL VIEW */}
        {!showForm && (
          <>
            <div className="px-4 py-3.5 border-b border-gray-100 flex-shrink-0">
              <div className="text-[13px] font-bold text-black">{selected.route}</div>
              <div className="text-[11px] text-gray-400 mt-0.5">{selected.date}, 2026 · {selected.type} · {selected.aircraft}</div>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  { val: `${selected.total}h`, label: "Total Time" },
                  { val: `${selected.night}h`, label: "Night" },
                  { val: `${selected.solo}h`, label: "Solo" },
                  { val: `${selected.xc}h`, label: "Cross Country" },
                ].map((h) => (
                  <div key={h.label} className="bg-gray-50 rounded-lg px-3 py-2">
                    <div className="text-[14px] font-bold text-black">{h.val}</div>
                    <div className="text-[9px] text-gray-400 mt-0.5">{h.label}</div>
                  </div>
                ))}
              </div>
              <div className="mb-3">
                <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Remarks</div>
                <div className="text-[12px] text-gray-600 leading-relaxed bg-gray-50 rounded-lg px-3 py-2.5">{selected.remarks}</div>
              </div>
              {selected.instructor !== "—" && (
                <div className="mb-3">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">Instructor</div>
                  <div className="text-[13px] font-medium text-black">{selected.instructor}</div>
                </div>
              )}
              <div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">Registration</div>
                <div className="text-[13px] font-medium text-black">{selected.reg}</div>
              </div>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="mx-4 mb-4 py-2 border border-gray-200 rounded-lg text-[11px] font-medium text-gray-500 hover:border-gray-300 hover:text-black transition-colors"
            >
              Edit Entry
            </button>
          </>
        )}

        {/* FORM VIEW */}
        {showForm && (
          <>
            <div className="px-4 py-3.5 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <span className="text-[13px] font-bold text-black">Log a Flight</span>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-black text-lg leading-none">×</button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-2 gap-2.5 p-4">
                {[
                  { label: "Date", placeholder: "", type: "date", full: false },
                  { label: "Aircraft", placeholder: "C172", type: "text", full: false },
                  { label: "From", placeholder: "HECA", type: "text", full: false },
                  { label: "To", placeholder: "HECA", type: "text", full: false },
                  { label: "Total Time", placeholder: "1.5", type: "text", full: false },
                  { label: "Solo", placeholder: "0.0", type: "text", full: false },
                  { label: "Night", placeholder: "0.0", type: "text", full: false },
                  { label: "Cross Country", placeholder: "0.0", type: "text", full: false },
                  { label: "Instructor", placeholder: "Name", type: "text", full: false },
                  { label: "Registration", placeholder: "SU-YEH", type: "text", full: false },
                ].map((f) => (
                  <div key={f.label} className={f.full ? "col-span-2" : ""}>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">{f.label}</div>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      className="w-full border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-black outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                ))}
                <div className="col-span-2">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">Remarks</div>
                  <textarea
                    placeholder="What did you work on today?"
                    className="w-full border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-black outline-none focus:border-blue-500 transition-colors resize-none h-16"
                  />
                </div>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-2 border-t border-gray-100">
              <button
                onClick={() => setShowForm(false)}
                className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                Save Flight
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="w-full py-2 border border-gray-200 hover:border-gray-300 text-gray-500 hover:text-black rounded-lg text-xs font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
