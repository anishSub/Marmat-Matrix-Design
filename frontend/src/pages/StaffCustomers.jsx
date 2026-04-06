import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const mockCustomers = [
    {
        id: "9920-XF-01",
        name: "ANDERSON, MARCUS V.",
        vehicles: [
            { make: "Porsche", model: "911 GT3", year: 2022, vin: "WP0AA2A9XNSXXXXX" },
            { make: "BMW", model: "M4 Competition", year: 2021, vin: "WBS53AY060XXXXX" }
        ],
        lastService: "2023-11-14",
        balance: 12450.00,
        status: "OVERDUE",
        phone: "+1 (555) 012-9920",
        email: "m.anderson@vector.inc",
        tier: "PREMIUM_ACCOUNT",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqcuqcIshWCDKIrSIlYPI4wrDAR_UN-D68skOTwoLXSxdUkLvn6rAV0BZYoCKpC42fAn_HsQ9Ki8OAFNvPTQFFTDptQUXyKhW9lSdl-UZ1arlT-bSg2Krb3V7S4SO9GlWeRXSdkQIIOfIgGqUGhHsLjrxuI2vPH5itKLlsZbUOMpViVlrxAa_dQBhmgdeYQMXG1gexTL7UrZIWuUP4f1uTvuS4X5FlT1LWFPVvYewgfAW3Po5rdcVAP32UGweJrpQaikBap7oywGc"
    },
    {
        id: "8841-LM-04",
        name: "CHEN, LI WEI",
        vehicles: [
            { make: "Tesla", model: "Model S Plaid", year: 2023, vin: "5YJSA1E20PFXXXXX" }
        ],
        lastService: "2024-01-02",
        balance: 0.00,
        status: "CURRENT",
        phone: "+1 (555) 345-8811",
        email: "li.chen@neural.net",
        tier: "STANDARD_ACCOUNT",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPvQGJGqc8KH3UMxuvpc70bKdiQAj4W9zQ62NSo6qltuJM9KzTHpBiViyNbfCPHez0TRYFq_ibunh5LZWB2i_lGBppqF07vi6kVaQGAzFAUr61Z-rLd7UOctPFBjR9wLUezuuZ6hHZu9Aq5twmbKjXZ5lk_nRuhB3Z6LZWX9FkR-XIfNajwrGyKwuTKz6UUNjDAI9wwmBWgSVi0J88nWo9PTKBtPXbg1-rN1kRFtD-vxfyKeBsgmtlAhGhRpmmA4QgNRb3iR7fiFA"
    },
    {
        id: "1042-BR-99",
        name: "HARRISON, SARAH",
        vehicles: [
            { make: "Land Rover", model: "Defender", year: 2023, vin: "SALLE2C2XN2XXXXX" }
        ],
        lastService: "2023-12-18",
        balance: 1200.00,
        status: "CURRENT",
        phone: "+1 (555) 772-0044",
        email: "s.harrison@global.co",
        tier: "STANDARD_ACCOUNT",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPvQGJGqc8KH3UMxuvpc70bKdiQAj4W9zQ62NSo6qltuJM9KzTHpBiViyNbfCPHez0TRYFq_ibunh5LZWB2i_lGBppqF07vi6kVaQGAzFAUr61Z-rLd7UOctPFBjR9wLUezuuZ6hHZu9Aq5twmbKjXZ5lk_nRuhB3Z6LZWX9FkR-XIfNajwrGyKwuTKz6UUNjDAI9wwmBWgSVi0J88nWo9PTKBtPXbg1-rN1kRFtD-vxfyKeBsgmtlAhGhRpmmA4QgNRb3iR7fiFA"
    },
    {
        id: "5567-ST-22",
        name: "KOVACS, ERIK",
        vehicles: [
            { make: "Audi", model: "RS6 Avant", year: 2022, vin: "WAUZZZF2XNNXXXXX" },
            { make: "Mercedes-AMG", model: "G63", year: 2021, vin: "WDC4632761XXXXXX" }
        ],
        lastService: "2024-02-05",
        balance: 4120.00,
        status: "OVERDUE",
        phone: "+1 (555) 200-8451",
        email: "ekovacs@synth.eu",
        tier: "PREMIUM_ACCOUNT",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPvQGJGqc8KH3UMxuvpc70bKdiQAj4W9zQ62NSo6qltuJM9KzTHpBiViyNbfCPHez0TRYFq_ibunh5LZWB2i_lGBppqF07vi6kVaQGAzFAUr61Z-rLd7UOctPFBjR9wLUezuuZ6hHZu9Aq5twmbKjXZ5lk_nRuhB3Z6LZWX9FkR-XIfNajwrGyKwuTKz6UUNjDAI9wwmBWgSVi0J88nWo9PTKBtPXbg1-rN1kRFtD-vxfyKeBsgmtlAhGhRpmmA4QgNRb3iR7fiFA"
    }
];

