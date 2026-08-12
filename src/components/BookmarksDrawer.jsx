import React from "react";
import { X, Bookmark, Trash2, GraduationCap } from "lucide-react";
import { translations } from "../data/translations";

export function BookmarksDrawer({ lang, isOpen, onClose, bookmarks, onRemoveBookmark }) {
  const t = translations[lang] || translations.ar;
  const isRtl = lang === "ar";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
      ></div>

      <div className={`fixed inset-y-0 ${isRtl ? "right-0 pl-10" : "left-0 pr-10"} max-w-full flex`}>
        <div className="w-screen max-w-md bg-slate-900 border-x border-slate-800 text-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Bookmark className="w-5 h-5 fill-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-base font-cairo">{t.bookmarksTitle}</h3>
                <p className="text-xs text-slate-400">{t.bookmarksSub}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {bookmarks.length === 0 ? (
              <div className="text-center py-16 text-slate-500 space-y-3">
                <GraduationCap className="w-12 h-12 mx-auto text-slate-700 stroke-1" />
                <p className="text-sm font-tajawal">{t.noBookmarks}</p>
                <p className="text-xs text-slate-600">{t.noBookmarksSub}</p>
              </div>
            ) : (
              bookmarks.map((major, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 flex items-start justify-between gap-3 group hover:border-indigo-500/40 transition-colors"
                >
                  <div className="space-y-1 text-start flex-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-indigo-300">
                      {major.category}
                    </span>
                    <h4 className="font-bold text-sm text-white font-cairo">
                      {isRtl ? major.name : (major.englishName || major.name)}
                    </h4>
                    {major.englishName && (
                      <p className="text-[11px] text-slate-400 font-mono">
                        {isRtl ? major.englishName : major.name}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => onRemoveBookmark(major.name)}
                    className="p-2 text-slate-500 hover:text-rose-400 transition-colors"
                    title="Remove from bookmarks"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
