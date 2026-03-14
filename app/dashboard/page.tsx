export default function Dashboard() {
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
      <div className="flex-1 overflow-y-auto px-10 py-8">
        <h1 className="text-xl font-bold text-black mb-1">Good morning, Yehia</h1>
        <p className="text-xs text-gray-400 mb-8">PPL Stage</p>
      <div className="grid grid-cols-2 gap-8">

  {/* PPL Progress */}
  <div>
    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">PPL Progress</p>
    <div className="flex justify-between text-sm mb-1.5">
      <span className="font-semibold text-black">Overall completion</span>
      <span className="font-semibold text-blue-500">42%</span>
    </div>
    <div className="h-[3px] bg-gray-100 rounded-full mb-4">
      <div className="h-[3px] bg-blue-500 rounded-full w-[42%]" />
    </div>
    <div className="flex items-center justify-between py-2 border-t border-gray-100 cursor-pointer">
      <span className="text-xs font-medium text-gray-500">Flight Hours</span>
      <span className="text-[11px] text-gray-400">17 / 40 hrs</span>
    </div>
  </div>

  {/* Study Progress */}
  <div>
    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Study Progress</p>

    <div className="flex items-center gap-2.5 py-2.5 border-b border-gray-100">
      <div className="w-6 h-6 rounded-md bg-gray-50 flex items-center justify-center flex-shrink-0">
        <span className="text-[10px]">📖</span>
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-xs font-medium text-black">Notes</span>
          <span className="text-[11px] font-semibold text-blue-500">58%</span>
        </div>
        <div className="h-[2px] bg-gray-100 rounded-full">
          <div className="h-[2px] bg-blue-500 rounded-full w-[58%]" />
        </div>
        <span className="text-[10px] text-gray-400">Chapter 7 of 12</span>
      </div>
    </div>

    <div className="flex items-center gap-2.5 py-2.5 border-b border-gray-100">
      <div className="w-6 h-6 rounded-md bg-gray-50 flex items-center justify-center flex-shrink-0">
        <span className="text-[10px]">🃏</span>
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-xs font-medium text-black">Flashcards</span>
          <span className="text-[11px] font-semibold text-purple-500">71%</span>
        </div>
        <div className="h-[2px] bg-gray-100 rounded-full">
          <div className="h-[2px] bg-purple-500 rounded-full w-[71%]" />
        </div>
        <span className="text-[10px] text-gray-400">284 of 400 mastered</span>
      </div>
    </div>

    <div className="flex items-center gap-2.5 py-2.5">
      <div className="w-6 h-6 rounded-md bg-gray-50 flex items-center justify-center flex-shrink-0">
        <span className="text-[10px]">✅</span>
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-xs font-medium text-black">Question Bank</span>
          <span className="text-[11px] font-semibold text-green-500">35%</span>
        </div>
        <div className="h-[2px] bg-gray-100 rounded-full">
          <div className="h-[2px] bg-green-500 rounded-full w-[35%]" />
        </div>
        <span className="text-[10px] text-gray-400">312 of 900 · avg 78%</span>
      </div>
    </div>
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
  <div>
    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Quick Actions</p>

    {[
      { name: "Continue Notes", sub: "Weather Theory — Ch.7", color: "bg-blue-500" },
      { name: "Daily Flashcards", sub: "12 cards due", color: "bg-purple-500" },
      { name: "Mock Exam", sub: "Last score: 78%", color: "bg-green-500" },
      { name: "Log a Flight", sub: "Last entry: 3 days ago", color: "bg-orange-400" },
    ].map((action) => (
      <div key={action.name} className="flex items-center justify-between px-3 py-2.5 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer mb-1.5 last:mb-0">
        <div className="flex items-center gap-2.5">
          <div className={`w-1.5 h-1.5 rounded-full ${action.color}`} />
          <div>
            <p className="text-xs font-medium text-black">{action.name}</p>
            <p className="text-[10px] text-gray-400">{action.sub}</p>
          </div>
        </div>
        <span className="text-xs text-gray-300">→</span>
      </div>
    ))}
  </div>

</div>
      </div>
    </>
  );
}