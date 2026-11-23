import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  Download, 
  Play, 
  Sparkles, 
  Award, 
  ArrowLeft, 
  Clock, 
  HelpCircle,
  ShieldCheck,
  ChevronRight,
  Calculator,
  Search
} from 'lucide-react';
import { classData, subjectsList } from '../data/educationData';

export default function ClassPage({ 
  grade, 
  onBack, 
  onOpenNotes, 
  onStartTest, 
  selectedBoard,
  setSelectedBoard,
  initialSubjectId = 'physics'
}) {
  const currentClassInfo = classData[grade] || classData[12];
  const [selectedSubjectId, setSelectedSubjectId] = useState(initialSubjectId);
  const [searchFilter, setSearchFilter] = useState('');

  const currentSubjectObj = subjectsList.find(s => s.id === selectedSubjectId) || subjectsList[0];
  const chapters = currentClassInfo.subjects[selectedSubjectId] || [];

  const filteredChapters = chapters.filter(ch => 
    ch.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    ch.summary.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      
      {/* Top Banner / Hero for Class Page */}
      <div className="bg-gradient-to-r from-brand-blue-dark via-brand-blue to-teal-800 text-white py-10 sm:py-14 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Back */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-blue-100 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>

            {/* Board Selector inside Class Header */}
            <div className="flex items-center space-x-2 bg-black/20 p-1 rounded-lg backdrop-blur-xs text-xs">
              <button
                onClick={() => setSelectedBoard('cbse')}
                className={`px-3 py-1 rounded font-bold transition-all ${
                  selectedBoard === 'cbse' ? 'bg-white text-brand-blue shadow-xs' : 'text-blue-100 hover:text-white'
                }`}
              >
                CBSE Board
              </button>
              <button
                onClick={() => setSelectedBoard('mpbse')}
                className={`px-3 py-1 rounded font-bold transition-all ${
                  selectedBoard === 'mpbse' ? 'bg-white text-brand-blue shadow-xs' : 'text-blue-100 hover:text-white'
                }`}
              >
                MP Board (MPBSE)
              </button>
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-wider bg-amber-400 text-slate-900 px-2.5 py-0.5 rounded">
              Class {grade}th Portal • Session 2024-25 & 2025-26
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold mt-3 tracking-tight">
              {currentClassInfo.title}
            </h1>
            <p className="text-sm sm:text-base text-blue-100 mt-2 leading-relaxed">
              {currentClassInfo.subtitle}
            </p>
          </div>

          {/* Key Stats Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
            <div>
              <div className="text-xs text-blue-200">Active Students</div>
              <div className="text-lg sm:text-xl font-bold">{currentClassInfo.stats.studentsEnrolled}</div>
            </div>
            <div>
              <div className="text-xs text-blue-200">Available Notes</div>
              <div className="text-lg sm:text-xl font-bold">{currentClassInfo.stats.notesCount}</div>
            </div>
            <div>
              <div className="text-xs text-blue-200">Practice Tests</div>
              <div className="text-lg sm:text-xl font-bold">{currentClassInfo.stats.testsCount}</div>
            </div>
            <div>
              <div className="text-xs text-blue-200">NCERT Solutions</div>
              <div className="text-lg sm:text-xl font-bold text-teal-300">{currentClassInfo.stats.ncertSolutions}</div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        
        {/* Subject Navigation Tabs Bar */}
        <div className="bg-white rounded-2xl shadow-card p-3 border border-slate-200 mb-8 overflow-x-auto">
          <div className="flex items-center space-x-2 min-w-max">
            {subjectsList.map((sub) => {
              const isSelected = sub.id === selectedSubjectId;
              return (
                <button
                  key={sub.id}
                  onClick={() => {
                    setSelectedSubjectId(sub.id);
                    setSearchFilter('');
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition-all ${
                    isSelected
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{sub.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-normal ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {grade === '11' ? sub.class11ChaptersCount : sub.class12ChaptersCount} Ch
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Subject Overview & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                {currentSubjectObj.name} ({currentSubjectObj.hindiName})
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 bg-blue-100 text-brand-blue rounded">
                Code {currentSubjectObj.code}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {currentSubjectObj.description}
            </p>
          </div>

          {/* Chapter Filter Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder={`Search in ${currentSubjectObj.name}...`}
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full text-xs sm:text-sm pl-9 pr-3 py-2 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue shadow-2xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Chapters Cards List */}
        {filteredChapters.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-700">No chapters matched your search</h4>
            <p className="text-xs text-slate-500 mt-1">Try clearing the search query to see all chapters.</p>
            <button
              onClick={() => setSearchFilter('')}
              className="mt-4 px-4 py-2 bg-brand-blue text-white text-xs font-bold rounded-lg"
            >
              Show All Chapters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredChapters.map((ch) => (
              <div
                key={ch.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-brand-blue p-5 sm:p-6 shadow-subtle hover:shadow-card transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  {/* Left: Chapter Details */}
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex items-center space-x-2.5">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 text-brand-blue font-bold text-xs flex items-center justify-center border border-blue-100 flex-shrink-0">
                        {ch.number}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {ch.name}
                      </h3>
                      <span className="bg-amber-100 text-amber-900 text-[11px] font-bold px-2 py-0.5 rounded border border-amber-200">
                        {ch.weightage}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-9">
                      {ch.summary}
                    </p>

                    {/* Key formulas / concepts pill preview */}
                    {ch.keyFormulas && ch.keyFormulas.length > 0 && (
                      <div className="pl-9 pt-2">
                        <div className="text-[11px] font-bold text-slate-500 mb-1">Key High-Yield Formulas:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {ch.keyFormulas.map((form, idx) => (
                            <span 
                              key={idx}
                              className="text-[11px] font-mono bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200"
                            >
                              {form}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Resources Count Badges */}
                    <div className="pl-9 pt-2 flex flex-wrap items-center gap-3 text-[11px] text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <strong>{ch.ncertSolCount}</strong> NCERT Solutions
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5 text-brand-blue" />
                        <strong>{ch.impQuestionsCount}</strong> Important Questions
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calculator className="w-3.5 h-3.5 text-amber-600" />
                        <strong>{ch.formulaCount}</strong> Formula Points
                      </span>
                    </div>
                  </div>

                  {/* Right: Quick Action Buttons */}
                  <div className="flex flex-row lg:flex-col items-center justify-end gap-2 flex-shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                    <button
                      onClick={() => onOpenNotes(ch.name, `${currentSubjectObj.name} - Class ${grade}`)}
                      className="w-full lg:w-44 py-2.5 px-3 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-bold flex items-center justify-center space-x-1.5 shadow-xs transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Chapter Notes</span>
                    </button>

                    <button
                      onClick={() => onOpenNotes(ch.name, `NCERT Solutions - Class ${grade} ${currentSubjectObj.name}`)}
                      className="w-full lg:w-44 py-2 px-3 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                      <span>NCERT Solutions</span>
                    </button>

                    <button
                      onClick={() => onStartTest({
                        id: `quiz-${grade}-${ch.id}`,
                        title: `Class ${grade} ${currentSubjectObj.name}: ${ch.name} Rapid Quiz`,
                        category: 'Chapter Test',
                        class: grade,
                        subject: currentSubjectObj.name,
                        board: selectedBoard === 'cbse' ? 'CBSE' : 'MP Board',
                        durationMinutes: 15,
                        totalQuestions: 5,
                        totalMarks: 20,
                        difficulty: 'Standard Board',
                        questions: [
                          {
                            id: 1,
                            question: `Which fundamental principle governs the conceptual basis of ${ch.name}?`,
                            options: [
                              'Conservation of energy and symmetry considerations',
                              'Empirical observation without theoretical verification',
                              'Arbitrary conventional definitions',
                              'Neglect of boundary conditions'
                            ],
                            correct: 0,
                            explanation: 'Core scientific derivations are rooted in conservation principles and symmetry.'
                          },
                          {
                            id: 2,
                            question: 'In CBSE & MP Board marking schemes, step marks are awarded for:',
                            options: [
                              'Only the final answer',
                              'Formula writing, step-wise substitution, and units in final result',
                              'Rough calculations done in margin',
                              'Writing question again'
                            ],
                            correct: 1,
                            explanation: 'Board answer keys allocate specific 0.5 to 1 mark for formula statement, values substitution, and unit representation.'
                          }
                        ]
                      })}
                      className="w-full lg:w-44 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors"
                    >
                      <Play className="w-3 h-3 text-slate-500 fill-current" />
                      <span>Attempt Quiz</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