const StaffCustomers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState(mockCustomers[0]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const filteredCustomers = mockCustomers.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleRowClick = (customer) => {
        setSelectedCustomer(customer);
        setIsSidebarOpen(true);
    };

    return (
        <div className="bg-surface text-on-surface font-body overflow-hidden min-h-screen">
            {/* TopNavBar */}
            <header className="bg-neutral-950 text-white font-['Space_Grotesk'] uppercase tracking-tight text-sm fixed top-0 w-full px-6 py-3 z-50 border-b border-neutral-800 flex justify-between items-center">
                <div className="text-xl font-black text-white tracking-tighter">KINETIC PRECISION POS</div>
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/staff/dashboard" className="text-neutral-500 pb-1 hover:text-white transition-colors duration-100">DASHBOARD</Link>
                    <Link to="/staff/customers" className="text-white border-b-2 border-white pb-1 font-bold">CUSTOMERS</Link>
                    <Link to="/staff/pos" className="text-neutral-500 pb-1 hover:text-white transition-colors duration-100">INVENTORY</Link>
                    <Link to="/staff/reports" className="text-neutral-500 pb-1 hover:text-white transition-colors duration-100">REPORTS</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-neutral-400">notifications</span>
                        <span className="material-symbols-outlined text-neutral-400">settings</span>
                    </div>
                    <button className="bg-primary text-on-primary px-4 py-1.5 font-bold text-xs hover:bg-primary-container transition-all">NEW ORDER</button>
                    <div className="w-8 h-8 bg-surface-container-highest"></div>
                </div>
            </header>

            <div className="flex h-[calc(100vh-56px)] mt-14">
                {/* SideNavBar */}
                <aside className="fixed left-0 top-14 h-full flex flex-col border-r border-neutral-800 bg-neutral-900 text-white font-['Inter'] uppercase tracking-widest text-[10px] w-64 z-40">
                    <div className="p-6 border-b border-neutral-800">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-surface-container-low flex items-center justify-center">
                                <span className="material-symbols-outlined text-white">memory</span>
                            </div>
                            <div>
                                <div className="font-bold text-white tracking-normal">STATION_01</div>
                                <div className="text-neutral-500 text-[8px]">OPERATOR_ACTIVE</div>
                            </div>
                        </div>
                    </div>
                    <nav className="flex-1 mt-4">
                        <Link to="/staff/pos" className="text-neutral-500 px-4 py-3 flex items-center gap-3 hover:bg-neutral-800 hover:text-neutral-200 cursor-pointer transition-transform">
                            <span className="material-symbols-outlined">point_of_sale</span>
                            <span>POS TERMINAL</span>
                        </Link>
                        <Link to="/staff/customers" className="bg-neutral-800 text-white border-l-4 border-white px-4 py-3 flex items-center gap-3 cursor-pointer">
                            <span className="material-symbols-outlined">group</span>
                            <span>CLIENT DATABASE</span>
                        </Link>
                        <Link to="/staff/dashboard" className="text-neutral-500 px-4 py-3 flex items-center gap-3 hover:bg-neutral-800 hover:text-neutral-200 cursor-pointer transition-transform">
                            <span className="material-symbols-outlined">analytics</span>
                            <span>METRICS</span>
                        </Link>
                        <Link to="/staff/reports" className="text-neutral-500 px-4 py-3 flex items-center gap-3 hover:bg-neutral-800 hover:text-neutral-200 cursor-pointer transition-transform">
                            <span className="material-symbols-outlined">terminal</span>
                            <span>SYSTEM LOGS</span>
                        </Link>
                    </nav>
                </aside>

                {/* Main Content Canvas */}
                <main className="ml-64 flex-1 flex flex-col bg-surface overflow-hidden">
                    {/* Filter & Search Section */}
                    <section className="p-8 pb-0">
                        <div className="flex flex-col gap-6">
                            <h1 className="font-headline text-4xl font-black tracking-tighter uppercase">Client Directory</h1>
                            <div className="flex flex-col md:flex-row gap-4 items-center">
                                <div className="relative flex-1 w-full">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-neutral-500">search</span>
                                    <input
                                        className="w-full bg-surface-container-lowest border-0 text-white placeholder-neutral-600 pl-12 py-4 font-headline text-sm tracking-widest focus:ring-1 focus:ring-primary"
                                        placeholder="SEARCH_DATABASE_BY_NAME_VIN_OR_ID"
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <div className="flex gap-2 w-full md:w-auto overflow-x-auto no-scrollbar">
                                    <button className="bg-primary text-on-primary px-4 py-2 font-headline text-[10px] font-bold tracking-widest uppercase">ALL_RECORDS</button>
                                    <button className="bg-surface-container-high text-on-surface-variant px-4 py-2 font-headline text-[10px] font-bold tracking-widest uppercase hover:bg-surface-bright transition-colors">ACTIVE</button>
                                    <button className="bg-surface-container-high text-error px-4 py-2 font-headline text-[10px] font-bold tracking-widest uppercase hover:bg-surface-bright transition-colors flex items-center gap-2">
                                        OVERDUE_CREDIT
                                        <span className="w-1.5 h-1.5 bg-error rounded-full"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Data Table Section */}
                    <section className="p-8 flex-1 overflow-auto no-scrollbar">
                        <div className="bg-surface-container-low border border-outline-variant/10">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-surface-container-lowest border-b border-outline-variant/20">
                                        <th className="px-6 py-4 font-headline text-[10px] tracking-[0.2em] text-neutral-500 uppercase">Customer Name</th>
                                        <th className="px-6 py-4 font-headline text-[10px] tracking-[0.2em] text-neutral-500 uppercase">Vehicle(s)</th>
                                        <th className="px-6 py-4 font-headline text-[10px] tracking-[0.2em] text-neutral-500 uppercase">Last Service</th>
                                        <th className="px-6 py-4 font-headline text-[10px] tracking-[0.2em] text-neutral-500 uppercase">Balance</th>
                                        <th className="px-6 py-4 font-headline text-[10px] tracking-[0.2em] text-neutral-500 uppercase text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-outline-variant/10">
                                    {filteredCustomers.map(customer => (
                                        <tr key={customer.id} onClick={() => handleRowClick(customer)} className={`cursor-pointer transition-colors ${selectedCustomer?.id === customer.id ? 'bg-surface-container-high border-l-4 border-primary' : 'hover:bg-surface-container-high'}`}>
                                            <td className="px-6 py-5">
                                                <div className="font-headline font-bold text-sm tracking-tight text-white">{customer.name}</div>
                                                <div className="text-[9px] text-neutral-500 font-mono">ID: {customer.id}</div>
                                            </td>
                                            <td className="px-6 py-5">
                                                {customer.vehicles.map((v, i) => (
                                                    <div key={i} className={`text-[11px] uppercase ${i === 0 ? 'text-on-surface font-medium' : 'text-neutral-500'}`}>
                                                        {v.make} {v.model} ({v.year})
                                                    </div>
                                                ))}
                                            </td>
                                            <td className="px-6 py-5 font-mono text-[11px] text-on-surface-variant">{customer.lastService}</td>
                                            <td className="px-6 py-5">
                                                <div className={`font-headline font-bold ${customer.balance > 0 ? 'text-error' : 'text-white'}`}>${customer.balance.toFixed(2)}</div>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <span className={`px-2 py-0.5 text-[9px] font-bold tracking-tighter uppercase ${customer.status === 'OVERDUE' ? 'bg-error-container text-on-error-container' : 'bg-secondary-container text-on-secondary-container'}`}>
                                                    {customer.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>

                {/* Right Slide-out Panel (Customer Details) */}
                <aside className={`fixed right-0 top-[56px] bottom-0 w-[420px] bg-surface-container-low border-l border-neutral-800 flex flex-col shadow-2xl z-50 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {selectedCustomer && (
                        <>
                            {/* Header/Profile */}
                            <div className="h-64 relative bg-surface-container-lowest flex items-center justify-center overflow-hidden">
                                <img src={selectedCustomer.image} alt={selectedCustomer.name} className="w-full h-full object-cover grayscale opacity-60" />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                                <button onClick={() => setIsSidebarOpen(false)} className="absolute top-4 right-4 w-10 h-10 bg-neutral-950/80 backdrop-blur-md flex items-center justify-center hover:bg-neutral-800 transition-colors">
                                    <span className="material-symbols-outlined text-white">close</span>
                                </button>
                                <div className="absolute bottom-6 left-6">
                                    <div className="bg-primary text-on-primary px-3 py-1 font-headline text-[10px] font-black tracking-widest uppercase mb-2">{selectedCustomer.tier}</div>
                                    <h2 className="font-headline text-3xl font-black tracking-tighter uppercase text-white">{selectedCustomer.name}</h2>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
                                {/* Critical Warning Section */}
                                {selectedCustomer.status === 'OVERDUE' && (
                                    <div className="bg-error-container/20 border-l-4 border-error p-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="material-symbols-outlined text-error" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
                                            <span className="font-headline text-xs font-bold tracking-widest text-error uppercase">Overdue Credit Warning</span>
                                        </div>
                                        <div className="text-on-error-container text-sm">Account balance of <span className="font-bold">${selectedCustomer.balance.toFixed(2)}</span> has exceeded the 30-day term.</div>
                                        <div className="mt-4 flex gap-2">
                                            <button className="flex-1 bg-error text-on-error py-2 font-headline text-[10px] font-black tracking-widest uppercase">RESTRICT_SERVICE</button>
                                            <button className="flex-1 bg-surface-container-highest text-white py-2 font-headline text-[10px] font-black tracking-widest uppercase border border-error/30">ISSUE_NOTICE</button>
                                        </div>
                                    </div>
                                )}

                                {/* Technical Details */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end border-b border-outline-variant/10 pb-2">
                                        <span className="font-headline text-[10px] tracking-widest text-neutral-500 uppercase">Contact_Data</span>
                                        <span className="material-symbols-outlined text-neutral-600 text-sm">edit</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-[9px] text-neutral-500 uppercase tracking-tighter">Phone</div>
                                            <div className="text-sm font-medium text-white tracking-tight">{selectedCustomer.phone}</div>
                                        </div>
                                        <div>
                                            <div className="text-[9px] text-neutral-500 uppercase tracking-tighter">Email</div>
                                            <div className="text-sm font-medium text-white tracking-tight truncate">{selectedCustomer.email}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Registered Vehicles */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end border-b border-outline-variant/10 pb-2">
                                        <span className="font-headline text-[10px] tracking-widest text-neutral-500 uppercase">Registered_Vehicles</span>
                                        <span className="bg-surface-container-highest px-2 py-0.5 text-[8px] text-neutral-400">COUNT: {selectedCustomer.vehicles.length.toString().padStart(2, '0')}</span>
                                    </div>
                                    <div className="space-y-2">
                                        {selectedCustomer.vehicles.map((v, idx) => (
                                            <div key={idx} className={`bg-surface-container-lowest p-3 border border-white/5 ${idx > 0 ? 'opacity-70' : ''}`}>
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="font-headline font-bold text-sm text-white uppercase">{v.make} {v.model}</div>
                                                    <span className="material-symbols-outlined text-neutral-600 text-sm">info</span>
                                                </div>
                                                <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                                                    <span>VIN: {v.vin}</span>
                                                    <span className={idx === 0 ? "text-primary tracking-widest" : "text-neutral-600 tracking-widest uppercase"}>
                                                        {idx === 0 ? 'ACTIVE_FLT' : 'Off_Site'}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-surface-container-lowest border-t border-neutral-800 mt-auto">
                                <button className="w-full bg-white text-black py-4 font-headline font-black tracking-widest uppercase hover:bg-neutral-200 transition-colors">GENERATE_REPAIR_ORDER</button>
                            </div>
                        </>
                    )}
                </aside>
            </div>
        </div>
    );
};

export default StaffCustomers;
