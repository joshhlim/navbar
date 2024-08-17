import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search for:', searchQuery);
    };

    const isActive = (path) => location.pathname === path ? 'text-white bg-zinc-800' : 'text-zinc-500 hover:text-white';

    return (
        <nav className="bg-zinc-900 shadow-lg">
            <div className="max-w-7xl mx-auto px-2">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/Home" className="text-4xl font-bold text-zinc-500 font-style: italic">JOSHAHOLIC</Link>
                    </div>
                    <div className="hidden md:flex space-x-8 ml-auto">
                        <Link to="/Whisky" className={`px-3 py-4 text-lg font-medium ${isActive('/Whisky')}`}>WHISKY</Link>
                        <Link to="/Spirits" className={`px-3 py-4 text-lg font-medium ${isActive('/Spirits')}`}>SPIRITS</Link>
                        <Link to="/Wine" className={`px-3 py-4 text-lg font-medium ${isActive('/Wine')}`}>WINE</Link>
                        <Link to="/Sake" className={`px-3 py-4 text-lg font-medium ${isActive('/Sake')}`}>SAKE & SOJU</Link>
                    </div>
                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="hidden md:flex items-center ml-auto">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search..."
                            className="px-4 py-2 text-black bg-zinc-200"
                        />
                        <button type="submit" className="bg-zinc-800 text-zinc-100 px-4 py-2">
                            Go!
                        </button>
                    </form>
                    <div className="flex items-center ml-auto md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-zinc-500 focus:outline-none focus:text-white"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isMobileMenuOpen ? '' : 'hidden'} md:hidden`}>
                <Link to="/Whisky" className={`block text-sm px-2 py-4 rounded-md ${isActive('/Whisky')}`} onClick={toggleMobileMenu}>WHISKY</Link>
                <Link to="/Spirits" className={`block text-sm px-2 py-4 rounded-md ${isActive('/Spirits')}`} onClick={toggleMobileMenu}>SPIRITS</Link>
                <Link to="/Wine" className={`block text-sm px-2 py-4 rounded-md ${isActive('/Wine')}`} onClick={toggleMobileMenu}>WINE</Link>
                <Link to="/Sake" className={`block text-sm px-2 py-4 rounded-md ${isActive('/Sake')}`} onClick={toggleMobileMenu}>SAKE & SOJU</Link>
                <form onSubmit={handleSearch} className="flex items-center px-4 py-4">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="px-4 py-2 rounded-l-md text-black w-full"
                    />
                    <button type="submit" className="bg-zinc-700 text-white px-4 py-2 rounded-r-md">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
