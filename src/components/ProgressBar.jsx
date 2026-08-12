import React from "react";
import { translations } from "../data/translations";

export function ProgressBar({ lang, currentStep, totalSteps, categoryBadge }) {
  const t = translations[lang] || translations.ar;
  const percentage = Math.round((currentStep / totalSteps) * 100);

  const stepText = t.questionCount.replace("{current}", currentStep).replace("{total}", totalSteps);

  return (
    <div className="w-full space-y-3 mb-8">
      <div className="flex items-center justify-between text-xs sm:text-sm font-bold font-cairo">
        
        {/* Step Indicator & Category */}
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-indigo-900/60 border border-indigo-500/30 text-indigo-300 font-extrabold shadow-sm">
            {stepText}
          </span>
          {categoryBadge && (
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs">
              {categoryBadge}
            </span>
          )}
        </div>

        {/* Percentage */}
        <div className="flex items-center gap-1.5 text-indigo-300">
          <span>{t.progressLevel}</span>
          <span className="text-base font-black text-white font-mono">{percentage}%</span>
        </div>

      </div>

      {/* Progress Track */}
      <div className="relative w-full h-3 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800 shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out relative shadow-md shadow-indigo-500/50"
          style={{ width: `${percentage}%` }}
        >
          {/* Animated Glow on progress edge */}
          <div className="absolute top-0 bottom-0 left-0 w-4 bg-white/40 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
