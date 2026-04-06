import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function TopNav({ isDashboard }) {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="fixed top-0 w-full z-50 h-16 bg-neutral-950 border-b border-white/10 flex justify-between items-center px-6">
            <Link to="/" className="text-2xl font-black tracking-tighter text-white font-['Space_Grotesk'] uppercase">
                KINETIC PRECISION
            </Link>

            {!isDashboard && (
                <div className="hidden md:flex gap-8 items-center h-full">
                    <Link to="/" className="font-['Space_Grotesk'] uppercase tracking-tighter text-neutral-500 hover:text-white transition-colors duration-100 text-sm font-bold">HOME</Link>
                    <Link to="/about" className="font-['Space_Grotesk'] uppercase tracking-tighter text-neutral-500 hover:text-white transition-colors duration-100 text-sm font-bold">ABOUT US</Link>
                    <Link to="/parts" className="font-['Space_Grotesk'] uppercase tracking-tighter text-neutral-500 hover:text-white transition-colors duration-100 text-sm font-bold">PARTS</Link>
                    <Link to="/diagnose" className="font-['Space_Grotesk'] uppercase tracking-tighter text-neutral-500 hover:text-white transition-colors duration-100 text-sm font-bold">DIAGNOSE</Link>
                </div>
            )}
            {isDashboard && (
                <div className="hidden md:flex gap-8 items-center h-full">
                     <Link to="/health" className="text-neutral-500 hover:text-white transition-colors duration-100 uppercase tracking-tighter font-['Space_Grotesk'] text-sm">TELEMETRY</Link>
                     <Link to="/dashboard" className="text-white border-b-2 border-white pb-1 uppercase tracking-tighter font-['Space_Grotesk'] text-sm">ASSEMBLY</Link>
                     <Link to="/diagnose" className="text-neutral-500 hover:text-white transition-colors duration-100 uppercase tracking-tighter font-['Space_Grotesk'] text-sm">DIAGNOSTICS</Link>
                     <Link to="/service" className="text-neutral-500 hover:text-white transition-colors duration-100 uppercase tracking-tighter font-['Space_Grotesk'] text-sm">LOGISTICS</Link>
                </div>
            )}

            <div className="flex items-center gap-4 text-white">
                {!user ? (
                    <Link to="/login" className="text-white font-['Space_Grotesk'] uppercase tracking-tighter text-sm px-6 py-2 bg-surface-container-highest transition-colors duration-100">LOGIN</Link>
                ) : (
                    <>
                        <Link to="/cart" className="relative flex items-center group mr-4">
                            <span className="material-symbols-outlined hover:text-zinc-300 transition-colors">shopping_cart</span>
                        </Link>
                        <Link to="/dashboard" className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity">account_circle</Link>
                        <button onClick={handleLogout} className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity">logout</button>
                    </>
                )}
            </div>
        </nav>
    );
}
