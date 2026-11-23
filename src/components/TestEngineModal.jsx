import React, { useState, useEffect } from 'react';
import { 
  X, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  Award, 
  RotateCcw,
  ShieldAlert,
  Sparkles,
  BarChart
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TestEngineModal({ test, isOpen, onClose }) {
  if (!isOpen || !test) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState({});
  const [timeLeft, setTimeLeft] = useState((test.durationMinutes || 20) * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

  const questions = test.questions || [];
  const currentQ = questions[currentIndex] || questions[0];

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted]);

  // Format seconds to mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optionIndex) => {
    if (isSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIndex]: optionIndex
    });
  };

  const toggleMarkReview = () => {
    setMarkedForReview({
      ...markedForReview,
      [currentIndex]: !markedForReview[currentIndex]
    });
  };

  const handleSubmitTest = () => {
    setIsSubmitted(true);
    setShowConfirmSubmit(false);

    // Calculate score
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) {
        score += 4; // Standard 4 marks per question
      } else if (selectedAnswers[idx] !== undefined) {
        score -= 1; // Negative marking -1
      }
    });

    // Fire celebration confetti if score > 50%
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Ignore if confetti not supported
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setMarkedForReview({});
    setCurrentIndex(0);
    setTimeLeft((test.durationMinutes || 20) * 60);
    setIsSubmitted(false);
  };

  // Stats calculation
  const totalAttempted = Object.keys(selectedAnswers).length;
  let correctCount = 0;
  let wrongCount = 0;

  questions.forEach((q, idx) => {
    if (selectedAnswers[idx] !== undefined) {
      if (selectedAnswers[idx] === q.correct) correctCount++;
      else wrongCount++;
    }
  });

  const marksEarned = (correctCount * 4) - (wrongCount * 1);
  const maxPossibleMarks = questions.length * 4;
  const accuracy = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Test Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold bg-amber-400 text-slate-900 px-2 py-0.2 rounded uppercase">
                  {test.category}
                </span>
                <span className="text-xs text-slate-400">Class {test.class} • {test.subject}</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight line-clamp-1">
                {test.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Live Timer */}
            {!isSubmitted && (
              <div className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-bold border ${
                timeLeft < 300 
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse' 
                  : 'bg-white/10 text-white border-white/20'
              }`}>
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            )}

            {/* Exit/Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Active Test Mode vs Submitted Report Mode */}
        {!isSubmitted ? (
          <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
            
            {/* Left: Active Question Area */}
            <div className="flex-1 p-5 sm:p-7 overflow-y-auto flex flex-col justify-between">
              <div>
                
                {/* Question numbering & marks */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-brand-blue uppercase bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                      Question {currentIndex + 1} of {questions.length}
                    </span>
                    {markedForReview[currentIndex] && (
                      <span className="text-[11px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded flex items-center gap-1">
                        <Bookmark className="w-3 h-3 fill-current" /> Review Later
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    +4 Marks / -1 Negative
                  </span>
                </div>

                {/* Question Text */}
                <div className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed whitespace-pre-line mb-6">
                  {currentQ.question}
                </div>

                {/* Options List */}
                <div className="space-y-3">
                  {currentQ.options.map((opt, oIdx) => {
                    const isSelected = selectedAnswers[currentIndex] === oIdx;
                    return (
                      <div
                        key={oIdx}
                        onClick={() => handleSelectOption(oIdx)}
                        className={`p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm font-medium flex items-center space-x-3 cursor-pointer transition-all duration-150 ${
                          isSelected
                            ? 'bg-blue-50/80 border-brand-blue text-brand-blue font-bold shadow-xs'
                            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-brand-blue text-white'
                            : 'border border-slate-300 text-slate-500'
                        }`}>
                          {String.fromCharCode(65 + oIdx)}
                        </div>
                        <span className="leading-snug">{opt}</span>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Bottom Nav Buttons for Question */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold disabled:opacity-40 flex items-center space-x-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={toggleMarkReview}
                    className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center space-x-1 ${
                      markedForReview[currentIndex]
                        ? 'bg-amber-100 border-amber-300 text-amber-900'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{markedForReview[currentIndex] ? 'Marked' : 'Mark Review'}</span>
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  {currentIndex < questions.length - 1 ? (
                    <button
                      onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
                      className="px-4 py-2 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-bold flex items-center space-x-1 shadow-xs"
                    >
                      <span>Next Question</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowConfirmSubmit(true)}
                      className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center space-x-1 shadow-md"
                    >
                      <span>Submit Test</span>
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* Right: Question Navigator Palette */}
            <div className="w-full lg:w-72 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 p-5 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-3">
                  Question Palette
                </h4>

                {/* Grid of question buttons */}
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {questions.map((_, idx) => {
                    const isAnswered = selectedAnswers[idx] !== undefined;
                    const isMarked = markedForReview[idx];
                    const isCurrent = currentIndex === idx;

                    let bgClass = 'bg-white border-slate-200 text-slate-700';
                    if (isAnswered) bgClass = 'bg-emerald-500 text-white border-emerald-600';
                    if (isMarked) bgClass = 'bg-amber-400 text-slate-900 border-amber-500 font-bold';
                    if (isCurrent) bgClass += ' ring-2 ring-brand-blue';

                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-9 rounded-lg border text-xs font-bold flex items-center justify-center transition-all ${bgClass}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                {/* Palette Legends */}
                <div className="space-y-1.5 text-[11px] text-slate-600 border-t border-slate-200 pt-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded bg-emerald-500"></span>
                    <span>Answered ({totalAttempted})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded bg-amber-400"></span>
                    <span>Marked for Review ({Object.values(markedForReview).filter(Boolean).length})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded bg-white border border-slate-300"></span>
                    <span>Not Attempted ({questions.length - totalAttempted})</span>
                  </div>
                </div>
              </div>

              {/* Direct Submit Action */}
              <div className="pt-4 border-t border-slate-200 mt-4">
                <button
                  onClick={() => setShowConfirmSubmit(true)}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  Complete & Submit Test
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* Result & Performance Report View */
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Top Score Banner */}
            <div className="bg-gradient-to-br from-blue-50 via-teal-50 to-slate-50 border border-blue-200 rounded-2xl p-6 text-center">
              <span className="text-xs font-extrabold text-brand-blue bg-white px-3 py-1 rounded-full border border-blue-200 shadow-2xs">
                Performance Evaluation Report
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Score: {marksEarned} / {maxPossibleMarks}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {marksEarned >= maxPossibleMarks * 0.75 
                  ? 'Outstanding preparation! You are on track for 95%+ in Boards.' 
                  : 'Good effort! Review the incorrect questions below to strengthen concepts.'}
              </p>

              {/* Key Score Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto mt-6 text-center">
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-400 font-medium">Attempted</div>
                  <div className="text-base font-bold text-slate-800">{totalAttempted} / {questions.length}</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-400 font-medium">Correct</div>
                  <div className="text-base font-bold text-emerald-600">{correctCount}</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-400 font-medium">Wrong (-1)</div>
                  <div className="text-base font-bold text-rose-600">{wrongCount}</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-400 font-medium">Accuracy</div>
                  <div className="text-base font-bold text-brand-blue">{accuracy}%</div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  onClick={handleRetake}
                  className="px-4 py-2 rounded-xl bg-brand-blue text-white text-xs font-bold hover:bg-brand-blue-dark transition-colors flex items-center space-x-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Test</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
                >
                  Back to Portal
                </button>
              </div>
            </div>

            {/* Detailed Question by Question Review */}
            <div className="space-y-4">
              <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">
                Detailed Solutions & Explanation
              </h4>

              {questions.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isCorrect = userAns === q.correct;
                const isSkipped = userAns === undefined;

                return (
                  <div 
                    key={idx}
                    className={`p-4 sm:p-5 rounded-2xl border text-xs sm:text-sm ${
                      isCorrect 
                        ? 'bg-emerald-50/40 border-emerald-200' 
                        : isSkipped 
                        ? 'bg-slate-50 border-slate-200' 
                        : 'bg-rose-50/40 border-rose-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-800">
                        Q{idx + 1}:
                      </span>
                      {isCorrect ? (
                        <span className="text-emerald-700 font-bold flex items-center gap-1 text-xs">
                          <CheckCircle2 className="w-4 h-4" /> Correct (+4)
                        </span>
                      ) : isSkipped ? (
                        <span className="text-slate-500 font-semibold text-xs">
                          Skipped (0)
                        </span>
                      ) : (
                        <span className="text-rose-700 font-bold flex items-center gap-1 text-xs">
                          <XCircle className="w-4 h-4" /> Incorrect (-1)
                        </span>
                      )}
                    </div>

                    <div className="font-medium text-slate-900 mb-3 whitespace-pre-line">
                      {q.question}
                    </div>

                    {/* Options status */}
                    <div className="space-y-1.5 pl-2 mb-3">
                      {q.options.map((opt, oIdx) => (
                        <div
                          key={oIdx}
                          className={`p-2 rounded-lg text-xs flex items-center justify-between ${
                            oIdx === q.correct
                              ? 'bg-emerald-100 text-emerald-900 font-bold border border-emerald-300'
                              : oIdx === userAns
                              ? 'bg-rose-100 text-rose-900 font-bold border border-rose-300'
                              : 'text-slate-600'
                          }`}
                        >
                          <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                          {oIdx === q.correct && <span className="text-[10px] uppercase font-bold text-emerald-800">Correct Answer</span>}
                          {oIdx === userAns && oIdx !== q.correct && <span className="text-[10px] uppercase font-bold text-rose-800">Your Answer</span>}
                        </div>
                      ))}
                    </div>

                    {/* Step-by-step Explanation */}
                    {q.explanation && (
                      <div className="mt-3 p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700">
                        <strong className="text-brand-blue font-bold">Step-by-step Board Explanation: </strong>
                        <span>{q.explanation}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* Confirmation Modal overlay when submitting */}
        {showConfirmSubmit && (
          <div className="fixed inset-0 z-60 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl border border-slate-200 animate-in zoom-in-95">
              <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
              <h4 className="text-base font-bold text-slate-900">Are you ready to submit your test?</h4>
              <p className="text-xs text-slate-500">
                You have attempted <strong>{totalAttempted}</strong> out of <strong>{questions.length}</strong> questions. Time remaining: {formatTime(timeLeft)}.
              </p>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setShowConfirmSubmit(false)}
                  className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                >
                  Continue Test
                </button>
                <button
                  onClick={handleSubmitTest}
                  className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
                >
                  Yes, Submit
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
