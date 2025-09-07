
import React from 'react';

export const Navbar: React.FC = () => {
  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    if (!targetId) return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full p-4 bg-slate-900/70 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          onClick={handleNavClick} 
          className="text-xl font-bold text-white"
        >
          Local SEO <span className="text-cyan-400">Near Me</span>
        </a>
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="px-4 py-2 text-sm font-medium text-slate-300 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Mobile menu could be added here */}
      </div>
    </nav>
  );
};
