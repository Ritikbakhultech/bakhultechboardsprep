import React from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Award, 
  ShieldCheck,
  FileCheck2,
  Users
} from 'lucide-react';

export default function Hero({ onExploreClass11, onExploreClass12, selectedBoard, onOpenAuth }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue-soft/70 via-brand-blue-soft/30 to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      
      {/* Subtle academic background grid decoration */}
      <div className="absolute inset-0 academic-grid-bg pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle, Badges & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Trust Pill / Board Tag */}
            <div className="inline-flex items-center space-x-2 bg-white border border-blue-200/90 shadow-sm rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-700">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-brand-blue font-bold">Trusted Board Portal:</span>
              <span>{selectedBoard === 'cbse' ? 'CBSE Class 11 & 12 (NCERT 2025)' : 'MP Board (MPBSE Blueprint & PYQs)'}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Your Board Exam Preparation <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-dark via-brand-blue to-brand-teal">
                Starts Here!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              Complete study material, chapter-wise notes, practice questions and mock tests for Class 11th and 12th. Strictly aligned with latest CBSE curriculum and Madhya Pradesh Board blueprints.
            </p>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm font-medium text-slate-700">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>100% Free NCERT Chapter Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Last 10 Years Solved Board Papers (PYQs)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Hindi & English Medium for MP & CBSE</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Real-Time Online Mock Tests with Timer</span>
              </div>
            </div>

            {/* Primary Action Buttons: Explore Class 11 and Explore Class 12 */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreClass11}
                className="group inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-bold text-white bg-brand-blue hover:bg-brand-blue-dark shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore Class 11</span>
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreClass12}
                className="group inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-bold text-brand-blue bg-white border-2 border-brand-blue hover:bg-blue-50/70 shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Award className="w-5 h-5 mr-2 text-brand-teal" />
                <span>Explore Class 12 (Board Mission)</span>
              </button>
            </div>

            {/* Quick stats ribbon */}
            <div className="pt-4 border-t border-slate-200/60 grid grid-cols-3 gap-3 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900">50,000+</div>
                <div className="text-xs text-slate-500 font-medium">Students Practicing</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-brand-blue">100% Free</div>
                <div className="text-xs text-slate-500 font-medium">Verified Notes & Sol</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-brand-teal">95%+</div>
                <div className="text-xs text-slate-500 font-medium">Target Board Score</div>
              </div>
            </div>

          </div>

          {/* Right Column: Indian Education Themed Illustration & Interactive Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Decorative background glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-300/40 to-teal-300/40 rounded-3xl blur-lg opacity-50"></div>
              
              {/* Educational Card Graphic */}
              <div className="relative bg-white border border-slate-200 rounded-2xl shadow-card overflow-hidden p-6 sm:p-7">
                
                {/* Header of graphic */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">SmartStudy Learning Desk</h4>
                      <p className="text-xs text-slate-500">Board Exam Toolkit 2025</p>
                    </div>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" /> NCERT Verified
                  </span>
                </div>

                {/* SVG Illustration: Student Studying with Notebook & Board Formulas */}
                <div className="my-5 bg-gradient-to-br from-blue-50/80 via-slate-50 to-teal-50/50 rounded-xl p-4 border border-blue-100/60">
                  <svg className="w-full h-44 sm:h-48" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Blackboard / Exam Board */}
                    <rect x="25" y="15" width="220" height="130" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="3" />
                    <rect x="35" y="25" width="200" height="110" rx="4" fill="#0f172a" />
                    {/* Formulas written in chalk */}
                    <text x="45" y="48" fill="#38bdf8" fontSize="12" fontFamily="monospace" fontWeight="bold">F = (1/4πε₀) · q₁q₂/r²</text>
                    <text x="45" y="72" fill="#34d399" fontSize="12" fontFamily="monospace">E = - dV/dr | V = IR</text>
                    <text x="45" y="96" fill="#facc15" fontSize="12" fontFamily="monospace">∫ [sin x] dx = -cos x</text>
                    <text x="45" y="120" fill="#f472b6" fontSize="11" fontFamily="sans-serif">Target: 95% in Board 2025</text>
                    
                    {/* Books Stack */}
                    <rect x="280" y="80" width="90" height="18" rx="3" fill="#1e40af" />
                    <rect x="285" y="62" width="85" height="18" rx="3" fill="#0d9488" />
                    <rect x="290" y="44" width="80" height="18" rx="3" fill="#f59e0b" />
                    <rect x="295" y="26" width="75" height="18" rx="3" fill="#6366f1" />
                    <text x="290" y="93" fill="#ffffff" fontSize="9" fontWeight="bold">NCERT Physics</text>
                    <text x="295" y="75" fill="#ffffff" fontSize="9" fontWeight="bold">Chemistry Vol 2</text>
                    <text x="300" y="57" fill="#ffffff" fontSize="9" fontWeight="bold">Maths Calculus</text>

                    {/* Desk Surface */}
                    <rect x="15" y="170" width="370" height="14" rx="3" fill="#cbd5e1" />
                    
                    {/* Open Notebook on Desk */}
                    <path d="M 80 160 L 140 148 L 195 160 L 140 172 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                    <path d="M 140 148 L 140 172" stroke="#cbd5e1" strokeWidth="1.5" />
                    <line x1="95" y1="158" x2="130" y2="153" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="95" y1="164" x2="130" y2="159" stroke="#94a3b8" strokeWidth="1" />

                    {/* Trophy / Success badge */}
                    <circle cx="340" cy="140" r="24" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                    <path d="M 333 133 L 347 133 L 344 144 C 344 147 341 149 340 149 C 339 149 336 147 336 144 Z" fill="#f59e0b" />
                    <rect x="338" y="149" width="4" height="6" fill="#f59e0b" />
                    <rect x="334" y="154" width="12" height="3" rx="1" fill="#b45309" />

                    {/* SmartStudy Stamp */}
                    <text x="50" y="210" fill="#1e40af" fontSize="13" fontWeight="bold">SmartStudy Board Prep Desk</text>
                    <text x="50" y="226" fill="#64748b" fontSize="10">CBSE & MP Board Syllabus 2024-2026</text>
                  </svg>
                </div>

                {/* Quick Quick Features inside card */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 text-xs">
                    <div className="flex items-center space-x-2 text-slate-800 font-semibold">
                      <FileCheck2 className="w-4 h-4 text-brand-blue" />
                      <span>Class 12 Chapter 1 Notes (Electrostatics)</span>
                    </div>
                    <span className="text-brand-blue font-bold">Free PDF</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-teal-50/70 border border-teal-100 text-xs">
                    <div className="flex items-center space-x-2 text-slate-800 font-semibold">
                      <Sparkles className="w-4 h-4 text-brand-teal" />
                      <span>Class 11 Physics Formula Mind Map</span>
                    </div>
                    <span className="text-brand-teal font-bold">Ready</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
