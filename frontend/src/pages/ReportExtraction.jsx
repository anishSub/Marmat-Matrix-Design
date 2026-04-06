import React from 'react';
import { Link } from 'react-router-dom';

const ReportExtraction = () => {
    return (
        <div className="bg-[#0A0A0A] text-white font-body overflow-hidden min-h-screen">
            {/* TopAppBar */}
            <header className="fixed top-0 w-full z-50 bg-[#0E0E0E] flex justify-between items-center h-16 px-6 font-['Space_Grotesk'] tracking-tight border-b border-[#1B1B1B]">
                <div className="text-2xl font-bold tracking-tighter text-white uppercase">KINETIC_PRECISION</div>
                <nav className="hidden md:flex items-center space-x-8 h-full">
                    <Link to="/staff/reports" className="text-[#A0A0A0] hover:text-white transition-colors duration-100 text-sm font-medium tracking-widest uppercase">REPORTS</Link>
                    <Link to="/staff/report-extraction" className="text-white border-b-2 border-white pb-1 text-sm font-medium tracking-widest uppercase">EXTRACTION</Link>
                    <Link to="/staff/pos" className="text-[#A0A0A0] hover:text-white transition-colors duration-100 text-sm font-medium tracking-widest uppercase">INVENTORY</Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <button className="bg-white text-black px-4 py-2 font-bold text-xs tracking-widest uppercase hover:bg-[#D4D4D4] transition-colors duration-100 h-10">EXPORT_DATA</button>
                </div>
            </header>

            {/* SideNavBar */}
            <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-[#0A0A0A] flex flex-col py-4 z-40 border-r border-[#1B1B1B]">
                <div className="px-6 mb-8">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-[#262626] flex items-center justify-center border border-[#333333]">
                            <span className="material-symbols-outlined text-white">admin_panel_settings</span>
                        </div>
                        <div>
                            <div className="text-white font-black text-xs uppercase tracking-tighter">OPERATOR_01</div>
                            <div className="text-[9px] text-[#A0A0A0] font-['Inter'] uppercase tracking-widest opacity-60">ADMIN_LEVEL_ACCESS</div>
                        </div>
                    </div>
                </div>
                <nav className="flex-1">
                    <ul className="space-y-1">
                        <li>
                            <Link to="/staff/dashboard" className="flex items-center px-6 py-3 text-[#A0A0A0] hover:bg-[#1B1B1B] transition-all duration-100">
                                <span className="material-symbols-outlined mr-4 opacity-50">dashboard</span>
                                <span className="font-['Inter'] uppercase tracking-widest text-[10px]">DASHBOARD</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/staff/reports" className="flex items-center px-6 py-3 text-[#A0A0A0] hover:bg-[#1B1B1B] transition-all duration-100">
                                <span className="material-symbols-outlined mr-4 opacity-50">history</span>
                                <span className="font-['Inter'] uppercase tracking-widest text-[10px]">HISTORICAL</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/staff/report-extraction" className="flex items-center px-6 py-3 bg-[#1B1B1B] text-white font-bold border-l-4 border-white transition-all duration-100">
                                <span className="material-symbols-outlined mr-4">description</span>
                                <span className="font-['Inter'] uppercase tracking-widest text-[10px]">EXTRACTION</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="ml-64 mt-16 h-[calc(100vh-64px)] overflow-y-auto">
                {/* Header Section */}
                <div className="bg-[#0A0A0A] px-10 py-12 flex justify-between items-end border-b border-[#1B1B1B]">
                    <div className="max-w-2xl">
                        <h1 className="text-6xl font-headline font-bold text-white tracking-tighter uppercase leading-none mb-4">
                            Staff Report<br/>Extraction
                        </h1>
                        <p className="text-[#A0A0A0] font-body text-sm tracking-tight max-w-lg">
                            System-wide data synthesis. Select parameters to generate high-fidelity operational reports from the monolithic core database.
                        </p>
                    </div>
                    <div className="flex space-x-3 pb-2">
                        <button className="bg-[#262626] text-white px-6 py-4 flex items-center space-x-3 hover:bg-[#333333] border border-[#474747] font-bold text-xs tracking-widest uppercase">
                            <span className="material-symbols-outlined">picture_as_pdf</span>
                            <span>Export as PDF</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-0 min-h-[calc(100vh-250px)]">
                    {/* Left: Parameters / Filters */}
                    <div className="col-span-4 bg-[#0E0E0E] border-r border-[#1B1B1B] p-10 space-y-12">
                        <section>
                            <h3 className="font-label text-[10px] font-black tracking-[0.2em] uppercase text-[#A0A0A0] mb-6 flex items-center">
                                <span className="w-2 h-2 bg-white mr-2"></span> DATA_RANGE_PARAMETERS
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-[#131313] border border-[#333333] p-4">
                                    <label className="block text-[9px] font-bold uppercase tracking-widest text-[#A0A0A0] mb-2">Start Date</label>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-white">2023-10-01</span>
                                        <span className="material-symbols-outlined text-[#A0A0A0]">calendar_today</span>
                                    </div>
                                </div>
                                <div className="bg-[#131313] border border-[#333333] p-4">
                                    <label className="block text-[9px] font-bold uppercase tracking-widest text-[#A0A0A0] mb-2">End Date</label>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-white">2023-10-31</span>
                                        <span className="material-symbols-outlined text-[#A0A0A0]">calendar_today</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h3 className="font-label text-[10px] font-black tracking-[0.2em] uppercase text-[#A0A0A0] mb-6 flex items-center">
                                <span className="w-2 h-2 bg-white mr-2"></span> OPERATIONAL_FILTERS
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-[9px] font-bold uppercase tracking-widest text-[#A0A0A0] mb-3">Filter by Category</label>
                                    <select className="w-full bg-[#131313] border border-[#333333] py-4 px-4 text-xs font-bold uppercase tracking-wider text-white focus:outline-none">
                                        <option>ALL_CATEGORIES</option>
                                        <option>CORE_MANUFACTURING</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[9px] font-bold uppercase tracking-widest text-[#A0A0A0] mb-3">Staff Member Selection</label>
                                    <select className="w-full bg-[#131313] border border-[#333333] py-4 px-4 text-xs font-bold uppercase tracking-wider text-white focus:outline-none">
                                        <option>ALL_OPERATORS</option>
                                        <option>OPERATOR_ALPHA</option>
                                    </select>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right: Report Type Selection */}
                    <div className="col-span-8 p-10 bg-[#0A0A0A]">
                        <h3 className="font-label text-[10px] font-black tracking-[0.2em] uppercase text-[#A0A0A0] mb-8 flex items-center">
                            <span className="w-2 h-2 bg-white mr-2"></span> SELECT_REPORT_TEMPLATE
                        </h3>
                        <div className="grid grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div className="group bg-[#131313] border border-[#333333] p-8 hover:bg-white hover:text-black transition-all cursor-pointer">
                                <div className="flex justify-between items-start mb-12">
                                    <span className="material-symbols-outlined text-4xl text-white group-hover:text-black">analytics</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-60">ID: RP_01</span>
                                </div>
                                <h4 className="text-2xl font-bold uppercase tracking-tighter mb-2">Daily Sales Log</h4>
                                <p className="text-xs opacity-60 font-body tracking-tight mb-8">Comprehensive analysis of 24-hour transaction cycles and revenue stream telemetry.</p>
                                <div className="flex items-center text-[10px] font-black tracking-widest uppercase">
                                    <span>Activate Extraction</span>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="group bg-[#131313] border border-[#333333] p-8 hover:bg-white hover:text-black transition-all cursor-pointer">
                                <div className="flex justify-between items-start mb-12">
                                    <span className="material-symbols-outlined text-4xl text-white group-hover:text-black">inventory_2</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-60">ID: RP_03</span>
                                </div>
                                <h4 className="text-2xl font-bold uppercase tracking-tighter mb-2">Inventory Stock-Outs</h4>
                                <p className="text-xs opacity-60 font-body tracking-tight mb-8">Predictive critical depletion analysis. Identification of high-risk supply chain gaps.</p>
                                <div className="flex items-center text-[10px] font-black tracking-widest uppercase">
                                    <span>Activate Extraction</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ReportExtraction;
