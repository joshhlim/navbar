import React from 'react';

const SearchBar = ({ query, setQuery }) => {
    return (
        <div className="max-w-md mx-auto py-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded-md"
            />
        </div>
    );
};

export default SearchBar;
