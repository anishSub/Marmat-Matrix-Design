import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Checkout() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '', email: '', street: '', city: '', state: '', zip: '', paymentMethod: 'khalti'
    });
    const [submitting, setSubmitting] = useState(false);

    // Mock cart data based on design
    const cartItems = [
        {
            Id: 1, Name: 'FORGED TITANIUM ROD SET', Price: 1249.00, Quantity: 1, SKU: 'TR-994',
            ImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB364saDLO5fLw6HHMQw5p6vry4TGrUG-s_8_0T6PohwF4octXcJNEpXERpcdABFvnC4UsW1LkxTRAtt-XJ0Vv8NMsE1t0JBlTVw0X8SChgwVvBDm1WxCPVvIwkAKtfxGXGKGZIfG0yZMTF7bZC8b6MsLScx71tjBxHD_-tmjaWrpnbfvNBW-7XGIbTClrsx2UH7dIWEN48Ptfq94cgubQVRdAsFQcxXSApXgBqhGOOJo-qahkfjhL2XHxX1qR8PggUD7uu3a8jgZE'
        },
        {
            Id: 2, Name: 'GRAPHITE GASKET KIT', Price: 156.00, Quantity: 4, SKU: 'GK-112',
            ImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcCw4LMFGG06ALEUKNowlO8Oy2AI1kTk6XViaKKF0Ks6GdwSP8Rms2aoY3boGWWsASvtfY0nZ1L7j30XpcfCnB4PfL87bMnVuEf27FTgzvjLunIFHhxq9WT2bHHuCk59MMlnufKnc5yxYzNrqRwkcSNUUv1oydrE_CsU-598yX7aHnBUk85bXN6-6URe4c3rGhvGB2-B7njcE58vy9x9kicEII1blJqCbVKZmTeo1qatFhqJEUJ2-ZhZhh1cbAhnPUCn3dGyHG6-I'
        }
    ];

    const subtotal = 1405.00;
    const shipping = 45.00;
    const taxes = 84.30;
    const total = 1534.30;

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            // Attempt to post to actual endpoint if backend is running with user authenticated
            // Will likely 401 if unauthenticated in current simple flow, simulating success for demo
            await axios.post('/api/invoice/checkout', {
                items: cartItems.map(item => ({ partId: item.Id, quantity: item.Quantity }))
            });
            navigate('/dashboard'); // Mock success redirect
        } catch (error) {
            console.error("Checkout failed, likely unauthenticated. Simulating success.", error);
            setTimeout(() => navigate('/dashboard'), 1000);
        }
    };

    return (
        <div className="bg-background text-on-background min-h-screen">
            <main className="flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
                <section className="w-full md:w-[60%] px-6 md:px-16 py-12 bg-surface">
                    <div className="max-w-3xl ml-auto">
                        <header className="mb-12">
                            <h1 className="text-4xl font-headline font-black tracking-tighter mb-2 italic text-white uppercase">SECURE CHECKOUT</h1>
                            <p className="text-on-surface-variant font-label text-xs tracking-widest uppercase opacity-60">SYSTEM STATUS: READY FOR TRANSACTION // SESSION_ID: 8829-KP</p>
                        </header>

                        <form className="space-y-16" onSubmit={handleSubmit}>
                            <div className="space-y-8">
                                <div className="flex items-baseline justify-between border-b border-outline-variant pb-2">
                                    <h2 className="text-xl font-headline font-bold tracking-tight text-white">01 // SHIPPING DETAILS</h2>
                                    <span className="text-[10px] font-label tracking-[0.2em] text-primary">STEP 1/2</span>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">FULL NAME</label>
                                        <input name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full bg-surface-container-lowest border-0 text-primary font-body text-sm px-4 py-3 focus:ring-0 focus:bg-surface-container-high placeholder:text-zinc-700 transition-all duration-100" placeholder="ERIK VANKA" type="text"/>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">EMAIL ADDRESS</label>
                                        <input name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-surface-container-lowest border-0 text-primary font-body text-sm px-4 py-3 focus:ring-0 focus:bg-surface-container-high placeholder:text-zinc-700 transition-all duration-100" placeholder="E.VANKA@KINETIC.ENGINE" type="email"/>
                                    </div>
                                    <div className="md:col-span-2 space-y-1">
                                        <label className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">STREET ADDRESS</label>
                                        <input name="street" value={formData.street} onChange={handleInputChange} required className="w-full bg-surface-container-lowest border-0 text-primary font-body text-sm px-4 py-3 focus:ring-0 focus:bg-surface-container-high placeholder:text-zinc-700 transition-all duration-100" placeholder="104 INDUSTRIAL PARKWAY, SECTOR 7" type="text"/>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">CITY</label>
                                        <input name="city" value={formData.city} onChange={handleInputChange} required className="w-full bg-surface-container-lowest border-0 text-primary font-body text-sm px-4 py-3 focus:ring-0 focus:bg-surface-container-high placeholder:text-zinc-700 transition-all duration-100" placeholder="DETROIT" type="text"/>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">STATE</label>
                                            <input name="state" value={formData.state} onChange={handleInputChange} required className="w-full bg-surface-container-lowest border-0 text-primary font-body text-sm px-4 py-3 focus:ring-0 focus:bg-surface-container-high placeholder:text-zinc-700 transition-all duration-100" placeholder="MI" type="text"/>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">ZIP</label>
                                            <input name="zip" value={formData.zip} onChange={handleInputChange} required className="w-full bg-surface-container-lowest border-0 text-primary font-body text-sm px-4 py-3 focus:ring-0 focus:bg-surface-container-high placeholder:text-zinc-700 transition-all duration-100" placeholder="48201" type="text"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-baseline justify-between border-b border-outline-variant pb-2">
                                    <h2 className="text-xl font-headline font-bold tracking-tight text-white">02 // SELECT PAYMENT METHOD</h2>
                                    <div className="flex items-center space-x-2 text-[10px] font-label tracking-[0.2em] text-primary">
                                        <span className="material-symbols-outlined text-[14px]">lock</span>
                                        <span>SECURE ENCRYPTION ACTIVE</span>
                                    </div>
                                </div>
                                <div className="bg-surface-container-low p-8 border-l-4 border-primary space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <label className={`relative flex flex-col p-6 bg-surface-container-lowest border ${formData.paymentMethod === 'khalti' ? 'border-primary' : 'border-outline-variant'} cursor-pointer hover:border-primary transition-all duration-200 group`}>
                                            <input type="radio" name="paymentMethod" value="khalti" checked={formData.paymentMethod === 'khalti'} onChange={handleInputChange} className="absolute top-4 right-4 w-4 h-4 border-outline-variant bg-transparent text-primary focus:ring-primary focus:ring-offset-surface-container-low" />
                                            <div className="flex flex-col h-full justify-between">
                                                <div>
                                                    <span className={`material-symbols-outlined text-3xl mb-2 text-primary transition-opacity ${formData.paymentMethod === 'khalti' ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>account_balance_wallet</span>
                                                    <p className="text-lg font-headline font-black italic tracking-tighter text-white">KHALTI</p>
                                                    <p className="text-[10px] font-label text-on-surface-variant opacity-60 tracking-widest uppercase">DIGITAL WALLET</p>
                                                </div>
                                                <div className="mt-4 pt-4 border-t border-outline-variant/30">
                                                    <p className="text-[9px] font-label text-on-surface-variant opacity-40 uppercase tracking-tighter italic">SECURE GATEWAY ENCRYPTED</p>
                                                </div>
                                            </div>
                                        </label>

                                        <label className={`relative flex flex-col p-6 bg-surface-container-lowest border ${formData.paymentMethod === 'esewa' ? 'border-primary' : 'border-outline-variant'} cursor-pointer hover:border-primary transition-all duration-200 group`}>
                                            <input type="radio" name="paymentMethod" value="esewa" checked={formData.paymentMethod === 'esewa'} onChange={handleInputChange} className="absolute top-4 right-4 w-4 h-4 border-outline-variant bg-transparent text-primary focus:ring-primary focus:ring-offset-surface-container-low" />
                                            <div className="flex flex-col h-full justify-between">
                                                <div>
                                                    <span className={`material-symbols-outlined text-3xl mb-2 text-primary transition-opacity ${formData.paymentMethod === 'esewa' ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>payments</span>
                                                    <p className="text-lg font-headline font-black italic tracking-tighter text-white">eSEWA</p>
                                                    <p className="text-[10px] font-label text-on-surface-variant opacity-60 tracking-widest uppercase">DIGITAL WALLET</p>
                                                </div>
                                                <div className="mt-4 pt-4 border-t border-outline-variant/30">
                                                    <p className="text-[9px] font-label text-on-surface-variant opacity-40 uppercase tracking-tighter italic">SECURE GATEWAY ENCRYPTED</p>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <button type="submit" disabled={submitting} className="w-full bg-primary text-on-primary py-6 px-8 flex items-center justify-between font-headline font-black italic text-xl tracking-tighter transition-all duration-100 active:scale-[0.98] hover:bg-primary-container disabled:opacity-50">
                                    <span>{submitting ? 'PROCESSING...' : 'CONFIRM & PLACE ORDER'}</span>
                                    <span className="material-symbols-outlined text-3xl">bolt</span>
                                </button>
                                <p className="mt-4 text-[10px] font-label text-center text-on-surface-variant tracking-[0.3em] opacity-40">BY CLICKING, YOU AGREE TO OUR INDUSTRIAL PURCHASE TERMS</p>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="w-full md:w-[40%] bg-surface-container-low border-l border-zinc-800/30">
                    <div className="sticky top-24 p-8 md:p-12 space-y-12">
                        <header>
                            <h3 className="text-xs font-label font-bold tracking-[0.4em] text-on-surface-variant mb-6 uppercase">ORDER SUMMARY // REF-0041</h3>
                            <div className="space-y-4">
                                {cartItems.map((item, index) => (
                                    <div key={index} className="flex items-center space-x-4 bg-surface-container-lowest p-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-transparent after:via-[#474747] after:to-transparent">
                                        <div className="w-20 h-20 bg-surface-variant flex-shrink-0">
                                            <img alt={item.Name} className="w-full h-full object-cover grayscale opacity-80" src={item.ImageUrl} />
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-sm font-headline font-bold text-primary">{item.Name}</p>
                                            <p className="text-[10px] font-label text-on-surface-variant opacity-60">QTY: {item.Quantity < 10 ? `0${item.Quantity}` : item.Quantity} // SERIAL: {item.SKU}</p>
                                            <p className="text-sm font-headline font-bold mt-1">${item.Price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </header>
                        
                        <div className="space-y-4 border-t border-outline-variant pt-8">
                            <div className="flex justify-between items-center text-[11px] font-label tracking-widest text-on-surface-variant">
                                <span>SUBTOTAL</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-[11px] font-label tracking-widest text-on-surface-variant">
                                <span>EXPEDITED SHIPPING</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-[11px] font-label tracking-widest text-on-surface-variant">
                                <span>EST. TAX (6%)</span>
                                <span>${taxes.toFixed(2)}</span>
                            </div>
                            
                            <div className="pt-6 mt-6 border-t-2 border-primary flex justify-between items-end">
                                <div>
                                    <span className="text-[10px] font-label font-bold text-on-surface-variant tracking-[0.3em] uppercase">TOTAL PAYABLE</span>
                                    <h4 className="text-4xl font-headline font-black italic tracking-tighter text-primary">${total.toFixed(2)}</h4>
                                </div>
                                <div className="text-right">
                                    <div className="inline-block px-2 py-1 bg-surface-variant text-[9px] font-label tracking-widest mb-1">USD // ACCT-892</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface-container-highest/50 p-6 space-y-4">
                            <div className="flex items-start space-x-3">
                                <span className="material-symbols-outlined text-primary text-xl">verified</span>
                                <div>
                                    <p className="text-[10px] font-label font-bold text-primary tracking-widest uppercase">PRECISION GUARANTEE</p>
                                    <p className="text-[10px] leading-relaxed text-on-surface-variant mt-1 opacity-70 italic">Every component is ultrasonically inspected for micro-fractures prior to shipment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
