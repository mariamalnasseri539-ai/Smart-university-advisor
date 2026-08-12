import React from "react";
import { GraduationCap, Heart, Sparkles } from "lucide-react";
import { translations } from "../data/translations";

export function Footer({ lang }) {
  const t = translations[lang] || translations.ar;

  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-slate-950/80 text-slate-400 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
        
        {/* Brand info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-white font-bold text-base font-cairo">{t.footerBrand}</h4>
            <p className="text-xs text-slate-500">{t.footerDesc}</p>
          </div>
        </div>

        {/* AI Disclaimer */}
        <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800">
          <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
          <span>{t.footerDisclaimer}</span>
        </div>

        {/* Copyright & Author */}
        <div className="text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-1.5 font-cairo">
          <span>{t.rights} {new Date().getFullYear()}</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 font-bold text-slate-200">
            {t.madeWith} <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> بواسطة <span className="text-indigo-400 font-extrabold tracking-wide font-mono">mariam alnasseri</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
