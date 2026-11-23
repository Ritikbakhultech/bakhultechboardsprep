import React, { useState, useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  Search, 
  Menu, 
  X, 
  User, 
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Award
} from 'lucide-react';

export default function Header({ 
  currentPage, 
  setCurrentPage, 
  selectedBoard, 
  setSelectedBoard,
  onOpenAuth,
  currentUser,
  onSearch,
  searchQuery,
  setSearchQuery
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [classesDropdownOpen, setClassesDropdownOpen] = useState(false);
  const classesDropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (classesDropdownRef.current && !classesDropdownRef.current.contains(event.target)) {
        setClassesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Removed 'Home' (logo already handles Home) and combined Class 11 & 12 into Classes dropdown
  const navItems = [
    { label: 'Subjects', id: 'subjects' },
    { label: 'Study Material', id: 'resources' },
    { label: 'Test Series', id: 'tests' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    setClassesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isClassActive = currentPage === 'class11' || currentPage === 'class12';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Left: Clean Logo (Clicking returns to Home) */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-2.5 cursor-pointer group select-none flex-shrink-0"
            title="SmartStudy Home"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-sm group-hover:bg-brand-blue-dark transition-colors">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              Smart<span className="text-brand-blue">Study</span>
            </span>
          </div>

          {/* Center: Clean Navigation Links with Classes Switcher Dropdown */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            
            {/* 1. Classes Tab with 11 & 12 Switcher */}
            <div className="relative" ref={classesDropdownRef}>
              <button
                onClick={() => setClassesDropdownOpen(!classesDropdownOpen)}
                className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-all flex items-center space-x-1.5 ${
                  isClassActive
                    ? 'text-brand-blue bg-blue-50/90 font-bold border border-blue-200/70 shadow-2xs'
                    : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                <span>
                  {currentPage === 'class11' ? 'Class 11' : currentPage === 'class12' ? 'Class 12' : 'Classes'}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${classesDropdownOpen ? 'transform rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu for Class 11 & Class 12 Switch */}
              {classesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-1">
                  
                  {/* Class 11 Option */}
                  <button
                    onClick={() => {
                      handleNavClick('class11');
                    }}
                    className={`w-full text-left p-2.5 rounded-xl transition-colors flex items-center space-x-3 ${
                      currentPage === 'class11'
                        ? 'bg-blue-50 text-brand-blue'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 font-bold text-xs flex items-center justify-center border border-teal-200 flex-shrink-0">
                      11th
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                        <span>Class 11</span>
                        {currentPage === 'class11' && <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />}
                      </div>
                      <p className="text-[11px] text-slate-500">Foundation & Concept Mastery</p>
                    </div>
                  </button>

                  <div className="border-t border-slate-100 my-1"></div>

                  {/* Class 12 Option */}
                  <button
                    onClick={() => {
                      handleNavClick('class12');
                    }}
                    className={`w-full text-left p-2.5 rounded-xl transition-colors flex items-center space-x-3 ${
                      currentPage === 'class12'
                        ? 'bg-blue-50 text-brand-blue'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-brand-blue font-bold text-xs flex items-center justify-center border border-blue-200 flex-shrink-0">
                      12th
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                        <span>Class 12</span>
                        {currentPage === 'class12' && <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />}
                      </div>
                      <p className="text-[11px] text-slate-500">Board Exam Mission 95%+</p>
                    </div>
                  </button>

                </div>
              )}
            </div>

            {/* Other Nav Items: Subjects, Study Material, Test Series, Contact */}
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'text-brand-blue bg-blue-50/80 font-bold'
                      : 'text-slate-600 hover:text-brand-blue hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Board Switcher, Search & Login */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Clean Segmented Board Switcher (CBSE / MP Board) */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-600 border border-slate-200/60">
              <button
                onClick={() => setSelectedBoard('cbse')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  selectedBoard === 'cbse'
                    ? 'bg-white text-brand-blue shadow-xs font-bold'
                    : 'hover:text-slate-900'
                }`}
                title="Switch to CBSE Board"
              >
                CBSE
              </button>
              <button
                onClick={() => setSelectedBoard('mpbse')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  selectedBoard === 'mpbse'
                    ? 'bg-white text-brand-blue shadow-xs font-bold'
                    : 'hover:text-slate-900'
                }`}
                title="Switch to MP Board"
              >
                MP Board
              </button>
            </div>

            {/* Quick Clean Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search chapters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    onSearch(searchQuery);
                  }
                }}
                className="w-36 xl:w-44 focus:w-56 text-xs pl-8 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            </div>

            {/* Student Login / Profile */}
            {currentUser ? (
              <div 
                onClick={onOpenAuth}
                className="flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-brand-blue px-3.5 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-[11px] font-bold">
                  {currentUser.name ? currentUser.name.charAt(0) : 'S'}
                </div>
                <span>{currentUser.name || 'Student'}</span>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs sm:text-sm font-bold rounded-xl text-white bg-brand-blue hover:bg-brand-blue-dark shadow-xs hover:shadow transition-all"
              >
                <User className="w-4 h-4" />
                <span>Student Login</span>
              </button>
            )}

          </div>

          {/* Mobile Right Controls (Board Switcher Pill + Profile + Hamburger) */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setSelectedBoard(selectedBoard === 'cbse' ? 'mpbse' : 'cbse')}
              className="px-2.5 py-1 text-xs font-bold rounded-lg bg-blue-50 text-brand-blue border border-blue-200"
            >
              {selectedBoard === 'cbse' ? 'CBSE' : 'MP Board'}
            </button>

            <button
              onClick={onOpenAuth}
              className="p-2 rounded-xl text-brand-blue hover:bg-blue-50"
              title="Student Login"
            >
              <User className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in">
          {/* Mobile Search */}
          <div className="relative my-1">
            <input
              type="text"
              placeholder="Search chapters, formulas, NCERT..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchQuery.trim()) {
                  onSearch(searchQuery);
                  setMobileMenuOpen(false);
                }
              }}
              className="w-full text-xs pl-8 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
          </div>

          {/* Class 11 and 12 Switch for Mobile */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-600">Select Class:</div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleNavClick('class11')}
                className={`py-2 px-3 text-xs font-bold rounded-lg transition-colors flex items-center justify-center space-x-1.5 ${
                  currentPage === 'class11'
                    ? 'bg-brand-blue text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>Class 11th</span>
              </button>
              <button
                onClick={() => handleNavClick('class12')}
                className={`py-2 px-3 text-xs font-bold rounded-lg transition-colors flex items-center justify-center space-x-1.5 ${
                  currentPage === 'class12'
                    ? 'bg-brand-blue text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>Class 12th</span>
              </button>
            </div>
          </div>

          {/* Other Nav items */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                  currentPage === item.id
                    ? 'bg-blue-50 text-brand-blue border border-blue-200 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
