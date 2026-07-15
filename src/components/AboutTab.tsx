import React, { useState } from 'react';
import { personalInfo, socialLinks, educationHistory } from '../data';
import { 
  MapPin, 
  Mail, 
  School, 
  Linkedin, 
  Github, 
  Instagram, 
  Gamepad2, 
  Tv, 
  ExternalLink,
  BookOpen,
  Cpu,
  Award
} from 'lucide-react';

// Dynamic icon resolver for social links
const getIcon = (name: string) => {
  switch (name) {
    case 'LinkedIn':
      return <Linkedin className="w-5 h-5" />;
    case 'GitHub':
      return <Github className="w-5 h-5" />;
    case 'Instagram':
      return <Instagram className="w-5 h-5" />;
    case 'Itch.io':
      return <Gamepad2 className="w-5 h-5" />;
    case 'Newgrounds':
      return <Tv className="w-5 h-5" />;
    case 'Email':
      return <Mail className="w-5 h-5" />;
    default:
      return <ExternalLink className="w-5 h-5" />;
  }
};

export default function AboutTab() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="about-tab">
      {/* Left Column: Personal Card & Links */}
      <div className="lg:col-span-5 flex flex-col gap-6" id="about-sidebar">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md" id="profile-card">
          <div className="flex flex-col items-center text-center gap-4">
            {/* Avatar with stylized double frame */}
            <div className="relative p-1 bg-gradient-to-tr from-teal-600 to-emerald-500 rounded-full">
              <div className="bg-white p-1 rounded-full">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                  {/* Human avatar placeholder or pixel-stylized layout */}
                  <img 
                    src={personalInfo.avatarUrl} 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-teal-600 text-white p-1.5 rounded-full shadow-lg border-2 border-white">
                <Cpu className="w-4 h-4 animate-pulse" />
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{personalInfo.name}</h2>
              <p className="text-teal-600 font-medium text-sm mt-1">{personalInfo.title}</p>
              <p className="text-slate-500 text-xs flex items-center justify-center gap-1 mt-2">
                <School className="w-3.5 h-3.5" />
                {personalInfo.university}
              </p>
            </div>

            {/* Quick Contact Badges */}
            <div className="flex flex-col gap-2 w-full mt-4 border-t border-b border-slate-100 py-4 text-left text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{personalInfo.location}</span>
              </div>
              <button 
                onClick={copyEmail}
                className="flex items-center gap-3 group hover:text-teal-600 transition-colors cursor-pointer text-left w-full"
              >
                <Mail className="w-4 h-4 text-slate-400 group-hover:text-teal-500" />
                <span className="truncate flex-1">{personalInfo.email}</span>
                <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                  {copied ? 'Copied!' : 'Copy'}
                </span>
              </button>
            </div>

            {/* Profile Bio Details */}
            <div className="text-left text-sm text-slate-600 leading-relaxed mt-2">
              <p className="whitespace-pre-line">{personalInfo.bio}</p>
            </div>
          </div>
        </div>

        {/* Links Grid Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm" id="links-card">
          <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-teal-600" />
            Interactive Links
          </h3>
          <div className="grid grid-cols-2 gap-3" id="links-grid">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 px-4 py-3 border rounded-xl text-sm font-medium transition-all duration-300 ${link.colorClass}`}
                id={`link-btn-${link.name.toLowerCase()}`}
              >
                {getIcon(link.name)}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Academic & Research Experience */}
      <div className="lg:col-span-7 flex flex-col gap-6" id="academic-history">
        {/* Academic Profile & Interests */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-teal-600" />
            Academic Profile & Interests
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            As part of my Master's studies, I am particularly interested in the intersections of software architecture analysis and intelligent computing models. I am actively researching ways to streamline dependency trees, predict package drift, and deploy artificial models to configure server environments automatically.
          </p>
          <div className="flex flex-wrap gap-2" id="interest-tags">
            {[
              'Reinforcement Learning',
              'Deep Neural Networks',
              'Software Evolution',
              'Microservice Architectures',
              'Dependency Analysis',
              '2D Pixel Art Animation',
              'Retro Game Physics Engine',
              'WebAssembly & C++'
            ].map((tag) => (
              <span 
                key={tag} 
                className="bg-slate-50 text-slate-700 border border-slate-200/60 px-3 py-1 rounded-full text-xs font-medium hover:border-teal-300 hover:bg-teal-50/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-teal-600" />
            Education Timeline
          </h3>
          <div className="relative border-l-2 border-slate-100 pl-6 ml-2 flex flex-col gap-8 py-2" id="timeline">
            {educationHistory.map((edu, idx) => (
              <div key={idx} className="relative group" id={`edu-item-${idx}`}>
                {/* Timeline node */}
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-2 border-teal-500 group-hover:bg-teal-500 transition-colors duration-300" />
                
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-bold text-slate-800 text-base">{edu.degree}</h4>
                    <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded-full inline-block self-start sm:self-center">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm font-medium mt-1">{edu.institution}</p>
                  {edu.description && (
                    <p className="text-slate-500 text-sm leading-relaxed mt-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Highlights Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-3 mb-4">
            Technical Skillset Matrix
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm" id="skills-matrix">
            <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50">
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                AI & Deep Learning
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                PyTorch, Stable-Baselines3, Gym/Gymnasium, Neural Networks inference engines, DQN, PPO algorithms, data modeling & D3 analytics.
              </p>
            </div>
            <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50">
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                Game Dev & Graphics
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                C++, WebAssembly, pixel art design (Aseprite), sprite sheets, particle assets, retro platformer physics, sound cues, and canvas loops.
              </p>
            </div>
            <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50">
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                Software Engineering
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                TypeScript, React, Node.js, Git, automated dependency resolution, dependency parsing, package changeset parsing, CI/CD pipelines.
              </p>
            </div>
            <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50">
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                Academic Research
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Empirical software studies, fault injection, autonomic systems adaptation, BibTeX reference compilation, academic document structures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
