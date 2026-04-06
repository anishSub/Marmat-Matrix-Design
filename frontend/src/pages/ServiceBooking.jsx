import React from 'react';

export default function ServiceBooking() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#131313] text-on-surface p-8 lg:p-12 gap-8">
            <section className="w-full md:w-1/2 bg-surface p-8 lg:p-12 border-r border-outline-variant/10">
                <header className="mb-12">
                    <div className="text-xs font-label uppercase tracking-[0.3em] text-outline mb-2">Service Bay Alpha</div>
                    <h1 className="text-6xl font-headline font-black tracking-tighter text-white uppercase leading-none">Book a<br/>Service</h1>
                </header>
                <div className="space-y-8 relative z-10">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-label uppercase tracking-widest text-outline">Service Type</label>
                            <select className="w-full bg-surface-container-lowest border-0 text-white font-headline text-sm py-4 px-4 focus:ring-1 focus:ring-primary">
                                <option>DYNAMOMETER TUNING</option>
                                <option>FLUID ANALYSIS</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-label uppercase tracking-widest text-outline">Technician Level</label>
                            <select className="w-full bg-surface-container-lowest border-0 text-white font-headline text-sm py-4 px-4 focus:ring-1 focus:ring-primary">
                                <option>MASTER ENGINEER</option>
                            </select>
                        </div>
                    </div>
                    <button className="w-full bg-primary text-on-primary font-headline font-black py-5 uppercase tracking-[0.2em] hover:bg-primary-container transition-colors">
                        CONFIRM BOOKING SEQUENCE
                    </button>
                </div>
            </section>

            <section className="w-full md:w-1/2 bg-surface-container-low p-8 lg:p-12 relative">
                <header className="mb-12">
                    <div className="text-xs font-label uppercase tracking-[0.3em] text-outline mb-2">Inventory Out-of-Stock</div>
                    <h2 className="text-6xl font-headline font-black tracking-tighter text-white uppercase leading-none">Parts<br/>Request</h2>
                </header>
                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-label uppercase tracking-widest text-outline">Part Name</label>
                        <input className="w-full bg-surface-container-lowest border-b-2 border-outline focus:border-primary focus:ring-0 text-white font-headline text-lg py-4 placeholder:text-outline/30" placeholder="E.G. TITANIUM VALVE SPRING" type="text"/>
                    </div>
                    <button className="w-full bg-transparent border-2 border-white text-white font-headline font-black py-5 uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                        INITIALIZE SOURCING PROTOCOL
                    </button>
                </form>
            </section>
        </div>
    );
}
