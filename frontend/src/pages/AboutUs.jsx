import React from 'react';

export default function AboutUs() {
    return (
        <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
            {/* Hero Section */}
            <section className="relative h-[600px] w-full overflow-hidden bg-surface-container-lowest flex items-center">
                <div className="absolute inset-0 z-0">
                    {/* Placeholder generated background image for automotive/high-tech theme */}
                    <img 
                        className="w-full h-full object-cover grayscale opacity-30 mix-blend-luminosity" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6zy8BjNRrRDcEC5Bs552scwSzRgWs66-qg_z2McHlygArkStacnDt-fHB3xxwXysZSYtHlwjEVV4au6koC24UzvkW7v44_0_OfOm4UFVZt062IN7KLCm_RPK5VeXCcapsxPOONoOKlp1gTKQyayMuioPDq8k4hFhLLS2anzQW5E7PKjGuFAYb8yub_0Jn-LqOqLywIdx21RTsnhOnzmLQSFPwTK4a7burSUDtwPk2fLa1o8akBi9z2CKZZTE8oyrgiHvH7yjrzEE"
                        alt="High performance engines abstract"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                <div className="relative z-10 w-full px-12 md:px-24 max-w-7xl pt-24">
                    <div className="bg-primary h-1 w-16 mb-6"></div>
                    <h1 className="font-headline text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter uppercase mb-6 drop-shadow-2xl">
                        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-neutral-500">Excellence</span>
                    </h1>
                    <p className="max-w-2xl text-lg md:text-xl text-neutral-400 font-medium leading-relaxed">
                        At Kinetic Precision, we redefine automotive potential. Through meticulous diagnostics, unparalleled parts sourcing, and expert assembly, we elevate machines to their ultimate performance capacity.
                    </p>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="bg-surface py-24 px-6 md:px-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 text-center flex flex-col items-center">
                        <span className="font-label text-sm uppercase tracking-[0.3em] text-primary mb-3 block">Our Philosophy</span>
                        <h2 className="font-headline text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">
                            The Matrix of Performance
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="group relative p-8 bg-surface-container-low border border-white/5 hover:border-primary/50 transition-all duration-300">
                            <div className="w-14 h-14 bg-background border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-primary text-3xl">precision_manufacturing</span>
                            </div>
                            <h3 className="font-headline text-2xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">Precision Data</h3>
                            <p className="text-neutral-400 leading-relaxed text-sm">
                                Our diagnostic telemetry leaves nothing to guesswork. Every module is verified under stringent computational analysis before assembly.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="group relative p-8 bg-surface-container-low border border-white/5 hover:border-primary/50 transition-all duration-300">
                            <div className="w-14 h-14 bg-background border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-primary text-3xl">memory</span>
                            </div>
                            <h3 className="font-headline text-2xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">Elite Components</h3>
                            <p className="text-neutral-400 leading-relaxed text-sm">
                                Sourcing only OEM and top-tier aftermarket hardware. Absolute compliance with extreme durability thresholds.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="group relative p-8 bg-surface-container-low border border-white/5 hover:border-primary/50 transition-all duration-300">
                            <div className="w-14 h-14 bg-background border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-primary text-3xl">speed</span>
                            </div>
                            <h3 className="font-headline text-2xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">Maximum Output</h3>
                            <p className="text-neutral-400 leading-relaxed text-sm">
                                Our mission ends only when the power plant achieves optimal synchronization and peak kinetic energy output.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
