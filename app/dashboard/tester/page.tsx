"use client";

import { useState } from "react";

const chapters = [
  {
    part: "Part I — Fundamentals of Flight",
    items: [
      { num: "01", title: "Discovering Aviation", sections: [{ name: "Pilot Training", score: null }, { name: "Aviation Opportunities", score: null }] },
      { num: "02", title: "Airplane Systems", sections: [{ name: "Airframes", score: 92 }, { name: "Powerplant", score: 67 }, { name: "Flight Instruments", score: 41 }] },
      { num: "03", title: "Aerodynamic Principles", sections: [{ name: "Four Forces", score: null }, { name: "Stability", score: null }] },
    ],
  },
  {
    part: "Part II — Flight Operations",
    items: [
      { num: "04", title: "The Flight Environment", sections: [{ name: "Airspace", score: null }, { name: "Airports", score: null }] },
      { num: "05", title: "Communication & Information", sections: [{ name: "Radio Procedures", score: null }, { name: "ATC Services", score: null }] },
    ],
  },
  {
    part: "Part III — Aviation Weather",
    items: [
      { num: "06", title: "Meteorology for Pilots", sections: [{ name: "Basic Weather Theory", score: null }, { name: "Weather Hazards", score: null }] },
      { num: "07", title: "Interpreting Weather", sections: [{ name: "METARs & TAFs", score: null }, { name: "Graphic Weather", score: null }] },
    ],
  },
];

const questions = [
  {
    id: 1,
    topic: "Powerplant Systems",
    question: "What is the primary purpose of the aircraft magneto system?",
    options: [
      "To generate high-voltage electricity to fire the spark plugs, independently of the aircraft electrical system",
      "To provide electrical power to the aircraft avionics and lighting systems",
      "To regulate fuel flow to the carburetor during high-altitude flight",
    ],
    correct: 0,
    explanation: "Magnetos are self-contained engine-driven units that generate their own electricity from engine rotation to fire the spark plugs. They operate completely independently of the aircraft battery — which is why the engine continues running even during a complete electrical failure. This is why you check both magnetos during run-up.",
    figure: null,
  },
  {
    id: 2,
    topic: "Powerplant Systems",
    question: "At what temperature range is carburetor icing most likely to occur?",
    options: [
      "Below -20°C only, when outside air temperature is extremely cold",
      "Between -7°C and +21°C with high humidity",
      "Only above 30°C when the engine is running hot",
    ],
    correct: 1,
    explanation: "Carburetor icing is most likely between -7°C and +21°C when humidity is high. The venturi effect in the carburetor causes a temperature drop of up to 20°C, which can cause ice to form even on a warm day. Applying carb heat introduces warm air into the intake, melting the ice.",
    figure: null,
  },
  {
    id: 3,
    topic: "Powerplant Systems",
    question: "What does the mixture control in a piston aircraft engine do?",
    options: [
      "Controls the amount of throttle opening to regulate engine power",
      "Adjusts the ratio of fuel to air entering the engine",
      "Regulates oil pressure during high-altitude operations",
    ],
    correct: 1,
    explanation: "The mixture control adjusts the fuel-to-air ratio. At sea level use a rich mixture. As altitude increases, air becomes less dense — the fuel system still delivers the same volume of fuel creating an overly rich mixture. Leaning the mixture progressively as you climb restores the correct ratio and improves efficiency.",
    figure: null,
  },
  {
    id: 4,
    topic: "Flight Instruments",
    question: "Which instruments are connected to the pitot-static system?",
    options: [
      "Attitude indicator, heading indicator, and turn coordinator",
      "Airspeed indicator, altimeter, and vertical speed indicator",
      "Airspeed indicator, altimeter, and magnetic compass",
    ],
    correct: 1,
    explanation: "The pitot-static system powers three instruments: the Airspeed Indicator (uses both pitot and static pressure), the Altimeter (uses static pressure only), and the Vertical Speed Indicator (uses static pressure only). The gyroscopic instruments — attitude indicator, heading indicator, and turn coordinator — use a separate vacuum or electric power source.",
    figure: "pitot-static",
  },
  {
    id: 5,
    topic: "Flight Instruments",
    question: "What does ANDS stand for regarding magnetic compass errors?",
    options: [
      "Altitude, Navigation, Direction, Speed errors",
      "Accelerate North, Decelerate South — compass acceleration errors on east/west headings",
      "Automatic Navigation Direction System used for compass calibration",
    ],
    correct: 1,
    explanation: "ANDS is a memory aid for magnetic compass acceleration errors: Accelerate North, Decelerate South. When on an easterly or westerly heading, accelerating causes the compass to swing toward North, and decelerating causes it to swing toward South. This is caused by the pendulous vanes that counteract magnetic dip.",
    figure: null,
  },
  {
    id: 6,
    topic: "Airspace",
    question: "What are the VFR weather minimums for Class G airspace below 1,200 ft AGL during the day?",
    options: [
      "3 statute miles visibility, 500 ft below, 1,000 ft above, 2,000 ft horizontal from clouds",
      "1 statute mile visibility and clear of clouds",
      "5 statute miles visibility, 1,000 ft below, 1,000 ft above clouds",
    ],
    correct: 1,
    explanation: "Class G (uncontrolled) airspace below 1,200 ft AGL during the day requires only 1 statute mile visibility and clear of clouds. This is the most permissive VFR requirement. At night the requirement increases to 3 statute miles and 500/1,000/2,000 ft cloud clearances.",
    figure: "airspace-chart",
  },
];

