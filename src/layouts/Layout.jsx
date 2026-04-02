import {
  Briefcase,
  FileText,
  FolderOpen,
  GraduationCap,
  Home,
  Menu,
  Moon,
  Sparkles,
  Sun,
  UserRound,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import resumePdf from '../assets/Samet_Kenar_CV.pdf';
import { profile } from '../data/profile';

const GithubIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const navItems = [
    { name: 'Home', path: '#home', icon: <Home size={18} /> },
    { name: 'Education', path: '#education', icon: <GraduationCap size={18} /> },
    { name: 'Work', path: '#experience', icon: <Briefcase size={18} /> },
    { name: 'Projects', path: '#projects', icon: <FolderOpen size={18} /> },
    { name: 'Skills', path: '#skills', icon: <Sparkles size={18} /> },
    { name: 'Service', path: '#leadership', icon: <UserRound size={18} /> },
  ];

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const element = document.querySelector(targetId);
    if (!element) {
      return;
    }

    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]">
        <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
          <a
            href="#home"
            onClick={(event) => handleScroll(event, '#home')}
            className="text-2xl font-black text-[var(--text-h)] tracking-tighter hover:text-[#6366f1] transition-colors"
          >
            SK.
          </a>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(event) => handleScroll(event, item.path)}
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-[var(--text)] hover:text-[var(--text-h)] hover:bg-[var(--accent)]/10 transition-all"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}

            <div className="w-px h-6 bg-[var(--border)] mx-4"></div>

            <button
              onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
              className="p-2.5 rounded-full bg-[var(--border)] text-[var(--text-h)] hover:bg-[var(--accent)] hover:text-white transition-all mr-2"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 px-6 py-2 rounded-full bg-[var(--text-h)] text-[var(--bg)] text-sm font-bold hover:bg-[#6366f1] hover:text-white transition-all shadow-md"
            >
              <FileText size={16} />
              <span>CV</span>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
              className="p-2 rounded-lg text-[var(--text-h)] hover:bg-[var(--accent)]/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen((open) => !open)}
              className="p-2 rounded-lg text-[var(--text-h)] hover:bg-[var(--accent)]/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)] p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(event) => handleScroll(event, item.path)}
                className="flex items-center space-x-4 p-4 rounded-xl text-lg font-bold text-[var(--text)] hover:bg-[var(--accent)]/10 hover:text-[var(--text-h)] transition-all"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow w-full">{children}</main>

      <footer className="border-t border-[var(--border)] py-12 mt-20 bg-[var(--card-bg)] backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-[var(--text-h)] font-bold text-xl mb-1">{profile.name}</p>
            <p className="text-[var(--text)] text-sm italic opacity-80 leading-relaxed max-w-xs">
              {profile.role}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/sametkenar"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-[var(--border)] rounded-full text-[var(--text-h)] hover:border-[#6366f1] hover:text-[#6366f1] transition-all"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-medium text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
            >
              {profile.email}
            </a>
          </div>

          <p className="text-[var(--text)] text-sm font-medium opacity-60">
            {profile.location}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
