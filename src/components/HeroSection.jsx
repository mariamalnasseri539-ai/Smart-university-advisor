import React from "react";
import { Sparkles, ArrowLeft, ArrowRight, Brain, Target, LineChart, Cpu, Stethoscope, TrendingUp, Palette, CheckCircle2 } from "lucide-react";
import { demoProfiles } from "../data/demoProfiles";
import { translations } from "../data/translations";

export function HeroSection({ lang, onStartQuiz, onSelectDemoProfile }) {
  const t = translations[lang] || translations.ar;
  const isRtl = lang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const iconMap = {
    Cpu: Cpu,
    Stethoscope: Stethoscope,
    TrendingUp: TrendingUp,
    Palette: Palette
  };

  return (
    <div className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-bold shadow-lg shadow-indigo-500/10 animate-float">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{t.heroBadge}</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight font-cairo">
          {t.heroTitleLine1} <br className="hidden sm:inline" />
          <span className="shimmer-text">{t.heroTitleLine2}</span>
        </h1>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed font-tajawal">
          {t.heroDescription}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onStartQuiz}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-extrabold text-lg shadow-xl shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all duration-300 group font-cairo"
          >
            <span>{t.startQuiz}</span>
            <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Quick Demo Section */}
        <div className="pt-10 border-t border-slate-800/80">
          <div className="text-center mb-6">
            <span className="text-xs font-bold tracking-wider text-slate-400 uppercase font-cairo">
              {t.quickDemoTitle}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {demoProfiles.map((demo) => {
              const IconComp = iconMap[demo.icon] || Brain;
              const title = isRtl ? demo.title : (demo.titleEn || demo.title);
              const badge = isRtl ? demo.badge : (demo.badgeEn || demo.badge);
              const description = isRtl ? demo.description : (demo.descriptionEn || demo.description);

              return (
                <button
                  key={demo.id}
                  onClick={() => onSelectDemoProfile(demo)}
                  className="glass-card glass-card-hover p-4 rounded-2xl text-start flex flex-col justify-between group border border-slate-800 hover:border-indigo-500/40 text-slate-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${demo.color} p-0.5 text-white flex items-center justify-center shadow-md`}>
                        <IconComp className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-slate-700">
                        {badge}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-white group-hover:text-indigo-300 transition-colors font-cairo">
                      {title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed font-tajawal">
                      {description}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-indigo-400 font-semibold">
                    <span>{t.quickAnalysis}</span>
                    <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
          <div className="glass-card p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div className="text-start">
              <h5 className="text-xs font-bold text-white">{t.feat1Title}</h5>
              <p className="text-[11px] text-slate-400">{t.feat1Sub}</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div className="text-start">
              <h5 className="text-xs font-bold text-white">{t.feat2Title}</h5>
              <p className="text-[11px] text-slate-400">{t.feat2Sub}</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <LineChart className="w-5 h-5" />
            </div>
            <div className="text-start">
              <h5 className="text-xs font-bold text-white">{t.feat3Title}</h5>
              <p className="text-[11px] text-slate-400">{t.feat3Sub}</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-start">
              <h5 className="text-xs font-bold text-white">{t.feat4Title}</h5>
              <p className="text-[11px] text-slate-400">{t.feat4Sub}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
