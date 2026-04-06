import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SideNav() {
    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path 
            ? "bg-[#353535] text-white font-bold border-l-4 border-white py-4 px-6 flex items-center space-x-4 transition-none"
            : "text-neutral-500 py-4 px-6 flex items-center space-x-4 hover:bg-[#1B1B1B] hover:text-white transition-none";
    };

    return (
        <aside className="bg-[#0E0E0E] h-[calc(100vh-64px)] w-64 fixed left-0 flex flex-col border-r border-neutral-800 font-['Inter'] text-[10px] uppercase tracking-widest z-40 hidden md:flex pt-4">
            <div className="px-6 mb-8">
                <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center overflow-hidden">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe7eobAgbSLgkUkNDHPUInUPUWTKHxHD4ggRO_V1q8JseLQsgFPHTZzbXXbeQRKKD1Ejbn68WyI5fl4tvhWbQDtVV8QsirMZxKUERQn0athjKf0mOajZuC-4yNc_1McslzGpFR2uEcH9T4dWiYkz55udEyEiQsfQP8GDDNmQc2KEi5Zk3r0nb3qM2OQVhh8ej43ZEpOfvehgIzD_dy1iSsXZrnc_GNaIN-pRgEFTy4qJUQdz0adzerujwkE8VR-cVPNbxCo4T29bk" alt="Profile" className="w-full h-full object-cover grayscale contrast-125" />
                    </div>
                    <div>
                        <div className="font-['Space_Grotesk'] text-lg font-bold text-white tracking-tighter">OPERATOR_01</div>
                        <div className="text-neutral-500 text-[8px]">ENGINE_ID: 8829-XP</div>
                    </div>
                </div>
            </div>
            
            <nav className="flex-1">
                <Link to="/dashboard" className={getLinkClass('/dashboard')}>
                    <span className="material-symbols-outlined">person</span>
                    <span>User Data</span>
                </Link>
                <Link to="/wishlist" className={getLinkClass('/wishlist')}>
                    <span className="material-symbols-outlined">star</span>
                    <span>Wishlist</span>
                </Link>
                <Link to="/history" className={getLinkClass('/history')}>
                    <span className="material-symbols-outlined">history</span>
                    <span>Service History</span>
                </Link>
                 <Link to="/config" className={getLinkClass('/config')}>
                    <span className="material-symbols-outlined">settings</span>
                    <span>Configuration</span>
                </Link>
            </nav>
        </aside>
    );
}
