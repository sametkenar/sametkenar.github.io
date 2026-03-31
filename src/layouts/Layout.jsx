import { Link } from 'react-router-dom';
import { Home, FolderOpen, BookOpen, Mic2, GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Projects', path: '/projects', icon: <FolderOpen size={20} /> },
    { name: 'Publications', path: '/publications', icon: <BookOpen size={20} /> },
    { name: 'Talks', path: '/talks', icon: <Mic2 size={20} /> },
    { name: 'Teaching', path: '/teaching', icon: <GraduationCap size={20} /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--border)]">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-[var(--text-h)]">
            SK.
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-[var(--text)] hover:bg-[var(--accent-bg)] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-[var(--text)] hover:bg-[var(--accent-bg)] hover:text-[var(--accent)] transition-all"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {children}
      </main>

      <footer className="border-t border-[var(--border)] py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-[var(--text)]">
          <p>© {new Date().getFullYear()} Samet Kenar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
