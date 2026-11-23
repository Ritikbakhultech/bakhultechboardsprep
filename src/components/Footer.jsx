import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Heart, 
  ShieldCheck, 
  BookOpen,
  ArrowUp
} from 'lucide-react';

export default function Footer({ onNavigate, selectedBoard }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 text-xs sm:text-sm border-t border-slate-800">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white">
                  Smart<span className="text-brand-teal">Study</span>
                </span>
                <p className="text-[10px] text-slate-400">CBSE & MP Board Prep Platform</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              SmartStudy is a student-first Indian educational platform dedicated to Class 11th and 12th board aspirants. We offer 100% free NCERT solutions, chapter revision notes, topper formula sheets, and live timed mock tests.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Central Campus: AB Road, Indore, Madhya Pradesh - 452001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Student Support Helpline: +91 731-SMARTSTUDY (Mon - Sat 9am-8pm)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Email: support@smartstudy.edu.in</span>
              </div>
            </div>
          </div>

          {/* Column 2: Classes & Subjects */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">Classes & Notes</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('class11')} className="hover:text-white transition-colors">
                  Class 11 Physics Notes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('class11')} className="hover:text-white transition-colors">
                  Class 11 Chemistry & Maths
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('class12')} className="hover:text-white transition-colors">
                  Class 12 Board Derivations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('class12')} className="hover:text-white transition-colors">
                  Class 12 Organic Name Reactions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('class12')} className="hover:text-white transition-colors">
                  Class 12 Biology Diagrams
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('class12')} className="hover:text-white transition-colors">
                  Computer Science Python & SQL
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: High-Yield Resources */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">Study Resources</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-white transition-colors">
                  NCERT In-text & Exercise Sol
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-white transition-colors">
                  Chapter-wise Formula Sheets
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-white transition-colors">
                  CBSE 10-Year Solved PYQs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-white transition-colors">
                  MP Board Previous Papers (Hindi/Eng)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tests')} className="hover:text-white transition-colors">
                  Online Chapter & Mock Tests
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-white transition-colors">
                  CBSE 2025 Sample Papers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Educational Portals */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">Useful Indian Portals</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="https://www.cbse.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                  <span>CBSE Official Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://mpbse.nic.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                  <span>MPBSE Madhya Pradesh</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://ncert.nic.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                  <span>NCERT Official E-Books</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://innovateindia.mygov.in/ppc-2025" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                  <span>Pariksha Pe Charcha</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://diksha.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                  <span>DIKSHA National Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Help & Grievance Contact
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Board Disclaimer Banner */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-400 bg-slate-950/60 p-4 rounded-xl flex items-start space-x-3">
          <ShieldCheck className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Educational Disclaimer:</strong> SmartStudy is an independent non-commercial academic preparation portal designed to assist secondary and higher secondary school students in India. Central Board of Secondary Education (CBSE) and Madhya Pradesh Board of Secondary Education (MPBSE) are respective registered trademarks of government bodies.
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-5 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} SmartStudy India EdTech. Made with dedication for Indian Board Aspirants.
          </div>

          <div className="flex items-center space-x-6">
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300 transition-colors">
              About Us
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300 transition-colors">
              Terms of Use
            </button>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px]">Top</span>
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
