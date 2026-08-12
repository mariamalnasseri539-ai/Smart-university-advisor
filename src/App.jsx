import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { ApiKeyModal } from "./components/ApiKeyModal";
import { Questionnaire } from "./components/Questionnaire";
import { LoadingState } from "./components/LoadingState";
import { ResultView } from "./components/ResultView";
import { BookmarksDrawer } from "./components/BookmarksDrawer";
import { analyzeQuizAnswersWithGemini } from "./services/geminiService";

export function App() {
  // App views: "hero" | "quiz" | "loading" | "result"
  const [currentView, setCurrentView] = useState("hero");
  const [userAnswers, setUserAnswers] = useState({});
  const [resultData, setResultData] = useState(null);

  // Language state ("ar" | "en")
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("preferred_lang") || "ar";
  });

  // Theme state ("dark" | "light")
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("preferred_theme") || "dark";
  });

  // API Key state
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem("gemini_api_key") || "";
  });
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);

  // Bookmarks state
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem("saved_university_majors");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);

  // Sync Language changes to HTML attributes
  useEffect(() => {
    localStorage.setItem("preferred_lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  // Sync Theme changes to HTML class
  useEffect(() => {
    localStorage.setItem("preferred_theme", theme);
    if (theme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const toggleLang = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleSaveApiKey = (key) => {
    setApiKey(key);
    localStorage.setItem("gemini_api_key", key);
  };

  useEffect(() => {
    localStorage.setItem("saved_university_majors", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const handleToggleBookmark = (majorObj) => {
    if (!majorObj || !majorObj.name) return;
    setBookmarks((prev) => {
      const exists = prev.some((item) => item.name === majorObj.name);
      if (exists) {
        return prev.filter((item) => item.name !== majorObj.name);
      } else {
        return [...prev, majorObj];
      }
    });
  };

  const handleRemoveBookmark = (majorName) => {
    setBookmarks((prev) => prev.filter((item) => item.name !== majorName));
  };

  const isMajorBookmarked = (majorName) => {
    return bookmarks.some((item) => item.name === majorName);
  };

  const handleSelectAnswer = (questionId, optionId) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setResultData(null);
    setCurrentView("hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStartQuiz = () => {
    setUserAnswers({});
    setCurrentView("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectDemoProfile = async (demoProfile) => {
    setUserAnswers(demoProfile.answers);
    setCurrentView("loading");
    window.scrollTo({ top: 0, behavior: "smooth" });

    const result = await analyzeQuizAnswersWithGemini(demoProfile.answers, apiKey);
    setResultData(result);
    setCurrentView("result");
  };

  const handleSubmitQuiz = async () => {
    setCurrentView("loading");
    window.scrollTo({ top: 0, behavior: "smooth" });

    const result = await analyzeQuizAnswersWithGemini(userAnswers, apiKey);
    setResultData(result);
    setCurrentView("result");
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === "light" ? "bg-slate-50 text-slate-900" : "bg-slate-950 text-slate-100"} font-cairo`}>
      
      {/* Header Navbar */}
      <Header
        lang={lang}
        onToggleLang={toggleLang}
        theme={theme}
        onToggleTheme={toggleTheme}
        apiKey={apiKey}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        bookmarksCount={bookmarks.length}
        onGoHome={handleResetQuiz}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === "hero" && (
          <HeroSection
            lang={lang}
            onStartQuiz={handleStartQuiz}
            onSelectDemoProfile={handleSelectDemoProfile}
          />
        )}

        {currentView === "quiz" && (
          <Questionnaire
            lang={lang}
            userAnswers={userAnswers}
            onSelectAnswer={handleSelectAnswer}
            onSubmitQuiz={handleSubmitQuiz}
            onResetQuiz={handleResetQuiz}
          />
        )}

        {currentView === "loading" && <LoadingState lang={lang} />}

        {currentView === "result" && (
          <ResultView
            lang={lang}
            resultData={resultData}
            onRetakeQuiz={handleResetQuiz}
            onToggleBookmark={handleToggleBookmark}
            isBookmarked={isMajorBookmarked}
          />
        )}
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* API Key Modal */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        apiKey={apiKey}
        onSaveApiKey={handleSaveApiKey}
      />

      {/* Bookmarks Side Drawer */}
      <BookmarksDrawer
        lang={lang}
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarks={bookmarks}
        onRemoveBookmark={handleRemoveBookmark}
      />

    </div>
  );
}

export default App;
