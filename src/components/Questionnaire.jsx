import React, { useState } from "react";
import { 
  ArrowRight, ArrowLeft, RotateCcw, Sparkles, AlertCircle,
  MessageSquarePlus, X, PenTool, Lightbulb, Check
} from "lucide-react";
import { questions } from "../data/questions";
import { ProgressBar } from "./ProgressBar";
import { translations } from "../data/translations";

export function Questionnaire({ lang, userAnswers, onSelectAnswer, onSubmitQuiz, onResetQuiz }) {
  const t = translations[lang] || translations.ar;
  const isRtl = lang === "ar";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [errorNotice, setErrorNotice] = useState(false);

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;
  const currentAnswer = userAnswers[currentQ.id] || "";

  const handleTextChange = (value) => {
    onSelectAnswer(currentQ.id, value);
    if (value.trim().length > 0) {
      setErrorNotice(false);
    }
  };

  const handleAddChip = (chipText) => {
    let updatedText = currentAnswer.trim();
    if (updatedText.length === 0) {
      updatedText = chipText;
    } else if (!updatedText.includes(chipText)) {
      updatedText = `${updatedText}، ${chipText}`;
    }
    onSelectAnswer(currentQ.id, updatedText);
    setErrorNotice(false);
  };

  const handleClearInput = () => {
    onSelectAnswer(currentQ.id, "");
  };

  const handleNext = () => {
    if (!currentAnswer || currentAnswer.trim().length === 0) {
      setErrorNotice(true);
      return;
    }

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setErrorNotice(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      onSubmitQuiz();
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setErrorNotice(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const categoryText = isRtl ? currentQ.category : (currentQ.categoryEn || currentQ.category);
  const badgeText = isRtl ? currentQ.badge : (currentQ.badgeEn || currentQ.badge);
  const questionText = isRtl ? currentQ.question : (currentQ.questionEn || currentQ.question);
  const descriptionText = isRtl ? currentQ.description : (currentQ.descriptionEn || currentQ.description);
  const placeholderText = isRtl ? currentQ.placeholder : (currentQ.placeholderEn || currentQ.placeholder);
  const chipsList = isRtl ? (currentQ.suggestionChips || []) : (currentQ.suggestionChipsEn || currentQ.suggestionChips || []);

  const NextArrow = isRtl ? ArrowLeft : ArrowRight;
  const BackArrow = isRtl ? ArrowRight : ArrowLeft;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      
      {/* Progress Bar */}
      <ProgressBar
        lang={lang}
        currentStep={currentIndex + 1}
        totalSteps={totalQuestions}
        categoryBadge={badgeText}
      />

      {/* Main Question Card */}
      <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden transition-all duration-300">
        
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Question Header */}
        <div className="space-y-3 mb-6 text-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-bold font-cairo">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.categoryPrefix}: {categoryText}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug font-cairo">
            {questionText}
          </h2>

          <p className="text-sm text-slate-300 font-tajawal">
            {descriptionText}
          </p>
        </div>

        {/* Validation Alert Notice */}
        {errorNotice && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-950/50 border border-rose-500/40 text-rose-200 text-xs sm:text-sm font-bold flex items-center gap-2 animate-bounce">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
            <span>{t.selectNotice}</span>
          </div>
        )}

        {/* Open-Ended Textarea Input */}
        <div className="space-y-4">
          <div className="relative">
            <textarea
              rows={4}
              value={currentAnswer}
              onChange={(e) => handleTextChange(e.target.value)}
              placeholder={placeholderText}
              className="w-full bg-slate-950/90 border border-slate-700/80 focus:border-indigo-500 rounded-2xl p-5 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all font-tajawal leading-relaxed shadow-inner"
            ></textarea>

            {/* Clear button inside textarea */}
            {currentAnswer.length > 0 && (
              <button
                type="button"
                onClick={handleClearInput}
                className="absolute top-4 left-4 p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="مسح النص"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            
            {/* Character Count */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 px-2 mt-1">
              <span className="flex items-center gap-1">
                <PenTool className="w-3 h-3 text-indigo-400" />
                <span>إجابة حرّة مفتوحة للذكاء الاصطناعي</span>
              </span>
              <span className="font-mono">{currentAnswer.length} حرف</span>
            </div>
          </div>

          {/* Interactive Suggestion Chips */}
          {chipsList.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5 font-cairo">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>{t.quickSuggestions}</span>
              </span>

              <div className="flex flex-wrap gap-2">
                {chipsList.map((chip, idx) => {
                  const isAlreadyAdded = currentAnswer.includes(chip);

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleAddChip(chip)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200 text-start flex items-center gap-1.5 ${
                        isAlreadyAdded
                          ? "bg-indigo-950 border-indigo-500 text-indigo-200 shadow-sm"
                          : "bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-700 hover:text-white"
                      }`}
                    >
                      {isAlreadyAdded ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      ) : (
                        <MessageSquarePlus className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      )}
                      <span>{chip}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Controls */}
        <div className="flex items-center justify-between gap-4 mt-10 pt-6 border-t border-slate-800/80">
          
          {/* Back button */}
          <button
            onClick={handleBack}
            disabled={currentIndex === 0}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-xs sm:text-sm font-bold font-cairo transition-all ${
              currentIndex === 0
                ? "border-slate-800 text-slate-600 cursor-not-allowed opacity-40"
                : "border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <BackArrow className="w-4 h-4" />
            <span>{t.prevBtn}</span>
          </button>

          {/* Reset button */}
          <button
            onClick={onResetQuiz}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-400 hover:text-rose-400 transition-colors font-cairo"
            title={t.resetBtn}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.resetBtn}</span>
          </button>

          {/* Next / Submit button */}
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all font-cairo"
          >
            <span>{currentIndex === totalQuestions - 1 ? t.finishBtn : t.nextBtn}</span>
            <NextArrow className="w-4 h-4" />
          </button>

        </div>

      </div>
    </div>
  );
}
