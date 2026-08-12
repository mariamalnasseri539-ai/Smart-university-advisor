import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { 
  Award, CheckCircle2, Bookmark, BookmarkCheck, Printer, Share2, 
  RotateCcw, Sparkles, TrendingUp, GraduationCap,
  BookOpen, Check, Target, Lightbulb, Compass, Star
} from "lucide-react";
import { translations } from "../data/translations";

export function ResultView({ 
  lang,
  resultData, 
  onRetakeQuiz, 
  onToggleBookmark, 
  isBookmarked
}) {
  const t = translations[lang] || translations.ar;
  const isRtl = lang === "ar";
  const { personalitySummary, primaryMajor, alternateMajors } = resultData || {};

  // Confetti effect on mount
  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log("Confetti trigger:", e);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${t.appTitle}: ${primaryMajor?.name}`,
        text: isRtl
          ? `لقد حصلت على توصيتي بالتخصص الجامعي الأنسب لي (${primaryMajor?.name}) عبر منصة مستشارك الجامعي الذكي!`
          : `I discovered my ideal university major (${primaryMajor?.englishName || primaryMajor?.name}) on Smart University Advisor!`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(isRtl ? "تم نسخ رابط التقرير بنجاح!" : "Report link copied to clipboard!");
    }
  };

  if (!primaryMajor) {
    return (
      <div className="text-center py-20 text-slate-400">
        No result data available.
        <button onClick={onRetakeQuiz} className="block mx-auto mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl">
          {t.retakeQuiz}
        </button>
      </div>
    );
  }

  const isPrimaryBookmarked = isBookmarked(primaryMajor.name);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      
      {/* Top Action Bar (No Print) */}
      <div className="no-print flex flex-wrap items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-300 font-cairo">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{t.reportBadge}</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Bookmark Primary Major */}
          <button
            onClick={() => onToggleBookmark(primaryMajor)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              isPrimaryBookmarked
                ? "bg-amber-500/20 border border-amber-500/50 text-amber-300"
                : "bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
            }`}
          >
            {isPrimaryBookmarked ? (
              <>
                <BookmarkCheck className="w-4 h-4 text-amber-400" />
                <span>{t.bookmarked}</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4 text-slate-400" />
                <span>{t.bookmarkMajor}</span>
              </>
            )}
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-bold transition-all"
          >
            <Share2 className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">{t.share}</span>
          </button>

          {/* Print PDF */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600/30 border border-indigo-500/40 text-xs font-bold transition-all"
          >
            <Printer className="w-4 h-4 text-indigo-400" />
            <span>{t.exportPrint}</span>
          </button>

          {/* Retake */}
          <button
            onClick={onRetakeQuiz}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-rose-300 border border-slate-700 text-xs font-bold transition-all"
          >
            <RotateCcw className="w-4 h-4 text-rose-400" />
            <span className="hidden sm:inline">{t.retakeQuiz}</span>
          </button>
        </div>
      </div>

      {/* Personality Summary Banner */}
      {personalitySummary && (
        <div className="bg-gradient-to-r from-indigo-950/70 via-purple-950/60 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div className="space-y-2 text-start">
              <h3 className="text-sm font-extrabold text-indigo-300 font-cairo uppercase tracking-wider">
                {t.personalitySummaryTitle}
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-tajawal">
                {personalitySummary}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* PRIMARY RECOMMENDED MAJOR CARD */}
      <div className="glass-card rounded-3xl border-2 border-indigo-500/60 p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8">
        
        {/* Top Glow & Badge */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-3 font-cairo">
              <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
              <span>{t.topMatchBadge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white font-cairo">
              {isRtl ? primaryMajor.name : (primaryMajor.englishName || primaryMajor.name)}
            </h1>
            <p className="text-sm text-indigo-300 font-mono mt-1 font-semibold text-start">
              {isRtl ? primaryMajor.englishName : primaryMajor.name}
            </p>
          </div>

          {/* Compatibility Match Meter */}
          <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-700/80 p-3.5 rounded-2xl shrink-0">
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-600 to-emerald-500 p-1 flex items-center justify-center shadow-lg">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-extrabold text-white text-base font-mono">
                {primaryMajor.compatibilityScore}%
              </div>
            </div>
            <div className="text-start">
              <span className="text-xs font-extrabold text-slate-400 block font-cairo">{t.matchScoreLabel}</span>
              <span className="text-xs font-bold text-emerald-400">{t.matchScoreSub}</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-white font-cairo flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <span>{t.overviewTitle}</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-tajawal bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
            {primaryMajor.overview}
          </p>
        </div>

        {/* REASONS WHY MATCH */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white font-cairo flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>{t.whyMatchTitle}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {primaryMajor.whyMatch?.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs font-mono">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-tajawal">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CORE SUBJECTS & KEY SKILLS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          
          {/* Core Subjects */}
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-3">
            <h4 className="text-sm font-bold text-indigo-300 font-cairo flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>{t.coreSubjectsTitle}</span>
            </h4>
            <ul className="space-y-2">
              {primaryMajor.coreSubjects?.map((subj, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  <span>{subj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Skills to Develop */}
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-3">
            <h4 className="text-sm font-bold text-purple-300 font-cairo flex items-center gap-2">
              <Target className="w-4 h-4 text-purple-400" />
              <span>{t.keySkillsTitle}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {primaryMajor.keySkills?.map((skill, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-200 text-xs font-semibold">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* CAREER & JOB MARKET OUTLOOK */}
        {primaryMajor.careerOutlook && (
          <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-5">
            <h3 className="text-base font-bold text-white font-cairo flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <span>{t.careerOutlookTitle}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">{t.demandLabel}</span>
                <span className="text-sm font-extrabold text-cyan-300">{primaryMajor.careerOutlook.demand}</span>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">{t.medianSalaryLabel}</span>
                <span className="text-sm font-extrabold text-emerald-400 font-mono">{primaryMajor.careerOutlook.medianSalary}</span>
              </div>
            </div>

            {/* Top Roles */}
            {primaryMajor.careerOutlook.topRoles && (
              <div>
                <span className="text-xs font-bold text-slate-300 block mb-2 font-cairo">{t.topRolesLabel}</span>
                <div className="flex flex-wrap gap-2">
                  {primaryMajor.careerOutlook.topRoles.map((role, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5">
                      <span>{role}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Future Trends */}
            {primaryMajor.careerOutlook.futureTrends && (
              <p className="text-xs sm:text-sm text-slate-400 pt-2 border-t border-slate-800 leading-relaxed">
                <strong>{t.futureTrendsLabel}</strong> {primaryMajor.careerOutlook.futureTrends}
              </p>
            )}
          </div>
        )}

        {/* ACTION PLAN & ROADMAP */}
        {primaryMajor.actionPlan && (
          <div className="space-y-4 pt-2">
            <h3 className="text-base font-bold text-white font-cairo flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400" />
              <span>{t.actionPlanTitle}</span>
            </h3>

            <div className="space-y-2.5">
              {primaryMajor.actionPlan.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-indigo-950/30 border border-indigo-500/20 p-4 rounded-2xl text-xs sm:text-sm text-indigo-100">
                  <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-extrabold text-xs shrink-0 font-mono">
                    0{idx + 1}
                  </span>
                  <p className="leading-relaxed font-tajawal pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ALTERNATE MAJORS SECTION */}
      {alternateMajors && alternateMajors.length > 0 && (
        <div className="space-y-6 pt-6">
          <div className="text-start">
            <h2 className="text-2xl font-bold text-white font-cairo flex items-center gap-2">
              <Award className="w-6 h-6 text-purple-400" />
              <span>{t.altMajorsTitle}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-tajawal mt-1">
              {t.altMajorsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {alternateMajors.map((alt, idx) => {
              const isAltBookmarked = isBookmarked(alt.name);

              return (
                <div 
                  key={idx} 
                  className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-800 flex flex-col justify-between space-y-4 relative"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-950 border border-purple-500/30 text-purple-300">
                        {alt.category}
                      </span>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-extrabold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                          {alt.compatibilityScore}% Match
                        </span>

                        <button
                          onClick={() => onToggleBookmark(alt)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 transition-colors"
                          title={t.bookmarkMajor}
                        >
                          {isAltBookmarked ? <BookmarkCheck className="w-4 h-4 fill-amber-400" /> : <Bookmark className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white font-cairo">
                      {isRtl ? alt.name : (alt.englishName || alt.name)}
                    </h3>
                    <p className="text-xs text-indigo-300 font-mono mt-0.5 text-start">
                      {isRtl ? alt.englishName : alt.name}
                    </p>

                    <p className="text-xs text-slate-300 mt-3 leading-relaxed font-tajawal">
                      {alt.overview}
                    </p>

                    {alt.whyMatch && (
                      <div className="mt-4 pt-3 border-t border-slate-800 space-y-1.5">
                        <span className="text-[11px] font-bold text-slate-400 block font-cairo">{t.whyFitAlt}</span>
                        {alt.whyMatch.map((reason, rIdx) => (
                          <div key={rIdx} className="flex items-center gap-1.5 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                            <span>{reason}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {alt.topRoles && (
                    <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                      {alt.topRoles.map((role, rIdx) => (
                        <span key={rIdx} className="text-[10px] bg-slate-900 px-2.5 py-1 rounded-md text-slate-400 border border-slate-800">
                          {role}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="no-print pt-8 text-center">
        <button
          onClick={onRetakeQuiz}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all font-cairo"
        >
          <RotateCcw className="w-4 h-4 text-indigo-400" />
          <span>{t.retakeQuiz}</span>
        </button>
      </div>

    </div>
  );
}
