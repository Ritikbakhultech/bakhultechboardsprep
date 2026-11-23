import React, { useState } from 'react';
import { 
  Clock, 
  HelpCircle, 
  Award, 
  Play, 
  CheckCircle, 
  Filter, 
  BarChart, 
  Timer,
  FileQuestion,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { mockTests } from '../data/educationData';

export default function TestPreparation({ onStartTest, selectedGrade = 'all' }) {
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterClass, setFilterClass] = useState('all');

  const categories = ['All', 'Chapter Test', 'Subject-wise Test', 'Full-length Mock'];

  const filteredTests = mockTests.filter(test => {
    const matchCategory = filterCategory === 'All' || test.category === filterCategory;
    const matchClass = filterClass === 'all' || test.class === filterClass;
    return matchCategory && matchClass;
  });

  return (
    <section id="tests" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-100 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-blue uppercase tracking-wide">
              <Timer className="w-3.5 h-3.5 text-brand-blue" />
              <span>Real Board Exam Simulation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Test Preparation & Online Mock Tests
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Timed practice tests with instant marks evaluation, detailed solutions, and accuracy percentile.
            </p>
          </div>

          {/* Test Class Filter */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setFilterClass('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                filterClass === 'all'
                  ? 'bg-brand-blue text-white border-brand-blue shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              All Tests
            </button>
            <button
              onClick={() => setFilterClass('11')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                filterClass === '11'
                  ? 'bg-brand-blue text-white border-brand-blue shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Class 11 Tests
            </button>
            <button
              onClick={() => setFilterClass('12')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                filterClass === '12'
                  ? 'bg-brand-blue text-white border-brand-blue shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Class 12 Tests
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filterCategory === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Test Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-brand-blue p-6 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category & Board Tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    test.category === 'Full-length Mock'
                      ? 'bg-purple-100 text-purple-800 border border-purple-200'
                      : test.category === 'Subject-wise Test'
                      ? 'bg-blue-100 text-blue-800 border border-blue-200'
                      : 'bg-teal-100 text-teal-800 border border-teal-200'
                  }`}>
                    {test.category}
                  </span>

                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    Class {test.class} • {test.subject}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors leading-snug">
                  {test.title}
                </h3>

                {/* Test Meta Info: Duration, Questions, Marks */}
                <div className="mt-4 grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                  <div>
                    <div className="flex items-center justify-center text-slate-400 mb-0.5">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs font-extrabold text-slate-800">{test.durationMinutes} Mins</div>
                    <div className="text-[10px] text-slate-400 font-medium">Duration</div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center text-slate-400 mb-0.5">
                      <FileQuestion className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs font-extrabold text-slate-800">{test.totalQuestions} Qs</div>
                    <div className="text-[10px] text-slate-400 font-medium">Questions</div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center text-slate-400 mb-0.5">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                    <div className="text-xs font-extrabold text-slate-800">{test.totalMarks} Marks</div>
                    <div className="text-[10px] text-slate-400 font-medium">Full Marks</div>
                  </div>
                </div>

                {/* Difficulty & Pattern Info */}
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> {test.difficulty}
                  </span>
                  <span>{test.board}</span>
                </div>
              </div>

              {/* Start Test CTA */}
              <div className="mt-6 pt-3 border-t border-slate-100">
                <button
                  onClick={() => onStartTest(test)}
                  className="w-full py-2.5 px-4 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-xs hover:shadow transition-all group-hover:bg-brand-blue"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Start Test Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Test Instructions Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 to-slate-50 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs text-slate-700">
            <span className="w-8 h-8 rounded-lg bg-white border border-blue-200 flex items-center justify-center text-brand-blue font-bold shadow-2xs">
              i
            </span>
            <span>
              All mock questions include <strong>negative marking (-0.25) simulation</strong>, question review bookmarks, and instant solution steps.
            </span>
          </div>
          <span className="text-xs font-bold text-brand-blue whitespace-nowrap">
            Over 10,000+ Tests Taken Today
          </span>
        </div>

      </div>
    </section>
  );
}
