import React from 'react';

export default function Footer({ sidebarOffset = false }) {
    return (
        <footer className={`bg-[#0E0E0E] flex flex-col md:flex-row justify-between items-center px-12 py-8 w-full border-t border-[#353535]/15 mt-auto ${sidebarOffset ? 'md:pl-72' : ''}`}>
            <div className="font-['Inter'] text-[10px] uppercase tracking-widest text-neutral-500">
                © 2024 KINETIC PRECISION. ALL RIGHTS RESERVED.
            </div>
            <div className="flex space-x-8 mt-4 md:mt-0">
                <a href="#" className="font-['Inter'] text-[10px] uppercase tracking-widest text-neutral-600 hover:text-white transition-colors">PRIVACY</a>
                <a href="#" className="font-['Inter'] text-[10px] uppercase tracking-widest text-neutral-600 hover:text-white transition-colors">TERMS</a>
                <a href="#" className="font-['Inter'] text-[10px] uppercase tracking-widest text-neutral-600 hover:text-white transition-colors">SYSTEM STATUS</a>
            </div>
        </footer>
    );
}
