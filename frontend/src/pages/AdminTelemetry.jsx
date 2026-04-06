import React from 'react';
import { Link } from 'react-router-dom';

const AdminTelemetry = () => {
    return (
        <div className="bg-background text-on-background font-body overflow-hidden min-h-screen selection:bg-primary selection:text-on-primary flex flex-col">
            <header className="bg-neutral-950 text-white font-['Space_Grotesk'] uppercase tracking-tight text-sm docked full-width top-0 border-b border-neutral-800 flex justify-between items-center w-full px-6 py-3 z-50">
                <div className="flex items-center gap-12">
                    <span className="text-xl font-black text-white tracking-tighter">KINETIC PRECISION</span>
                    <nav className="hidden md:flex gap-8">
                        <Link to="/admin/dashboard" className="text-neutral-500 pb-1 hover:text-white transition-colors duration-100">DASHBOARD</Link>
                        <Link to="/admin/inventory" className="text-neutral-500 pb-1 hover:text-white transition-colors duration-100">CUSTOMERS</Link>
                        <Link to="/admin/inventory" className="text-neutral-500 pb-1 hover:text-white transition-colors duration-100">INVENTORY</Link>
                        <Link to="/admin/reports" className="text-white border-b-2 border-white pb-1 font-bold transition-all duration-100">REPORTS</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex gap-4 items-center">
                        <span className="material-symbols-outlined text-neutral-400 hover:text-white cursor-pointer">settings</span>
                        <span className="material-symbols-outlined text-neutral-400 hover:text-white cursor-pointer">notifications</span>
                    </div>
                    <button className="bg-white text-black px-4 py-1.5 font-bold text-xs tracking-widest hover:bg-neutral-200 transition-colors">NEW ORDER</button>
                    <div className="w-8 h-8 bg-neutral-800"></div>
                </div>
            </header>

            <div className="flex flex-1 h-[calc(100vh-56px)]">
                <aside className="fixed left-0 top-14 h-[calc(100vh-56px)] w-64 bg-neutral-900 flex flex-col border-r border-neutral-800 z-40">
                    <div className="p-6 border-b border-neutral-800">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-neutral-800 flex items-center justify-center">
                                <span className="material-symbols-outlined text-white">terminal</span>
                            </div>
                            <div>
                                <div className="font-['Inter'] uppercase tracking-widest text-[10px] text-white font-bold">STATION_01</div>
                                <div className="font-['Inter'] uppercase tracking-widest text-[8px] text-neutral-500">OPERATOR_ACTIVE</div>
                            </div>
                        </div>
                    </div>
                    <nav className="flex-1 mt-4">
                        <Link to="/admin/dashboard" className="text-neutral-500 px-4 py-3 flex items-center gap-3 hover:bg-neutral-800 hover:text-neutral-200 transition-colors duration-100 cursor-pointer">
                            <span className="material-symbols-outlined">point_of_sale</span>
                            <span className="font-['Inter'] uppercase tracking-widest text-[10px]">POS TERMINAL</span>
                        </Link>
                        <Link to="/admin/staff" className="text-neutral-500 px-4 py-3 flex items-center gap-3 hover:bg-neutral-800 hover:text-neutral-200 transition-colors duration-100 cursor-pointer">
                            <span className="material-symbols-outlined">group</span>
                            <span className="font-['Inter'] uppercase tracking-widest text-[10px]">CLIENT DATABASE</span>
                        </Link>
                        <Link to="/admin/telemetry" className="bg-neutral-800 text-white border-l-4 border-white px-4 py-3 flex items-center gap-3 cursor-pointer scale-[0.99] transition-transform duration-100">
                            <span className="material-symbols-outlined">analytics</span>
                            <span className="font-['Inter'] uppercase tracking-widest text-[10px]">METRICS</span>
                        </Link>
                        <Link to="/admin/reports" className="text-neutral-500 px-4 py-3 flex items-center gap-3 hover:bg-neutral-800 hover:text-neutral-200 transition-colors duration-100 cursor-pointer">
                            <span className="material-symbols-outlined">terminal</span>
                            <span className="font-['Inter'] uppercase tracking-widest text-[10px]">SYSTEM LOGS</span>
                        </Link>
                    </nav>
                </aside>

                <main className="ml-64 flex-1 flex flex-col bg-surface overflow-hidden">
                    <section className="p-8 pb-0 border-b border-white/10">
                        <div className="flex justify-between items-end mb-8">
                            <div className="max-w-2xl">
                                <p className="font-['Inter'] uppercase tracking-[0.2em] text-[10px] text-outline mb-2">TELEMETRY_DATAFEED / SYSTEM_REPORTS</p>
                                <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-white">ADMIN_MASTER_REPORT_HUB</h1>
                            </div>
                            <button className="bg-white text-black px-8 py-4 font-bold tracking-widest flex items-center gap-3 hover:bg-primary-container transition-all">
                                <span className="material-symbols-outlined">archive</span>
                                GENERATE MASTER ARCHIVE
                            </button>
                        </div>

                        {/* Reports Grid (Reusing ReportExtraction logic/styling) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                            <div className="bg-surface-container p-6 border-l-4 border-primary">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="font-headline text-xl font-bold tracking-tight text-white mb-1 uppercase">Financial Performance (P&amp;L)</h3>
                                        <p className="font-['Inter'] text-[11px] text-on-surface-variant uppercase tracking-wider">Audit code: ACC_992_BRAVO</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="material-symbols-outlined p-2 text-xs bg-surface-container-lowest text-on-surface-variant cursor-pointer hover:text-white">picture_as_pdf</span>
                                        <span className="material-symbols-outlined p-2 text-xs bg-surface-container-lowest text-on-surface-variant cursor-pointer hover:text-white">table_chart</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    <div className="bg-surface-container-lowest p-4">
                                        <p className="text-[9px] text-outline uppercase tracking-widest mb-1">Gross Margin</p>
                                        <p className="text-xl font-headline font-bold text-white">42.8%</p>
                                    </div>
                                    <div className="bg-surface-container-lowest p-4">
                                        <p className="text-[9px] text-outline uppercase tracking-widest mb-1">Net Revenue</p>
                                        <p className="text-xl font-headline font-bold text-white">$14.2M</p>
                                    </div>
                                    <div className="bg-surface-container-lowest p-4">
                                        <p className="text-[9px] text-outline uppercase tracking-widest mb-1">OPEX Index</p>
                                        <p className="text-xl font-headline font-bold text-white">0.84</p>
                                    </div>
                                </div>
                                <button className="w-full border border-outline-variant/30 py-3 font-['Inter'] uppercase tracking-widest text-[10px] font-bold hover:bg-white hover:text-black transition-all">EXPAND_FINANCIAL_SPECIFICATIONS</button>
                            </div>

                            <div className="bg-surface-container p-6 border-l-4 border-outline">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="font-headline text-xl font-bold tracking-tight text-white mb-1 uppercase">Staff Performance Metrics</h3>
                                        <p className="font-['Inter'] text-[11px] text-on-surface-variant uppercase tracking-wider">Node: HUM_RES_DELTA</p>
                                    </div>
                                </div>
                                <div className="bg-surface-container-lowest p-4 mb-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Productivity_Bandwidth</span>
                                        <span className="text-[10px] font-mono text-primary">92.4% OPTIMIZED</span>
                                    </div>
                                    <div className="flex items-end gap-[2px] h-16">
                                        <div className="bg-primary w-full h-[90%]"></div>
                                        <div className="bg-primary/80 w-full h-4/5"></div>
                                        <div className="bg-primary/60 w-full h-2/3"></div>
                                        <div className="bg-primary/40 w-full h-1/2"></div>
                                    </div>
                                </div>
                                <button className="w-full border border-outline-variant/30 py-3 font-['Inter'] uppercase tracking-widest text-[10px] font-bold hover:bg-white hover:text-black transition-all">ACCESS_TALENT_ANALYTICS</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default AdminTelemetry;
