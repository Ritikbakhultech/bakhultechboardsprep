import React from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  CheckCircle, 
  GraduationCap, 
  Layers, 
  FileText, 
  FileCheck, 
  Sparkles,
  HelpCircle,
  Award
} from 'lucide-react';
import { classData, subjectsList } from '../data/educationData';

export default function ClassSelection({ onSelectClass, onSelectSubject, selectedBoard }) {
  return (
    <section className="py-14 sm:py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-brand-blue bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
            Targeted Learning Paths
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Choose Your Class to Begin Preparation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Tailored study material structured specifically for CBSE Senior Secondary and Madhya Pradesh Board examinations.
          </p>
        </div>

        {/* Two Prominent Cards: Class 11 and Class 12 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Class 11 – Start Learning */}
          <div className="bg-white rounded-2xl border-2 border-slate-200/90 hover:border-brand-blue shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div className="p-6 sm:p-8">
              
              {/* Badge & Class Title */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-teal-50 text-teal-800 text-xs font-bold px-3 py-1 rounded-full border border-teal-200 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-teal-600" /> Foundation & Concepts
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {selectedBoard === 'cbse' ? 'CBSE Syllabus' : 'MP Board Syllabus'}
                </span>
              </div>

              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-black text-xl border border-blue-100">
                  11th
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-brand-blue transition-colors">
                    Class 11 – Start Learning
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">Build solid concepts for 12th & Competitive Base</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 mt-3 mb-6 leading-relaxed">
                {classData[11].subtitle} Covers Physics, Chemistry, Maths, Biology, English and Computer Science with complete NCERT exercises.
              </p>

              {/* Resource Highlights */}
              <div className="space-y-2.5 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">Included Study Resources:</div>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>NCERT Chapter Solutions</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Derivations & Numericals</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Formula Handbooks</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Chapter Revision Quizzes</span>
                  </div>
                </div>
              </div>

              {/* Subject Pills */}
              <div>
                <div className="text-xs font-bold text-slate-700 mb-2.5">Available Subjects:</div>
                <div className="flex flex-wrap gap-1.5">
                  {subjectsList.map(sub => (
                    <button
                      key={`cl11-${sub.id}`}
                      onClick={() => onSelectSubject('11', sub.id)}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white hover:bg-brand-blue hover:text-white text-slate-700 border border-slate-200 transition-colors shadow-2xs"
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Button */}
            <div className="p-6 bg-blue-50/50 border-t border-slate-100">
              <button
                onClick={() => onSelectClass('11')}
                className="w-full py-3 px-4 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-sm transition-all group-hover:shadow"
              >
                <span>Enter Class 11 Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Class 12 – Prepare for Boards */}
          <div className="bg-white rounded-2xl border-2 border-brand-blue/80 hover:border-brand-blue shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group relative">
            
            {/* Top Ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg shadow-xs">
              Board Mission 95%+
            </div>

            <div className="p-6 sm:p-8">
              
              {/* Badge & Class Title */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-amber-50 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-200 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-600" /> Board Examination Focus
                </span>
                <span className="text-xs font-semibold text-brand-blue">
                  {selectedBoard === 'cbse' ? 'CBSE 2024-25 SQP' : 'MPBSE Question Bank'}
                </span>
              </div>

              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center font-black text-xl shadow-sm">
                  12th
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-brand-blue transition-colors">
                    Class 12 – Prepare for Boards
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">Board Exam Syllabus, 5-Year Solved PYQs & Blueprint</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 mt-3 mb-6 leading-relaxed">
                {classData[12].subtitle} Prepared according to latest marking scheme, step-wise marks distribution and topper presentation tricks.
              </p>

              {/* Resource Highlights */}
              <div className="space-y-2.5 mb-6 bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">Included Board Resources:</div>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-blue" />
                    <span>50% Competency Questions</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-blue" />
                    <span>5-Year Solved Board Papers</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-blue" />
                    <span>Organic Named Reactions Map</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-blue" />
                    <span>Timed Full Mock Tests</span>
                  </div>
                </div>
              </div>

              {/* Subject Pills */}
              <div>
                <div className="text-xs font-bold text-slate-700 mb-2.5">Available Subjects:</div>
                <div className="flex flex-wrap gap-1.5">
                  {subjectsList.map(sub => (
                    <button
                      key={`cl12-${sub.id}`}
                      onClick={() => onSelectSubject('12', sub.id)}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white hover:bg-brand-blue hover:text-white text-slate-700 border border-slate-200 transition-colors shadow-2xs"
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Button */}
            <div className="p-6 bg-brand-blue/5 border-t border-brand-blue/20">
              <button
                onClick={() => onSelectClass('12')}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-blue-dark hover:from-brand-blue-dark hover:to-brand-blue text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-md transition-all group-hover:shadow-lg"
              >
                <span>Enter Class 12 Board Hub</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
