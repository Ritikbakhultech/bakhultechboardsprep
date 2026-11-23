import React, { useState } from 'react';
import { 
  BellRing, 
  Calendar, 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle,
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { boardUpdates } from '../data/educationData';

export default function LatestUpdates({ onDownloadNotice, selectedBoard }) {
  const [activeBoardFilter, setActiveBoardFilter] = useState('ALL');
  const [downloadFeedback, setDownloadFeedback] = useState(null);

  const filteredUpdates = boardUpdates.filter(update => {
    if (activeBoardFilter === 'ALL') return true;
    if (activeBoardFilter === 'CBSE') return update.type === 'CBSE';
    if (activeBoardFilter === 'MP Board') return update.type === 'MP Board';
    return true;
  });

  const handleDownload = (update) => {
    setDownloadFeedback(update.id);
    setTimeout(() => {
      setDownloadFeedback(null);
    }, 2500);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-slate-200/60 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-600 uppercase tracking-wide">
              <BellRing className="w-3.5 h-3.5 text-amber-500 animate-bounce" />
              <span>Official Circulars & Exam Notifications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Latest Board Examination Updates
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Real-time circulars from CBSE (cbse.nic.in) and MPBSE (mpbse.nic.in) for session 2024-25 & 2025-26.
            </p>
          </div>

          {/* Filter by Board */}
          <div className="flex items-center space-x-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-2xs self-start sm:self-auto">
            {['ALL', 'CBSE', 'MP Board'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveBoardFilter(filter)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  activeBoardFilter === filter
                    ? 'bg-brand-blue text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {filter === 'ALL' ? 'All Updates' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredUpdates.map((update) => (
            <div
              key={update.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-brand-blue/60 p-6 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Tag & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      update.type === 'CBSE'
                        ? 'bg-blue-100 text-brand-blue border border-blue-200'
                        : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    }`}>
                      {update.type}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {update.tag}
                    </span>
                  </div>

                  <div className="flex items-center text-xs text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    <span>{update.date}</span>
                  </div>
                </div>

                {/* Notice Title */}
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {update.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {update.desc}
                </p>
              </div>

              {/* Action and Download */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-slate-400" /> PDF ({update.pdfSize})
                </span>

                <button
                  onClick={() => handleDownload(update)}
                  className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    downloadFeedback === update.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-blue-50 text-brand-blue hover:bg-brand-blue hover:text-white'
                  }`}
                >
                  {downloadFeedback === update.id ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>{update.linkText}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Important Dates Ticker Strip */}
        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-2 font-bold text-slate-800">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
            <span>Key Examination Dates:</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-600 font-medium">
            <div>
              <strong className="text-slate-900">CBSE Practical Exams:</strong> Mid Jan - Feb 14
            </div>
            <span className="text-slate-300 hidden md:inline">|</span>
            <div>
              <strong className="text-slate-900">CBSE Theory Exams:</strong> Feb 15 onwards
            </div>
            <span className="text-slate-300 hidden md:inline">|</span>
            <div>
              <strong className="text-slate-900">MP Board 12th Theory:</strong> First Week of February
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
