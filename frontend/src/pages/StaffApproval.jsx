import React from 'react';
import { Link } from 'react-router-dom';

const StaffApproval = () => {
    return (
        <div className="bg-background text-on-background min-h-screen flex flex-col overflow-hidden selection:bg-primary selection:text-on-primary">
            {/* Top Navigation Bar */}
            <header className="flex justify-between items-center w-full px-6 py-4 bg-[#131313] text-white font-['Space_Grotesk'] uppercase text-xs tracking-widest z-30">
                <div className="flex items-center gap-8">
                    <span className="font-black text-xl text-white">CONTROL UNIT</span>
                    <div className="flex items-center bg-[#0E0E0E] px-3 py-2 w-64 border border-outline-variant/10">
                        <span className="material-symbols-outlined text-sm opacity-40 mr-2">search</span>
                        <input className="bg-transparent border-none focus:ring-0 text-[10px] placeholder:opacity-30 w-full uppercase" placeholder="FILTER LOGS..." type="text" />
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <nav className="flex gap-6">
                        <Link to="/admin/dashboard" className="text-[#D4D4D4] opacity-50 hover:text-white transition-opacity duration-100">Telemetry</Link>
                        <Link to="/admin/reports" className="text-white border-b-2 border-white pb-1">Reports</Link>
                        <Link to="/admin/financials" className="text-[#D4D4D4] opacity-50 hover:text-white transition-opacity duration-100">Archive</Link>
                    </nav>
                    <div className="h-4 w-px bg-white/10"></div>
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-lg cursor-pointer hover:text-white transition-colors">notifications</span>
                        <span className="material-symbols-outlined text-lg cursor-pointer hover:text-white transition-colors">history</span>
                        <span className="material-symbols-outlined text-lg text-error cursor-pointer">power_settings_new</span>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden bg-[#0E0E0E]">
                {/* Side Navigation */}
                <aside className="flex flex-col h-full overflow-y-auto w-64 border-r border-zinc-800 bg-zinc-950 font-['Space_Grotesk'] tracking-tight uppercase z-40">
                    <div className="px-6 py-8">
                        <h1 className="text-2xl font-black tracking-tighter text-zinc-100">MACHINA</h1>
                        <p className="text-[10px] tracking-[0.3em] opacity-50 text-zinc-100">SYSTEM CONTROL</p>
                    </div>
                    <div className="flex-1 space-y-0">
                        <Link to="/admin/telemetry" className="flex items-center gap-3 px-6 py-4 text-zinc-500 hover:text-zinc-300 transition-colors duration-100 hover:bg-zinc-900 active:translate-x-1">
                            <span className="material-symbols-outlined">monitoring</span>
                            <span className="text-xs font-bold tracking-widest">Analytics</span>
                        </Link>
                        <Link to="/admin/staff" className="flex items-center gap-3 px-6 py-4 bg-zinc-800 text-zinc-100 border-l-4 border-zinc-100 font-bold active:translate-x-1">
                            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
                            <span className="text-xs font-bold tracking-widest">Manage Staff</span>
                        </Link>
                        <Link to="/admin/inventory" className="flex items-center gap-3 px-6 py-4 text-zinc-500 hover:text-zinc-300 transition-colors duration-100 hover:bg-zinc-900 active:translate-x-1">
                            <span className="material-symbols-outlined">inventory_2</span>
                            <span className="text-xs font-bold tracking-widest">Manage Inventory</span>
                        </Link>
                        <Link to="/admin/financials" className="flex items-center gap-3 px-6 py-4 text-zinc-500 hover:text-zinc-300 transition-colors duration-100 hover:bg-zinc-900 active:translate-x-1">
                            <span className="material-symbols-outlined">account_balance_wallet</span>
                            <span className="text-xs font-bold tracking-widest">Financial Ledger</span>
                        </Link>
                    </div>
                    <div className="mt-auto p-6 border-t border-zinc-800">
                        <div className="flex items-center gap-3 px-0 py-2 text-zinc-500 hover:text-zinc-300 transition-colors text-[10px] uppercase font-bold cursor-pointer">
                            <span className="material-symbols-outlined text-sm">settings</span> Settings
                        </div>
                    </div>
                </aside>

                {/* Main Content Areas */}
                <div className="flex flex-1 w-full">
                    {/* Pending Registrations Table (60%) */}
                    <section className="w-3/5 flex flex-col border-r border-white/5 bg-[#131313]">
                        <div className="p-6 flex justify-between items-end border-b border-white/5">
                            <div>
                                <h2 className="font-headline font-black text-4xl tracking-tighter uppercase leading-none">Registration Queue</h2>
                                <p className="font-label text-[10px] tracking-[0.2em] text-outline mt-2">TOTAL PENDING UNITS: 14</p>
                            </div>
                            <div className="flex gap-2">
                                <span className="px-2 py-1 bg-[#353535] text-[10px] font-bold tracking-widest text-white">BATCH_04</span>
                                <span className="px-2 py-1 bg-[#1B1B1B] text-[10px] font-bold tracking-widest text-outline">PRIORITY_A</span>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="sticky top-0 bg-[#131313] z-10">
                                    <tr className="font-label text-[10px] tracking-widest text-outline uppercase border-b border-white/5">
                                        <th className="px-6 py-4 font-medium">IDENTIFIER</th>
                                        <th className="px-6 py-4 font-medium">ASSIGNED ROLE</th>
                                        <th className="px-6 py-4 font-medium">ENTRY DATE</th>
                                        <th className="px-6 py-4 font-medium text-right">STATUS</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {/* Selected Row */}
                                    <tr className="bg-[#353535] group cursor-pointer transition-colors">
                                        <td className="px-6 py-6">
                                            <div className="flex flex-col">
                                                <span className="font-headline font-bold text-white text-lg tracking-tight uppercase">Marcus Vane</span>
                                                <span className="font-label text-[10px] text-outline uppercase tracking-wider">m.vane@kinetic.sys</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className="font-label text-xs font-semibold text-white tracking-widest uppercase">Senior Lead Engineer</span>
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className="font-label text-xs text-outline font-mono">2024.10.12.0834</span>
                                        </td>
                                        <td className="px-6 py-6 text-right">
                                            <span className="px-2 py-1 bg-white text-black text-[9px] font-black uppercase tracking-tighter">PENDING_REVIEW</span>
                                        </td>
                                    </tr>
                                    {/* Passive Row */}
                                    <tr className="hover:bg-[#1B1B1B] group cursor-pointer transition-colors">
                                        <td className="px-6 py-6">
                                            <div className="flex flex-col">
                                                <span className="font-headline font-bold text-white/80 text-lg tracking-tight uppercase">Sarah Drumm</span>
                                                <span className="font-label text-[10px] text-outline/50 uppercase tracking-wider">s.drumm@kinetic.sys</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className="font-label text-xs font-semibold text-white/60 tracking-widest uppercase">Operations Analyst</span>
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className="font-label text-xs text-outline/40 font-mono">2024.10.12.0912</span>
                                        </td>
                                        <td className="px-6 py-6 text-right">
                                            <span className="px-2 py-1 bg-[#1B1B1B] text-outline text-[9px] font-black uppercase tracking-tighter">QUEUED</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Review & Approval Panel (40%) */}
                    <section className="w-2/5 bg-[#1B1B1B] flex flex-col relative overflow-y-auto">
                        <div className="p-8 space-y-8">
                            <div className="flex items-start justify-between">
                                <div className="w-32 h-40 bg-[#0E0E0E] grayscale border border-white/10 relative overflow-hidden">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUUWrzRp3XYo03pg7I6r4TgPoxAaRO2eSPX1yDAlEgJfPqaWDCIt5qqV2af8-mqkrP7POEDRnGU0CgdBHUDhv-HR4IkAQsdlDwVErFVRcfdWecZRlGfCLe6WQS6JYIYgtguw866zwUwIhR-gETf2HTL9S6emkBUAWSydMd-H-aOCsske5vNp-w0HtGjWjKqREHqQQ4qkIgY67_a2kmRmbwEJhFnMPe9T2bU7WDkgDBkZ4AH4TbV7VzEb0ATTXgthymAYjkbbbvxxk" alt="Profile" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
                                </div>
                                <div className="text-right">
                                    <span className="font-label text-[9px] font-black tracking-[0.4em] text-white/30 uppercase">SERIAL_NO</span>
                                    <h3 className="font-mono text-xl font-bold text-white">KV-7729-X</h3>
                                    <div className="mt-4 flex flex-col gap-1 items-end">
                                        <span className="bg-primary text-black px-2 py-0.5 text-[10px] font-black uppercase">CLEARANCE_L4</span>
                                        <span className="bg-outline-variant text-white px-2 py-0.5 text-[10px] font-black uppercase">CONTRACTOR</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="font-headline font-black text-5xl tracking-tighter uppercase leading-none">Marcus Vane</h2>
                                <p className="font-label text-sm tracking-widest text-outline mt-2">SENIOR LEAD ENGINEER // PROPULSION SYSTEMS</p>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5">
                                <div className="bg-[#1B1B1B] p-4 space-y-1">
                                    <span className="font-label text-[9px] font-black tracking-widest text-outline">PRIMARY CONTACT</span>
                                    <p className="font-body text-xs text-white">+1 (555) 902-1143</p>
                                </div>
                                <div className="bg-[#1B1B1B] p-4 space-y-1">
                                    <span className="font-label text-[9px] font-black tracking-widest text-outline">LOCATION</span>
                                    <p className="font-body text-xs text-white">HUB-07 BERLIN</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <span className="font-label text-[10px] font-black tracking-[0.2em] text-outline uppercase">SERVICE HISTORY &amp; TECHNICAL SPECS</span>
                                <div className="bg-[#0E0E0E] p-6 space-y-4">
                                    <p className="font-body text-sm leading-relaxed text-on-surface-variant">Expert in high-torque kinetic engines and thermal management systems. Over 12 years of deployment.</p>
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="mt-auto p-8 bg-[#131313] border-t border-white/10 grid grid-cols-2 gap-4">
                            <button className="py-5 border-2 border-white/20 text-white font-black text-xs tracking-[0.3em] uppercase hover:bg-white/5 transition-colors">
                                REJECT ACCESS
                            </button>
                            <button className="py-5 bg-white text-black font-black text-xs tracking-[0.3em] uppercase hover:bg-[#D4D4D4] transition-colors">
                                APPROVE UNIT
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default StaffApproval;
