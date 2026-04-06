import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PosTerminal = () => {
    const [parts, setParts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchParts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/Inventory');
                setParts(response.data);
            } catch (error) {
                console.error("Error fetching parts", error);
            }
        };
        fetchParts();
    }, []);

    const handleAddToCart = (part) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === part.id);
            if (existingItem) {
                return prevCart.map(item => item.id === part.id ? { ...item, quantity: item.quantity + 1 } : item);
            } else {
                return [...prevCart, { ...part, quantity: 1 }];
            }
        });
    };

    const handleRemoveFromCart = (partId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== partId));
    };

    const handleIncrement = (partId) => {
        setCart(prevCart => prevCart.map(item => item.id === partId ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const handleDecrement = (partId) => {
        setCart(prevCart => prevCart.map(item => {
            if (item.id === partId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }));
    };

    const filteredParts = parts.filter(part => part.name.toLowerCase().includes(searchTerm.toLowerCase()) || part.sku.toLowerCase().includes(searchTerm.toLowerCase()));

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    return (
        <div className="bg-surface text-on-surface font-body overflow-hidden min-h-screen">
            {/* TopNavBar */}
            <header className="bg-neutral-950 text-white font-['Space_Grotesk'] uppercase tracking-tight text-sm fixed top-0 w-full px-6 py-3 z-50 border-b border-neutral-800 flex justify-between items-center">
                <div className="flex items-center gap-12">
                    <span className="text-xl font-black text-white tracking-tighter">KINETIC PRECISION POS</span>
                    <nav className="hidden md:flex gap-8">
                        <Link to="/staff/dashboard" className="text-neutral-500 pb-1 hover:text-white transition-colors duration-100">DASHBOARD</Link>
                        <Link to="/staff/customers" className="text-neutral-500 pb-1 hover:text-white transition-colors duration-100">CUSTOMERS</Link>
                        <Link to="/staff/pos" className="text-white border-b-2 border-white pb-1 font-bold transition-all duration-100">INVENTORY / POS</Link>
                        <Link to="/staff/reports" className="text-neutral-500 pb-1 hover:text-white transition-colors duration-100">REPORTS</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex gap-4 items-center">
                        <span className="material-symbols-outlined text-neutral-400 hover:text-white cursor-pointer">settings</span>
                        <span className="material-symbols-outlined text-neutral-400 hover:text-white cursor-pointer">notifications</span>
                    </div>
                    <button className="bg-white text-black px-4 py-1.5 font-bold text-xs tracking-widest hover:bg-neutral-200 transition-colors">NEW ORDER</button>
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-800"></div>
                </div>
            </header>

            <div className="flex h-[calc(100vh-56px)] mt-14">
                {/* SideNavBar */}
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
                        <Link to="/staff/pos" className="bg-neutral-800 text-white border-l-4 border-white px-4 py-3 flex items-center gap-3 cursor-pointer">
                            <span className="material-symbols-outlined">point_of_sale</span>
                            <span className="font-['Inter'] uppercase tracking-widest text-[10px]">POS TERMINAL</span>
                        </Link>
                        <Link to="/staff/customers" className="text-neutral-500 px-4 py-3 flex items-center gap-3 hover:bg-neutral-800 hover:text-neutral-200 transition-colors duration-100 cursor-pointer">
                            <span className="material-symbols-outlined">group</span>
                            <span className="font-['Inter'] uppercase tracking-widest text-[10px]">CLIENT DATABASE</span>
                        </Link>
                        <Link to="/staff/dashboard" className="text-neutral-500 px-4 py-3 flex items-center gap-3 hover:bg-neutral-800 hover:text-neutral-200 transition-colors duration-100 cursor-pointer">
                            <span className="material-symbols-outlined">analytics</span>
                            <span className="font-['Inter'] uppercase tracking-widest text-[10px]">METRICS</span>
                        </Link>
                        <Link to="/staff/reports" className="text-neutral-500 px-4 py-3 flex items-center gap-3 hover:bg-neutral-800 hover:text-neutral-200 transition-colors duration-100 cursor-pointer">
                            <span className="material-symbols-outlined">terminal</span>
                            <span className="font-['Inter'] uppercase tracking-widest text-[10px]">SYSTEM LOGS</span>
                        </Link>
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main className="ml-64 w-[calc(70%-256px)] bg-surface overflow-y-auto">
                    <div className="p-8">
                        {/* Search Section */}
                        <div className="mb-8 flex items-center gap-4">
                            <div className="relative flex-1">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">search</span>
                                <input 
                                    className="w-full bg-surface-container-lowest border-none py-5 pl-14 pr-6 text-xs font-['Inter'] tracking-widest uppercase focus:ring-0 focus:bg-surface-container-high transition-colors text-white placeholder:text-neutral-600" 
                                    placeholder="SEARCH SYSTEM INVENTORY (PART NO, SERIAL, COMPONENT NAME)..." 
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Parts Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                            {filteredParts.map(part => (
                                <div key={part.id} onClick={() => handleAddToCart(part)} className="bg-surface-container-low hover:bg-surface-container-high transition-all group cursor-pointer border border-transparent hover:border-neutral-700 flex flex-col">
                                    <div className="aspect-square bg-surface-container-lowest overflow-hidden flex items-center justify-center">
                                        <img src={part.imageUrl} alt={part.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="p-4 flex flex-col justify-between flex-1 space-y-2">
                                        <div className="flex justify-between items-start">
                                            <span className="text-[10px] font-bold text-neutral-500 tracking-tighter uppercase font-label">{part.sku}</span>
                                            <span className={`text-[10px] font-bold px-1.5 py-0.5 bg-neutral-800 ${part.stockQuantity > 5 ? 'text-primary' : part.stockQuantity > 0 ? 'text-yellow-500' : 'text-error'}`}>
                                                {part.stockQuantity > 5 ? 'IN STOCK' : part.stockQuantity > 0 ? 'LOW STOCK' : 'OUT STOCK'}
                                            </span>
                                        </div>
                                        <h3 className="text-sm font-headline font-bold leading-tight uppercase">{part.name}</h3>
                                        <div className="pt-2 flex justify-between items-end mt-auto">
                                            <span className="text-[10px] text-neutral-500 font-label tracking-widest">UNIT_PRICE</span>
                                            <span className="text-xl font-headline font-black text-white">${part.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>

                {/* Order Summary Area */}
                <aside className="w-[30%] bg-white h-[calc(100vh-56px)] fixed right-0 top-14 flex flex-col z-40">
                    {/* Summary Header */}
                    <div className="p-8 border-b border-neutral-100">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-black font-headline font-black text-2xl tracking-tight uppercase">Order Summary</h2>
                            <span className="text-[10px] font-bold font-label tracking-widest text-neutral-400">ID: #ORD-{Math.floor(Math.random() * 90000) + 10000}</span>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-[10px] font-bold text-neutral-400 tracking-widest mb-1">CLIENT_NAME</label>
                                <div className="text-black font-bold text-sm border-b border-neutral-200 pb-2">WALK-IN CUSTOMER</div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-neutral-400 tracking-widest mb-1">STATION</label>
                                <div className="text-black font-bold text-sm border-b border-neutral-200 pb-2 text-right">01</div>
                            </div>
                        </div>
                    </div>

                    {/* Scanned Items List */}
                    <div className="flex-1 overflow-y-auto p-8 space-y-6">
                        {cart.length === 0 ? (
                            <div className="text-center text-neutral-400 text-sm mt-10">Cart is empty. Click parts to add.</div>
                        ) : (
                            cart.map(item => (
                                <div key={item.id} className="flex justify-between items-start">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-neutral-50 flex items-center justify-center overflow-hidden">
                                            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover grayscale" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-headline font-black text-black uppercase max-w-[150px] truncate">{item.name}</div>
                                            <div className="text-[10px] text-neutral-500 font-label tracking-widest">{item.sku}</div>
                                            <div className="mt-2 flex items-center gap-3">
                                                <button onClick={() => handleDecrement(item.id)} className="w-5 h-5 border border-neutral-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">-</button>
                                                <span className="text-xs font-bold text-black">{String(item.quantity).padStart(2, '0')}</span>
                                                <button onClick={() => handleIncrement(item.id)} className="w-5 h-5 border border-neutral-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-headline font-black text-black">${(item.price * item.quantity).toFixed(2)}</div>
                                        <button onClick={() => handleRemoveFromCart(item.id)} className="text-[10px] text-neutral-300 font-bold tracking-widest mt-1 hover:text-red-600 transition-colors">REMOVE</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Pricing Calculation */}
                    <div className="p-8 bg-neutral-50 mt-auto">
                        <div className="space-y-3 mb-8">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase">Subtotal</span>
                                <span className="text-sm font-bold text-black">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase">Tax (8%)</span>
                                <span className="text-sm font-bold text-black">${tax.toFixed(2)}</span>
                            </div>
                            <div className="pt-3 border-t border-neutral-200 flex justify-between items-center">
                                <span className="text-[10px] font-black text-black tracking-widest uppercase">Total Amount</span>
                                <span className="text-2xl font-headline font-black text-black">${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <button className="w-full bg-black text-white py-5 px-6 font-headline font-black text-sm tracking-[0.2em] uppercase hover:bg-neutral-800 active:scale-[0.98] transition-all">
                            Generate &amp; Email Invoice
                        </button>
                        <div className="mt-4 flex gap-2">
                            <button className="flex-1 border border-neutral-200 py-3 text-[10px] font-black tracking-widest uppercase hover:bg-neutral-100 transition-colors">Save Draft</button>
                            <button onClick={() => setCart([])} className="flex-1 border border-neutral-200 py-3 text-[10px] font-black tracking-widest uppercase hover:bg-neutral-100 transition-colors text-red-600">Cancel</button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default PosTerminal;
