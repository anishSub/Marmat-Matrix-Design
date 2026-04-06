import React from 'react';
import { Link } from 'react-router-dom';

const AdminFinancials = () => {
    return (
        <div className="bg-background text-on-background min-h-screen flex flex-col overflow-hidden selection:bg-primary selection:text-on-primary">
            {/* Top Navigation Bar */}
            <header className="bg-[#131313] dark:bg-neutral-950 flex justify-between items-center w-full px-6 py-4 border-b border-neutral-800/20 fixed top-0 z-50">
                <div className="text-2xl font-bold tracking-tighter text-white uppercase font-['Space_Grotesk']">KINETIC PRECISION</div>
                <nav className="hidden md:flex gap-8">
                    <Link to="/admin/dashboard" className="text-neutral-500 hover:text-neutral-200 font-['Space_Grotesk'] tracking-tight text-sm">TELEMETRY</Link>
                    <Link to="/admin/inventory" className="text-neutral-500 hover:text-neutral-200 font-['Space_Grotesk'] tracking-tight text-sm">ASSEMBLY</Link>
                    <Link to="/admin/financials" className="text-white border-b-2 border-white pb-1 font-['Space_Grotesk'] tracking-tight text-sm">FINANCIAL_HUB</Link>
                    <Link to="/admin/reports" className="text-neutral-500 hover:text-neutral-200 font-['Space_Grotesk'] tracking-tight text-sm">LOGISTICS</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-neutral-500 hover:text-white cursor-pointer">notifications</span>
                    <span className="material-symbols-outlined text-neutral-500 hover:text-white cursor-pointer">settings</span>
                    <div className="w-8 h-8 bg-surface-container-high border border-outline-variant/30 flex items-center justify-center">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWekQF4EnmpHrjcdkbLo1VIiFBkgeXh98l_l-HEK2OPOHw06_gOxu7oA4Qswpr76iUZaUx7D0yW0a1E8Rp1ZotJlXOdCnX55-dFxoIGdbaQTUVf7I39sDDRGUgfeNz5y42QQLQoBd6dtjsekBL0mduRNaiqwfnAPNY4oyhczF3wBzNW2ih0j9eHoJLlwj-Z3lGv_BILNRKLuIRFRv8oX7E2cSmQV_NOQhj27ByH_yRPZ-sDWVq05xxw6Q8UAZH-VSIVy4nKqKctAc" alt="ADMIN_01" className="w-full h-full object-cover grayscale opacity-80" />
                    </div>
                </div>
            </header>

            <div className="flex h-screen pt-[73px]">
                {/* Side Navigation */}
                <aside className="bg-zinc-950 flex flex-col h-full border-r border-zinc-800 w-64 hidden lg:flex">
                    <div className="p-6 border-b border-zinc-900">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-on-primary">precision_manufacturing</span>
                            </div>
                            <div>
                                <div className="text-2xl font-black tracking-tighter text-zinc-100 uppercase font-['Space_Grotesk']">MACHINA</div>
                                <div className="font-['Space_Grotesk'] uppercase tracking-tight text-[10px] text-zinc-500">SYSTEM CONTROL</div>
                            </div>
                        </div>
                    </div>
                    <nav className="flex-1 py-0">
                        <Link to="/admin/telemetry" className="flex items-center gap-3 px-6 py-4 text-zinc-500 hover:text-zinc-300 transition-colors duration-100 cursor-pointer font-['Space_Grotesk'] tracking-tight uppercase hover:bg-zinc-900 active:translate-x-1 transition-transform">
                            <span className="material-symbols-outlined">monitoring</span>
                            <span className="text-[11px]">Analytics</span>
                        </Link>
                        <Link to="/admin/staff" className="flex items-center gap-3 px-6 py-4 text-zinc-500 hover:text-zinc-300 transition-colors duration-100 cursor-pointer font-['Space_Grotesk'] tracking-tight uppercase hover:bg-zinc-900 active:translate-x-1 transition-transform">
                            <span className="material-symbols-outlined">group</span>
                            <span className="text-[11px]">Manage Staff</span>
                        </Link>
                        <Link to="/admin/inventory" className="flex items-center gap-3 px-6 py-4 text-zinc-500 hover:text-zinc-300 transition-colors duration-100 cursor-pointer font-['Space_Grotesk'] tracking-tight uppercase hover:bg-zinc-900 active:translate-x-1 transition-transform">
                            <span className="material-symbols-outlined">inventory_2</span>
                            <span className="text-[11px]">Manage Inventory</span>
                        </Link>
                        <Link to="/admin/financials" className="flex items-center gap-3 px-6 py-4 bg-zinc-800 text-zinc-100 border-l-4 border-zinc-100 font-bold cursor-pointer font-['Space_Grotesk'] tracking-tight uppercase active:translate-x-1 transition-transform">
                            <span className="material-symbols-outlined">account_balance_wallet</span>
                            <span className="text-[11px]">Financial Ledger</span>
                        </Link>
                        <Link to="/admin/reports" className="flex items-center gap-3 px-6 py-4 text-zinc-500 hover:text-zinc-300 transition-colors duration-100 cursor-pointer font-['Space_Grotesk'] tracking-tight uppercase hover:bg-zinc-900 active:translate-x-1 transition-transform">
                            <span className="material-symbols-outlined">summarize</span>
                            <span className="text-[11px]">Extract Reports</span>
                        </Link>
                    </nav>
                </aside>

                {/* Main Content Canvas */}
                <main className="flex-1 overflow-y-auto bg-surface p-8">
                    <div className="flex flex-col gap-10 mb-12">
                        <div className="flex justify-between items-end">
                            <div>
                                <h1 className="font-headline text-5xl font-bold tracking-tighter mb-2 uppercase">FINANCIAL_LEDGER</h1>
                                <p className="font-label text-[10px] tracking-[0.3em] text-neutral-500 uppercase">System Time: 14:48:02 // Node: FINANCE_01</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-primary text-on-primary px-6 py-2 text-[10px] font-bold tracking-widest hover:bg-primary-container transition-colors duration-100">NEW_ENTRY</button>
                                <button className="bg-surface-container-high border border-outline-variant/30 text-white px-6 py-2 text-[10px] font-bold tracking-widest hover:bg-surface-variant transition-colors duration-100">RECONCILE</button>
                            </div>
                        </div>

                        {/* Filter Bar */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-surface-container-low p-1 border-l-2 border-primary">
                            <div className="bg-surface-container-lowest p-4">
                                <label className="block font-label text-[9px] tracking-widest text-neutral-500 mb-2">START_DATE</label>
                                <input className="w-full bg-transparent text-white border-none focus:ring-0 p-0 font-headline text-lg uppercase" type="date" defaultValue="2024-01-01" />
                            </div>
                            <div className="bg-surface-container-lowest p-4">
                                <label className="block font-label text-[9px] tracking-widest text-neutral-500 mb-2">END_DATE</label>
                                <input className="w-full bg-transparent text-white border-none focus:ring-0 p-0 font-headline text-lg uppercase" type="date" defaultValue="2024-12-31" />
                            </div>
                            <div className="bg-surface-container-lowest p-4">
                                <label className="block font-label text-[9px] tracking-widest text-neutral-500 mb-2">CATEGORY_FILTER</label>
                                <select className="w-full bg-transparent text-white border-none focus:ring-0 p-0 font-headline text-lg appearance-none uppercase">
                                    <option>ALL_OPERATIONS</option>
                                    <option>LOGISTICS_FUEL</option>
                                    <option>STAFF_PAYROLL</option>
                                    <option>MAINTENANCE</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Ledger Table Container */}
                    <div className="bg-surface-container-low border border-outline-variant/10">
                        <div className="flex justify-between items-center px-6 py-4 bg-surface-container border-b border-outline-variant/20">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-neutral-500">list_alt</span>
                                <h2 className="font-headline font-bold text-sm tracking-widest uppercase">Invoice_Data_Stream</h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="w-10 h-10 flex items-center justify-center bg-black hover:bg-neutral-800 transition-colors border border-outline-variant/20" title="Export to PDF">
                                    <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center bg-black hover:bg-neutral-800 transition-colors border border-outline-variant/20" title="Export to Excel">
                                    <span className="material-symbols-outlined text-sm">table_chart</span>
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-surface-container-lowest">
                                        <th className="px-6 py-4 text-left font-label text-[10px] tracking-[0.2em] text-neutral-500 border-b border-outline-variant/10">ID_REF</th>
                                        <th className="px-6 py-4 text-left font-label text-[10px] tracking-[0.2em] text-neutral-500 border-b border-outline-variant/10">TIMESTAMP</th>
                                        <th className="px-6 py-4 text-left font-label text-[10px] tracking-[0.2em] text-neutral-500 border-b border-outline-variant/10">ENTITY</th>
                                        <th className="px-6 py-4 text-left font-label text-[10px] tracking-[0.2em] text-neutral-500 border-b border-outline-variant/10">CATEGORY</th>
                                        <th className="px-6 py-4 text-right font-label text-[10px] tracking-[0.2em] text-neutral-500 border-b border-outline-variant/10">AMOUNT_VAL</th>
                                        <th className="px-6 py-4 text-center font-label text-[10px] tracking-[0.2em] text-neutral-500 border-b border-outline-variant/10">STATUS_BIT</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-outline-variant/5">
                                    <tr className="hover:bg-surface-container-high transition-colors group">
                                        <td className="px-6 py-5 font-headline font-medium text-sm">#KP-8821-X</td>
                                        <td className="px-6 py-5 font-label text-xs text-neutral-400">2024.05.12 09:12</td>
                                        <td className="px-6 py-5 font-label text-xs">VANGUARD_LOGISTICS</td>
                                        <td className="px-6 py-5">
                                            <span className="bg-secondary-container px-2 py-1 text-[9px] font-bold tracking-tighter rounded-sm">FUEL_CELL_RHO</span>
                                        </td>
                                        <td className="px-6 py-5 text-right font-headline font-bold text-sm">$ 42,900.00</td>
                                        <td className="px-6 py-5 text-center">
                                            <span className="material-symbols-outlined text-sm cursor-pointer opacity-40 group-hover:opacity-100">more_vert</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-surface-container-high transition-colors group">
                                        <td className="px-6 py-5 font-headline font-medium text-sm">#KP-8822-Y</td>
                                        <td className="px-6 py-5 font-label text-xs text-neutral-400">2024.05.14 11:45</td>
                                        <td className="px-6 py-5 font-label text-xs">CYBER_DYNAMICS_INC</td>
                                        <td className="px-6 py-5">
                                            <span className="bg-secondary-container px-2 py-1 text-[9px] font-bold tracking-tighter rounded-sm">AI_CORE_LEASE</span>
                                        </td>
                                        <td className="px-6 py-5 text-right font-headline font-bold text-sm">$ 128,500.00</td>
                                        <td className="px-6 py-5 text-center">
                                            <span className="material-symbols-outlined text-sm cursor-pointer opacity-40 group-hover:opacity-100">more_vert</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-3 gap-8">
                        <div className="border-t border-outline-variant/20 pt-4">
                            <div className="font-label text-[9px] tracking-widest text-neutral-500 mb-1">TOTAL_REVENUE_MTD</div>
                            <div className="font-headline text-3xl font-bold tracking-tighter">$ 2.48M</div>
                        </div>
                        <div className="border-t border-outline-variant/20 pt-4">
                            <div className="font-label text-[9px] tracking-widest text-neutral-500 mb-1">ACTIVE_CONTRACTS</div>
                            <div className="font-headline text-3xl font-bold tracking-tighter">142</div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminFinancials;
