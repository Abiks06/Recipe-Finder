import React, { useState, useEffect } from 'react';
import { UtensilsCrossed } from 'lucide-react';
import SearchBar from './SearchBar';

function Header({ searchTerm, setSearchTerm }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <div className="logo-icon-wrapper">
          <UtensilsCrossed size={20} strokeWidth={2.5} />
        </div>
        Recipe Finder
      </div>
      <div className="search-container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </header>
  );
}

export default Header;
