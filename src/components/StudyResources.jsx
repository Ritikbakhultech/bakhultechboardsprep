import React from 'react';
import { 
  CheckCircle2, 
  FileText, 
  HelpCircle, 
  History, 
  Layers, 
  Sparkles, 
  Download, 
  Eye, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { studyResourcesCategories } from '../data/educationData';

const iconMap = {
  CheckCircle2,
  FileText,
  HelpCircle,
  History,
  Layers,
  Sparkles
};

export default function StudyResources({ onOpenResourceModal, onOpenSampleNotes, selectedBoard }) {
  return (
    <section id="resources" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-brand-teal bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
            Exam Preparation Toolkit
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            High-Yield Study Resources for Board Success
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Everything you need to master your board syllabus and score 95%+ in Class 11 & 12 examinations.
          </p>
        </div>

        {/* 6 Resources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyResourcesCategories.map((res) => {
            const IconComponent = iconMap[res.icon] || FileText;

            return (
              <div
                key={res.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-brand-blue/60 p-6 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center border border-blue-100 group-hover:bg-brand-blue group-hover:text-white transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {res.badge}
                    </span>
                  </div>

                  {/* Title & Hindi Title */}
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                      {res.title}
                    </h3>
                  </div>
                  <div className="text-xs font-medium text-slate-400 mt-0.5">{res.hindiTitle}</div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {res.description}
                  </p>

                  {/* Specific perks list */}
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                      <span>{selectedBoard === 'cbse' ? 'CBSE Marking Scheme Aligned' : 'MPBSE Blueprint & Model Answers'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                      <span>Class 11 & Class 12 Chapters covered</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onOpenSampleNotes(res.id, res.title)}
                    className="flex-1 py-2 px-3 rounded-lg bg-blue-50 hover:bg-brand-blue hover:text-white text-brand-blue text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Read Notes</span>
                  </button>

                  <button
                    onClick={() => onOpenSampleNotes(res.id, res.title, true)}
                    className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center justify-center space-x-1"
                    title="Download PDF"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-600" />
                    <span className="hidden sm:inline">PDF</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Fast-Access Alert Box */}
        <div className="mt-12 bg-white border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 border border-amber-200">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Need Formula Sheets for Tomorrow's Test?</h4>
              <p className="text-xs text-slate-500">Download single-page printable high-yield formulas for Physics, Chemistry & Maths.</p>
            </div>
          </div>
          <button
            onClick={() => onOpenSampleNotes('formula-sheets', 'Formula Sheets & Mind Maps')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-bold transition-all shadow-xs whitespace-nowrap"
          >
            Open Formula Sheet
          </button>
        </div>

      </div>
    </section>
  );
}
