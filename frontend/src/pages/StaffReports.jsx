import React from 'react';
import { Link } from 'react-router-dom';

const StaffReports = () => {
    return (
        <div className="bg-surface text-on-surface font-body overflow-hidden min-h-screen">
            {/* Top Navigation Anchor */}
            <header className="fixed top-0 w-full bg-neutral-950 flex justify-between items-center px-6 py-3 border-b border-neutral-800 z-40">
                <div className="flex items-center gap-8">
                    <span className="text-xl font-black text-white tracking-tighter font-['Space_Grotesk'] uppercase">KINETIC PRECISION POS</span>
                    <nav className="flex gap-6">
                        <Link to="/staff/dashboard" className="text-neutral-500 pb-1 font-['Space_Grotesk'] uppercase tracking-tight text-sm hover:text-white transition-colors duration-100">DASHBOARD</Link>
                        <Link to="/staff/customers" className="text-neutral-500 pb-1 font-['Space_Grotesk'] uppercase tracking-tight text-sm hover:text-white transition-colors duration-100">CUSTOMERS</Link>
                        <Link to="/staff/pos" className="text-neutral-500 pb-1 font-['Space_Grotesk'] uppercase tracking-tight text-sm hover:text-white transition-colors duration-100">INVENTORY</Link>
                        <Link to="/staff/reports" className="text-white border-b-2 border-white pb-1 font-bold font-['Space_Grotesk'] uppercase tracking-tight text-sm">REPORTS</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        <span className="material-symbols-outlined text-neutral-500 cursor-pointer hover:text-white">settings</span>
                        <span className="material-symbols-outlined text-neutral-500 cursor-pointer hover:text-white">notifications</span>
                    </div>
                    <button className="bg-primary text-on-primary px-4 py-1 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-tight hover:bg-primary-container transition-all active:opacity-80">
                        NEW ORDER
                    </button>
                </div>
            </header>

            <div className="flex h-screen pt-14">
                {/* Side Navigation Anchor */}
                <aside className="w-64 flex flex-col h-full bg-neutral-900 border-r border-neutral-800 z-30">
                    <div className="p-6">
                        <div className="bg-neutral-800 p-4 flex flex-col gap-1">
                            <span className="font-['Inter'] uppercase tracking-widest text-[10px] text-white">STATION_01</span>
                            <span className="font-['Inter'] uppercase tracking-widest text-[10px] text-neutral-500">OPERATOR_ACTIVE</span>
                        </div>
                    </div>
                    <nav className="flex-1 flex flex-col">
                        <Link to="/staff/pos" className="text-neutral-500 px-4 py-3 flex items-center gap-3 font-['Inter'] uppercase tracking-widest text-[10px] hover:bg-neutral-800 hover:text-neutral-200 transition-transform duration-100">
                            <span className="material-symbols-outlined">point_of_sale</span>
                            POS TERMINAL
                        </Link>
                        <Link to="/staff/customers" className="text-neutral-500 px-4 py-3 flex items-center gap-3 font-['Inter'] uppercase tracking-widest text-[10px] hover:bg-neutral-800 hover:text-neutral-200 transition-transform duration-100">
                            <span className="material-symbols-outlined">group</span>
                            CLIENT DATABASE
                        </Link>
                        <Link to="/staff/reports" className="bg-neutral-800 text-white border-l-4 border-white px-4 py-3 flex items-center gap-3 font-['Inter'] uppercase tracking-widest text-[10px] transition-transform duration-100">
                            <span className="material-symbols-outlined">analytics</span>
                            METRICS
                        </Link>
                        <Link to="/staff/dashboard" className="text-neutral-500 px-4 py-3 flex items-center gap-3 font-['Inter'] uppercase tracking-widest text-[10px] hover:bg-neutral-800 hover:text-neutral-200 transition-transform duration-100">
                            <span className="material-symbols-outlined">terminal</span>
                            SYSTEM LOGS
                        </Link>
                    </nav>
                </aside>

                {/* Main Canvas */}
                <main className="flex-1 overflow-y-auto bg-surface">
                    <div className="p-8">
                        {/* Header Section */}
                        <div className="flex justify-between items-end mb-10">
                            <div>
                                <p className="font-['Inter'] uppercase tracking-[0.2em] text-[10px] text-outline mb-2">SYSTEM_ANALYTICS / REVENUE_FLOW</p>
                                <h1 className="font-headline text-5xl font-black tracking-tighter text-white">STAFF REPORTS</h1>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-surface-container-low px-4 py-2 flex flex-col">
                                    <span className="font-['Inter'] uppercase tracking-widest text-[9px] text-neutral-500">CYCLE_STATUS</span>
                                    <span className="font-['Space_Grotesk'] font-bold text-white uppercase">Active_01</span>
                                </div>
                                <Link to="/staff/report-extraction" className="bg-primary text-on-primary px-4 py-2 flex flex-col cursor-pointer hover:bg-primary-container transition-colors">
                                    <span className="font-['Inter'] uppercase tracking-widest text-[9px]">ACTION</span>
                                    <span className="font-['Space_Grotesk'] font-bold uppercase">Extract Report</span>
                                </Link>
                            </div>
                        </div>

                        {/* Report Cards Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-250px)]">
                            {/* Card 1: Top Spenders */}
                            <section className="bg-surface-container-low flex flex-col border border-transparent hover:border-neutral-800 transition-colors h-full">
                                <div className="p-6 border-b border-neutral-800">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="font-['Inter'] uppercase tracking-[0.2em] text-[10px] text-outline">REPORT_01</span>
                                        <span className="material-symbols-outlined text-outline">star</span>
                                    </div>
                                    <h2 className="font-headline text-2xl font-black text-white mb-1">TOP SPENDERS</h2>
                                    <p className="font-['Inter'] text-[11px] text-neutral-500 tracking-wide uppercase">Historical yield by individual client unit</p>
                                </div>
                                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                    {[
                                        { num: "01", name: "VANDERGRIFF_IND", tier: "Platinum", val: "$142,500" },
                                        { num: "02", name: "QUANTUM_LOGISTICS", tier: "Gold", val: "$118,920" },
                                        { num: "03", name: "SATO_SYSTEMS", tier: "Gold", val: "$94,300" },
                                        { num: "04", name: "BLACK_VALLEY_CO", tier: "Silver", val: "$82,150" }
                                    ].map(item => (
                                        <div key={item.num} className="flex items-center justify-between group">
                                            <div className="flex items-center gap-4">
                                                <span className="font-headline font-black text-xl text-neutral-700 group-hover:text-white transition-colors">{item.num}</span>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-white tracking-tight uppercase text-sm">{item.name}</span>
                                                    <span className="text-[10px] text-neutral-500 font-['Inter'] uppercase">Tier_{item.num} {item.tier}</span>
                                                </div>
                                            </div>
                                            <span className="font-headline font-bold text-white text-lg">{item.val}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 bg-surface-container mt-auto border-t border-neutral-800">
                                    <div className="flex justify-between items-center">
                                        <span className="font-['Inter'] uppercase tracking-widest text-[10px] text-neutral-500">TOTAL_REVENUE</span>
                                        <span className="font-headline font-black text-white text-3xl">$437,870</span>
                                    </div>
                                </div>
                            </section>

                            {/* Card 2: Regulars */}
                            <section className="bg-surface-container-low flex flex-col border border-transparent hover:border-neutral-800 transition-colors h-full">
                                <div className="p-6 border-b border-neutral-800">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="font-['Inter'] uppercase tracking-[0.2em] text-[10px] text-outline">REPORT_02</span>
                                        <span className="material-symbols-outlined text-outline">refresh</span>
                                    </div>
                                    <h2 className="font-headline text-2xl font-black text-white mb-1">REGULARS</h2>
                                    <p className="font-['Inter'] text-[11px] text-neutral-500 tracking-wide uppercase">Frequency of unit interaction per cycle</p>
                                </div>
                                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                    {[
                                        { name: "ELITE_CONSTRUCT", val: "28 V/MO", bars: [1,1,1,1,1,1,1,0,0,0] },
                                        { name: "NEO_DYNAMICS", val: "22 V/MO", bars: [1,1,1,1,1,0,0,0,0,0] },
                                        { name: "HEXA_LABS", val: "15 V/MO", bars: [1,1,1,0,0,0,0,0,0,0] },
                                        { name: "IRON_RIDGE", val: "12 V/MO", bars: [1,1,0,0,0,0,0,0,0,0] }
                                    ].map(item => (
                                        <div key={item.name}>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-bold text-white text-xs uppercase tracking-tighter">{item.name}</span>
                                                <span className="text-xs text-white font-black">{item.val}</span>
                                            </div>
                                            <div className="flex gap-1 h-2">
                                                {item.bars.map((v, i) => (
                                                    <div key={i} className={`flex-1 ${v ? 'bg-white' : 'bg-neutral-800'}`}></div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 bg-surface-container mt-auto border-t border-neutral-800">
                                    <div className="flex justify-between items-center">
                                        <span className="font-['Inter'] uppercase tracking-widest text-[10px] text-neutral-500">AVG_RETENTION</span>
                                        <span className="font-headline font-black text-white text-3xl">84.2%</span>
                                    </div>
                                </div>
                            </section>

                            {/* Card 3: Overdue Credit */}
                            <section className="bg-black flex flex-col border-4 border-white h-full">
                                <div class="p-6 border-b border-neutral-900 bg-neutral-900">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="font-['Inter'] uppercase tracking-[0.2em] text-[10px] text-white">REPORT_03 [CRITICAL]</span>
                                        <span className="material-symbols-outlined text-white" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
                                    </div>
                                    <h2 className="font-headline text-2xl font-black text-white mb-1">OVERDUE CREDIT</h2>
                                    <p className="font-['Inter'] text-[11px] text-neutral-400 tracking-wide uppercase">Unresolved credit balances</p>
                                </div>
                                <div className="flex-1 overflow-y-auto p-6 bg-black space-y-4">
                                    {[
                                        { name: "APEX_CORE_SOL", days: "45", id: "8820-X", val: "$18,400.00" },
                                        { name: "KINETIC_WORKS", days: "32", id: "4110-B", val: "$9,250.00" },
                                        { name: "NOVA_PULSE", days: "14", id: "7729-A", val: "$4,100.00" }
                                    ].map(item => (
                                        <div key={item.id} className="p-4 bg-neutral-900 border-l-4 border-white">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-black text-white uppercase tracking-tighter text-sm">{item.name}</span>
                                                <span className="bg-white text-black px-1 font-black text-[9px]">{item.days}_DAYS</span>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <span className="text-neutral-500 font-['Inter'] uppercase text-[10px]">ID: {item.id}</span>
                                                <span className="font-headline font-bold text-white text-xl">{item.val}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 bg-white mt-auto">
                                    <div className="flex justify-between items-center">
                                        <span className="font-['Inter'] uppercase tracking-widest text-[10px] text-black font-black">TOTAL_OVERDUE</span>
                                        <span className="font-headline font-black text-black text-3xl">$31,750</span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default StaffReports;
