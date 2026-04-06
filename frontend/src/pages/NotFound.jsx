import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="bg-[#131313] text-[#e2e2e2] min-h-screen flex flex-col overflow-hidden font-body selection:bg-primary selection:text-on-primary relative">
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'}}></div>

            {/* Structural Depth Layers */}
            <div className="fixed top-0 left-0 w-full h-16 bg-gradient-to-b from-[#0e0e0e] to-transparent opacity-50 pointer-events-none z-0"></div>
            <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e0e0e] to-transparent opacity-50 pointer-events-none z-0"></div>

            <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
                {/* Background Decorative Elements (Mechanical Grid) */}
                <div className="absolute inset-0 flex justify-between pointer-events-none opacity-10">
                    <div className="w-px h-full bg-[#474747]"></div>
                    <div className="w-px h-full bg-[#474747]"></div>
                    <div className="w-px h-full bg-[#474747]"></div>
                    <div className="w-px h-full bg-[#474747]"></div>
                </div>

                <div className="w-full max-w-5xl flex flex-col items-center text-center">
                    {/* Metadata Header */}
                    <div className="mb-8 flex flex-col items-center">
                        <span className="text-[#ffb4ab] font-['Inter'] text-[10px] tracking-[0.3em] uppercase mb-2">SYSTEM_INTEGRITY_COMPROMISED</span>
                        <div className="h-[1px] w-24 bg-[#ffb4ab]"></div>
                    </div>

                    {/* Stylized 404 Headline */}
                    <h1 className="font-['Space_Grotesk'] text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter text-white select-none opacity-90">
                        404
                    </h1>

                    {/* High-Contrast Mechanical Image */}
                    <div className="relative w-full max-w-md my-12 group">
                        <div className="absolute inset-0 bg-white opacity-5 blur-3xl group-hover:opacity-10 transition-opacity"></div>
                        <div className="relative bg-[#0e0e0e] overflow-hidden border-none p-1">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCab_bGVIMBt1pzaba5HGO46-HHxWEIcZBS4aG_trIg7o_eEor-FdDbdcH7kW0h3Ku2dpDMNjTd0-hrOaqdu3wCS_kBQLaxpaC74cjYUJLZoovz2wDxEL0rgLOyn-X4eu8Y3I2HnrpBd2EjkhIR26R8Ptxm6gNIVi2y14RMm9R2f9Yv6UmH5n5UNNC9Iwb-frQ1QSnrZNDZwRiGBq24FfvRN9Xk8uXv0Ot0PFMTwX-GD5Stiuvla-CgAqVlNCqaxwu5ptlCg3GLGJE"
                                alt="disconnected mechanical gear"
                                className="w-full aspect-square object-cover grayscale brightness-50 contrast-125"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent"></div>
                        </div>
                        {/* Telemetry Tags */}
                        <div className="absolute -left-12 top-1/2 -rotate-90">
                            <span className="font-['Inter'] text-[10px] tracking-widest text-[#919191] uppercase">INDEX_OUT_OF_BOUNDS</span>
                        </div>
                        <div className="absolute -right-12 top-1/2 rotate-90">
                            <span className="font-['Inter'] text-[10px] tracking-widest text-[#919191] uppercase">CORE_VAL_NULL</span>
                        </div>
                    </div>

                    {/* Error Strings */}
                    <div className="mb-12 space-y-2">
                        <p className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold tracking-tight text-[#e2e2e2] uppercase">
                            CRITICAL_ERROR: PATH_NOT_FOUND
                        </p>
                        <p className="font-['Inter'] text-sm tracking-[0.2em] text-[#919191] uppercase">
                            // SYSTEM_INTERRUPT // NODE_01_REJECTION
                        </p>
                    </div>

                    {/* Action Button */}
                    <div className="flex flex-col items-center gap-6">
                        <Link to="/" className="group relative inline-flex items-center justify-center px-12 py-5 bg-white text-[#1a1c1c] font-['Space_Grotesk'] font-black text-lg tracking-tighter transition-all duration-100 active:scale-95">
                            RETURN TO BASE
                            <span className="material-symbols-outlined ml-3 text-2xl" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>home</span>
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#5d5f5f] -translate-x-3 -translate-y-3"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#5d5f5f] translate-x-3 translate-y-3"></div>
                        </Link>

                        <div className="flex items-center gap-4 text-[#919191] font-['Inter'] text-[10px] tracking-widest uppercase">
                            <span className="opacity-50">MANUAL_OVERRIDE:</span>
                            <Link to="/diagnose" className="hover:text-white transition-colors">REPORT_GLITCH</Link>
                            <span className="text-[#353535]">|</span>
                            <Link to="/diagnose" className="hover:text-white transition-colors">DIAGNOSTICS</Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Telemetry */}
            <footer className="fixed bottom-0 left-0 w-full p-6 z-20 pointer-events-none">
                <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                        <div className="font-['Space_Grotesk'] font-black text-xl tracking-tighter text-white opacity-20">KINETIC_PRECISION</div>
                        <div className="font-['Inter'] text-[9px] tracking-widest text-[#474747] uppercase">EST_TIMESTAMP: 0x4F92A</div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex gap-2 mb-1">
                            <div className="w-1 h-3 bg-[#ffb4ab]"></div>
                            <div className="w-1 h-3 bg-[#353535]"></div>
                            <div className="w-1 h-3 bg-[#353535]"></div>
                            <div className="w-1 h-3 bg-[#353535]"></div>
                            <div className="w-1 h-3 bg-[#353535]"></div>
                        </div>
                        <div className="font-['Inter'] text-[9px] tracking-widest text-[#474747] uppercase">LOCAL_RECOVERY_MODE</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NotFound;
