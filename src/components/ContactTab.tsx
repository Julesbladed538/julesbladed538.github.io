import React, { useState } from 'react';
import { Mail, Send, Check, Building, GraduationCap, MapPin } from 'lucide-react';
import { personalInfo } from '../data';

export default function ContactTab() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Research Collaboration', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate real action
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: 'Research Collaboration', message: '' });
    }, 4000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in" id="contact-tab">
      {/* Information Panel */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-5">
          <h3 className="text-lg font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-3">
            Academic Coordinates
          </h3>

          <div className="flex flex-col gap-4 text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-slate-800">Master's Student in AI</p>
                <p>Department of Computer Science</p>
                <p className="text-xs text-slate-500">University of Pisa</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Building className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-slate-800">Department Address</p>
                <p>Largo Bruno Pontecorvo 3</p>
                <p>56127 Pisa, PI, Italy</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-slate-800">Geographic Location</p>
                <p>Tuscany, Italy</p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-slate-100 pt-4">
              <Mail className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-slate-800">Inbound Mail</p>
                <a href={`mailto:${personalInfo.email}`} className="text-teal-600 hover:underline">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Note on response */}
        <div className="bg-slate-50 border border-slate-150 rounded-2xl p-5 text-xs text-slate-500 leading-relaxed">
          <strong>Collaboration Note:</strong> I am always interested in discussing game design strategies, pixel assets, research projects in autonomic cloud evolutionary architectures, or research internships in reinforcement learning. Reach out via email or through the contact panel.
        </div>
      </div>

      {/* Form Panel */}
      <div className="lg:col-span-7">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-4">
            Send Bartolomeo Zisa a Message
          </h3>

          {isSent ? (
            <div className="bg-teal-50 border border-teal-150 rounded-xl p-6 text-center flex flex-col items-center gap-3 animate-pulse">
              <div className="p-2 bg-emerald-500 text-white rounded-full">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-teal-800">Message Received!</h4>
              <p className="text-xs text-teal-600 max-w-sm">
                Thank you for reaching out. The local email service simulated your transmission successfully. Bartolomeo will respond at your provided email coordinate as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-slate-700"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-slate-700"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-slate-700">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-slate-700 cursor-pointer"
                >
                  <option value="Research Collaboration">Academic Research / Collaboration</option>
                  <option value="Game Design Chat">Indie Games / Sprite Assets chat</option>
                  <option value="General Inquiries">General Questions</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-slate-700">Message Content</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-slate-700 resize-none"
                  placeholder="Tell me about your project or research inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold p-3 rounded-xl flex items-center justify-center gap-2 mt-2 transition-colors cursor-pointer shadow-sm hover:shadow-md"
              >
                <Send className="w-4 h-4" />
                Dispatch Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
