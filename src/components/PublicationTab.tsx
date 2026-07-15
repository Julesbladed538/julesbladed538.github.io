import React, { useState } from 'react';
import { publications } from '../data';
import { 
  BookOpen, 
  User, 
  Calendar, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink,
  Award,
  Search,
  FileCode
} from 'lucide-react';

export default function PublicationTab() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyBibtex = (bibtex: string, index: number) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex flex-col gap-6 animate-fade-in" id="publications-tab">
      {/* Tab Header description */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-teal-600" />
          Academic Publications & Research Works
        </h3>
        <p className="text-sm text-slate-500 mt-2 leading-relaxed">
          The paper published with my supervisors, a refinement over my Bachelor's thesis.
        </p>
      </div>

      {/* Publications Showcase List */}
      <div className="flex flex-col gap-8" id="publications-list">
        {publications.map((pub, idx) => (
          <div 
            key={idx}
            className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col gap-6"
            id={`pub-card-${idx}`}
          >
            {/* Top row: Venue badge and details */}
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex flex-col gap-1.5 flex-1">
                <span className="inline-flex items-center gap-1.5 self-start bg-teal-50 text-teal-700 border border-teal-100 px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                  <Award className="w-3.5 h-3.5" />
                  SANER 2026 Paper
                </span>
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 mt-2 tracking-tight leading-snug">
                  {pub.title}
                </h4>
              </div>

              {/* Action buttons */}
              {pub.paperUrl && (
                <a 
                  href={pub.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Publisher Link
                </a>
              )}
            </div>

            {/* Author list */}
            <div className="flex items-center flex-wrap gap-2 text-sm text-slate-600 font-medium">
              <User className="w-4 h-4 text-slate-400" />
              <span>Authors:</span>
              <div className="flex items-center flex-wrap gap-1">
                {pub.authors.map((author, authorIdx) => (
                  <span key={authorIdx} className="flex items-center">
                    <strong className={author === 'Bartolomeo Zisa' ? 'text-teal-600 font-bold underline' : 'text-slate-800'}>
                      {author}
                    </strong>
                    {authorIdx < pub.authors.length - 1 && <span className="mr-1">,</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Metadata (Venue, Year, Location) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-slate-400" />
                <span className="truncate">ERA Track Paper</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>Published: February {pub.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>Limassol, Cyprus</span>
              </div>
            </div>

            {/* Research Abstract */}
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-slate-800 text-sm uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-teal-600" />
                Abstract
              </h5>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line bg-slate-50/40 p-4 rounded-xl border border-slate-100">
                {pub.abstract}
              </p>
            </div>

            {/* Research Keywords */}
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                <Search className="w-3.5 h-3.5" />
                Index Terms:
              </span>
              {pub.keywords.map((kw) => (
                <span 
                  key={kw}
                  className="bg-slate-50 text-slate-600 border border-slate-200/60 px-2.5 py-1 rounded-md text-xs font-semibold"
                >
                  {kw}
                </span>
              ))}
            </div>

            {/* BibTeX Section */}
            <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 mt-2">
              <div className="flex items-center justify-between">
                <h5 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
                  BibTeX Citation Record
                </h5>
                <button
                  onClick={() => copyBibtex(pub.bibtex, idx)}
                  className="inline-flex items-center gap-1.5 text-xs text-teal-600 hover:text-teal-700 hover:underline font-bold cursor-pointer transition-colors"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy BibTeX Citation
                    </>
                  )}
                </button>
              </div>
              <pre className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800 max-h-48 shadow-inner">
                {pub.bibtex}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
