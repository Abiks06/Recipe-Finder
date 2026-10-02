import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import SearchBar from './SearchBar';

function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="app-header">
      <div className="logo">
        <UtensilsCrossed size={28} />
        Recipe Finder
      </div>
      <div className="search-container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </header>
  );
}

export default Header;
