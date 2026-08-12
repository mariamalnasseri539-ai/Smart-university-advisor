import React from "react";
import { GraduationCap, Bookmark, Globe, Sun, Moon } from "lucide-react";
import { translations } from "../data/translations";

export function Header({ 
  lang, 
  onToggleLang, 
  theme, 
  onToggleTheme, 
  onOpenBookmarks, 
  bookmarksCount, 
  onGoHome 
}) {
  const t = translations[lang] || translations.ar;

  return (
    <header className="sticky top-0 z-40 glass-nav border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button
          onClick={onGoHome}
          className="flex items-center gap-3 group text-right focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 dark:bg-slate-950 light:bg-white rounded-[14px] flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-indigo-400 group-hover:rotate-6 transition-transform duration-300" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
          </div>

          <div>
            <span className="text-xl font-black tracking-tight text-white flex items-center gap-1.5 font-cairo">
              {t.appTitle} <span className="shimmer-text">{t.shimmerText}</span>
            </span>
            <span className="text-xs font-semibold text-indigo-300/80 block">
              {t.appSubTitle}
            </span>
          </div>
        </button>

        {/* Actions / Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold bg-slate-900/90 text-slate-200 border border-slate-700/60 hover:border-indigo-500/50 hover:text-white transition-all duration-200 shadow-sm"
            title={lang === "ar" ? "Switch to English" : "التحويل للغة العربية"}
          >
            <Globe className="w-4 h-4 text-cyan-400" />
            <span>{lang === "ar" ? "English" : "العربية"}</span>
          </button>

          {/* Theme Switcher (Dark / Light) */}
          <button
            onClick={onToggleTheme}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold bg-slate-900/90 text-slate-200 border border-slate-700/60 hover:border-indigo-500/50 hover:text-white transition-all duration-200 shadow-sm"
            title={theme === "dark" ? "الوضع النهاري (Light Mode)" : "الوضع الليلي (Dark Mode)"}
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">نهار</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-indigo-400" />
                <span className="hidden sm:inline">ليل</span>
              </>
            )}
          </button>

          {/* Bookmarks Drawer Button */}
          <button
            onClick={onOpenBookmarks}
            className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900/90 text-slate-200 border border-slate-700/60 hover:border-indigo-500/50 hover:text-white transition-all duration-200 shadow-sm"
            title={t.bookmarksTitle}
          >
            <Bookmark className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">{t.bookmarksTitle}</span>
            {bookmarksCount > 0 && (
              <span className="flex items-center justify-center bg-amber-500 text-slate-950 font-extrabold text-[11px] w-5 h-5 rounded-full shadow-md animate-bounce">
                {bookmarksCount}
              </span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
}
