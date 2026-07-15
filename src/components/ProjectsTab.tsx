import React, { useState, useMemo } from 'react';
import { projects } from '../data';
import { Project } from '../types';
import { 
  Github, 
  Star, 
  GitFork, 
  Search, 
  Filter, 
  ExternalLink,
  Cpu,
  Layers,
  Wrench,
  Settings,
  Video,
  Image,
  Trash2,
  X
} from 'lucide-react';

export default function ProjectsTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'AI' | 'Software Engineering' | 'Tools'>('All');
  
  // Media customization states
  const [mediaOverrides, setMediaOverrides] = useState<{ [id: string]: { imageUrl?: string; videoUrl?: string } }>(() => {
    const saved = localStorage.getItem('portfolio_projects_media');
    return saved ? JSON.parse(saved) : {};
  });
  
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [videoUrlInput, setVideoUrlInput] = useState('');

  // Merge static projects with custom media overrides
  const activeProjects = useMemo(() => {
    return projects.map((proj) => {
      const override = mediaOverrides[proj.id];
      return {
        ...proj,
        imageUrl: override?.imageUrl !== undefined ? override.imageUrl : proj.imageUrl,
        videoUrl: override?.videoUrl !== undefined ? override.videoUrl : proj.videoUrl,
      };
    });
  }, [mediaOverrides]);

  const filteredProjects = useMemo(() => {
    return activeProjects.filter((project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = 
        selectedCategory === 'All' || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, activeProjects]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI':
        return <Cpu className="w-4 h-4 text-emerald-600" />;
      case 'Software Engineering':
        return <Layers className="w-4 h-4 text-blue-600" />;
      case 'Tools':
        return <Wrench className="w-4 h-4 text-amber-600" />;
      default:
        return <Cpu className="w-4 h-4 text-teal-600" />;
    }
  };

  const handleOpenConfigure = (project: Project) => {
    setEditingProject(project);
    setImageUrlInput(project.imageUrl || '');
    setVideoUrlInput(project.videoUrl || '');
  };

  const handleSaveMedia = () => {
    if (!editingProject) return;
    const updated = {
      ...mediaOverrides,
      [editingProject.id]: {
        imageUrl: imageUrlInput.trim(),
        videoUrl: videoUrlInput.trim()
      }
    };
    setMediaOverrides(updated);
    localStorage.setItem('portfolio_projects_media', JSON.stringify(updated));
    setEditingProject(null);
  };

  const handleClearMedia = () => {
    if (!editingProject) return;
    const updated = { ...mediaOverrides };
    delete updated[editingProject.id];
    setMediaOverrides(updated);
    localStorage.setItem('portfolio_projects_media', JSON.stringify(updated));
    setEditingProject(null);
  };

  return (
    <div className="flex flex-col gap-6 animate-fade-in" id="projects-tab">
      {/* Header & Description */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <Github className="w-6 h-6 text-slate-800" />
          Projects
        </h3>
        <p className="text-sm text-slate-500 mt-2 leading-relaxed">
          A collection of my tools, experiments, and AI systems built during my B.Sc. and M.Sc. studies at the University of Pisa.</p>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm" id="filters-bar">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-slate-400" />
          </span>
          <input
            type="text"
            placeholder="Search projects by name, tag, or desc..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-9 pr-4 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto" id="category-filters">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 self-center mr-2">
            <Filter className="w-3.5 h-3.5" />
            Filter:
          </span>
          {(['All', 'AI', 'Software Engineering', 'Tools'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col group transition-all duration-300 hover:shadow-md hover:border-slate-300 relative"
              id={`project-card-${project.id}`}
            >
              {/* Media Preview Container */}
              <div className="relative h-48 bg-slate-900 overflow-hidden">
                {project.videoUrl ? (
                  <video 
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  /* High-Fidelity Code-Schematic Vector Placeholder */
                  <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center p-4 text-center select-none relative overflow-hidden font-mono">
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-purple-500/10"></div>
                    
                    <div className="z-10 flex flex-col items-center gap-2">
                      <Cpu className="w-8 h-8 text-teal-500 animate-pulse" />
                      <span className="text-teal-400 font-bold text-xs tracking-wider uppercase">Code Repository</span>
                      <span className="text-[10px] text-slate-500 max-w-xs truncate px-2">github.com/BartolomeoZisa/{project.title}</span>
                    </div>
                    
                    <div className="absolute top-4 left-6 text-slate-800 text-xs font-bold select-none">&lt;source&gt;</div>
                    <div className="absolute bottom-4 right-6 text-slate-800 text-xs font-bold select-none">[]: main</div>
                    <div className="absolute bottom-6 left-8 text-teal-950/40 text-sm select-none font-semibold">f(x) =&gt; compile</div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-slate-200/80 px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-xs">
                  {getCategoryIcon(project.category)}
                  <span className="text-slate-700">{project.category}</span>
                </div>

                {/* Configure Media Overlay Button */}
                <button
                  onClick={() => handleOpenConfigure(project)}
                  className="absolute top-3 right-3 p-1.5 bg-slate-900/85 hover:bg-slate-900 border border-slate-700/60 text-slate-200 hover:text-teal-400 rounded-lg backdrop-blur-xs transition-all flex items-center gap-1 text-[10px] font-bold shadow-xs z-10 cursor-pointer"
                  title="Configure card image/video URL"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Customize Media</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {project.title}
                  </h4>
                  {/* GitHub Stars/Forks counts */}
                  <div className="flex items-center gap-3 text-slate-500 text-xs font-semibold bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                    {project.stars !== undefined && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        {project.stars}
                      </span>
                    )}
                    {project.forks !== undefined && (
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-slate-500" />
                        {project.forks}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-slate-100 text-slate-600 text-[11px] px-2.5 py-0.5 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Link */}
                <div className="border-t border-slate-100 pt-4 mt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">github.com/BartolomeoZisa</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 hover:underline cursor-pointer"
                  >
                    View Repository
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center bg-white border border-slate-200 rounded-2xl py-12 p-6 shadow-sm">
          <p className="text-slate-500 font-medium">No projects found matching current criteria.</p>
          <button 
            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            className="text-teal-600 hover:text-teal-700 font-semibold text-sm mt-2 hover:underline cursor-pointer"
          >
            Clear Search Filters
          </button>
        </div>
      )}

      {/* Media Configuration Modal Overlay */}
      {editingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white border border-slate-250 w-full max-w-lg rounded-2xl shadow-xl flex flex-col overflow-hidden max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-slate-50 border-b border-slate-150 p-4 flex items-center justify-between">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <Settings className="w-5 h-5 text-teal-600" />
                Customize Card Media
              </h4>
              <button 
                onClick={() => setEditingProject(null)}
                className="p-1 hover:bg-slate-200 text-slate-500 hover:text-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 flex flex-col gap-4 overflow-y-auto">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Target Repository</span>
                <span className="font-mono text-sm font-semibold text-slate-700">github.com/BartolomeoZisa/{editingProject.title}</span>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed bg-slate-50 rounded-lg p-3 border border-slate-150">
                Provide custom image or direct mp4/gif video links to display in the card preview header. These properties are persisted locally in your browser cache.
              </p>

              {/* Image URL Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Image className="w-3.5 h-3.5 text-teal-600" />
                  Image URL
                </label>
                <input 
                  type="url"
                  placeholder="https://example.com/screenshot.png"
                  value={imageUrlInput}
                  onChange={(e) => setImageUrlInput(e.target.value)}
                  className="w-full bg-white border border-slate-250 rounded-xl py-2 px-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Video URL Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-teal-600" />
                  Video / GIF URL (Direct MP4, WebM or GIF)
                </label>
                <input 
                  type="url"
                  placeholder="https://example.com/gameplay.mp4"
                  value={videoUrlInput}
                  onChange={(e) => setVideoUrlInput(e.target.value)}
                  className="w-full bg-white border border-slate-250 rounded-xl py-2 px-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 border-t border-slate-150 p-4 flex items-center justify-between gap-3">
              <button
                onClick={handleClearMedia}
                className="inline-flex items-center gap-1.5 px-3 py-2 border border-rose-200 text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-bold transition-all cursor-pointer"
                title="Reset this card to use default images or placeholders"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear Overrides
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEditingProject(null)}
                  className="px-4 py-2 border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-850 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveMedia}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer"
                >
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
