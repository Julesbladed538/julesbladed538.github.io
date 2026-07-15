import React, { useState, useEffect } from 'react';
import AboutTab from './components/AboutTab';
import ProjectsTab from './components/ProjectsTab';
import GamesTab from './components/GamesTab';
import PublicationTab from './components/PublicationTab';
import ContactTab from './components/ContactTab';
import { personalInfo, socialLinks } from './data';
import { 
  User, 
  Code, 
  Gamepad2, 
  BookOpen, 
  Mail, 
  ChevronRight, 
  ExternalLink,
  Github,
  Globe,
  ArrowUp,
  Tv,
  Linkedin,
  Terminal,
  Cpu,
  GraduationCap
} from 'lucide-react';

type TabID = 'about' | 'projects' | 'games' | 'publications' | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabID>('about');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamically render the active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutTab />;
      case 'projects':
        return <ProjectsTab />;
      case 'games':
        return <GamesTab />;
      case 'publications':
        return <PublicationTab />;
      default:
        return <AboutTab />;
    }
  };

  const tabsList = [
    { id: 'about' as TabID, name: 'About Me', icon: <User className="w-4 h-4" /> },
    { id: 'projects' as TabID, name: 'Projects', icon: <Code className="w-4 h-4" /> },
    { id: 'games' as TabID, name: 'Games & Art', icon: <Gamepad2 className="w-4 h-4" /> },
    { id: 'publications' as TabID, name: 'Research', icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans flex flex-col selection:bg-teal-100 selection:text-teal-900" id="portfolio-root">
      {/* Main Masthead / Header (Inspired by clean university layouts) */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs" id="main-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-4 md:py-6 gap-4">
            
            {/* Title / Identity block */}
            <div className="flex items-center gap-3 group">
              <div className="p-2.5 bg-teal-50 text-teal-600 rounded-xl group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 border border-teal-100/60 shadow-xs">
                <Terminal className="w-6 h-6 font-semibold" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors">
                  {personalInfo.name}
                </h1>
                <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                  {personalInfo.title} &bull; {personalInfo.university}
                </p>
              </div>
            </div>

            {/* Desktop Navigation Tabs */}
            <nav className="flex items-center overflow-x-auto gap-1 py-1 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0" id="navigation-tabs">
              {tabsList.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-250 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-teal-50 text-teal-700 border border-teal-200/50 shadow-xs'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  id={`tab-btn-${tab.id}`}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </nav>

          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full" id="main-content-section">
        {/* Dynamic rendering */}
        {renderTabContent()}
      </main>

      {/* Footer block */}
      <footer className="bg-white border-t border-slate-200 mt-16 py-8" id="main-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Copyright, Identity */}
          <div className="text-slate-500 text-xs">
            <p>&copy; {new Date().getFullYear()} &bull; <strong>{personalInfo.name}</strong>. All rights reserved.</p>
            <p className="mt-1 text-slate-400">
              Master's Student in Artificial Intelligence @{' '}
              <a href="https://www.unipi.it" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 underline">
                University of Pisa
              </a>
            </p>
          </div>

          {/* Social Links for Footer */}
          <div className="flex items-center justify-center gap-4 text-slate-400" id="footer-social-tray">
            <a 
              href="https://github.com/BartolomeoZisa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-900 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/bartolomeo-zisa-578401311/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-900 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://bartholomheow.itch.io/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-900 transition-colors"
              title="Itch.io"
            >
              <Gamepad2 className="w-5 h-5" />
            </a>
            <a 
              href="mailto:bartzisa03@gmail.com" 
              className="hover:text-slate-900 transition-colors"
              title="Email Coordinate"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Technology badges */}
        </div>
      </footer>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 z-50 cursor-pointer border border-teal-500/30"
          title="Back to Top"
          id="scroll-to-top-btn"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
