'use client';

export function CrmPipelineMock() {
  const STAGES = [
    { label: 'New Lead', count: 8, color: '#1862EA' },
    { label: 'Engaged', count: 15, color: '#5CAC23' },
    { label: 'Presented', count: 7, color: '#F59E0B' },
    { label: 'Follow Up', count: 11, color: '#8B5CF6' },
  ];

  const CONTACTS = [
    { name: 'Jessica M.', tag: 'Warm', since: '2 days ago' },
    { name: 'David R.', tag: 'Hot', since: '4 hrs ago' },
    { name: 'Amanda L.', tag: 'New', since: 'Just now' },
  ];

  return (
    <div
      className="w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden border border-zinc-800"
      style={{ background: '#06163E' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
            <path d="M10 14 L24 3 L38 14 L38 20 L24 9 L10 20 Z" fill="#1862EA" />
            <path d="M10 26 L24 15 L38 26 L38 32 L24 21 L10 32 Z" fill="#FFFFFF" opacity="0.3" />
            <path d="M10 38 L24 27 L38 38 L38 44 L24 33 L10 44 Z" fill="#5CAC23" />
          </svg>
          <span className="text-sm font-bold text-white tracking-tight">
            Leader<span className="text-[#5CAC23]">CRM</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#5CAC23]" />
          <span className="text-xs text-zinc-400">41 active</span>
        </div>
      </div>

      {/* Pipeline stages */}
      <div className="px-5 py-4 border-b border-white/10">
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Pipeline</div>
        <div className="grid grid-cols-4 gap-2">
          {STAGES.map((s) => (
            <div key={s.label} className="text-center">
              <div className="rounded-xl border border-white/10 bg-white/5 py-2.5 mb-1.5">
                <div className="text-xl font-extrabold" style={{ color: s.color }}>{s.count}</div>
              </div>
              <div className="text-xs text-zinc-500 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent contacts */}
      <div className="px-5 py-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Recent Contacts</div>
        <div className="space-y-2.5">
          {CONTACTS.map((c) => (
            <div key={c.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1862EA]/20 text-xs font-bold text-[#1862EA]">
                  {c.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{c.name}</div>
                  <div className="text-xs text-zinc-500">{c.since}</div>
                </div>
              </div>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                c.tag === 'Hot' ? 'bg-red-500/15 text-red-400' :
                c.tag === 'Warm' ? 'bg-amber-500/15 text-amber-400' :
                'bg-zinc-700 text-zinc-400'
              }`}>{c.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
