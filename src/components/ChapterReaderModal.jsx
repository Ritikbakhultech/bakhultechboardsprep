import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Bookmark, 
  Share2, 
  CheckCircle, 
  BookOpen, 
  Sparkles, 
  FileText, 
  ZoomIn, 
  ZoomOut,
  Copy,
  ShieldCheck
} from 'lucide-react';
import { sampleChapterContent } from '../data/educationData';

export default function ChapterReaderModal({ 
  isOpen, 
  onClose, 
  chapterTitle, 
  subjectName, 
  isDownloadMode = false 
}) {
  const [fontSize, setFontSize] = useState('base');
  const [bookmarked, setBookmarked] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const content = sampleChapterContent;
  const activeChapterTitle = chapterTitle || content.title;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 3000);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Top Header of Modal */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white flex-shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30 px-2 py-0.2 rounded">
                  {content.board}
                </span>
                <span className="text-xs text-slate-400 font-medium">{content.readingTime}</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5 line-clamp-1">
                {activeChapterTitle}
              </h2>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar: Font Size, Print, Copy, Bookmark, Download */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <span className="text-slate-500 font-semibold">Text Size:</span>
            <button
              onClick={() => setFontSize('sm')}
              className={`px-2 py-1 rounded font-bold ${fontSize === 'sm' ? 'bg-brand-blue text-white' : 'bg-white border text-slate-700'}`}
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('base')}
              className={`px-2 py-1 rounded font-bold ${fontSize === 'base' ? 'bg-brand-blue text-white' : 'bg-white border text-slate-700'}`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize('lg')}
              className={`px-2 py-1 rounded font-bold ${fontSize === 'lg' ? 'bg-brand-blue text-white' : 'bg-white border text-slate-700'}`}
            >
              A+
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="px-2.5 py-1 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1 font-medium"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied!' : 'Copy Notes'}</span>
            </button>

            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`px-2.5 py-1 rounded border flex items-center gap-1 font-medium transition-colors ${
                bookmarked ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold' : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-current' : ''}`} />
              <span>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:flex px-2.5 py-1 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 items-center gap-1 font-medium"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1 rounded bg-brand-blue hover:bg-brand-blue-dark text-white font-bold flex items-center gap-1.5 shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadSuccess ? 'Downloaded PDF!' : 'Download PDF'}</span>
            </button>
          </div>
        </div>

        {/* Scrollable Reader Body */}
        <div className={`p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 ${
          fontSize === 'sm' ? 'text-xs sm:text-sm' : fontSize === 'lg' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
        }`}>
          
          {/* Header watermark notice */}
          <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl flex items-center justify-between text-xs text-brand-blue font-medium">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-brand-blue flex-shrink-0" />
              <span>SmartStudy Verified Digital Study Material • Strictly Follows NCERT 2024-25 Syllabus</span>
            </div>
            <span className="hidden sm:inline font-bold">100% Free for Students</span>
          </div>

          {/* Sections */}
          {content.sections.map((sec, index) => (
            <div key={index} className="space-y-3 pb-6 border-b border-slate-100 last:border-b-0">
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                <span>{sec.heading}</span>
              </h3>
              
              <div className="bg-slate-50/80 p-4 sm:p-5 rounded-xl border border-slate-200/80 font-mono text-xs sm:text-sm whitespace-pre-wrap leading-relaxed text-slate-800">
                {sec.content}
              </div>
            </div>
          ))}

          {/* Success toast after PDF download simulation */}
          {downloadSuccess && (
            <div className="fixed bottom-6 right-6 bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-xl flex items-center space-x-2 text-xs font-bold animate-in fade-in slide-in-from-bottom-2">
              <CheckCircle className="w-4 h-4" />
              <span>PDF "{content.pdfName}" generated and saved successfully!</span>
            </div>
          )}

        </div>

        {/* Footer of Modal */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex items-center justify-between text-xs text-slate-500">
          <span>Prepared by SmartStudy Senior Board Examiners • Indore & New Delhi</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold"
          >
            Close Reader
          </button>
        </div>

      </div>
    </div>
  );
}
