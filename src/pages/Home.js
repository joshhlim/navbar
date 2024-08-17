import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import firstImage from './assets/whiskey.jpg';  // Adjust the path as necessary
import secondImage from './assets/vodka.jpg.webp'; // Adjust the path as necessary

const Home = () => {
    return (
        <div>
            {/* First Full-Width Image with Centered Clickable Text */}
            <div className="relative w-full">
                <img 
                    src={firstImage}
                    alt="First Full Width"
                    className="w-full h-auto object-cover filter grayscale brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Link to="/Whisky" className="text-6xl font-bold text-zinc-300 hover:text-white transition duration-300">
                        Browse Whiskys
                    </Link>
                </div>
            </div>

            {/* Second Full-Width Image with Centered Clickable Text */}
            <div className="relative w-full">
                <img 
                    src={secondImage}
                    alt="Second Full Width"
                    className="w-full h-auto object-cover filter grayscale brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Link to="/Spirits" className="text-6xl font-bold text-zinc-300 hover:text-white transition duration-300">
                        Browse Spirits
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;

