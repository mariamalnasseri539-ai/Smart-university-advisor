import React, { useState } from "react";
import { Key, X, Check, ExternalLink, ShieldCheck, Info } from "lucide-react";

export function ApiKeyModal({ isOpen, onClose, apiKey, onSaveApiKey }) {
  const [inputKey, setInputKey] = useState(apiKey || "");
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveApiKey(inputKey.trim());
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  const handleClear = () => {
    setInputKey("");
    onSaveApiKey("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-indigo-500/10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
            <Key className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-cairo">إعدادات مفتاح Gemini API</h3>
            <p className="text-xs text-slate-400">ربط التطبيق بنموذج Google Gemini للتحليل الفوري</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-2 font-cairo">
              مفتاح الـ API الخاص بـ Google Gemini
            </label>
            <div className="relative">
              <input
                type="password"
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full bg-slate-950/90 border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all font-mono dir-ltr"
              />
            </div>
            <p className="mt-2 text-[11px] text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>مفتاحك يتم حفظه محلياً في متصفحك فقط ولا يتم مشاركته مع أي خوادم خارجية.</span>
            </p>
          </div>

          {/* Info Card */}
          <div className="bg-indigo-950/40 border border-indigo-500/20 rounded-2xl p-4 text-xs text-indigo-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-indigo-300">
              <Info className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>كيف تحصل على مفتاح مجاني من Google؟</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              يمكنك الحصول على مفتاح API مجاني بسرعة منمنصة Google AI Studio للبدء فوراً في تحليل شخصيتك بالأدوات الأصلية.
            </p>
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold underline transition-colors pt-1"
            >
              <span>احصل على المفتاح من Google AI Studio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Fallback Notice */}
          <div className="bg-amber-950/30 border border-amber-500/20 rounded-2xl p-3.5 text-xs text-amber-200/90">
            <strong>ملاحظة:</strong> حتى بدون إدخال المفتاح، يوفر التطبيق <strong>محرك تحليل محلي ذكي (Smart Fallback Engine)</strong> يقدم لك توصيات شاملة مجاناً!
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between gap-3 pt-2">
            {inputKey && (
              <button
                type="button"
                onClick={handleClear}
                className="px-4 py-2.5 rounded-xl border border-rose-500/30 text-rose-400 hover:bg-rose-950/40 text-xs font-semibold transition-colors"
              >
                مسح المفتاح
              </button>
            )}

            <div className="flex items-center gap-2 mr-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-semibold transition-colors"
              >
                إلغاء
              </button>

              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all duration-200"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>تم الحفظ بنجاح!</span>
                  </>
                ) : (
                  <span>حفظ وتفعيل</span>
                )}
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}