type AnswerState = {
  selected: number | null;
  submitted: boolean;
};

function ScoreColor({ score }: { score: number | null }) {
  if (score === null) return <span className="text-[9px] font-semibold text-gray-300">—</span>;
  if (score >= 80) return <span className="text-[9px] font-semibold text-green-600">{score}%</span>;
  if (score >= 60) return <span className="text-[9px] font-semibold text-orange-500">{score}%</span>;
  return <span className="text-[9px] font-semibold text-red-500">{score}%</span>;
}

export default function ExamTester() {
  const [tocOpen, setTocOpen] = useState(true);
  const [openChapter, setOpenChapter] = useState<string | null>("02");
  const [answers, setAnswers] = useState<Record<number, AnswerState>>({});
  const [figureOpen, setFigureOpen] = useState<string | null>(null);

  function selectOption(qId: number, optIndex: number) {
    if (answers[qId]?.submitted) return;
    setAnswers((prev) => ({
      ...prev,
      [qId]: { selected: optIndex, submitted: false },
    }));
  }

  function submitAnswer(qId: number) {
    if (answers[qId]?.selected === null || answers[qId]?.selected === undefined) return;
    setAnswers((prev) => ({
      ...prev,
      [qId]: { ...prev[qId], submitted: true },
    }));
  }

  const correctCount = Object.entries(answers).filter(([id, a]) => {
    const q = questions.find((q) => q.id === Number(id));
    return a.submitted && a.selected === q?.correct;
  }).length;

  const submittedCount = Object.values(answers).filter((a) => a.submitted).length;

  return (
    <div className="flex h-full overflow-hidden bg-white">

      {/* Sidebar */}
      <div className={`${tocOpen ? "w-[220px] min-w-[220px]" : "w-8 min-w-8"} border-r border-gray-200 flex flex-col transition-all duration-200 overflow-hidden bg-white`}>
        <div className="flex items-center justify-between px-3 py-3 border-b border-gray-100 flex-shrink-0">
          {tocOpen && <span className="text-xs font-bold text-black">Question Bank</span>}
          <button onClick={() => setTocOpen(!tocOpen)} className="text-gray-400 hover:text-black text-xs ml-auto transition-colors">
            {tocOpen ? "‹" : "›"}
          </button>
        </div>
        {tocOpen && (
          <div className="flex-1 overflow-y-auto py-2 px-2">
            {chapters.map((part) => (
              <div key={part.part} className="mb-3">
                <p className="text-[9px] font-semibold uppercase tracking-widest text-gray-400 px-2 py-1">{part.part}</p>
                {part.items.map((ch) => (
                  <div key={ch.num} className="mb-0.5">
                    <button
                      onClick={() => setOpenChapter(openChapter === ch.num ? null : ch.num)}
                      className="w-full flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-bold text-gray-300 w-5 text-left">{ch.num}</span>
                        <span className="text-[11px] font-semibold text-black text-left">{ch.title}</span>
                      </div>
                      <span className="text-[9px] text-gray-300">{openChapter === ch.num ? "▼" : "▶"}</span>
                    </button>
                    {openChapter === ch.num && (
                      <div className="pl-6 pb-1">
                        {ch.sections.map((sec) => (
                          <div key={sec.name} className="flex items-center justify-between py-0.5 px-2">
                            <button className="text-[10px] text-blue-500 font-semibold text-left">{sec.name}</button>
                            <ScoreColor score={sec.score} />
                          </div>
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

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Topbar */}
        <div className="h-[44px] border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-gray-400">Exam Tester</span>
            <span className="text-gray-200">/</span>
            <span className="font-semibold text-black">Powerplant & Instruments</span>
          </div>
          <div className="flex items-center gap-2">
            {submittedCount > 0 && (
              <>
                <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{correctCount} correct</span>
                <span className="text-[10px] font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">{submittedCount - correctCount} wrong</span>
              </>
            )}
            <span className="text-xs text-gray-400"><span className="font-bold text-black">{submittedCount}</span> / {questions.length}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-3 px-6 py-1.5 border-b border-gray-100 flex-shrink-0">
          <div className="flex-1 h-[3px] bg-gray-100 rounded-full">
            <div className="h-[3px] bg-blue-500 rounded-full transition-all" style={{ width: `${(submittedCount / questions.length) * 100}%` }} />
          </div>
          {submittedCount > 0 && (
            <span className="text-[10px] font-semibold text-blue-500">
              {Math.round((correctCount / submittedCount) * 100)}%
            </span>
          )}
        </div>

        {/* Questions — continuous scroll like a book */}
        <div className="flex-1 overflow-y-auto">
         <div className="px-10 py-8 max-w-3xl">
          <div className="flex flex-col gap-10">
            {questions.map((q, index) => {
              const ans = answers[q.id];
              const submitted = ans?.submitted ?? false;
              const selected = ans?.selected ?? null;
              const isCorrect = submitted && selected === q.correct;
              const isWrong = submitted && selected !== q.correct;

              return (
                <div key={q.id} className="flex flex-col gap-4">

                  {/* Question header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Q{index + 1} · {q.topic}</span>
                        {q.figure && (
                          <button
                            onClick={() => setFigureOpen(q.figure)}
                            className="text-[9px] font-bold uppercase tracking-widest text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full hover:bg-blue-100 transition-colors"
                          >
                            View Figure →
                          </button>
                        )}
                      </div>
                      <p className="text-[15px] font-semibold text-black leading-snug">{q.question}</p>
                    </div>
                    {submitted && (
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${isCorrect ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"}`}>
                        {isCorrect ? "✓ Correct" : "✗ Wrong"}
                      </span>
                    )}
                  </div>

                  {/* Options */}
                  <div className="flex flex-col gap-2">
                    {q.options.map((opt, i) => {
                      const isSelected = selected === i;
                      const isThisCorrect = submitted && i === q.correct;
                      const isThisWrong = submitted && isSelected && i !== q.correct;

                      let style = "border-gray-200 hover:border-blue-200 hover:bg-blue-50/30";
                      if (isThisCorrect) style = "border-green-300 bg-green-50";
                      else if (isThisWrong) style = "border-red-300 bg-red-50";
                      else if (isSelected && !submitted) style = "border-blue-400 bg-blue-50";

                      return (
                        <div
                          key={i}
                          onClick={() => selectOption(q.id, i)}
                          className={`flex items-start gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${style} ${submitted ? "cursor-default" : ""}`}
                        >
                          {/* Radio circle */}
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                            isThisCorrect ? "border-green-500 bg-green-500" :
                            isThisWrong ? "border-red-500 bg-red-500" :
                            isSelected ? "border-blue-500 bg-blue-500" :
                            "border-gray-300"
                          }`}>
                            {(isSelected || isThisCorrect) && (
                              <div className="w-[6px] h-[6px] rounded-full bg-white" />
                            )}
                          </div>
                          <span className={`text-sm leading-relaxed ${
                            isThisCorrect ? "text-green-700 font-medium" :
                            isThisWrong ? "text-red-700" :
                            "text-gray-700"
                          }`}>{opt}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Submit button — only shown if not yet submitted */}
                  {!submitted && (
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => submitAnswer(q.id)}
                        disabled={selected === null}
                        className={`px-5 py-2 rounded-lg text-xs font-semibold transition-colors ${
                          selected !== null
                            ? "bg-blue-500 hover:bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        Submit Answer
                      </button>
                      <span className="text-xs text-gray-400">
                        {selected === null ? "Select an option above" : "Ready to submit"}
                      </span>
                    </div>
                  )}

                  {/* Explanation — shown after submit */}
                  {submitted && (
                    <div className={`px-4 py-3 rounded-xl border-l-4 ${isCorrect ? "border-green-400 bg-green-50" : "border-red-400 bg-red-50"}`}>
                      <p className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 ${isCorrect ? "text-green-600" : "text-red-500"}`}>
                        {isCorrect ? "✓ Correct" : `✗ Wrong — Correct answer: ${String.fromCharCode(65 + q.correct)}`}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">{q.explanation}</p>
                    </div>
                  )}

                  {/* Divider between questions */}
                  {index < questions.length - 1 && (
                    <div className="h-px bg-gray-100 mt-2" />
                  )}
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>

      {/* Figure popup */}
      {figureOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-8"
          onClick={() => setFigureOpen(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-black">
                {figureOpen === "pitot-static" ? "Pitot-Static System" : "Airspace Chart"}
              </span>
              <button onClick={() => setFigureOpen(null)} className="text-gray-400 hover:text-black text-xl leading-none">×</button>
            </div>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center text-gray-400 text-sm">
              {figureOpen === "pitot-static"
                ? "[ Pitot-static system diagram ]"
                : "[ Airspace classification chart ]"
              }
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">Tap anywhere outside to close</p>
          </div>
        </div>
      )}

    </div>
  );
}