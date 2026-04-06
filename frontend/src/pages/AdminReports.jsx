import React from 'react';
import { Link } from 'react-router-dom';

const AdminReports = () => {
    return (
        <div className="bg-background text-on-background min-h-screen flex flex-col overflow-hidden selection:bg-primary selection:text-on-primary">
            {/* TopAppBar */}
            <header className="fixed top-0 w-full z-50 flex justify-between items-center h-16 px-6 bg-[#131313] font-['Space_Grotesk'] tracking-tight border-b border-outline-variant/10">
                <div className="text-2xl font-bold tracking-tighter text-white uppercase">KINETIC_PRECISION</div>
                <nav className="hidden md:flex gap-8 items-center">
                    <Link to="/admin/reports" className="text-white border-b-2 border-white pb-1 font-bold">REPORTS</Link>
                    <Link to="/admin/telemetry" className="text-[#D4D4D4] hover:text-white transition-colors duration-100">ANALYTICS</Link>
                    <Link to="/admin/inventory" className="text-[#D4D4D4] hover:text-white transition-colors duration-100">INVENTORY</Link>
                    <Link to="/admin/financials" className="text-[#D4D4D4] hover:text-white transition-colors duration-100">LOGISTICS</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <button className="bg-primary text-on-primary px-4 py-1 font-bold text-xs tracking-widest hover:bg-primary-container transition-all">
                        EXPORT_DATA
                    </button>
                    <div className="flex gap-2">
                        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-white">notifications</span>
                        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-white">settings</span>
                    </div>
                    <div className="w-8 h-8 bg-surface-container-highest border border-outline-variant/20 overflow-hidden">
                        <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbpyIssXU7o2pGz1pzTrVCcOQBAcgZ7hqjx7GW119zQCXSMM0fOoewm32Gw3fxC6eYi4phf0sDJfq-V4oV93cHdi-X740me0vYK3cxTDR5ugCb0zOvP-5P3nKEZWA9Hzls_ShSHynp7Xo_U7LXjo2FoLYSoh23wM2U5TCKsRw1we_gRTgS1ELeRFtYpmRwJSZB-jyMP6TP3OgQe_9Lfn5GNVqqVGeAd_EM_mY_5ZZR78NioFS5yohYmGiuTHlPw3jHUa43W5M0M-M" alt="Profile" />
                    </div>
                </div>
            </header>

            <div className="flex pt-0 flex-1">
                {/* SideNavBar */}
                <aside className="flex flex-col h-full fixed left-0 top-0 overflow-y-auto w-64 border-r border-zinc-800 bg-zinc-950 z-40 font-['Space_Grotesk'] tracking-tight uppercase">
                    <div className="px-6 pt-12 mb-8 mt-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center">
                                <span className="material-symbols-outlined text-zinc-950" style={{fontVariationSettings: "'FILL' 1"}}>precision_manufacturing</span>
                            </div>
                            <div>
                                <p className="font-bold text-[10px] text-zinc-100">MACHINA</p>
                                <p className="text-[8px] text-zinc-500">SYSTEM CONTROL</p>
                            </div>
                        </div>
                        <button className="w-full bg-zinc-900 text-zinc-100 py-3 font-bold text-[10px] border border-zinc-800 hover:bg-zinc-800 transition-all">
                            NEW_EXTRACTION
                        </button>
                    </div>
                    <nav className="flex-1 space-y-1">
                        <Link to="/admin/telemetry" className="flex items-center gap-3 px-6 py-4 text-zinc-500 hover:text-zinc-300 transition-colors duration-100 hover:bg-zinc-900">
                            <span className="material-symbols-outlined text-xl">monitoring</span> Analytics
                        </Link>
                        <Link to="/admin/staff" className="flex items-center gap-3 px-6 py-4 text-zinc-500 hover:text-zinc-300 transition-colors duration-100 hover:bg-zinc-900">
                            <span className="material-symbols-outlined text-xl">group</span> Manage Staff
                        </Link>
                        <Link to="/admin/inventory" className="flex items-center gap-3 px-6 py-4 text-zinc-500 hover:text-zinc-300 transition-colors duration-100 hover:bg-zinc-900">
                            <span className="material-symbols-outlined text-xl">inventory_2</span> Manage Inventory
                        </Link>
                        <Link to="/admin/financials" className="flex items-center gap-3 px-6 py-4 text-zinc-500 hover:text-zinc-300 transition-colors duration-100 hover:bg-zinc-900">
                            <span className="material-symbols-outlined text-xl">account_balance_wallet</span> Financial Ledger
                        </Link>
                        <Link to="/admin/reports" className="flex items-center gap-3 px-6 py-4 bg-zinc-800 text-zinc-100 border-l-4 border-zinc-100 font-bold translate-x-1 duration-100 transition-transform">
                            <span className="material-symbols-outlined text-xl">summarize</span> Extract Reports
                        </Link>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="ml-64 flex-1 bg-on-surface-variant/5 min-h-screen p-8 pt-24 overflow-y-auto">
                    {/* Header Section */}
                    <div className="flex justify-between items-end mb-12">
                        <div className="max-w-2xl">
                            <p className="font-['Inter'] uppercase tracking-[0.2em] text-[10px] text-outline mb-2">TELEMETRY_DATAFEED / SYSTEM_REPORTS</p>
                            <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-white">ADMIN_MASTER_REPORT_HUB</h1>
                        </div>
                        <button className="bg-white text-black px-8 py-4 font-bold tracking-widest flex items-center gap-3 hover:bg-primary-container transition-all">
                            <span className="material-symbols-outlined">archive</span>
                            GENERATE MASTER ARCHIVE
                        </button>
                    </div>

                    {/* Advanced Filter Bar */}
                    <div className="bg-surface-container-low p-6 mb-8 border border-outline-variant/10 grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                        <div>
                            <label className="block font-['Inter'] uppercase tracking-widest text-[9px] text-outline mb-2">Department</label>
                            <select className="w-full bg-surface-container-lowest border-none text-white text-xs uppercase tracking-wider py-3 px-4 focus:ring-1 focus:ring-primary">
                                <option>All Departments</option>
                                <option>Engineering</option>
                                <option>Operations</option>
                            </select>
                        </div>
                        <div>
                            <label className="block font-['Inter'] uppercase tracking-widest text-[9px] text-outline mb-2">Fiscal Quarter</label>
                            <select className="w-full bg-surface-container-lowest border-none text-white text-xs uppercase tracking-wider py-3 px-4 focus:ring-1 focus:ring-primary">
                                <option>Q4 FY2024</option>
                                <option>Q3 FY2024</option>
                            </select>
                        </div>
                        <div>
                            <label className="block font-['Inter'] uppercase tracking-widest text-[9px] text-outline mb-2">Regional Sector</label>
                            <select className="w-full bg-surface-container-lowest border-none text-white text-xs uppercase tracking-wider py-3 px-4 focus:ring-1 focus:ring-primary">
                                <option>Global Operations</option>
                                <option>EMEA Sector</option>
                            </select>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex-1 bg-surface-container-highest text-white py-3 uppercase tracking-widest text-[10px] font-bold hover:bg-outline-variant transition-colors">
                                REFRESH_QUERY
                            </button>
                        </div>
                    </div>

                    {/* Reports Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Module 1: Financial Performance */}
                        <div className="bg-surface-container p-6 border-l-4 border-primary">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="font-headline text-xl font-bold tracking-tight text-white mb-1 uppercase">Financial Performance (P&amp;L)</h3>
                                    <p className="font-['Inter'] text-[11px] text-on-surface-variant uppercase tracking-wider">Audit code: ACC_992_BRAVO</p>
                                </div>
                                <div className="flex gap-2">
                                    <span className="material-symbols-outlined p-2 text-xs bg-surface-container-lowest text-on-surface-variant cursor-pointer hover:text-white">picture_as_pdf</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="bg-surface-container-lowest p-4 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),inset_-1px_-1px_2px_rgba(255,255,255,0.05)]">
                                    <p className="text-[9px] text-outline uppercase tracking-widest mb-1">Gross Margin</p>
                                    <p className="text-xl font-headline font-bold text-white">42.8%</p>
                                </div>
                                <div className="bg-surface-container-lowest p-4 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),inset_-1px_-1px_2px_rgba(255,255,255,0.05)]">
                                    <p className="text-[9px] text-outline uppercase tracking-widest mb-1">Net Revenue</p>
                                    <p className="text-xl font-headline font-bold text-white">$14.2M</p>
                                </div>
                                <div className="bg-surface-container-lowest p-4 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),inset_-1px_-1px_2px_rgba(255,255,255,0.05)]">
                                    <p className="text-[9px] text-outline uppercase tracking-widest mb-1">OPEX Index</p>
                                    <p className="text-xl font-headline font-bold text-white">0.84</p>
                                </div>
                            </div>
                            <button className="w-full border border-outline-variant/30 py-3 font-['Inter'] uppercase tracking-widest text-[10px] font-bold hover:bg-white hover:text-black transition-all">
                                EXPAND_FINANCIAL_SPECIFICATIONS
                            </button>
                        </div>

                        {/* Module 2: Inventory Valuation */}
                        <div className="bg-surface-container p-6 border-l-4 border-outline">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="font-headline text-xl font-bold tracking-tight text-white mb-1 uppercase">Inventory Valuation</h3>
                                    <p className="font-['Inter'] text-[11px] text-on-surface-variant uppercase tracking-wider">Logistics chain: LOG_STK_ALPHA</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-32 h-32 relative">
                                    <svg className="w-full h-full stroke-primary transition-all" viewBox="0 0 36 36">
                                        <path className="stroke-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path>
                                        <path className="stroke-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="75, 100" strokeLinecap="butt" strokeWidth="3"></path>
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-xs font-bold uppercase tracking-tighter">Turnover</span>
                                        <span className="text-lg font-black">4.2X</span>
                                    </div>
                                </div>
                                <div className="flex-1 space-y-4">
                                    <div className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                                        <span className="text-[10px] text-outline uppercase tracking-widest">Active Stock</span>
                                        <span className="text-sm font-bold">$2.84M</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                                        <span className="text-[10px] text-outline uppercase tracking-widest">Stagnant (&gt;90D)</span>
                                        <span className="text-sm font-bold text-error">$142K</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full border border-outline-variant/30 py-3 font-['Inter'] uppercase tracking-widest text-[10px] font-bold hover:bg-white hover:text-black transition-all">
                                RUN_VALUATION_ENGINE
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminReports;
