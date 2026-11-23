import React, { useState } from 'react';
import { 
  Atom, 
  FlaskConical, 
  Binary, 
  Dna, 
  BookOpen, 
  Terminal, 
  ArrowRight, 
  FileText, 
  CheckCircle2,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { subjectsList } from '../data/educationData';

// Map icon names to Lucide icons
const iconMap = {
  Atom,
  FlaskConical,
  Binary,
  Dna,
  BookOpen,
  Terminal
};

export default function SubjectSection({ onSelectSubject, selectedGrade = '12', setSelectedGrade }) {
  const [activeTabGrade, setActiveTabGrade] = useState(selectedGrade);

  return (
    <section id="subjects" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-100 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-teal uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
              <span>Comprehensive Subject Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Core Subjects for Science & CS Streams
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Fully aligned with NCERT textbooks, CBSE sample papers, and MP Board model sets.
            </p>
          </div>

          {/* Grade Selector Switcher */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start md:self-auto border border-slate-200">
            <button
              onClick={() => {
                setActiveTabGrade('11');
                if (setSelectedGrade) setSelectedGrade('11');
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                activeTabGrade === '11'
                  ? 'bg-white text-brand-blue shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Class 11th Subjects
            </button>
            <button
              onClick={() => {
                setActiveTabGrade('12');
                if (setSelectedGrade) setSelectedGrade('12');
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                activeTabGrade === '12'
                  ? 'bg-white text-brand-blue shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Class 12th Subjects
            </button>
          </div>
        </div>

        {/* 6 Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectsList.map((subject) => {
            const IconComponent = iconMap[subject.icon] || BookOpen;
            const chaptersCount = activeTabGrade === '11' ? subject.class11ChaptersCount : subject.class12ChaptersCount;

            return (
              <div
                key={subject.id}
                onClick={() => onSelectSubject(activeTabGrade, subject.id)}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-brand-blue/70 p-6 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Top line: Icon, Code & Hindi Name */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-100 flex items-center justify-center text-brand-blue group-hover:scale-105 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        Code {subject.code}
                      </span>
                      <div className="text-xs font-semibold text-slate-500 mt-0.5">{subject.hindiName}</div>
                    </div>
                  </div>

                  {/* Subject Name & Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                    {subject.name}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {subject.description}
                  </p>

                  {/* High Yield Tag */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">
                      <span className="font-bold text-slate-900">{chaptersCount}</span> Chapters
                    </span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                      NCERT Solved
                    </span>
                  </div>
                </div>

                {/* Bottom CTA Row */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-blue group-hover:text-brand-blue-dark">
                  <span>Explore Chapters & Notes</span>
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ChevronRight className="w-4 h-4 text-brand-blue" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
