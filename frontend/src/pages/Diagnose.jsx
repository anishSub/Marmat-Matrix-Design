import React from 'react';

export default function Diagnose() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
            <div className="mb-16 border-l-4 border-primary pl-8 py-2">
                <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-white uppercase leading-none">Diagnose<br/>Problem</h1>
                <p className="mt-4 font-label text-xs tracking-[0.2em] text-outline uppercase">System Diagnostics / Kinetic Precision v4.02</p>
            </div>
            
            <form className="space-y-24">
                <section>
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="font-headline text-2xl font-bold tracking-tight text-white uppercase">01 // LOG ENTRY</h2>
                    </div>
                    <div className="bg-surface-container-lowest border-l-2 border-primary overflow-hidden">
                        <textarea className="w-full bg-transparent border-none focus:ring-0 p-6 font-mono text-sm leading-relaxed text-primary placeholder:text-surface-variant min-h-[200px] resize-none" placeholder="INPUT DETAILED SYMPTOMS HERE... [HOW] [WHEN] [FREQUENCE]"></textarea>
                    </div>
                </section>
                
                <div className="pt-12 border-t border-outline-variant/30">
                    <button className="w-full bg-primary text-on-primary py-8 flex items-center justify-center gap-6 hover:bg-primary-container transition-all duration-100 group" type="submit">
                        <span className="font-headline text-2xl font-black uppercase tracking-tighter">Initiate System Scan & Submit</span>
                        <span className="material-symbols-outlined text-3xl group-hover:translate-x-2 transition-transform">sensors</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
