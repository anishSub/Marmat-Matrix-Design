import React from 'react';

export default function Config() {
    return (
        <div className="p-12 max-w-[1400px] mx-auto w-full relative">
            <header className="mb-16 border-l-4 border-primary pl-8">
                <h1 className="font-headline text-6xl font-black tracking-tighter uppercase leading-none text-white">Account Configuration</h1>
            </header>
            <section className="bg-surface-container-low p-10 border-t border-primary/10">
                <div className="flex items-center gap-4 mb-10">
                    <span className="h-[1px] w-12 bg-primary"></span>
                    <h2 className="font-headline text-2xl font-bold uppercase tracking-tighter text-white">Core Identity</h2>
                </div>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="font-label text-[10px] tracking-widest uppercase text-outline">Full Name</label>
                        <input className="w-full bg-surface-container-lowest border-none px-4 py-4 font-headline text-lg tracking-tight text-white uppercase" type="text" defaultValue="ALEXANDER VANCE"/>
                    </div>
                    <div className="space-y-2">
                        <label className="font-label text-[10px] tracking-widest uppercase text-outline">Email Address</label>
                        <input className="w-full bg-surface-container-lowest border-none px-4 py-4 font-headline text-lg tracking-tight text-white uppercase" type="email" defaultValue="VANCE.A@KINETIC.PRECISION"/>
                    </div>
                </form>
                <div className="pt-8">
                    <button className="w-full py-8 bg-primary text-on-primary font-headline text-2xl font-black uppercase tracking-[0.2em] hover:bg-primary-container">CONFIRM & SAVE CHANGES</button>
                </div>
            </section>
        </div>
    );
}
