import React from 'react';
import { Search } from 'lucide-react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-input-wrapper">
      <Search className="search-icon" size={20} />
      <input
        type="text"
        className="search-input"
        placeholder="Search for culinary masterpieces..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
