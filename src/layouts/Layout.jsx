import {
  Briefcase,
  FileText,
  FolderOpen,
  GraduationCap,
  Home,
  Mail,
  Menu,
  Moon,
  Sun,
  UserRound,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    setIsMenuOpen(false);
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    const elementId = location.hash.replace('#', '');
    const element = document.getElementById(elementId);
    if (!element) {
      return;
    }

    const offset = 80;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementTop - offset,
      behavior: 'smooth',
    });
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/#home', icon: <Home size={16} /> },
    { name: 'About', path: '/about', icon: <GraduationCap size={16} /> },
    { name: 'Work', path: '/experience', icon: <Briefcase size={16} /> },
    { name: 'Projects', path: '/projects', icon: <FolderOpen size={16} /> },
    { name: 'Leadership', path: '/leadership', icon: <UserRound size={16} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={16} /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <Link
            to="/#home"
            className="text-xl font-black text-[var(--text-h)] tracking-tighter hover:text-[var(--accent)] transition-all duration-300"
          >
            SK.
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-[var(--text)] hover:text-[var(--text-h)] hover:bg-[var(--accent)]/10 transition-all"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}

            <div className="w-px h-6 bg-[var(--border)] mx-4"></div>

            <button
              onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
              className="p-2.5 rounded-full bg-[var(--border)] text-[var(--text-h)] hover:bg-[var(--accent)] hover:text-white transition-all mr-2"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

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
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-4 p-4 rounded-xl text-lg font-bold text-[var(--text)] hover:bg-[var(--accent)]/10 hover:text-[var(--text-h)] transition-all"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
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
              className="p-3 border border-[var(--border)] rounded-full text-[var(--text-h)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
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

          <p className="text-[var(--text)] text-sm font-medium opacity-60">
            © {new Date().getFullYear()} Samet Kenar. Licensed under the MIT License.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
