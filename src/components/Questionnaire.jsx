import React, { useState } from "react";
import { 
  ArrowRight, ArrowLeft, RotateCcw, Check, Sparkles, AlertCircle,
  Calculator, Dna, TrendingUp, Palette, Scale, BrainCircuit, Microscope,
  Target, Users, Laptop, Building2, Briefcase, Compass, ShieldAlert,
  Cpu, Stethoscope, DollarSign, Wand2, MessageSquare, Code, Activity,
  BarChart3, Layers, Lock, Gamepad2, HeartHandshake, LineChart, Camera,
  BookOpen, Binary, PieChart, Feather, FileText, Wrench, UserCheck, Crown,
  Eye, Mic, Rocket, Heart, Building, PenTool, Award, Zap, Clock, Smile,
  CheckCircle, GraduationCap, BookMarked, FileCheck, Library, Globe,
  ShieldCheck, Coins, Sparkle, Search
} from "lucide-react";
import { questions } from "../data/questions";
import { ProgressBar } from "./ProgressBar";
import { translations } from "../data/translations";

const ICON_MAP = {
  Calculator, Dna, TrendingUp, Palette, Scale, BrainCircuit, Sparkles, Microscope,
  Target, Users, Laptop, Building2, Briefcase, Compass, ShieldAlert,
  Cpu, Stethoscope, DollarSign, Wand2, MessageSquare, Code, Activity,
  BarChart3, Layers, Lock, Gamepad2, HeartHandshake, LineChart, Camera,
  BookOpen, Binary, PieChart, Feather, FileText, Wrench, UserCheck, Crown,
  Eye, Mic, Rocket, Heart, Building, PenTool, Award, Zap, Clock, Smile,
  CheckCircle, GraduationCap, BookMarked, FileCheck, Library, Globe,
  ShieldCheck, Coins, Sparkle, Search
};

export function Questionnaire({ lang, userAnswers, onSelectAnswer, onSubmitQuiz, onResetQuiz }) {
  const t = translations[lang] || translations.ar;
  const isRtl = lang === "ar";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [errorNotice, setErrorNotice] = useState(false);

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;
  const currentAnswer = userAnswers[currentQ.id];

  const handleOptionClick = (optionId) => {
    onSelectAnswer(currentQ.id, optionId);
    setErrorNotice(false);
  };

  const handleNext = () => {
    if (!currentAnswer) {
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
        <div className="space-y-3 mb-8 text-start">
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

        {/* Options List */}
        <div className="space-y-4">
          {currentQ.options.map((option) => {
            const isSelected = currentAnswer === option.id;
            const IconComponent = ICON_MAP[option.icon] || Sparkles;

            const optTitle = isRtl ? option.title : (option.titleEn || option.title);
            const optDesc = isRtl ? option.description : (option.descriptionEn || option.description);

            return (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                className={`w-full text-start p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 group relative ${
                  isSelected
                    ? "bg-gradient-to-r from-indigo-950/90 via-slate-900 to-purple-950/80 border-indigo-500 shadow-lg shadow-indigo-500/20 ring-2 ring-indigo-500/40"
                    : "bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700 text-slate-200"
                }`}
              >
                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 ${
                    isSelected
                      ? "bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-500/30"
                      : "bg-slate-800 text-indigo-400 border-slate-700"
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Text Details */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-base font-bold font-cairo transition-colors ${
                      isSelected ? "text-white" : "text-slate-200 group-hover:text-white"
                    }`}
                  >
                    {optTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed font-tajawal">
                    {optDesc}
                  </p>
                </div>

                {/* Selection Check Circle */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                    isSelected
                      ? "bg-emerald-500 border-emerald-400 text-slate-950"
                      : "border-slate-700 bg-slate-950/40"
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                </div>
              </button>
            );
          })}
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
