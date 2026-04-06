import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="bg-background text-on-background min-h-screen selection:bg-primary selection:text-on-primary">
            <header className="fixed top-0 w-full z-50 h-16 bg-neutral-950 border-b border-white/10 flex justify-between items-center px-6">
                <div className="text-2xl font-black tracking-tighter text-white uppercase font-['Space_Grotesk']">KINETIC PRECISION</div>
                <nav className="hidden md:flex gap-8 items-center">
                    <Link to="/admin/dashboard" className="font-['Space_Grotesk'] uppercase tracking-tighter text-white border-b-2 border-white pb-1 text-sm font-bold">TELEMETRY</Link>
                    <Link to="/admin/inventory" className="font-['Space_Grotesk'] uppercase tracking-tighter text-neutral-500 hover:text-white transition-colors duration-100 text-sm">ASSEMBLY</Link>
                    <Link to="/admin/reports" className="font-['Space_Grotesk'] uppercase tracking-tighter text-neutral-500 hover:text-white transition-colors duration-100 text-sm">DIAGNOSTICS</Link>
                    <Link to="/admin/financials" className="font-['Space_Grotesk'] uppercase tracking-tighter text-neutral-500 hover:text-white transition-colors duration-100 text-sm">LOGISTICS</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer">notifications</span>
                    <span className="material-symbols-outlined text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer">settings</span>
                </div>
            </header>

            <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-neutral-900 flex flex-col py-4 z-40 border-r border-neutral-800">
                <div className="px-6 mb-8">
                    <div className="text-lg font-bold text-white font-['Space_Grotesk'] tracking-widest uppercase">UNIT-01</div>
                    <div className="text-[10px] text-neutral-500 font-bold tracking-[0.2em] uppercase">V12-BLOCK-ALPHA</div>
                </div>
                <nav className="flex flex-col">
                    <Link to="/admin/dashboard" className="bg-neutral-800 text-white border-l-4 border-white px-4 py-3 flex items-center gap-3 font-['Space_Grotesk'] text-xs font-bold tracking-widest uppercase group transition-all duration-100">
                        <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>settings_input_component</span>
                        Engine Core
                    </Link>
                    <Link to="/admin/inventory" className="text-neutral-500 px-4 py-3 flex items-center gap-3 font-['Space_Grotesk'] text-xs font-bold tracking-widest uppercase hover:bg-neutral-800/50 hover:text-neutral-200 transition-all duration-100">
                        <span className="material-symbols-outlined text-sm">ev_station</span>
                        Fuel System
                    </Link>
                    <Link to="/admin/reports" className="text-neutral-500 px-4 py-3 flex items-center gap-3 font-['Space_Grotesk'] text-xs font-bold tracking-widest uppercase hover:bg-neutral-800/50 hover:text-neutral-200 transition-all duration-100">
                        <span className="material-symbols-outlined text-sm">settings_applications</span>
                        Transmission
                    </Link>
                    <Link to="/admin/financials" className="text-neutral-500 px-4 py-3 flex items-center gap-3 font-['Space_Grotesk'] text-xs font-bold tracking-widest uppercase hover:bg-neutral-800/50 hover:text-neutral-200 transition-all duration-100">
                        <span className="material-symbols-outlined text-sm">mode_fan</span>
                        Exhaust
                    </Link>
                    <Link to="/admin/staff" className="text-neutral-500 px-4 py-3 flex items-center gap-3 font-['Space_Grotesk'] text-xs font-bold tracking-widest uppercase hover:bg-neutral-800/50 hover:text-neutral-200 transition-all duration-100">
                        <span className="material-symbols-outlined text-sm">bolt</span>
                        Electrical
                    </Link>
                </nav>
            </aside>

            <main className="ml-64 mt-16 p-8 min-h-[calc(100vh-64px)] bg-[#e2e2e2] text-neutral-900 relative">
                <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'}}></div>
                <div className="relative z-10">
                    <section className="mb-8 grid grid-cols-12 gap-0 bg-neutral-950 text-white border-t-8 border-white overflow-hidden">
                        <div className="col-span-8 p-10 flex flex-col justify-between border-r border-white/5 relative overflow-hidden">
                            <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
                                <span className="material-symbols-outlined text-[400px]">precision_manufacturing</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="w-3 h-3 bg-white block"></span>
                                    <span className="text-[10px] font-black tracking-[0.3em] uppercase">SYSTEM ANALYTICS ACTIVE</span>
                                </div>
                                <h1 className="text-7xl font-black tracking-tighter uppercase mb-6 leading-[0.9] font-['Space_Grotesk']">AI VEHICLE<br/>HEALTH MONITOR</h1>
                                <div className="flex gap-12 mt-10">
                                    <div>
                                        <span className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase block mb-1">HEALTH SCORE</span>
                                        <div className="text-5xl font-black font-['Space_Grotesk']">94<span className="text-xl text-neutral-500">%</span></div>
                                    </div>
                                    <div className="flex-1 max-w-md">
                                        <span className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase block mb-1">STATUS REPORT</span>
                                        <div className="bg-error text-on-error px-4 py-2 text-xs font-bold tracking-tight uppercase flex items-center gap-3">
                                            <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
                                            CRITICAL: CYLINDER 4 THERMAL TOLERANCE EXCEEDED BY 0.04%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 bg-neutral-900 p-8 flex flex-col items-center justify-center relative">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9GsAc1tj97osIEzZ8SN1SIYoszcsS6fcMW9jTQUylKaO4RbFgNzpFRRErUHig-hSy2S3tq7rfTL7j9AIc3S9o9J2-h00bPAx1dp1e6J8fj-JAEeksShAjV0Z7deA6Nv6PeUUGRG4UcWyxGy-t99FjVS760TeM0Pk7f-m44ffC01_aeAH7rUtq2Gq5oKiQTRJJvYFbts5P4Hku8yjr_JSTG0SvUitCczFYEuIk43Qz99wsavuO6LOtD1T-mIiuDnJY9jVxGKVG1EA" alt="wireframe car graphic" className="w-full h-auto object-contain mix-blend-screen opacity-80" />
                            <div className="absolute bottom-6 right-6 text-right">
                                <div className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase">LAST SYNC</div>
                                <div className="text-sm font-mono text-white">2023.10.27_14:22:01_PST</div>
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-4 gap-6">
                        <Link to="/admin/telemetry" className="bg-white p-6 flex flex-col justify-between group hover:bg-neutral-950 hover:text-white transition-colors duration-150 cursor-pointer border-l border-neutral-300">
                            <div>
                                <span className="material-symbols-outlined text-4xl mb-6">query_stats</span>
                                <h3 className="text-xl font-bold uppercase tracking-tighter mb-2 font-['Space_Grotesk']">TELEMETRY PULL</h3>
                                <p className="text-xs text-neutral-500 group-hover:text-neutral-400 font-medium leading-relaxed">Download real-time performance data packets directly from the Engine Core.</p>
                            </div>
                            <div className="mt-8 flex justify-between items-end">
                                <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">CMD_044</span>
                                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-150">arrow_forward</span>
                            </div>
                        </Link>
                        <div className="bg-white p-6 flex flex-col justify-between group hover:bg-neutral-950 hover:text-white transition-colors duration-150 cursor-pointer border-l border-neutral-300">
                            <div>
                                <span className="material-symbols-outlined text-4xl mb-6">build</span>
                                <h3 className="text-xl font-bold uppercase tracking-tighter mb-2 font-['Space_Grotesk']">SYSTEM RECAL</h3>
                                <p className="text-xs text-neutral-500 group-hover:text-neutral-400 font-medium leading-relaxed">Initialize automated sensor recalibration sequence for all transmission gears.</p>
                            </div>
                            <div className="mt-8 flex justify-between items-end">
                                <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">CMD_091</span>
                                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-150">arrow_forward</span>
                            </div>
                        </div>
                        <Link to="/admin/reports" className="bg-white p-6 flex flex-col justify-between group hover:bg-neutral-950 hover:text-white transition-colors duration-150 cursor-pointer border-l border-neutral-300">
                            <div>
                                <span className="material-symbols-outlined text-4xl mb-6">history_edu</span>
                                <h3 className="text-xl font-bold uppercase tracking-tighter mb-2 font-['Space_Grotesk']">MAINTENANCE LOGS</h3>
                                <p className="text-xs text-neutral-500 group-hover:text-neutral-400 font-medium leading-relaxed">Review historical service data and digital certification signatures for this unit.</p>
                            </div>
                            <div className="mt-8 flex justify-between items-end">
                                <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">CMD_112</span>
                                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-150">arrow_forward</span>
                            </div>
                        </Link>
                        <div className="bg-white p-6 flex flex-col justify-between group hover:bg-neutral-950 hover:text-white transition-colors duration-150 cursor-pointer border-l border-neutral-300">
                            <div>
                                <span className="material-symbols-outlined text-4xl mb-6">emergency_home</span>
                                <h3 className="text-xl font-bold uppercase tracking-tighter mb-2 font-['Space_Grotesk']">STATION DISPATCH</h3>
                                <p className="text-xs text-neutral-500 group-hover:text-neutral-400 font-medium leading-relaxed">Request immediate logistical support or local diagnostic technician transport.</p>
                            </div>
                            <div className="mt-8 flex justify-between items-end">
                                <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">CMD_001</span>
                                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-150">arrow_forward</span>
                            </div>
                        </div>
                    </section>

                    <section className="mt-8 grid grid-cols-3 gap-6">
                        <div className="col-span-2 bg-neutral-200/50 p-8 flex flex-col gap-8">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-black uppercase tracking-tighter font-['Space_Grotesk']">PERFORMANCE TRENDS</h2>
                                <div className="flex gap-2">
                                    <button className="bg-neutral-950 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1">24H</button>
                                    <button className="bg-neutral-300 text-neutral-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1 hover:bg-neutral-400 transition-colors">7D</button>
                                </div>
                            </div>
                            <div className="flex-1 h-64 bg-neutral-950 p-1 relative">
                                <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                                    <div className="text-neutral-700 text-[10px] font-bold tracking-[1em] uppercase">RENDERING DATA CLOUD...</div>
                                </div>
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD512WiQxmKBOptecYHpdv-PYnYWVLo2dBrC2hRumx20NWST0CVXv5-P-r1gwuKRxnYRd2uxNFDw4GNvU8AGQQ-Pn-Fy1y-GjBaMXLo_XCu9q9d9SN6d_yjVzLIILJksZUrvUCDGWbR2IUuejItx2SUIZMxlal3yYJ8HH0DT2pPWvrpC6cKxr3YUU9K3VbpQqCYpwnVgr2h-_Kwbt67jZ5QYeWEW-jyQpUOg8WZvHS0bQqanHfMPiCte1TtchkMjfj8NoNdY-btK9w" alt="telemetry graph" className="w-full h-full object-cover opacity-60 mix-blend-lighten relative z-10" />
                            </div>
                        </div>
                        <div className="bg-neutral-950 text-white p-8">
                            <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 font-['Space_Grotesk']">UNIT SPECS</h2>
                            <div className="space-y-6">
                                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                                    <span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">ENGINE CLASS</span>
                                    <span className="text-sm font-bold uppercase">ALPHA-V12-TURBO</span>
                                </div>
                                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                                    <span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">OIL PRESSURE</span>
                                    <span className="text-sm font-bold uppercase">4.2 BAR [STABLE]</span>
                                </div>
                                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                                    <span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">RPM CEILING</span>
                                    <span className="text-sm font-bold uppercase">12,400</span>
                                </div>
                                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                                    <span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">TORQUE PK</span>
                                    <span className="text-sm font-bold uppercase">840 NM @ 8200</span>
                                </div>
                                <div className="pt-4">
                                    <span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase block mb-3">ACTUATOR CAPACITY</span>
                                    <div className="flex gap-1">
                                        <div className="h-3 w-4 bg-white"></div>
                                        <div className="h-3 w-4 bg-white"></div>
                                        <div className="h-3 w-4 bg-white"></div>
                                        <div className="h-3 w-4 bg-white"></div>
                                        <div className="h-3 w-4 bg-white"></div>
                                        <div className="h-3 w-4 bg-white"></div>
                                        <div className="h-3 w-4 bg-white"></div>
                                        <div className="h-3 w-4 bg-neutral-800"></div>
                                        <div className="h-3 w-4 bg-neutral-800"></div>
                                        <div className="h-3 w-4 bg-neutral-800"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
