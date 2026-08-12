import React, { useState, useEffect } from "react";
import { Brain, Sparkles, Cpu, Activity, ShieldCheck } from "lucide-react";
import { translations } from "../data/translations";

export function LoadingState({ lang }) {
  const t = translations[lang] || translations.ar;
  const [stageIndex, setStageIndex] = useState(0);

  const stages = t.loadingStages || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setStageIndex((prev) => (prev + 1) % stages.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [stages.length]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full text-center space-y-8 glass-card p-8 sm:p-12 rounded-3xl border border-indigo-500/30 shadow-2xl relative overflow-hidden animate-fadeIn">
        
        {/* Animated Glow Backdrops */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Central Glowing Icon */}
        <div className="relative inline-flex items-center justify-center">
          <div className="w-28 h-28 rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-1 shadow-2xl shadow-indigo-500/40 animate-pulse-glow">
            <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
              <Brain className="w-14 h-14 text-indigo-400 animate-float" />
            </div>
          </div>
          <Sparkles className="w-7 h-7 text-amber-400 absolute -top-2 -right-2 animate-bounce" />
          <Cpu className="w-6 h-6 text-cyan-400 absolute -bottom-1 -left-2 animate-pulse" />
        </div>

        {/* Loading Titles */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-cairo">
            {t.loadingTitle}
          </h2>
          <p className="text-xs sm:text-sm text-indigo-300 font-semibold flex items-center justify-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400 animate-spin" />
            <span>{t.loadingSub}</span>
          </p>
        </div>

        {/* Dynamic Stage Message Box */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 min-h-[70px] flex items-center justify-center">
          <p className="text-sm font-bold text-slate-200 animate-fadeIn font-tajawal transition-all duration-300">
            {stages[stageIndex]}
          </p>
        </div>

        {/* Simulated Loader Bar */}
        <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
          <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-shimmer rounded-full"></div>
        </div>

        {/* Security badge */}
        <div className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>{t.loadingEncrypted}</span>
        </div>

      </div>
    </div>
  );
}
