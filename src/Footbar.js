import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-zinc-500 py-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left">
                        <p className="text-sm">&copy; 2024 JOSHAHOLIC. All rights reserved.</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <a href="/Privacy" className="text-sm hover:text-gray-400 mx-2">Privacy Policy</a>
                        <a href="/Terms" className="text-sm hover:text-gray-400 mx-2">Terms of Service</a>
                        <a href="/Contact" className="text-sm hover:text-gray-400 mx-2">Contact Us</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
