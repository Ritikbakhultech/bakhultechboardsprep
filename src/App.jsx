import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClassSelection from './components/ClassSelection';
import SubjectSection from './components/SubjectSection';
import StudyResources from './components/StudyResources';
import TestPreparation from './components/TestPreparation';
import LatestUpdates from './components/LatestUpdates';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

// Full pages & modals
import ClassPage from './components/ClassPage';
import ContactPage from './components/ContactPage';
import ChapterReaderModal from './components/ChapterReaderModal';
import TestEngineModal from './components/TestEngineModal';
import AuthModal from './components/AuthModal';

import { mockTests, subjectsList } from './data/educationData';

export default function App() {
  // Navigation states: 'home' | 'class11' | 'class12' | 'subjects' | 'resources' | 'tests' | 'contact'
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBoard, setSelectedBoard] = useState('cbse'); // 'cbse' | 'mpbse'
  const [selectedGrade, setSelectedGrade] = useState('12'); // for subject switcher

  // User state
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Modals state
  const [activeReader, setActiveReader] = useState({
    isOpen: false,
    chapterTitle: '',
    subjectName: '',
    isDownloadMode: false
  });

  const [activeTest, setActiveTest] = useState(null); // active test object when taking test
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  // Quick navigation handlers
  const handleExploreClass11 = () => {
    setCurrentPage('class11');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreClass12 = () => {
    setCurrentPage('class12');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSubject = (grade, subjectId) => {
    if (grade === '11') {
      setCurrentPage('class11');
    } else {
      setCurrentPage('class12');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenNotes = (chapterTitle, subjectName, isDownload = false) => {
    setActiveReader({
      isOpen: true,
      chapterTitle: chapterTitle || 'Electric Charges and Fields',
      subjectName: subjectName || 'Class 12 Physics',
      isDownloadMode: isDownload
    });
  };

  const handleStartTest = (testObj) => {
    setActiveTest(testObj || mockTests[0]);
  };

  const handleSearch = (query) => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }
    // Simple lookup across subjects and common queries
    const q = query.toLowerCase();
    const matchedSubjects = subjectsList.filter(s => 
      s.name.toLowerCase().includes(q) || 
      s.description.toLowerCase().includes(q) ||
      s.hindiName.includes(q)
    );
    setSearchResults({
      query: query,
      subjects: matchedSubjects
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col text-slate-800 selection:bg-brand-blue selection:text-white">
      
      {/* Top Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={(page) => {
          setSearchResults(null);
          setCurrentPage(page);
        }}
        selectedBoard={selectedBoard}
        setSelectedBoard={setSelectedBoard}
        onOpenAuth={() => setIsAuthOpen(true)}
        currentUser={currentUser}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Global Search Results Popup Modal */}
      {searchResults && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900">
                Search Results for "{searchResults.query}"
              </h3>
              <button 
                onClick={() => setSearchResults(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕ Close
              </button>
            </div>

            {searchResults.subjects.length > 0 ? (
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {searchResults.subjects.map(s => (
                  <div
                    key={s.id}
                    onClick={() => {
                      handleSelectSubject('12', s.id);
                      setSearchResults(null);
                    }}
                    className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{s.name}</div>
                      <div className="text-xs text-slate-500">{s.hindiName} • Code {s.code}</div>
                    </div>
                    <span className="text-xs font-bold text-brand-blue">View Notes →</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center text-xs text-slate-500">
                No direct matches found. Try searching for "Physics", "Chemistry", "Maths", or "Biology".
              </div>
            )}

            <button
              onClick={() => {
                handleOpenNotes(searchResults.query, 'Chapter Material');
                setSearchResults(null);
              }}
              className="mt-4 w-full py-2.5 rounded-xl bg-brand-blue text-white text-xs font-bold hover:bg-brand-blue-dark transition-colors"
            >
              Open SmartStudy Resource Reader for "{searchResults.query}"
            </button>
          </div>
        </div>
      )}

      {/* Main Body Routing Switch */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero
              onExploreClass11={handleExploreClass11}
              onExploreClass12={handleExploreClass12}
              selectedBoard={selectedBoard}
              onOpenAuth={() => setIsAuthOpen(true)}
            />

            {/* 2. Class Selection (Class 11 & Class 12) */}
            <ClassSelection
              onSelectClass={(cls) => {
                if (cls === '11') setCurrentPage('class11');
                else setCurrentPage('class12');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectSubject={handleSelectSubject}
              selectedBoard={selectedBoard}
            />

            {/* 3. Subject Section */}
            <SubjectSection
              onSelectSubject={handleSelectSubject}
              selectedGrade={selectedGrade}
              setSelectedGrade={setSelectedGrade}
            />

            {/* 4. Study Resources */}
            <StudyResources
              onOpenSampleNotes={handleOpenNotes}
              selectedBoard={selectedBoard}
            />

            {/* 5. Test Preparation */}
            <TestPreparation
              onStartTest={handleStartTest}
              selectedGrade="all"
            />

            {/* 6. Latest Updates */}
            <LatestUpdates
              selectedBoard={selectedBoard}
            />

            {/* 7. Why Choose SmartStudy */}
            <WhyChooseUs
              onExploreClass12={handleExploreClass12}
            />
          </>
        )}

        {/* Dedicated Class 11 Page */}
        {currentPage === 'class11' && (
          <ClassPage
            grade="11"
            onBack={() => setCurrentPage('home')}
            onOpenNotes={handleOpenNotes}
            onStartTest={handleStartTest}
            selectedBoard={selectedBoard}
            setSelectedBoard={setSelectedBoard}
          />
        )}

        {/* Dedicated Class 12 Page */}
        {currentPage === 'class12' && (
          <ClassPage
            grade="12"
            onBack={() => setCurrentPage('home')}
            onOpenNotes={handleOpenNotes}
            onStartTest={handleStartTest}
            selectedBoard={selectedBoard}
            setSelectedBoard={setSelectedBoard}
          />
        )}

        {/* Subjects Direct Page */}
        {currentPage === 'subjects' && (
          <div className="py-6">
            <SubjectSection
              onSelectSubject={handleSelectSubject}
              selectedGrade={selectedGrade}
              setSelectedGrade={setSelectedGrade}
            />
          </div>
        )}

        {/* Study Resources Direct Page */}
        {currentPage === 'resources' && (
          <div className="py-6">
            <StudyResources
              onOpenSampleNotes={handleOpenNotes}
              selectedBoard={selectedBoard}
            />
          </div>
        )}

        {/* Test Series Direct Page */}
        {currentPage === 'tests' && (
          <div className="py-6">
            <TestPreparation
              onStartTest={handleStartTest}
              selectedGrade="all"
            />
          </div>
        )}

        {/* Contact Us Page */}
        {currentPage === 'contact' && (
          <ContactPage
            onBack={() => setCurrentPage('home')}
            selectedBoard={selectedBoard}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        selectedBoard={selectedBoard}
      />

      {/* Modals */}
      
      {/* 1. Chapter Reader & PDF Downloader */}
      <ChapterReaderModal
        isOpen={activeReader.isOpen}
        onClose={() => setActiveReader({ ...activeReader, isOpen: false })}
        chapterTitle={activeReader.chapterTitle}
        subjectName={activeReader.subjectName}
        isDownloadMode={activeReader.isDownloadMode}
      />

      {/* 2. Interactive Mock Test Engine */}
      <TestEngineModal
        test={activeTest}
        isOpen={!!activeTest}
        onClose={() => setActiveTest(null)}
      />

      {/* 3. Student Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentUser={currentUser}
        onLogin={(user) => setCurrentUser(user)}
        onLogout={() => setCurrentUser(null)}
        selectedBoard={selectedBoard}
        setSelectedBoard={setSelectedBoard}
      />

    </div>
  );
}
