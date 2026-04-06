import React from 'react';
import { Link } from 'react-router-dom';

const StaffManagement = () => {
    return (
        <div className="bg-background text-on-background overflow-hidden min-h-screen selection:bg-primary selection:text-on-primary">
            {/* Top Navigation Bar */}
            <header className="bg-[#131313] dark:bg-neutral-950 flex justify-between items-center w-full px-6 py-4 border-b border-neutral-800/20 fixed top-0 z-50">
                <div className="text-2xl font-bold tracking-tighter text-white uppercase font-['Space_Grotesk']">KINETIC PRECISION</div>
                <nav className="hidden md:flex gap-8">
                    <Link to="/admin/dashboard" className="text-neutral-500 hover:text-neutral-200 font-['Space_Grotesk'] tracking-tight text-sm">TELEMETRY</Link>
                    <Link to="/admin/inventory" className="text-neutral-500 hover:text-neutral-200 font-['Space_Grotesk'] tracking-tight text-sm">ASSEMBLY</Link>
                    <Link to="/admin/reports" className="text-neutral-500 hover:text-neutral-200 font-['Space_Grotesk'] tracking-tight text-sm">LOGISTICS</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-neutral-500 hover:text-white cursor-pointer">notifications</span>
                    <span className="material-symbols-outlined text-neutral-500 hover:text-white cursor-pointer">settings</span>
                    <div className="w-8 h-8 bg-surface-container-high border border-outline-variant/30 flex items-center justify-center">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJXNXXbBYBLGttDyWNnlUbPUv_H9Vq98_50spSOD9SKGU-93RKWPtPx-rIHSklNUOzCE7Bu9uefeJessivcRCOxMb7PwP7II9jK7UD4AE42PNlBU-DJoT_gzr54sk7nvs_1xeFUA2py2jRJoyeoOwTD95JGEAlmDRQPTqlk7VGjRUS9aKmrrqy9S9LoZxnozs7CJ5sH3D1HkQZxKarcmhaYd6d1flfJRwvSoGJX0qZ97KR4i-I6w-Up78IiFYL2Kc2mRvz72X_tFQ" alt="ADMIN_01" className="w-full h-full object-cover" />
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
                        <Link to="/admin/staff" className="flex items-center gap-3 px-6 py-4 bg-zinc-800 text-zinc-100 border-l-4 border-zinc-100 font-bold cursor-pointer font-['Space_Grotesk'] tracking-tight uppercase active:translate-x-1 transition-transform">
                            <span className="material-symbols-outlined">group</span>
                            <span className="text-[11px]">Manage Staff</span>
                        </Link>
                        <Link to="/admin/inventory" className="flex items-center gap-3 px-6 py-4 text-zinc-500 hover:text-zinc-300 transition-colors duration-100 cursor-pointer font-['Space_Grotesk'] tracking-tight uppercase hover:bg-zinc-900 active:translate-x-1 transition-transform">
                            <span className="material-symbols-outlined">inventory_2</span>
                            <span className="text-[11px]">Manage Inventory</span>
                        </Link>
                        <Link to="/admin/financials" className="flex items-center gap-3 px-6 py-4 text-zinc-500 hover:text-zinc-300 transition-colors duration-100 cursor-pointer font-['Space_Grotesk'] tracking-tight uppercase hover:bg-zinc-900 active:translate-x-1 transition-transform">
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
                <main className="flex-1 flex flex-col md:flex-row overflow-hidden bg-surface">
                    {/* Staff List Section */}
                    <section className="flex-1 overflow-y-auto p-8 lg:p-12">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-col mb-12">
                                <h1 className="font-headline text-5xl font-bold tracking-tighter uppercase text-primary">Personnel_Registry</h1>
                                <p className="font-body text-neutral-500 mt-2 text-sm tracking-wide">ACTIVE_RESOURCES / TOTAL_COUNT: 48</p>
                            </div>
                            
                            {/* Staff Table/List */}
                            <div className="flex flex-col gap-1">
                                {/* Table Header */}
                                <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-surface-container-low border-b border-outline-variant/10">
                                    <div className="col-span-1 font-['Inter'] uppercase tracking-widest text-[9px] text-neutral-500">ID</div>
                                    <div className="col-span-4 font-['Inter'] uppercase tracking-widest text-[9px] text-neutral-500">STAFF_MEMBER</div>
                                    <div className="col-span-3 font-['Inter'] uppercase tracking-widest text-[9px] text-neutral-500">ROLE_SPEC</div>
                                    <div className="col-span-3 font-['Inter'] uppercase tracking-widest text-[9px] text-neutral-500">QUARTERLY_SALES_VOL</div>
                                    <div className="col-span-1 font-['Inter'] uppercase tracking-widest text-[9px] text-neutral-500">STATUS</div>
                                </div>
                                
                                {/* Staff Rows */}
                                {[
                                    { id: "#0921", name: "KANE_VESTERRA", email: "k.vesterra@kinetic.io", role: "Lead_Architect", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe1-ALcXAdkgitCLVROFEnqSgVn7NauCdCJODWCjFCyNE3LViTAljFjjBSVVdCErwcQq-Sv5rkHcKmCFXys3huiIz_kDJsxqwx4UHxyp5xcgyEH1xo8oaFkO_71asuF5nKf_co8qe1-oVPhpFlbojVkpKZALuV1K2vfVzXjHoO7tyvdGmqSq6wMlgAW15yHyXwsRmeD_bJSUpmcAMDvrLhkqCeUPrHeToV027rt1ABrXlxc_gvEDoIKmH8KI9qfPESyY39TH110VI", sales: "1.2M / 2.0M", pct: "60%", color: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" },
                                    { id: "#1104", name: "ELARA_SYND", email: "e.synd@kinetic.io", role: "Systems_Op", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8EWbenDiee6-zkEc3mLEe4e60LbqlT9D6Y1FQKNHx71M4v5AdeAKc69Xsn2WkibRFauMbIlFsyc2snoYR1rXOpT_Wu8KKyRwq2Mql01e5dWTIVc7xDKXzpgASI37yj88lINT4_XA9oAIu9fwuoT-sFsMITdOAxfYxdYp3N4Eiiwl3BWZQQm8-No4j_sq7OMs0rAYnhrnq2fk1ov5Ke87YW32FNiWDuU2kH1-_gHA4n-W-4E75Ash2c-RX-2_iNUkHO_HBe3M6_x4", sales: "0.8M / 1.5M", pct: "53%", color: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" },
                                    { id: "#0745", name: "MARC_KREIG", email: "m.kreig@kinetic.io", role: "Field_Agent", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL0fb4R4RGZ8Bv99TqBqP2n_7L4qukPvBhrgLBGI5qk4hIoGSJJ8BKaHqdzQtItaLEeqEyAZ8m0p18olSHBMVd93b9YQx2d_S2PjthrFmBWSG2LUWmu4tY5MkZ0uLhDMPd1HuMRgjJA551v4HJlM03yeZ_nUj1tkL6u11THeNUWWida7s4Ne8Jlasq2ccMwLWrW2K5osEsAysB5KdpQ5OD962n1HFXGYN89EZUrXV60IOM5ZtmlViJy52wEW4-4B5Dg1bZcZDFeIM", sales: "1.9M / 2.0M", pct: "95%", color: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" }
                                ].map(staff => (
                                    <div key={staff.id} className="grid grid-cols-12 gap-4 px-6 py-5 bg-surface-container-lowest hover:bg-surface-container transition-colors items-center cursor-pointer">
                                        <div className="col-span-1 font-['Inter'] text-xs text-neutral-400 font-mono">{staff.id}</div>
                                        <div className="col-span-4 flex items-center gap-4">
                                            <div className="w-10 h-10 bg-neutral-800 border border-outline-variant/20">
                                                <img src={staff.img} alt={staff.name} className="w-full h-full object-cover grayscale opacity-80" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-white uppercase tracking-tight">{staff.name}</div>
                                                <div className="text-[10px] text-neutral-500 font-mono">{staff.email}</div>
                                            </div>
                                        </div>
                                        <div className="col-span-3">
                                            <span className="px-2 py-1 bg-secondary-container text-white text-[9px] font-bold tracking-widest uppercase">{staff.role}</span>
                                        </div>
                                        <div className="col-span-3 flex flex-col gap-2">
                                            <div className="flex justify-between items-end">
                                                <span className="text-[10px] text-neutral-400 font-mono">{staff.sales}</span>
                                                <span className="text-[10px] text-primary font-bold">{staff.pct}</span>
                                            </div>
                                        </div>
                                        <div className="col-span-1 flex justify-end">
                                            <div className={`w-2 h-2 ${staff.color}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Add Staff Panel (Right Side) */}
                    <section className="w-full md:w-[400px] bg-surface-container-low border-l border-neutral-800/20 p-8 flex flex-col overflow-y-auto">
                        <div className="mb-8">
                            <h2 className="font-headline text-2xl font-bold tracking-tighter uppercase text-white">INITIALIZE_STAFF</h2>
                            <p className="text-[10px] font-['Inter'] uppercase tracking-[0.2em] text-neutral-500 mt-1">Personnel Admission Module</p>
                        </div>
                        <form className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="font-['Inter'] uppercase tracking-widest text-[9px] text-neutral-500">FULL_NAME_ID</label>
                                <input className="bg-surface-container-lowest border-none text-white text-sm px-4 py-3 placeholder:text-neutral-700 focus:ring-0 focus:bg-surface-container-high transition-all border-b-2 border-transparent focus:border-primary" placeholder="e.g. MARCUS_VAHN" type="text" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-['Inter'] uppercase tracking-widest text-[9px] text-neutral-500">DESIGNATION_ROLE</label>
                                <select className="bg-surface-container-lowest border-none text-white text-sm px-4 py-3 focus:ring-0 focus:bg-surface-container-high transition-all border-b-2 border-transparent focus:border-primary appearance-none">
                                    <option>FIELD_OPERATIVE</option>
                                    <option>SYSTEM_ARCHITECTURE</option>
                                    <option>LOGISTICS_COORDINATOR</option>
                                    <option>DATA_ANALYST</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-['Inter'] uppercase tracking-widest text-[9px] text-neutral-500">ACCESS_CLEARANCE</label>
                                <div className="grid grid-cols-3 gap-2">
                                    <button className="bg-surface-container-lowest py-2 text-[10px] border border-outline-variant/30 text-neutral-500 hover:text-white hover:border-white transition-all" type="button">L_01</button>
                                    <button className="bg-surface-container-high py-2 text-[10px] border border-primary text-white transition-all" type="button">L_02</button>
                                    <button className="bg-surface-container-lowest py-2 text-[10px] border border-outline-variant/30 text-neutral-500 hover:text-white hover:border-white transition-all" type="button">L_03</button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-['Inter'] uppercase tracking-widest text-[9px] text-neutral-500">COMM_LINK</label>
                                <input className="bg-surface-container-lowest border-none text-white text-sm px-4 py-3 placeholder:text-neutral-700 focus:ring-0 focus:bg-surface-container-high transition-all border-b-2 border-transparent focus:border-primary" placeholder="STAFF_MAIL@KINETIC.SYS" type="email" />
                            </div>
                            <div className="mt-8 pt-8 border-t border-neutral-800/20">
                                <button className="w-full bg-primary text-on-primary font-bold py-4 text-xs tracking-[0.3em] uppercase hover:bg-primary-container transition-all" type="submit">REGISTER_PERSONNEL</button>
                                <button className="w-full bg-transparent border border-outline-variant/30 text-neutral-500 font-bold py-4 text-xs tracking-[0.3em] uppercase mt-3 hover:text-white hover:border-neutral-500 transition-all" type="button">ABORT_PROCESS</button>
                            </div>
                        </form>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default StaffManagement;
