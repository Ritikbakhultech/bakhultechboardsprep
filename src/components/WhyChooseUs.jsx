import React from 'react';
import { 
  Sparkles, 
  FolderCheck, 
  Target, 
  Zap, 
  ShieldCheck, 
  Award, 
  Languages, 
  Smile,
  GraduationCap
} from 'lucide-react';

export default function WhyChooseUs({ onExploreClass12 }) {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Easy & Conceptual Learning',
      description: 'Complex derivations and reaction mechanisms simplified into lucid visual points, real-world examples, and step-wise proofs.',
      color: 'bg-blue-50 text-brand-blue border-blue-200'
    },
    {
      icon: FolderCheck,
      title: '100% Organized Study Material',
      description: 'Zero clutter. Every chapter neatly bundled with NCERT solutions, handwritten revision notes, formula sheets, and solved PYQs.',
      color: 'bg-teal-50 text-brand-teal border-teal-200'
    },
    {
      icon: Zap,
      title: 'Regular Timed Practice',
      description: 'Online chapter quizzes and 3-hour full-length mock tests simulate real board exam pressure, negative marking, and time discipline.',
      color: 'bg-amber-50 text-amber-600 border-amber-200'
    },
    {
      icon: Target,
      title: 'Exam-Focused Preparation',
      description: 'Directly tailored for CBSE 50% competency requirements and MP Board marking blueprints so students score maximum marks.',
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-wider uppercase text-brand-blue bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
            Trusted Educational Standard
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Why Students & Parents Trust SmartStudy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Built by experienced CBSE & MP Board educators to make quality senior secondary board prep accessible, reliable, and stress-free.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/90 hover:border-brand-blue/60 p-6 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${pillar.color} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center text-[11px] font-bold text-slate-400 group-hover:text-brand-blue">
                  <span>Pillar {idx + 1} of Excellence</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indian Dual-Medium & Board Highlight Strip */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 via-brand-blue-dark to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none flex items-center pr-8">
            <GraduationCap className="w-64 h-64 text-white" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-teal-300 mb-3 border border-white/20">
              <Languages className="w-3.5 h-3.5" />
              <span>Hindi & English Medium Support</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              Tailored Specifically for Madhya Pradesh & All-India CBSE Students
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
              We understand state board nuances as well as central board expectations. Whether you are appearing from Indore, Bhopal, Jabalpur, Gwalior, or anywhere in India, SmartStudy provides bilingual precision and verified scoring strategies.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={onExploreClass12}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-brand-blue font-bold text-xs shadow-md transition-all"
              >
                Start Mission 95% Today
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
